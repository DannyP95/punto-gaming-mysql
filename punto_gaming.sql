-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: punto_gaming
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Componentes'),(3,'Consolas'),(4,'Videojuegos'),(5,'Accesorios');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `categoria_id` int NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_ibfk_1` (`categoria_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Playstation 5 Slim 1TB Standard','Playstation',3,'Playstation 5 Slim 1TB Standard Color Blanca con 1 Mando',1399000.00,'producto1.png'),(2,'Nintendo Switch Oled 64Gb Red Mario','Nintendo',3,'Consola Nintendo Switch Oled 64Gb edición colección de Mario color roja',799000.00,'producto2.jpg'),(3,'Joystick inalámbrico Redragon Harrow G808','Redragon',5,'Joystick inalámbrico Redragon Harrow G808 color Negro, este genera un mayor control preciso, dando una mayor comodidad y realismo',51200.00,'producto3.png'),(4,'Consola Steam Deck OLED 1TB White Limited Edition','Steam',3,'Pantalla OLED más grande, mayor duración de la batería y wifi más rápida, además de ergonomía de primera clase y una experiencia intuitiva, similar a la de una consola.',1620000.00,'producto4.jpg'),(5,'EA Sports Fc 25 Ps5 Juego Físico Sellado Original','Electronic Arts',4,'EA SPORTS FC 25 (EX FIFA) físico sellado. Version americana con relatos en español latinoamericano para descargar gratuitamente desde la Store de PS5',120000.00,'producto5.png'),(6,'Mando para Nintendo Switch edición Mario con Cable','Nintendo',5,'Mando Marca \"Power A\" Con Cable edición Woo Hoo Mario Color Rojo compatible con Nintendo Switch y Nintendo Switch OLED, incluye su cable USB',85000.00,'producto6.png'),(7,'Tarjeta Gráfica Evga Geforce Gtx 1080 Ti Ftw3 Dt Gaming 11gb','EvGa',1,'Tecnología iCX GDDR5X de EVGA GeForce GTX 1080 Ti FTW3 DT Gaming de 11 GB con 9 sensores de temperatura adicionales para monitorear la memoria con indicador de estado térmico PWM y el VRM.',1580000.00,'producto7.png'),(8,'Pokémon Violeta Físico','GameFreak',4,'Con este juego de Pokémon vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.',97500.00,'producto8.png');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-23 17:14:59
