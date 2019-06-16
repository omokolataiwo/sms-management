import Router from 'express';
import contactController from '../controllers/ContactController';

const router = Router();

router.post('/add', contactController.add);
router.delete('/delete/:contactId', contactController.delete);

export default router;
