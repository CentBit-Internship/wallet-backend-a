import express from 'express';
import { getRequest, postRequest } from '../controllers/ussd_controller';
const router = express.Router();

router.get('/', getRequest)
router.post('/', postRequest)

export default router;