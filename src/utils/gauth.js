import dotenv from 'dotenv/config'


const CLIENT_ID = process.env.CLIENT_ID;
import {OAuth2Client} from 'google-auth-library';

export const gclient = new OAuth2Client(CLIENT_ID);

export const verifyIdToken = (token) => gclient.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
});


export const validate = async (req, res, next) => {   
    if (req.headers['authorization'] == null) {
        return res.status(401).send('Unauthorized');
    }
    const token = req.headers['authorization'].split(' ')[1]; // Extract Bearer token
    try {
        const ticket = await verifyIdToken(token);
        const payload = ticket.getPayload();
        console.log(payload);
        next();
    } catch (e) {
        console.log(e);
        return res.status(401).send('Unauthorized');
    }
}
