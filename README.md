# Reporte de Pruebas del Backend para el Sistema de Gestión de Trabajos de Grado de la Universidad del Cauca
Las pruebas unitarias desempeñan un papel crucial en el desarrollo de aplicaciones,
especialmente en un entorno de backend construido con Node.js.
Estas pruebas permiten a los desarrolladores verificar que cada componente de su código funciona como se espera,
lo que garantiza un funcionamiento robusto y libre de errores.
En este informe,
presentaremos una recopilación de pruebas unitarias realizadas en los endpoints de un backend Node.js,
utilizando la herramienta Jest.

Jest es un framework de pruebas unitarias ampliamente utilizado en la comunidad de desarrollo de JavaScript y Node.js. Ofrece un conjunto completo de herramientas para escribir y ejecutar pruebas,
así como para realizar aserciones y generar informes detallados.
Su capacidad para realizar pruebas de manera sencilla y eficiente
lo hace ideal para garantizar la calidad y el rendimiento del código.

A continuacion se presenta la configuracion para ejecutar las pruebas y sus resultados por clase:

## Ejecucion de las pruebas
### 1. Instalar las dependencias
```shell
npm install
```
### 2. Compilar la aplicacion
```shell
npm run build
```
### 3. Copiar esta linea de codigo al final de la clase index.js ubicada en /build/index.js
Esto nos permite exportar la app en un modulo que pueda ser manejado por la clase de prueba.
```shell
module.exports = server.app;
```
### 4. Ejecutar las pruebas
```shell
npm run test
```

## Resultados por clase
### **Tests de la clase "UsuarioController"**

| # Test | Request | Endpoint | Descripcion | Resultado |
|--------|---------|----------|-------------|-----------|
| 1 | `POST` | `/api/usuarios/` | Crear el usuario Juan (id = 1)| Exito |
| 2 | `POST` | `/api/usuarios/` | No crear nuevamente un usuario existente (id = 1) | Exito |
| 3 | `POST` | `/api/usuarios/` | Crear el usuario Juan Ante (id = 2) | Exito |
| 4 | `PUT` | `/api/usuarios/:id` | Actualizar el usuario Juan a Juan Colina | Exito |
| 5 | `PUT` | `/api/usuarios/:id` | No actualizar usuario inexistente (id = 99)| Exito |
| 6 | `DELETE` | `/api/usuarios/:id` | Eliminar el usuario Juan Colina (id = 1) | Exito |
| 7 | `DELETE` | `/api/usuarios/:id` | Eliminar el usuario Juan Ante (id = 2) | Exito |
| 8 | `DELETE` | `/api/usuarios/:id` | No eliminar un usuario inexistente (id = 99) | Exito |
| 9 | `GET` | `/api/usuarios/` | Retornar los usuarios como un JSON | Exito |
| 10 | `GET` | `/api/usuarios/` | Retornar todos los usuarios | Exito |
| 11 | `GET` | `/api/usuarios/:id` | Retornar el usuario Juan Colina (id = 1) | Exito |
| 12 | `GET` | `/api/usuarios/:id` | Retornar el usuario Juan Ante (id = 2) | Exito |
| 13 | `GET` | `/api/usuarios/:id` | Retornar un usuario inexistente (id = 99) | Exito |
||||TO DO: listByID, listByLogin|Fail|
