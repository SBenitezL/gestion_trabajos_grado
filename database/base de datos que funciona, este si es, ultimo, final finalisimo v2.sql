-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2023 a las 06:43:28
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_trabajo_grado`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ContarRegistrosPrcIdAnioActual` (IN `pCodigo` DECIMAL(12,0), IN `ase` VARCHAR(150), IN `titulo` VARCHAR(150), IN `tipo` VARCHAR(30))   BEGIN
    DECLARE anio_actual INT;
    DECLARE contador INT;

    SET anio_actual = YEAR(CURRENT_DATE());

    SELECT COUNT(*)
    INTO contador
    FROM proceso
    WHERE prc_id LIKE CONCAT(anio_actual, '%');

	insert into proceso VALUES (anio_actual + (contador+1)/1000, pCodigo, null, null, null,0,0,0,titulo,tipo, ase);
    select prc_id, usr_codigo, a_id, b_id, c_id, nom_asesor, prc_form_a, prc_form_b, prc_form_c, prc_titulo, prc_tipo
    from proceso
    where prc_id = anio_actual + (contador+1)/1000; 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerClientes` (IN `prmCod` DECIMAL(12,0), IN `prmUsr` VARCHAR(100), IN `prmEmail` VARCHAR(50))   BEGIN
  SELECT COUNT(usr_codigo)
  FROM usuario
  where usr_codigo = prmCod or usr_correo = prmEmail or upper(usr_login) = upper(prmUsr) ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `verificarUsuario` (IN `prmCod` DECIMAL(12,0), IN `prmUsr` VARCHAR(100), IN `prmEmail` VARCHAR(50))   BEGIN
  SELECT COUNT(usr_codigo)
  FROM usuario
  where usr_codigo = prmCod or upper(usr_correo) = upper(prmEmail) or upper(usr_login) = upper(prmUsr);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anexos`
--

