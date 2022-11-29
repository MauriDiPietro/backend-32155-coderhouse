import * as userService from "../services/user.service.js";

  export const createUser = async(req, res) => {
    const { cant } = req.query;
    try {
      const response = await userService.createUserMock(cant);
      res.status(200).json({ usuarios: response });
    } catch (error) {
      console.log(error);
    }
  }

  export const getUsers = async(req, res) => {
    let id = null;
    if (req.query.id) id = req.query.id;
    try {
      const response = await userService.getUsers(id);
      res.status(200).json({ usuarios: response });
    } catch (error) {
      console.log(error);
    }
  }

  export const addUser = async(req, res) => {
    await userService.addUser();
    res.status(200).send("Usuario agregado");
  }

  export const updateUser = async(req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await userService.updateUser(id, body);
      res.status(200).send("Usuario actualizado");
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
      await userService.deleteUser(id);
      res.status(200).send("Usuario borrado");
    } catch (error) {
      console.log(error);
    }
  }

