import express from 'express';
const router = express.Router();
import { 
    listarUsuarios
} from '../CONTROLLERS/usuarioController.js';

router.get('/', listarUsuarios);

export default router;