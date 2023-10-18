## Preparacion para ejecutar las pruebas
### 1. Instalar las dependencias
```shell
npm install
```
### 2. Compilar la aplicacion
```shell
npm run build
```
### 3. Copiar esta linea de codigo al final de la clase index.js ubicada en /build/index.js
```shell
module.exports = server.app;
```
### 4. Ejecutar las pruebas
```shell
npm run test
```