import jsonschema from 'jsonschema';
import plan from './../schema/plan.js';
import {generateETag} from '../utils/hash.js';


const val = new jsonschema.Validator();

import Redis from 'ioredis';
const client = new Redis();

export const post = async (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received POST: /v1/plan')
    const result = val.validate(req.body, plan);
    if (!result.valid) return res.status(400).send(result.errors);
    client.sadd(req.body.objectType+":"+req.body.objectId, req.body);
    const createdEtag = generateETag(JSON.stringify(req.body));
    res.setHeader('ETag', createdEtag);
    res.send('Data saved successfully');
}

export const get = async (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received GET: /v1/plan/:id')
    client.get(req.params.id, (err, reply) => {
        if (err) return res.status(500).send(err);
        if (reply) {
            const currentEtag = generateETag(reply);
            if (req.headers['if-none-match'] === currentEtag) {
                return res.status(304).send();
            }
            res.setHeader('ETag', currentEtag);
            return res.send(JSON.parse(reply));
        }
        res.status(404).send('Data not found');
    });
}

export const del = (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received DELETE: /v1/plan/:id')
    client.get(req.params.id, (err, reply) => {
        if (err) return res.status(500).send(err);
        if (reply) {
            const currentEtag = generateETag(reply);
            if (req.headers['if-match'] != currentEtag) {
                return res.status(412).send();
            }
            client.del(req.params.id, (err, reply) => {
                if (err) return res.status(500).send(err);
                if (reply) return res.send('Data deleted successfully');
                res.status(404).send('Data not found');
            });
        } else {
            res.status(404).send('Data not found');
        }
    });
}

export const patch = (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received PATCH: /v1/plan/:id')
    client.get(req.params.id, (err, reply) => {
        if (err) return res.status(500).send(err);
        if (reply) {

            // Check Etag for If-Match Precondition
            const currentEtag = generateETag(reply);
            if (req.headers['if-match'] != currentEtag) {
                return res.status(412).send();
            }

            // Update Resource as per payload
            let updatedData = JSON.parse(reply);
            Object.keys(req.body).forEach(key => {
                if (Array.isArray(updatedData[key])) {
                    req.body[key].forEach(updatedItem => {
                        let index = updatedData[key].findIndex(item => item.objectId === updatedItem.objectId);
                        if (index !== -1) {
                            Object.keys(updatedItem).forEach(subKey => {
                                if (typeof updatedData[key][index][subKey] === 'object' &&
                                    !Array.isArray(updatedData[key][index][subKey]) &&
                                    updatedData[key][index][subKey] !== null) {
                                        updatedData[key][index][subKey] = {...updatedData[key][index][subKey], ...updatedItem[subKey]};
                                } else {
                                    updatedData[key][index][subKey] = updatedItem[subKey];
                                }
                            });
                        } else {
                            updatedData[key].push(updatedItem);
                        }
                    });
                } else if (typeof updatedData[key] === 'object' &&
                            !Array.isArray(updatedData[key]) &&
                            updatedData[key] !== null) {
                    updatedData[key] = {...updatedData[key], ...req.body[key]};
                } else {
                    updatedData[key] = req.body[key];
                }

            });

            // Validated the updated Payload
            const result = val.validate(updatedData, plan);
            if (!result.valid) return res.status(400).send(result.errors);

            // Update resource on database and generate updated ETag
            client.set(req.params.id, JSON.stringify(updatedData));
            const updatedEtag = generateETag(reply);
            res.setHeader('ETag', updatedEtag);
            return res.send(updatedData);
        }
        res.status(404).send('Data not found');
    });
}
