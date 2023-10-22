import express from 'express';
import { validate } from '../utils/gauth.js';


const router = express.Router();

router.route('/validate')
    .get(validate, function (request, response) {
        console.log('------------------------------------')
        console.log(Date().toString() + ' :: Received GET: /oauth/validate')
        response.sendStatus(200)
    })

export default router;