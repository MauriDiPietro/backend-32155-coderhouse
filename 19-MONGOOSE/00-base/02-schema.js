const mongoose = require('mongoose');

const usuariosCollection = 'users';

const UsuarioSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, max: 100 },
    firstname: { type: String, require: true, max: 100 },
    email: { type: String, require: true, max: 100, unique: true },
    admin: { type: Boolean, default: false },
    username: { type: String, require: true, max: 100 }, 
    password: { type: String, require: true },
    age: { type: Number, required: true },
  },

  { timestamps: true }
);

const UsuarioModel = mongoose.model(usuariosCollection, UsuarioSchema);

module.exports = { UsuarioModel };
