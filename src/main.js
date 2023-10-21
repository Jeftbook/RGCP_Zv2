const express = require('express');
const cors = require('cors');

//Import Rutas
const { router } = require('./routes/routes.js');
const { usuariosGenRouter } = require('./routes/usuariosGen.routes.js');
const { usuariosSesRouter } = require('./routes/usuariosSes.routes.js');
const { publicacionesRouter } = require('./routes/publicaciones.routes.js');

//Inicializacion
const app = express();

//Configuracion
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/usuariosGen", usuariosGenRouter);
app.use("/usuariosSes", usuariosSesRouter);
app.use("/publicaciones", publicacionesRouter);

//Rutas
app.get('/', (req, res) => {
    res.send(`Hola Puerto ${PORT}`);
})

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});