CREATE TABLE `anexos` (
  `ANX_ID` int(11) NOT NULL,
  `TD_ID` int(11) NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL,
  `ANX_RECIBIDO` date NOT NULL,
  `ANX_SRC` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `ARC_ID` int(11) NOT NULL,
  `A_ID` int(11) DEFAULT NULL,
  `C_ID` int(11) DEFAULT NULL,
  `B_ID` int(11) DEFAULT NULL,
  `ARC_RUTA` text NOT NULL,
  `ARC_RECIBIDO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas_interes`
--

CREATE TABLE `areas_interes` (
  `AI_ID` int(11) NOT NULL,
  `AI_NOMBRE` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas_interes_ti_a`
--

CREATE TABLE `areas_interes_ti_a` (
  `AI_ID` int(11) NOT NULL,
  `A_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesor`
--

CREATE TABLE `asesor` (
  `ASE_CC` decimal(12,0) NOT NULL,
  `ASE_NOMBRE` varchar(150) NOT NULL,
  `ASE_CORREO` varchar(50) NOT NULL,
  `ASE_EMPRESA` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandejaentrada`
--

CREATE TABLE `bandejaentrada` (
  `NOT_ID` int(11) NOT NULL,
  `USR_CODIGO` decimal(12,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `EST_CODIGO` decimal(12,0) NOT NULL,
  `PRC_ID` decimal(7,3) DEFAULT NULL,
  `EST_NOMBRE` varchar(150) NOT NULL,
  `EST_CORREO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`EST_CODIGO`, `PRC_ID`, `EST_NOMBRE`, `EST_CORREO`) VALUES
('1', '2023.001', 'Santiago', 'sbenitez@unicauca.edu.co'),
('2', NULL, 'Isabella Solarte', 'isabsolarte@unicauca.edu.co');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluardecanatura`
--

CREATE TABLE `evaluardecanatura` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluarfacultad`
--

CREATE TABLE `evaluarfacultad` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `interes_usuario`
--

CREATE TABLE `interes_usuario` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `AI_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `NOT_ID` int(11) NOT NULL,
  `NOT_MSG` text NOT NULL,
  `NOT_ENVIO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso`
--

CREATE TABLE `proceso` (
  `PRC_ID` decimal(7,3) NOT NULL,
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `A_ID` int(11) DEFAULT NULL,
  `B_ID` int(11) DEFAULT NULL,
  `C_ID` int(11) DEFAULT NULL,
  `PRC_FORM_A` tinyint(1) NOT NULL,
  `PRC_FORM_B` tinyint(1) NOT NULL,
  `PRC_FORM_C` tinyint(1) NOT NULL,
  `PRC_TITULO` varchar(150) NOT NULL,
  `prc_tipo` varchar(30) DEFAULT NULL,
  `nom_asesor` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proceso`
--

INSERT INTO `proceso` (`PRC_ID`, `USR_CODIGO`, `A_ID`, `B_ID`, `C_ID`, `PRC_FORM_A`, `PRC_FORM_B`, `PRC_FORM_C`, `PRC_TITULO`, `prc_tipo`, `nom_asesor`) VALUES
('2023.001', '1002777704', 22, NULL, NULL, 0, 0, 0, 'IA en videojuegos', 'Trabajo de investigación', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ROL_ID` decimal(2,0) NOT NULL,
  `ROL_NOMBRE` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ROL_ID`, `ROL_NOMBRE`) VALUES
('1', 'ADMINISTRADOR'),
('2', 'DIRECTOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `TD_ID` int(11) NOT NULL,
  `TD_NOMBRE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_a`
--

CREATE TABLE `ti_a` (
  `A_ID` int(11) NOT NULL,
  `A_OBJETIVOS` text NOT NULL,
  `A_CON_ENTREGA` text NOT NULL,
  `A_REALIZACION` text NOT NULL,
  `A_RECURSOS` text NOT NULL,
  `A_FINANCIACION` text NOT NULL,
  `A_PER_PROGRAMA` tinyint(1) DEFAULT NULL,
  `A_REVISION` date DEFAULT NULL,
  `A_RECIBIDO` date DEFAULT NULL,
  `A_OBSERVACIONES` text DEFAULT NULL,
  `A_NO_REVISION` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ti_a`
--

INSERT INTO `ti_a` (`A_ID`, `A_OBJETIVOS`, `A_CON_ENTREGA`, `A_REALIZACION`, `A_RECURSOS`, `A_FINANCIACION`, `A_PER_PROGRAMA`, `A_REVISION`, `A_RECIBIDO`, `A_OBSERVACIONES`, `A_NO_REVISION`) VALUES
(22, 'Desarrollar una IA, que se adapte al nivel del jugador y le ayude a mejorar.', '', '', 'Computadora, dinero, asesores, seminarios', 'Patrocinadores', 0, '0000-00-00', NULL, '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_b`
--

CREATE TABLE `ti_b` (
  `B_ID` int(11) NOT NULL,
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `B_APORTES` tinyint(1) NOT NULL,
  `B_OBJETIVOS` tinyint(1) NOT NULL,
  `B_METODOLOGIA` tinyint(1) NOT NULL,
  `B_ENTREGA` tinyint(1) NOT NULL,
  `B_ESTRUCTURA` tinyint(1) NOT NULL,
  `B_CRONOGRAMA` tinyint(1) NOT NULL,
  `B_PATROCINIO` tinyint(1) NOT NULL,
  `B_CONCEPTO` tinyint(1) NOT NULL,
  `B_RECIBIDO` date NOT NULL,
  `B_OBSERVACIONES` text NOT NULL,
  `B_NO_REVISIONES` int(11) NOT NULL,
  `B_REVISION` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_c`
--

CREATE TABLE `ti_c` (
  `C_ID` int(11) NOT NULL,
  `C_DESARROLLO` text NOT NULL,
  `C_ESTRUCTURA` tinyint(1) NOT NULL,
  `C_CON_COMITE` tinyint(1) NOT NULL,
  `C_CON_DEPTO` tinyint(1) NOT NULL,
  `C_RECIBIDO` date NOT NULL,
  `C_OBSERVACIONES` text NOT NULL,
  `C_NO_REVISION` int(11) NOT NULL,
  `C_REVISION` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usr_codigo` decimal(12,0) NOT NULL,
  `usr_nombre` varchar(100) NOT NULL,
  `usr_login` varchar(20) NOT NULL,
  `usr_password` varchar(50) NOT NULL,
  `usr_correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usr_codigo`, `usr_nombre`, `usr_login`, `usr_password`, `usr_correo`) VALUES
('1', 'A', 'A', '$2b$10$0LjSzADyYKRnx0BJJaRgsOlhEpIWTar4uOn0G4I9bhU', 'a'),
('1002777704', 'Juan ante ', 'Jante', '$2b$10$f54BTd5TRhYodMOa5LbJtuMwWRvTkVWfsFEZCQ9FS8N', 'jante@gmail.com'),
('104619021313', 'Isabella Solarte', 'isabsolarte', '$2b$10$vW9KlbFnp1OSbWEnzpF/CeFRf5VTAVSzXXh/f05MYY2', 'isabsolarte@unicauca.edu.co'),
('104619021326', 'Carolina Solarte', 'carsolarte', 'prueba4', 'carsolarte@unicauca.edu.co'),
('104619021331', 'santiago benitez', 'sbenitez', '$2b$10$BMBR.D9HXlHvxkaWkCG2jeNsywFMc9Le6TYgfdL9YqK', 'sbenitez@unicauca.edu.co'),
('104619021341', 'Daniela Riascos', 'driascos', 'prueba3', 'driascos@unicauca.edu.co');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariorol`
--

CREATE TABLE `usuariorol` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `ROL_ID` decimal(2,0) NOT NULL,
  `FECHAINICIO` date NOT NULL,
  `FECHAFIN` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuariorol`
--

INSERT INTO `usuariorol` (`USR_CODIGO`, `ROL_ID`, `FECHAINICIO`, `FECHAFIN`) VALUES
('1', '1', '2023-10-23', NULL),
('1002777704', '2', '2023-10-21', NULL),
('104619021313', '1', '2023-10-21', NULL),
('104619021326', '1', '2023-10-13', NULL),
('104619021331', '1', '2023-10-14', NULL),
('104619021331', '2', '2023-10-14', NULL),
('104619021341', '2', '2023-10-13', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anexos`
--
ALTER TABLE `anexos`
  ADD PRIMARY KEY (`ANX_ID`),
  ADD KEY `FK_ES_UN` (`TD_ID`),
  ADD KEY `FK_INGRESA` (`PRC_ID`);

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`ARC_ID`),
  ADD KEY `FK_INSTANCIA` (`A_ID`),
  ADD KEY `FK_INSTANCIA2` (`C_ID`),
  ADD KEY `FK_INSTANCIA3` (`B_ID`);

--
-- Indices de la tabla `areas_interes`
--
ALTER TABLE `areas_interes`
  ADD PRIMARY KEY (`AI_ID`);

--
-- Indices de la tabla `areas_interes_ti_a`
--
ALTER TABLE `areas_interes_ti_a`
  ADD PRIMARY KEY (`AI_ID`,`A_ID`),
  ADD KEY `FK_AREAS_INTERES_TI_A` (`A_ID`);

--
-- Indices de la tabla `asesor`
--
ALTER TABLE `asesor`
  ADD PRIMARY KEY (`ASE_CC`);

--
-- Indices de la tabla `bandejaentrada`
--
ALTER TABLE `bandejaentrada`
  ADD PRIMARY KEY (`NOT_ID`,`USR_CODIGO`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`EST_CODIGO`),
  ADD KEY `FK_REALIZA` (`PRC_ID`);

--
-- Indices de la tabla `evaluardecanatura`
--
ALTER TABLE `evaluardecanatura`
  ADD PRIMARY KEY (`USR_CODIGO`,`PRC_ID`),
  ADD KEY `FK_EVALUARDECANATURA` (`PRC_ID`);

--
-- Indices de la tabla `evaluarfacultad`
--
ALTER TABLE `evaluarfacultad`
  ADD PRIMARY KEY (`USR_CODIGO`,`PRC_ID`),
  ADD KEY `FK_EVALUARFACULTAD` (`PRC_ID`);

--
-- Indices de la tabla `interes_usuario`
--
ALTER TABLE `interes_usuario`
  ADD PRIMARY KEY (`USR_CODIGO`,`AI_ID`),
  ADD KEY `FK_INTERES_USUARIO` (`AI_ID`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`NOT_ID`);

--
-- Indices de la tabla `proceso`
--
ALTER TABLE `proceso`
  ADD PRIMARY KEY (`PRC_ID`),
  ADD KEY `FK_CONTIENE4` (`A_ID`),
  ADD KEY `FK_CONTIENE5` (`B_ID`),
  ADD KEY `FK_CONTIENE6` (`C_ID`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ROL_ID`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`TD_ID`);

--
-- Indices de la tabla `ti_a`
--
ALTER TABLE `ti_a`
  ADD PRIMARY KEY (`A_ID`);

--
-- Indices de la tabla `ti_b`
--
ALTER TABLE `ti_b`
  ADD PRIMARY KEY (`B_ID`);

--
-- Indices de la tabla `ti_c`
--
ALTER TABLE `ti_c`
  ADD PRIMARY KEY (`C_ID`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usr_codigo`),
  ADD UNIQUE KEY `usr_login` (`usr_login`),
  ADD UNIQUE KEY `usr_correo` (`usr_correo`);

--
-- Indices de la tabla `usuariorol`
--
ALTER TABLE `usuariorol`
  ADD PRIMARY KEY (`USR_CODIGO`,`ROL_ID`),
  ADD KEY `FK_USUARIOROL_ROL` (`ROL_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas_interes`
--
ALTER TABLE `areas_interes`
  MODIFY `AI_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `TD_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ti_a`
--
ALTER TABLE `ti_a`
  MODIFY `A_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `ti_b`
--
ALTER TABLE `ti_b`
  MODIFY `B_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ti_c`
--
ALTER TABLE `ti_c`
  MODIFY `C_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `anexos`
--
ALTER TABLE `anexos`
  ADD CONSTRAINT `FK_ES_UN` FOREIGN KEY (`TD_ID`) REFERENCES `tipo_documento` (`TD_ID`),
  ADD CONSTRAINT `FK_INGRESA` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`);

--
-- Filtros para la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD CONSTRAINT `FK_INSTANCIA` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  ADD CONSTRAINT `FK_INSTANCIA2` FOREIGN KEY (`C_ID`) REFERENCES `ti_c` (`C_ID`),
  ADD CONSTRAINT `FK_INSTANCIA3` FOREIGN KEY (`B_ID`) REFERENCES `ti_b` (`B_ID`);

--
-- Filtros para la tabla `areas_interes_ti_a`
--
ALTER TABLE `areas_interes_ti_a`
  ADD CONSTRAINT `FK_AREAS_INTERES_TI_A` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  ADD CONSTRAINT `FK_AREAS_INTERES_TI_A2` FOREIGN KEY (`AI_ID`) REFERENCES `areas_interes` (`AI_ID`);

--
-- Filtros para la tabla `bandejaentrada`
--
ALTER TABLE `bandejaentrada`
  ADD CONSTRAINT `FK_BANDEJAENTRADA2` FOREIGN KEY (`NOT_ID`) REFERENCES `notificaciones` (`NOT_ID`);

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `FK_REALIZA` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`);

--
-- Filtros para la tabla `evaluardecanatura`
--
ALTER TABLE `evaluardecanatura`
  ADD CONSTRAINT `FK_EVALUARDECANATURA` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`);

--
-- Filtros para la tabla `evaluarfacultad`
--
ALTER TABLE `evaluarfacultad`
  ADD CONSTRAINT `FK_EVALUARFACULTAD` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`);

--
-- Filtros para la tabla `interes_usuario`
--
ALTER TABLE `interes_usuario`
  ADD CONSTRAINT `FK_INTERES_USUARIO` FOREIGN KEY (`AI_ID`) REFERENCES `areas_interes` (`AI_ID`);

--
-- Filtros para la tabla `proceso`
--
ALTER TABLE `proceso`
  ADD CONSTRAINT `FK_CONTIENE4` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  ADD CONSTRAINT `FK_CONTIENE5` FOREIGN KEY (`B_ID`) REFERENCES `ti_b` (`B_ID`),
  ADD CONSTRAINT `FK_CONTIENE6` FOREIGN KEY (`C_ID`) REFERENCES `ti_c` (`C_ID`);

--
-- Filtros para la tabla `usuariorol`
--
ALTER TABLE `usuariorol`
  ADD CONSTRAINT `FK_USUARIOROL_ROL` FOREIGN KEY (`ROL_ID`) REFERENCES `rol` (`ROL_ID`),
  ADD CONSTRAINT `FK_USUARIOROL_USUARIO` FOREIGN KEY (`USR_CODIGO`) REFERENCES `usuario` (`usr_codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
