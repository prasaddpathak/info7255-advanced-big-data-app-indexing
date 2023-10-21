import express from 'express';
import * as planController from './../controller/plan-controller.js';

const router = express.Router();

router.route('/plan')
    .post(planController.post);

router.route('/plan/:id')
    .get(planController.get)
    .delete(planController.del)
    .patch(planController.patch);

export default router;
