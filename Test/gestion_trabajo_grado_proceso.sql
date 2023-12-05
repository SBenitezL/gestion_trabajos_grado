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
INSERT INTO `proceso` VALUES (2023.001,-2,63,NULL,NULL,1,0,0,'Inteligencia Artificial','Trabajo de investigación',''),(2023.002,-2,64,NULL,NULL,1,0,0,'Desarrollo del modulo principal','Práctica profesional','Ing. JFK');
/*!40000 ALTER TABLE `proceso` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05  9:23:49
