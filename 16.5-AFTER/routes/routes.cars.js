import express from 'express';
const router = express.Router();
import { created, list, single, updated, deleted } from '../controllers/controllers.cars.js';
import isAdmin from '../middlewares/isAdmin.js';

router.post('/', isAdmin, created);
router.get('/', list);
router.get('/:id', isAdmin, single);
router.put('/:id', isAdmin, updated);
router.delete('/:id', isAdmin, deleted);

export default router;