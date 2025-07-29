import express from 'express'
import usuarioRoutes from "./usuarioRoutes.js"

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
// router.use("/perros", perroRoutes);

export default router;
