import  Router from 'express';
import SmsController from '../controllers/SmsController';

const router = Router();

router.post('/send/:senderId', SmsController.send);
export default router;
