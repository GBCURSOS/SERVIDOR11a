import express from 'express';
import cors from 'cors';
import { conectoDB  } from './CONFIGDB/conectoDB.js';
import { insertarSemillaDB } from './CONFIGDB/insertSemillaDB.js';
import apiRoutes from './ROUTES/apiRoutes.js';

const app = express();
const PORT = 4100;

app.use(cors())
app.use(express.json());
app.use(express.static("PUBLIC"));

app.get('/prueba', (req, res) => {
    res.json({message:'Prueba de Respuesta de Servidor'})
});

conectoDB();
insertarSemillaDB();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




































// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg

































// npm install --save-dev nodemon