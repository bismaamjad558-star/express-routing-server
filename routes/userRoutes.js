import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of users or a greeting using query parameter.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/:id", deleteUser);

export default router;