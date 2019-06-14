import Router from 'express';
import contactController from '../controllers/ContactController';

const router = Router();

router.get('/add', contactController.add);
router.get('/delete', contactController.delete);

export default router;
