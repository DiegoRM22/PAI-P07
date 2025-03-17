import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// Obtener el directorio actual de manera compatible con módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8080;
// Servir archivos estáticos desde la carpeta 'dist' (accesibles con /dist)
app.use('/dist', express.static(path.join(__dirname, 'dist')));
// Servir archivos estáticos desde la carpeta 'web-page' (accesibles con /web-page)
app.use(express.static(path.join(__dirname, 'web-page')));
// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-page', 'index.html'));
});
// Ruta para la página shapes.html
app.get('/shapes', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-page', 'shapes.html'));
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
