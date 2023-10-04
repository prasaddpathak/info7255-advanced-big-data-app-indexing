
import jsonschema from 'jsonschema';
// import redis from 'redis';

const val = new jsonschema.Validator();

import plan from './../schema/plan.js';

// const client = redis.createClient();

export const post = (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received POST: /v1/plan')
    // const result = val.validate(req.body, plan);
    // if (!result.valid) return res.status(400).send(result.errors);
    // client.set(req.body.objectId, JSON.stringify(req.body), redis.print);
    // res.send('Data saved successfully');
    res.sendStatus(201);
}

export const get = (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received GET: /v1/plan/:id')
    // client.get(req.params.id, (err, reply) => {
    //     if (err) return res.status(500).send(err);
    //     if (reply) return res.send(JSON.parse(reply));
    //     res.status(404).send('Data not found');
    // });
    res.sendStatus(202);
}

export const del = (req, res) => {
    console.log('------------------------------------')
    console.log(Date().toString() + ' :: Received DELETE: /v1/plan/:id')
    // client.del(req.params.id, (err, reply) => {
    //     if (err) return res.status(500).send(err);
    //     if (reply) return res.send('Data deleted successfully');
    //     res.status(404).send('Data not found');
    // });
    res.sendStatus(203);
}