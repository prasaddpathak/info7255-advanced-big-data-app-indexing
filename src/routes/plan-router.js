import express from 'express';
import * as planController from './../controller/plan-controller.js';
import { validate } from '../utils/gauth.js';

const router = express.Router();

router.route('/plan')
    .post(planController.post);

router.route('/plan/:id')
    .get(validate, planController.get)
    .delete(planController.del)
    .patch(planController.patch);

export default router;
