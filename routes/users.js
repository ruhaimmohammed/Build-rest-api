import express from "express";

import { createUser, delUser, getUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers)

router.post('/', createUser);

router.get('/:id', getUser)

router.delete('/:id', delUser)

router.patch('/:id', updateUser);

export default router;