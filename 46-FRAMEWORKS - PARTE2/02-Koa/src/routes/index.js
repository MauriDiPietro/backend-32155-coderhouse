import Router from 'koa-router';
import BooksRouter from './books.js';

const router = new Router({
  prefix: '/api',              
});

router.use(BooksRouter);


router.get('/', (ctx) => {
  console.log(ctx);
})

export default router.routes();
