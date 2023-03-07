import Router from 'koa-router';
import { getAll, save, getById, updateBook, removeBook } from '../controllers/books.js';

const router = new Router({
  prefix: '/books',
});

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', save);

router.put('/:id', updateBook);

router.delete('/:id', removeBook);

export default router.routes();
