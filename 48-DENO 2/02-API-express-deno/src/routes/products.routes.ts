import { Router } from 'npm:express';
import { createProducts, getAllProducts, updateProduct, deleteProduct, getProductById } from '../controllers/products.controllers.ts';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
