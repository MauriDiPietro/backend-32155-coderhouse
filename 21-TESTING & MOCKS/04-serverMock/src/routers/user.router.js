import * as userController from "../controllers/user.controller.js";
import { Router } from 'express';
const router = Router();

router.post("/popular", userController.createUser);
router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
