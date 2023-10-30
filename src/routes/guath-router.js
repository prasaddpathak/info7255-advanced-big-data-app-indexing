import express from 'express';
import { validate } from '../utils/gauth.js';
import {google} from 'googleapis';
import { verifyIdToken } from '../utils/gauth.js';



const router = express.Router();

router.route('/validate')
    .get(validate, async function (request, response) {
        console.log('------------------------------------')
        console.log(Date().toString() + ' :: Received GET: /oauth/validate')
        // Extract email from the token
        const token = request.headers['authorization'].split(' ')[1];
        const ticket = await verifyIdToken(token);
        const payload = ticket.getPayload();
        response.status(200).send('Welcome, ' + payload['email'])
    })

router.route('/callback')
    .get(async (req, res) => {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );

        const code = req.query.code;
        const {tokens} = await oauth2Client.getToken(code);
        // console.log(tokens.id_token);
        res.send(tokens.id_token);
    })

router.route('/token')
    .post(async (req, res) => {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );

        const url = oauth2Client.generateAuthUrl({
            scope: ['openid', 'email']
        });
        // console.log(url);
        // res.status(200).send(url);
        res.redirect(302, url);

    });

export default router;
