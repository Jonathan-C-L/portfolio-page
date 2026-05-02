import { Router } from "express";
import { getUsers, getUserById, createUser } from "../handlers/users";

const router = Router();

// To access: /api/users
router.get("/", getUsers);

// To access: /api/users/123
router.get("/:id", getUserById);

router.post("/", createUser);

export default router;