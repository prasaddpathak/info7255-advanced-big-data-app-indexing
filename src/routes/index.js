import plan_router from './plan-router.js';
import gauth_router from './guath-router.js';

export default (app) => {
    app.use('/v1/', plan_router);
    app.use('/oauth/', gauth_router);

    app.get('/', function (request, response) {
        console.log('------------------------------------')
        console.log(Date().toString() + ' :: Received GET: /')
        response.sendStatus(200)
    })
}
