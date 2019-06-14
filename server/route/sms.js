import  Router from 'express';
import SmsController from '../controllers/SmsController';

const router = Router();

router.get('/send/:senderId', SmsController.send);
export default router;
