-- MySQL dump 10.17  Distrib 10.3.14-MariaDB, for osx10.14 (x86_64)
--
-- Host: localhost    Database: colegios
-- ------------------------------------------------------
-- Server version	10.3.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `EstudianteSalon`
--

DROP TABLE IF EXISTS `EstudianteSalon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EstudianteSalon` (
  `idEstudiante` int(11) NOT NULL,
  `idSalon` int(11) NOT NULL,
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idSalon` (`idSalon`),
  CONSTRAINT `estudiantesalon_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `Estudiantes` (`id`),
  CONSTRAINT `estudiantesalon_ibfk_2` FOREIGN KEY (`idSalon`) REFERENCES `Salones` (`id_salon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EstudianteSalon`
--

LOCK TABLES `EstudianteSalon` WRITE;
/*!40000 ALTER TABLE `EstudianteSalon` DISABLE KEYS */;
/*!40000 ALTER TABLE `EstudianteSalon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Estudiantes`
--

DROP TABLE IF EXISTS `Estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Estudiantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `idSede` int(11) NOT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idSede` (`idSede`),
  CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`idSede`) REFERENCES `Sedes` (`id_sede`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Estudiantes`
--

LOCK TABLES `Estudiantes` WRITE;
/*!40000 ALTER TABLE `Estudiantes` DISABLE KEYS */;
INSERT INTO `Estudiantes` VALUES (1,'Paula','Morales','123456',1,'2000-01-20 00:00:00'),(2,'Nestor','Guzman','89045',2,'1994-01-20 00:00:00'),(3,'Redvers','Escobar','1234567',2,'1993-06-27 00:00:00');
/*!40000 ALTER TABLE `Estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EstudiantesMaterias`
--

DROP TABLE IF EXISTS `EstudiantesMaterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EstudiantesMaterias` (
  `idEstudiante` int(11) NOT NULL,
  `idMateria` int(11) NOT NULL,
  KEY `idEstudiante` (`idEstudiante`),
  KEY `idMateria` (`idMateria`),
  CONSTRAINT `estudiantesmaterias_ibfk_1` FOREIGN KEY (`idEstudiante`) REFERENCES `Estudiantes` (`id`),
  CONSTRAINT `estudiantesmaterias_ibfk_2` FOREIGN KEY (`idMateria`) REFERENCES `materias` (`id_materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EstudiantesMaterias`
--

LOCK TABLES `EstudiantesMaterias` WRITE;
/*!40000 ALTER TABLE `EstudiantesMaterias` DISABLE KEYS */;
INSERT INTO `EstudiantesMaterias` VALUES (1,1),(2,2),(3,3),(1,3);
/*!40000 ALTER TABLE `EstudiantesMaterias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Salones`
--

DROP TABLE IF EXISTS `Salones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Salones` (
  `id_salon` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `idSede` int(11) NOT NULL,
  PRIMARY KEY (`id_salon`),
  KEY `idSede` (`idSede`),
  CONSTRAINT `salones_ibfk_1` FOREIGN KEY (`idSede`) REFERENCES `Sedes` (`id_sede`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Salones`
--

LOCK TABLES `Salones` WRITE;
/*!40000 ALTER TABLE `Salones` DISABLE KEYS */;
INSERT INTO `Salones` VALUES (1,'Atenea',1),(2,'Poseidon',1),(3,'Afrodita',2),(4,'Zeus',1),(5,'MinutoDeDios',1);
/*!40000 ALTER TABLE `Salones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sedes`
--

DROP TABLE IF EXISTS `Sedes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sedes` (
  `id_sede` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_sede`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sedes`
--

LOCK TABLES `Sedes` WRITE;
/*!40000 ALTER TABLE `Sedes` DISABLE KEYS */;
INSERT INTO `Sedes` VALUES (1,'CAFAM Floresta - Sede A'),(2,'CAFAM Floresta - Sede B');
/*!40000 ALTER TABLE `Sedes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias` (
  `nom_materia` varchar(50) NOT NULL,
  `id_materia` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES ('Matematicas',1),('Calculo',2),('Fisica',3),('Etica',4),('Sociales',5);
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-07 10:33:09
