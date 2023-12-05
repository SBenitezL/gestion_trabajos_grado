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
INSERT INTO `usuario` VALUES (-54,'evaluadorz','userEvaluadorz','$2b$10$3yrGPiJ8b//ZoFEWH0TsweFwVCNbOO2u3tfDPl9/BRmx/xAYbcyzi','evaluadorz@email.com'),(-53,'evaluadory','userEvaluadory','$2b$10$QVVy03zGGu3VuuCLgwmM8eQSjdTGw40s1Tz7pcf6TPul6VAPYodPK','evaluadory@email.com'),(-52,'evaluadorx','userEvaluadorx','$2b$10$poCkOIRdw/i2rFS0KuqRCuRLL/GkS3osvuIfAkl20P3M2RhpgdQp2','evaluadorx@email.com'),(-6,'coordinador','userCoordinador','$2b$10$NYM0fuJrzo0jt3xMp0gyHOfZGgYpzuj5sqI//TYZ3sNsrSRp0VbP2','coordinador@email.com'),(-5,'evaluador','userEvaluador','$2b$10$bQ3lRZs3T/sChDTTHzkneOwLpBshsvZzjjlppO3CY9dfRVgn/IEiS','evaluador@email.com'),(-3,'jefatura','userJefatura','$2b$10$R0.zQVnYwP3xFwQ8DGM7t.1abxMc39eT9vJoxEHf/wpjYDBlORSQO','jefatura@email.com'),(-2,'director','userDirector','$2b$10$Js/yUxTu41E5tHb3aFUFOe658378.DraVtrecX2WX8cihuRhR3We2','director@email.com'),(-1,'admin','userAdmin','$2b$10$yaceXLIe8UsSmcjV.eYdt.T84OSbM77bKCHfe46.WUogsw/ak/4MO','admin@email.com'),(0,'prueba','user','password','user@test.com'),(1002777704,'Juan ante ','Jante','$2b$10$f54BTd5TRhYodMOa5LbJtuMwWRvTkVWfsFEZCQ9FS8N','jante@gmail.com'),(104619021313,'Isabella Solarte','isabsolarte','$2b$10$vW9KlbFnp1OSbWEnzpF/CeFRf5VTAVSzXXh/f05MYY2','isabsolarte@unicauca.edu.co'),(104619021326,'Carolina Solarte','carsolarte','prueba4','carsolarte@unicauca.edu.co'),(104619021331,'santiago benitez','sbenitez','$2b$10$BMBR.D9HXlHvxkaWkCG2jeNsywFMc9Le6TYgfdL9YqK','sbenitez@unicauca.edu.co'),(104619021341,'Daniela Riascos','driascos','prueba3','driascos@unicauca.edu.co');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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
