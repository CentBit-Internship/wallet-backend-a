import express from 'express';
import { getRequest, postRequest } from '../controllers/ussd_controller';
const router = express.Router();

router.get('/ussd', getRequest)
router.post('/ussd/service', postRequest)

export default router;