import express from 'express';
import { getAll, getById, create, update, remove } from '../controllers/ControllersUser.js';
const router = express.Router();

// Define as rotas associando o método HTTP e o endpoint ao controlador correto
router.get('/', getAll);
router.get('/:id', getById);
router.post('RegisterUser', create)
router.patch('/UpdateUser', update);
router.delete('/DeleteUser', remove);

export default router;