-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tienda
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(50) NOT NULL,
  `tipo_producto` varchar(50) NOT NULL,
  `precio_producto` int(11) NOT NULL,
  `Proveedor_id_proveedor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `Proveedor_id_proveedor` (`Proveedor_id_proveedor`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`Proveedor_id_proveedor`) REFERENCES `proveedores` (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (2,'Gomitas Play','Dulceria',4500,3),(3,'Cerveza','Licores',6300,2),(4,'Usb 8Gb','Tecnologia',1200,4),(5,'Bombombum','Dulceria',200,1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productossedes`
--

DROP TABLE IF EXISTS `productossedes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productossedes` (
  `Producto_id_producto` int(11) NOT NULL,
  `Sede_id_sede` int(11) NOT NULL,
  KEY `Producto_id_producto` (`Producto_id_producto`),
  KEY `Sede_id_sede` (`Sede_id_sede`),
  CONSTRAINT `productossedes_ibfk_1` FOREIGN KEY (`Producto_id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `productossedes_ibfk_2` FOREIGN KEY (`Sede_id_sede`) REFERENCES `sedes` (`id_sede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productossedes`
--

LOCK TABLES `productossedes` WRITE;
/*!40000 ALTER TABLE `productossedes` DISABLE KEYS */;
INSERT INTO `productossedes` VALUES (2,2),(2,3),(3,3),(4,3),(2,3),(3,3);
/*!40000 ALTER TABLE `productossedes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productosusuarios`
--

DROP TABLE IF EXISTS `productosusuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productosusuarios` (
  `Producto_id_producto` int(11) NOT NULL,
  `Usuario_id_usuario` int(11) NOT NULL,
  KEY `Producto_id_producto` (`Producto_id_producto`),
  KEY `Usuario_id_usuario` (`Usuario_id_usuario`),
  CONSTRAINT `productosusuarios_ibfk_1` FOREIGN KEY (`Producto_id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `productosusuarios_ibfk_2` FOREIGN KEY (`Usuario_id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productosusuarios`
--

LOCK TABLES `productosusuarios` WRITE;
/*!40000 ALTER TABLE `productosusuarios` DISABLE KEYS */;
INSERT INTO `productosusuarios` VALUES (2,2),(3,2),(4,2),(4,3),(3,3),(2,3);
/*!40000 ALTER TABLE `productosusuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_proveedor` varchar(50) NOT NULL,
  `telefono_proveedor` varchar(50) NOT NULL,
  `direccion_proveedor` varchar(50) NOT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'Colombina','7888778','Carrera83#72-33'),(2,'Bavaria','6676766','Carrera78#01-33'),(3,'Koala','0909090','Carrera7#11-33'),(4,'Syste','0909345','Carrera8#31-53');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sedes`
--

DROP TABLE IF EXISTS `sedes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sedes` (
  `id_sede` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_sede` varchar(45) NOT NULL,
  PRIMARY KEY (`id_sede`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sedes`
--

LOCK TABLES `sedes` WRITE;
/*!40000 ALTER TABLE `sedes` DISABLE KEYS */;
INSERT INTO `sedes` VALUES (1,'Casa Linda'),(2,'Bosa Laures'),(3,'Perdomo a');
/*!40000 ALTER TABLE `sedes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Julian Rivera'),(2,'Andres Garcia'),(3,'Brayan Cortez'),(4,'Sonia Lara');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventaproductos`
--

DROP TABLE IF EXISTS `ventaproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventaproductos` (
  `Producto_id_producto` int(11) NOT NULL,
  `Venta_id_venta` int(11) NOT NULL,
  KEY `Producto_id_producto` (`Producto_id_producto`),
  KEY `Venta_id_venta` (`Venta_id_venta`),
  CONSTRAINT `ventaproductos_ibfk_1` FOREIGN KEY (`Producto_id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `ventaproductos_ibfk_2` FOREIGN KEY (`Venta_id_venta`) REFERENCES `ventas` (`id_venta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventaproductos`
--

LOCK TABLES `ventaproductos` WRITE;
/*!40000 ALTER TABLE `ventaproductos` DISABLE KEYS */;
INSERT INTO `ventaproductos` VALUES (2,2),(3,2),(4,2),(3,4),(3,5);
/*!40000 ALTER TABLE `ventaproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `Usuario_id_usuario` int(11) NOT NULL,
  `Sede_id_sede` int(11) NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `Usuario_id_usuario` (`Usuario_id_usuario`),
  KEY `Sede_id_sede` (`Sede_id_sede`),
  CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`Usuario_id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`Sede_id_sede`) REFERENCES `sedes` (`id_sede`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,'2019-02-10',1,2),(2,'2019-02-10',2,2),(3,'2019-02-10',2,3),(4,'2019-02-10',3,3),(5,'2019-02-10',4,3),(6,'2019-02-11',1,3);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-11 11:53:42
