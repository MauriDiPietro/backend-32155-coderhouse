import { Router } from '../config/deps.ts';
import { createProducts, getAllProducts, updateProduct, deleteProduct, getProductById } from '../controllers/products.controllers.ts';

const router = new Router({
    prefix: '/products',
  });

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
