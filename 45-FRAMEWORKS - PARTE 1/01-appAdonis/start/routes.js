'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');
Route.get('/products', 'ProductController.getProducts');
Route.get('/products/:id', 'ProductController.getProductById');
Route.post('/products', 'ProductController.storeProduct');
Route.patch('/products/:id', 'ProductController.updateProduct');
Route.delete('/products/:id', 'ProductController.deleteProduct');

Route.group(()=>{
    Route.get('/products', ()=>{
        return 'hola'
    })
}).prefix('api/v1')
