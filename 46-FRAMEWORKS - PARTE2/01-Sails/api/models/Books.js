/**
 * Books.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: { type: 'string', required: true, unique: true },
    author: { type: 'string', required: true },
    price: { type: 'number', required: true }

  },

  schema: true   //ignora cualquier atributo que pasemos de mas

};

