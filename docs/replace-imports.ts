import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual de manera compatible con módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del directorio dist
const distDir = path.join(__dirname, 'dist');

// Función para actualizar los imports
function updateImports(filePath: string) {
  // Leer el archivo
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Reemplazar los imports que no tienen la extensión .js
  const updatedContent = fileContent.replace(/(import\s+.*\s+from\s+['"])(\.\/[a-zA-Z0-9-_\/]+)(['"])/g, (match, prefix, relativePath, suffix) => {
    // Verificar si la ruta ya tiene la extensión .js
    if (!relativePath.endsWith('.js')) {
      return `${prefix}${relativePath}.js${suffix}`;
    }
    return match;
  });

  // Si hubo cambios, actualizar el archivo
  if (updatedContent !== fileContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated imports in: ${filePath}`);
  }
}

// Función para recorrer todos los archivos en dist/src
function traverseDirectory(dir: string) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Recursión si es un directorio
      traverseDirectory(fullPath);
    } else if (file.endsWith('.js')) {
      // Solo procesar archivos .js
      updateImports(fullPath);
    }
  });
}

// Ejecutar la función de recorrido en el directorio dist/src
traverseDirectory(distDir);
