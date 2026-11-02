import express from 'express';
import { getAll, getById, createUser, createService, update, remove } from '../controllers/ControllersUser.js';
const router = express.Router();

// Define as rotas associando o método HTTP e o endpoint ao controlador correto
router.get('/', getAll);
router.get('/:id', getById);
router.post('/RegisterUser', createUser);
router.post('/RegisterService', createService);
router.patch('/:id', update);
router.delete('/:id', remove);

export default router;
