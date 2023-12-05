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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ti_a`
--

LOCK TABLES `ti_a` WRITE;
/*!40000 ALTER TABLE `ti_a` DISABLE KEYS */;
INSERT INTO `ti_a` VALUES (63,'Mapeo sistematico','Articulo de investigacion','9 meses','Recursos computacionales','Propia',0,'2023-12-05','2023-12-05','',1,''),(64,'Desarrollar el modulo','Implementacion integrada en el sistema','9 meses','Recursos computacionales','Propia',0,'2023-12-05','2023-12-05','',1,'');
/*!40000 ALTER TABLE `ti_a` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05  9:23:48
