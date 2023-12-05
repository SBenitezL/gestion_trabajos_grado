CREATE DATABASE  IF NOT EXISTS `gestion_trabajo_grado` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gestion_trabajo_grado`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_trabajo_grado
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anexos`
--

DROP TABLE IF EXISTS `anexos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anexos` (
  `ANX_ID` int NOT NULL AUTO_INCREMENT,
  `TD_ID` int NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL,
  `ANX_RECIBIDO` date NOT NULL,
  `ANX_SRC` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ANX_ID`),
  KEY `FK_ES_UN` (`TD_ID`),
  KEY `FK_INGRESA` (`PRC_ID`),
  CONSTRAINT `FK_ES_UN` FOREIGN KEY (`TD_ID`) REFERENCES `tipo_documento` (`TD_ID`),
  CONSTRAINT `FK_INGRESA` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anexos`
--

LOCK TABLES `anexos` WRITE;
/*!40000 ALTER TABLE `anexos` DISABLE KEYS */;
/*!40000 ALTER TABLE `anexos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archivos`
--

DROP TABLE IF EXISTS `archivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archivos` (
  `arc_id` int NOT NULL AUTO_INCREMENT,
  `A_ID` int DEFAULT NULL,
  `C_ID` int DEFAULT NULL,
  `B_ID` int DEFAULT NULL,
  `ARC_RUTA` text COLLATE utf8mb4_general_ci NOT NULL,
  `ARC_RECIBIDO` date NOT NULL,
  PRIMARY KEY (`arc_id`),
  KEY `FK_INSTANCIA` (`A_ID`),
  KEY `FK_INSTANCIA2` (`C_ID`),
  KEY `FK_INSTANCIA3` (`B_ID`),
  CONSTRAINT `FK_INSTANCIA` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  CONSTRAINT `FK_INSTANCIA2` FOREIGN KEY (`C_ID`) REFERENCES `ti_c` (`C_ID`),
  CONSTRAINT `FK_INSTANCIA3` FOREIGN KEY (`B_ID`) REFERENCES `ti_b` (`B_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archivos`
--

LOCK TABLES `archivos` WRITE;
/*!40000 ALTER TABLE `archivos` DISABLE KEYS */;
INSERT INTO `archivos` VALUES (10,45,NULL,NULL,'pdf\\TI-A\\2023.001_0.pdf','2023-11-24'),(11,46,NULL,NULL,'pdf\\PP-A\\2023.002_0.pdf','2023-11-24');
/*!40000 ALTER TABLE `archivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas_interes`
--

DROP TABLE IF EXISTS `areas_interes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas_interes` (
  `AI_ID` int NOT NULL AUTO_INCREMENT,
  `AI_NOMBRE` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`AI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas_interes`
--

LOCK TABLES `areas_interes` WRITE;
/*!40000 ALTER TABLE `areas_interes` DISABLE KEYS */;
/*!40000 ALTER TABLE `areas_interes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas_interes_ti_a`
--

DROP TABLE IF EXISTS `areas_interes_ti_a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas_interes_ti_a` (
  `AI_ID` int NOT NULL,
  `A_ID` int NOT NULL,
  PRIMARY KEY (`AI_ID`,`A_ID`),
  KEY `FK_AREAS_INTERES_TI_A` (`A_ID`),
  CONSTRAINT `FK_AREAS_INTERES_TI_A` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  CONSTRAINT `FK_AREAS_INTERES_TI_A2` FOREIGN KEY (`AI_ID`) REFERENCES `areas_interes` (`AI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas_interes_ti_a`
--

LOCK TABLES `areas_interes_ti_a` WRITE;
/*!40000 ALTER TABLE `areas_interes_ti_a` DISABLE KEYS */;
/*!40000 ALTER TABLE `areas_interes_ti_a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asesor`
--

DROP TABLE IF EXISTS `asesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asesor` (
  `ASE_CC` decimal(12,0) NOT NULL,
  `ASE_NOMBRE` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `ASE_CORREO` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `ASE_EMPRESA` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ASE_CC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesor`
--

LOCK TABLES `asesor` WRITE;
/*!40000 ALTER TABLE `asesor` DISABLE KEYS */;
/*!40000 ALTER TABLE `asesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bandejaentrada`
--

DROP TABLE IF EXISTS `bandejaentrada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bandejaentrada` (
  `NOT_ID` int NOT NULL,
  `USR_CODIGO` decimal(12,0) NOT NULL,
  PRIMARY KEY (`NOT_ID`,`USR_CODIGO`),
  KEY `FK_BANDEJAENTRADA_USUARIO` (`USR_CODIGO`),
  CONSTRAINT `FK_BANDEJAENTRADA2` FOREIGN KEY (`NOT_ID`) REFERENCES `notificaciones` (`NOT_ID`),
  CONSTRAINT `FK_BANDEJAENTRADA_USUARIO` FOREIGN KEY (`USR_CODIGO`) REFERENCES `usuario` (`usr_codigo`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bandejaentrada`
--

LOCK TABLES `bandejaentrada` WRITE;
/*!40000 ALTER TABLE `bandejaentrada` DISABLE KEYS */;
/*!40000 ALTER TABLE `bandejaentrada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `EST_CODIGO` decimal(12,0) NOT NULL,
  `prc_id` decimal(7,3) DEFAULT NULL,
  `EST_NOMBRE` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `EST_CORREO` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`EST_CODIGO`),
  KEY `FK_REALIZA` (`prc_id`),
  CONSTRAINT `FK_REALIZA` FOREIGN KEY (`prc_id`) REFERENCES `proceso` (`PRC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1,2023.001,'Santiago','sbenitez@unicauca.edu.co'),(2,2023.002,'Isabella Solarte','isabsolarte@unicauca.edu.co'),(3,NULL,'Juan','juan@unicauca.edu.co');
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluardecanatura`
--

DROP TABLE IF EXISTS `evaluardecanatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluardecanatura` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL,
  PRIMARY KEY (`USR_CODIGO`,`PRC_ID`),
  KEY `FK_EVALUARDECANATURA` (`PRC_ID`),
  CONSTRAINT `FK_EVALUARDECANATURA` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluardecanatura`
--

LOCK TABLES `evaluardecanatura` WRITE;
/*!40000 ALTER TABLE `evaluardecanatura` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluardecanatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluarfacultad`
--

DROP TABLE IF EXISTS `evaluarfacultad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluarfacultad` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `PRC_ID` decimal(7,3) NOT NULL,
  PRIMARY KEY (`USR_CODIGO`,`PRC_ID`),
  KEY `FK_EVALUARFACULTAD` (`PRC_ID`),
  CONSTRAINT `FK_EVALUARFACULTAD` FOREIGN KEY (`PRC_ID`) REFERENCES `proceso` (`PRC_ID`),
  CONSTRAINT `FK_EVALUARFACULTAD_USUARIO` FOREIGN KEY (`USR_CODIGO`) REFERENCES `usuario` (`usr_codigo`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluarfacultad`
--

LOCK TABLES `evaluarfacultad` WRITE;
/*!40000 ALTER TABLE `evaluarfacultad` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluarfacultad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interes_usuario`
--

DROP TABLE IF EXISTS `interes_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interes_usuario` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `AI_ID` int NOT NULL,
  PRIMARY KEY (`USR_CODIGO`,`AI_ID`),
  KEY `FK_INTERES_USUARIO` (`AI_ID`),
  CONSTRAINT `FK_INTERES_USUARIO` FOREIGN KEY (`AI_ID`) REFERENCES `areas_interes` (`AI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interes_usuario`
--

LOCK TABLES `interes_usuario` WRITE;
/*!40000 ALTER TABLE `interes_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `interes_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificaciones` (
  `NOT_ID` int NOT NULL,
  `NOT_MSG` text COLLATE utf8mb4_general_ci NOT NULL,
  `NOT_ENVIO` date NOT NULL,
  PRIMARY KEY (`NOT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proceso`
--

DROP TABLE IF EXISTS `proceso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proceso` (
  `PRC_ID` decimal(7,3) NOT NULL,
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `A_ID` int DEFAULT NULL,
  `B_ID` int DEFAULT NULL,
  `C_ID` int DEFAULT NULL,
  `PRC_FORM_A` tinyint(1) NOT NULL,
  `PRC_FORM_B` tinyint(1) NOT NULL,
  `PRC_FORM_C` tinyint(1) NOT NULL,
  `PRC_TITULO` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `prc_tipo` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nom_asesor` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`PRC_ID`),
  KEY `FK_CONTIENE4` (`A_ID`),
  KEY `FK_CONTIENE5` (`B_ID`),
  KEY `FK_CONTIENE6` (`C_ID`),
  CONSTRAINT `FK_CONTIENE4` FOREIGN KEY (`A_ID`) REFERENCES `ti_a` (`A_ID`),
  CONSTRAINT `FK_CONTIENE5` FOREIGN KEY (`B_ID`) REFERENCES `ti_b` (`B_ID`),
  CONSTRAINT `FK_CONTIENE6` FOREIGN KEY (`C_ID`) REFERENCES `ti_c` (`C_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proceso`
--

LOCK TABLES `proceso` WRITE;
/*!40000 ALTER TABLE `proceso` DISABLE KEYS */;
INSERT INTO `proceso` VALUES (2023.001,-2,45,NULL,NULL,2,0,0,'Inteligencia Artificial','Trabajo de investigación',''),(2023.002,-2,46,NULL,NULL,2,0,0,'Desarrollo del modulo principal','Práctica profesional','Ing. JFK');
/*!40000 ALTER TABLE `proceso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `ROL_ID` decimal(2,0) NOT NULL,
  `ROL_NOMBRE` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ROL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'ADMINISTRADOR'),(2,'DIRECTOR'),(3,'JEFATURA'),(4,'CONSEJO DE FACULTAD'),(5,'EVALUADOR'),(10,'testRol');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ti_a`
--

DROP TABLE IF EXISTS `ti_a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ti_a` (
  `A_ID` int NOT NULL AUTO_INCREMENT,
  `A_OBJETIVOS` text COLLATE utf8mb4_general_ci NOT NULL,
  `A_CON_ENTREGA` text COLLATE utf8mb4_general_ci NOT NULL,
  `A_REALIZACION` text COLLATE utf8mb4_general_ci NOT NULL,
  `A_RECURSOS` text COLLATE utf8mb4_general_ci NOT NULL,
  `A_FINANCIACION` text COLLATE utf8mb4_general_ci NOT NULL,
  `A_PER_PROGRAMA` tinyint(1) DEFAULT NULL,
  `A_REVISION` date DEFAULT NULL,
  `A_RECIBIDO` date DEFAULT NULL,
  `A_OBSERVACIONES` text COLLATE utf8mb4_general_ci,
  `A_NO_REVISION` int NOT NULL DEFAULT '0',
  `a_interes` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`A_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ti_a`
--

LOCK TABLES `ti_a` WRITE;
/*!40000 ALTER TABLE `ti_a` DISABLE KEYS */;
INSERT INTO `ti_a` VALUES (45,'Mapeo sistematico','Articulo de investigacion','9 meses','Recursos computacionales','Propia',0,'2023-11-24','2023-11-24','',1,''),(46,'Desarrollar el modulo','Implementacion integrada en el sistema','9 meses','Recursos computacionales','Propia',0,'2023-11-24','2023-11-24','',1,'');
/*!40000 ALTER TABLE `ti_a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ti_b`
--

DROP TABLE IF EXISTS `ti_b`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ti_b` (
  `B_ID` int NOT NULL AUTO_INCREMENT,
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
  `B_OBSERVACIONES` text COLLATE utf8mb4_general_ci NOT NULL,
  `B_NO_REVISIONES` int NOT NULL,
  `B_REVISION` date DEFAULT NULL,
  PRIMARY KEY (`B_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ti_b`
--

LOCK TABLES `ti_b` WRITE;
/*!40000 ALTER TABLE `ti_b` DISABLE KEYS */;
/*!40000 ALTER TABLE `ti_b` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ti_c`
--

DROP TABLE IF EXISTS `ti_c`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ti_c` (
  `C_ID` int NOT NULL AUTO_INCREMENT,
  `C_DESARROLLO` text COLLATE utf8mb4_general_ci NOT NULL,
  `C_ESTRUCTURA` tinyint(1) NOT NULL,
  `C_CON_COMITE` tinyint(1) NOT NULL,
  `C_CON_DEPTO` tinyint(1) NOT NULL,
  `C_RECIBIDO` date NOT NULL,
  `C_OBSERVACIONES` text COLLATE utf8mb4_general_ci NOT NULL,
  `C_NO_REVISION` int NOT NULL,
  `C_REVISION` date NOT NULL,
  PRIMARY KEY (`C_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ti_c`
--

LOCK TABLES `ti_c` WRITE;
/*!40000 ALTER TABLE `ti_c` DISABLE KEYS */;
/*!40000 ALTER TABLE `ti_c` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_documento` (
  `TD_ID` int NOT NULL AUTO_INCREMENT,
  `TD_NOMBRE` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`TD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_documento`
--

LOCK TABLES `tipo_documento` WRITE;
/*!40000 ALTER TABLE `tipo_documento` DISABLE KEYS */;
INSERT INTO `tipo_documento` VALUES (1,'Anteproyecto');
/*!40000 ALTER TABLE `tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usr_codigo` decimal(12,0) NOT NULL,
  `usr_nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_login` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_password` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `usr_correo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`usr_codigo`),
  UNIQUE KEY `usr_login` (`usr_login`),
  UNIQUE KEY `usr_correo` (`usr_correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (-2,'director','userDirector','$2b$10$Js/yUxTu41E5tHb3aFUFOe658378.DraVtrecX2WX8cihuRhR3We2','director@email.com'),(-1,'admin','userAdmin','$2b$10$yaceXLIe8UsSmcjV.eYdt.T84OSbM77bKCHfe46.WUogsw/ak/4MO','admin@email.com'),(0,'prueba','user','password','user@test.com'),(1002777704,'Juan ante ','Jante','$2b$10$f54BTd5TRhYodMOa5LbJtuMwWRvTkVWfsFEZCQ9FS8N','jante@gmail.com'),(104619021313,'Isabella Solarte','isabsolarte','$2b$10$vW9KlbFnp1OSbWEnzpF/CeFRf5VTAVSzXXh/f05MYY2','isabsolarte@unicauca.edu.co'),(104619021326,'Carolina Solarte','carsolarte','prueba4','carsolarte@unicauca.edu.co'),(104619021331,'santiago benitez','sbenitez','$2b$10$BMBR.D9HXlHvxkaWkCG2jeNsywFMc9Le6TYgfdL9YqK','sbenitez@unicauca.edu.co'),(104619021341,'Daniela Riascos','driascos','prueba3','driascos@unicauca.edu.co');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariorol`
--

DROP TABLE IF EXISTS `usuariorol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariorol` (
  `USR_CODIGO` decimal(12,0) NOT NULL,
  `ROL_ID` decimal(2,0) NOT NULL,
  `FECHAINICIO` date NOT NULL,
  `FECHAFIN` date DEFAULT NULL,
  PRIMARY KEY (`USR_CODIGO`,`ROL_ID`),
  KEY `FK_USUARIOROL_ROL` (`ROL_ID`),
  CONSTRAINT `FK_USUARIOROL_ROL` FOREIGN KEY (`ROL_ID`) REFERENCES `rol` (`ROL_ID`),
  CONSTRAINT `FK_USUARIOROL_USUARIO` FOREIGN KEY (`USR_CODIGO`) REFERENCES `usuario` (`usr_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariorol`
--

LOCK TABLES `usuariorol` WRITE;
/*!40000 ALTER TABLE `usuariorol` DISABLE KEYS */;
INSERT INTO `usuariorol` VALUES (-2,2,'2023-11-23',NULL),(-1,1,'2023-11-23',NULL),(0,10,'2023-01-01',NULL),(1002777704,2,'2023-10-21',NULL),(104619021313,1,'2023-10-21',NULL),(104619021326,1,'2023-10-13',NULL),(104619021331,1,'2023-10-14',NULL),(104619021331,2,'2023-10-14',NULL),(104619021341,2,'2023-10-13',NULL);
/*!40000 ALTER TABLE `usuariorol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gestion_trabajo_grado'
--

--
-- Dumping routines for database 'gestion_trabajo_grado'
--
/*!50003 DROP PROCEDURE IF EXISTS `cambiarEstadoFormatoA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cambiarEstadoFormatoA`(IN estudiante_id DECIMAL(12,0))
BEGIN
    DECLARE prc_value INT;

  
    SELECT PRC_FORM_A INTO prc_value
    FROM PROCESO
    WHERE PRC_ID = (SELECT PRC_ID FROM ESTUDIANTE WHERE EST_CODIGO = estudiante_id);

    SET prc_value = LEAST(prc_value + 1, 3);

    UPDATE PROCESO
    SET PRC_FORM_A = prc_value
    WHERE PRC_ID = (SELECT PRC_ID FROM ESTUDIANTE WHERE EST_CODIGO = estudiante_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `consultarEstadoFormA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarEstadoFormA`(IN estudiante_id DECIMAL(12,0))
BEGIN
    SELECT 
        proceso.prc_id, 
        prc_tipo, 
        prc_titulo,
        est_codigo, 
        est_nombre, 
        prc_form_a as fA_estado, 
        a_no_revision as fA_revisiones
    FROM proceso
    JOIN ti_a ON proceso.A_ID = ti_a.A_ID
    JOIN estudiante ON proceso.PRC_ID = estudiante.prc_id
    WHERE EST_CODIGO = estudiante_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ConsultarRevisionA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarRevisionA`()
BEGIN
    SELECT 
        proceso.prc_id, 
        prc_tipo, 
        prc_titulo,
        est_codigo, 
        est_nombre, 
        prc_form_a as fA_estado, 
        a_no_revision as fA_revisiones
    FROM proceso
    JOIN ti_a ON proceso.A_ID = ti_a.A_ID
    JOIN estudiante ON proceso.PRC_ID = estudiante.prc_id
    where prc_form_a = 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ContarRegistrosPrcIdAnioActual` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ContarRegistrosPrcIdAnioActual`(IN `pCodigo` DECIMAL(12,0), IN `ase` VARCHAR(150), IN `titulo` VARCHAR(150), IN `tipo` VARCHAR(30))
BEGIN
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerClientes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerClientes`(IN `prmCod` DECIMAL(12,0), IN `prmUsr` VARCHAR(100), IN `prmEmail` VARCHAR(50))
BEGIN
  SELECT COUNT(usr_codigo)
  FROM usuario
  where usr_codigo = prmCod or usr_correo = prmEmail or upper(usr_login) = upper(prmUsr) ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `recuperarEvaluadores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `recuperarEvaluadores`()
begin
	select usuario.usr_codigo, usr_nombre, usuario.usr_correo
	from usuario join usuariorol on (usuario.usr_codigo = usuariorol.USR_CODIGO)
	where usuariorol.ROL_ID = 5 and usuariorol.FECHAFIN is null;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reporteEstudiantes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `reporteEstudiantes`(in id decimal(7,3))
BEGIN
	select est_nombre "nombre", est_codigo "codigo"
	from estudiante
	where prc_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reporteFormatoA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `reporteFormatoA`(in id int(11))
BEGIN
select a_objetivos "objetivos",
		a_con_entrega "condEntrega", 
        a_realizacion "realizacion", 
        a_recursos "recursos", 
        a_financiacion "financiacion", 
        a_interes "aportes", 
        DATE_FORMAT(a_recibido,'%d-%m-%Y') "recibido",
        A_NO_REVISION "revision"
from ti_a
where a_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reporteProceso` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `reporteProceso`(in id decimal(7,3))
BEGIN
select PRC_TITULO "titulo", upper(prc_tipo) "tipo", nom_asesor "asesor", usr_nombre "director", prc_id "id"
from proceso join usuario
on (proceso.USR_CODIGO = usuario.usr_codigo)
where prc_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `verificarAsignados` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `verificarAsignados`(IN id decimal(7,3))
BEGIN
	SELECT usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo
	FROM evaluarfacultad join usuario on (usuario.usr_codigo = evaluarfacultad.USR_CODIGO)
	WHERE evaluarfacultad.PRC_ID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `verificarEvaluadores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `verificarEvaluadores`(IN ev1 decimal(12,0), IN ev2 decimal(12,0))
BEGIN
	select usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo
	from usuario join usuariorol on(usuariorol.USR_CODIGO = usuario.usr_codigo)
	where usuariorol.ROL_ID = 5 and (usuario.usr_codigo = ev1 or usuariorol.USR_CODIGO = ev2);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `verificarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `verificarUsuario`(IN `prmCod` DECIMAL(12,0), IN `prmUsr` VARCHAR(100), IN `prmEmail` VARCHAR(50))
BEGIN
  SELECT COUNT(usr_codigo)
  FROM usuario
  where usr_codigo = prmCod or upper(usr_correo) = upper(prmEmail) or upper(usr_login) = upper(prmUsr);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-04 20:21:01
