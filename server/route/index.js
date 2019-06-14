import Router from 'express';
import smsRouter from './sms';
import contactRouter from './contact';


const router = Router();
router.use('/sms', smsRouter);
router.use('/contact', contactRouter);

export default router;
