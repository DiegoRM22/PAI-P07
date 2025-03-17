"use strict";
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
// Servir archivos estáticos desde "web"
app.use(express.static(path.join(__dirname, 'web')));
// Servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'shapes.html'));
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running at http://10.6.130.239:${PORT}`);
});
