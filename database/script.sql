-- Crear la tabla Involucrado
CREATE TABLE Involucrado (
    inv_codigo VARCHAR(12) PRIMARY KEY,
    inv_nombre VARCHAR(150)
);

-- Crear la tabla Usuario que hereda de Involucrado
CREATE TABLE Usuario (
    inv_codigo VARCHAR(12) PRIMARY KEY,
    usr_login VARCHAR(15) UNIQUE,
    usr_password VARCHAR(50),
    FOREIGN KEY (inv_codigo) REFERENCES Involucrado(inv_codigo)
);

-- Crear la tabla Rol
CREATE TABLE Rol (
    rol_id INT PRIMARY KEY,
    rol_nombre VARCHAR(40)
);

-- Crear la tabla UsuariosRol para la relación entre Usuario y Rol
CREATE TABLE UsuariosRol (
    inv_codigo VARCHAR(12),
    rol_id INT,
    PRIMARY KEY (inv_codigo, rol_id),
    FOREIGN KEY (inv_codigo) REFERENCES Usuario(inv_codigo),
    FOREIGN KEY (rol_id) REFERENCES Rol(rol_id)
);
