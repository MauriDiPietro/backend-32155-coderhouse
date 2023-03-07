/**
 * BooksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  
    myController(req, res){
        console.log(req.body);
    },

    myController2(req, res){
        console.log('Hola');
    }
};

