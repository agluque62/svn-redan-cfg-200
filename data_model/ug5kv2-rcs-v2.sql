-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ug5kv2
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ug5kv2`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ug5kv2` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `ug5kv2`;

--
-- Temporary view structure for view `alarmas_view`
--

DROP TABLE IF EXISTS `alarmas_view`;
/*!50001 DROP VIEW IF EXISTS `alarmas_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `alarmas_view` AS SELECT 
 1 AS `idHistoricoIncidencias`,
 1 AS `FechaHora`,
 1 AS `idEmplaz`,
 1 AS `IdHw`,
 1 AS `TipoHw`,
 1 AS `descripcion`,
 1 AS `Nivel`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `emplazamiento`
--

DROP TABLE IF EXISTS `emplazamiento`;
/*!50001 DROP VIEW IF EXISTS `emplazamiento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `emplazamiento` AS SELECT 
 1 AS `idEMPLAZAMIENTO`,
 1 AS `cfg_idCFG`,
 1 AS `name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `info_cgw`
--

DROP TABLE IF EXISTS `info_cgw`;
/*!50001 DROP VIEW IF EXISTS `info_cgw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `info_cgw` AS SELECT 
 1 AS `name`,
 1 AS `dual_cpu`,
 1 AS `emplazamiento`,
 1 AS `num_cpu`,
 1 AS `virtual_ip`,
 1 AS `dual_lan`,
 1 AS `ip_eth0`,
 1 AS `ip_eth1`,
 1 AS `bound_ip`,
 1 AS `gateway_ip`,
 1 AS `idemplazamiento`,
 1 AS `idconfiguracion`,
 1 AS `idpasarela`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `info_cgw_all`
--

DROP TABLE IF EXISTS `info_cgw_all`;
/*!50001 DROP VIEW IF EXISTS `info_cgw_all`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `info_cgw_all` AS SELECT 
 1 AS `name`,
 1 AS `dual_cpu`,
 1 AS `emplazamiento`,
 1 AS `num_cpu`,
 1 AS `virtual_ip`,
 1 AS `dual_lan`,
 1 AS `ip_eth0`,
 1 AS `ip_eth1`,
 1 AS `bound_ip`,
 1 AS `gateway_ip`,
 1 AS `idemplazamiento`,
 1 AS `idconfiguracion`,
 1 AS `idpasarela`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `spvs_cgw`
--

DROP TABLE IF EXISTS `spvs_cgw`;
/*!50001 DROP VIEW IF EXISTS `spvs_cgw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_cgw` AS SELECT 
 1 AS `name`,
 1 AS `resource`,
 1 AS `slave_rank`,
 1 AS `slave_type`,
 1 AS `resource_type`,
 1 AS `resource_rank`,
 1 AS `frecuencia`,
 1 AS `resource_subtype`,
 1 AS `remoto`,
 1 AS `idpasarela`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `spvs_cgw_reserva`
--

DROP TABLE IF EXISTS `spvs_cgw_reserva`;
/*!50001 DROP VIEW IF EXISTS `spvs_cgw_reserva`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_cgw_reserva` AS SELECT 
 1 AS `name`,
 1 AS `slave_rank`,
 1 AS `slave_type`,
 1 AS `resource_type`,
 1 AS `resource_rank`,
 1 AS `frecuencia`,
 1 AS `resource_subtype`,
 1 AS `remoto`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `spvs_site`
--

DROP TABLE IF EXISTS `spvs_site`;
/*!50001 DROP VIEW IF EXISTS `spvs_site`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_site` AS SELECT 
 1 AS `idEMPLAZAMIENTO`,
 1 AS `name`,
 1 AS `configuracion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `spvs_site_all`
--

DROP TABLE IF EXISTS `spvs_site_all`;
/*!50001 DROP VIEW IF EXISTS `spvs_site_all`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_site_all` AS SELECT 
 1 AS `idEMPLAZAMIENTO`,
 1 AS `name`,
 1 AS `configuracion`*/;
SET character_set_client = @saved_cs_client;

--
-- Current Database: `rcs`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `rcs` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `rcs`;

--
-- Table structure for table `agrupamientos`
--

DROP TABLE IF EXISTS `agrupamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agrupamientos` (
  `IDAGRUPAMIENTO` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(20) NOT NULL,
  `IDEQUIPO` bigint(20) NOT NULL,
  `IDEMPLAZAMIENTO` bigint(20) NOT NULL,
  KEY `FK_AGRUPAMIENTOS_EMPLAZAMIENTOS` (`IDEMPLAZAMIENTO`),
  KEY `FK_AGRUPAMIENTOS_EQUIPOS` (`IDEQUIPO`),
  CONSTRAINT `FK_AGRUPAMIENTOS_EMPLAZAMIENTOS` FOREIGN KEY (`IDEMPLAZAMIENTO`) REFERENCES `emplazamientos` (`IDEMPLAZAMIENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_AGRUPAMIENTOS_EQUIPOS` FOREIGN KEY (`IDEQUIPO`) REFERENCES `equipos` (`IDEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agrupamientos`
--

LOCK TABLES `agrupamientos` WRITE;
/*!40000 ALTER TABLE `agrupamientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `agrupamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `alarmas_view`
--

DROP TABLE IF EXISTS `alarmas_view`;
/*!50001 DROP VIEW IF EXISTS `alarmas_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `alarmas_view` AS SELECT 
 1 AS `idHistoricoIncidencias`,
 1 AS `FechaHora`,
 1 AS `idEmplaz`,
 1 AS `IdHw`,
 1 AS `TipoHw`,
 1 AS `descripcion`,
 1 AS `Nivel`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `alivegateways_view`
--

DROP TABLE IF EXISTS `alivegateways_view`;
/*!50001 DROP VIEW IF EXISTS `alivegateways_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `alivegateways_view` AS SELECT 
 1 AS `idCGW`,
 1 AS `EMPLAZAMIENTO_idEMPLAZAMIENTO`,
 1 AS `REGIONES_idREGIONES`,
 1 AS `servicio`,
 1 AS `name`,
 1 AS `dualidad`,
 1 AS `ipv`,
 1 AS `ips`,
 1 AS `nivelconsola`,
 1 AS `puertoconsola`,
 1 AS `nivelIncidencias`,
 1 AS `idEMPLAZAMIENTO`,
 1 AS `site`,
 1 AS `CFG_idCFG`,
 1 AS `Activa`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bitacora` (
  `IDBITACORA` bigint(20) NOT NULL,
  `IDFECHAHORA` datetime(6) DEFAULT NULL,
  `IDOPERADOR` bigint(20) DEFAULT NULL,
  `ASTO` varchar(50) DEFAULT NULL,
  `TEXTO` varchar(500) DEFAULT NULL,
  `COLOR` varchar(11) DEFAULT NULL,
  `PRIORIDAD` smallint(6) DEFAULT NULL,
  `PRIVADO` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bitmaps`
--

DROP TABLE IF EXISTS `bitmaps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bitmaps` (
  `IDBITMAP` bigint(20) NOT NULL,
  `PATH` varchar(100) NOT NULL,
  PRIMARY KEY (`IDBITMAP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitmaps`
--

LOCK TABLES `bitmaps` WRITE;
/*!40000 ALTER TABLE `bitmaps` DISABLE KEYS */;
INSERT INTO `bitmaps` VALUES (1,'C:\\RCS2010\\bitmap\\cora.jpg'),(2,'C:\\RCS2010\\bitmap\\Telerad9000Trans.JPG'),(3,'C:\\RCS2010\\bitmap\\Telerad9000Tx.JPG'),(4,'C:\\RCS2010\\bitmap\\TX9000.bmp'),(5,'C:\\RCS2010\\bitmap\\SEA30.JPG'),(6,'C:\\RCS2010\\bitmap\\Telerad9000Rx.JPG'),(7,'C:\\RCS2010\\bitmap\\SY918.JPG'),(8,'C:RCS2010\\bitmap\\10100000000.JPG'),(9,'C:\\RCS2010\\bitmap\\10200000000.JPG'),(10,'C:\\RCS2010\\bitmap\\10300000000.JPG'),(11,'C:\\RCS2010\\bitmap\\10400000000.JPG'),(12,'C:\\RCS2010\\bitmap\\RMMS-PCS.bmp'),(13,'C:\\RCS2010\\configuracion\\editor\\bitmap\\rectificadores.bmp'),(14,'C:\\RCS2010\\bitmap\\RectTWR.JPG'),(15,'C:\\RCS2010\\bitmap\\RectEmisores.bmp'),(16,'C:\\RCS2010\\bitmap\\10200000000.JPG'),(17,'C:\\RCS2010\\bitmap\\RY918.bmp'),(18,'C:\\RCS2010\\bitmap\\cora.jpg'),(19,'C:\\RCS2010\\bitmap\\Telerad9000Rx.JPG'),(20,'C:\\RCS2010\\bitmap\\Telerad9000Trans.JPG'),(21,'C:\\RCS2010\\bitmap\\Telerad9000Tx.JPG'),(22,'C:\\RCS2010\\bitmap\\RY918.bmp'),(23,'C:\\RCS2010\\bitmap\\SY918.JPG'),(24,'C:\\RCS2010\\bitmap\\TwrEmisores.JPG'),(25,'C:\\RCS2010\\bitmap\\TwrReceptores.JPG'),(26,'C:\\RCS2010\\bitmap\\RutasEmisores.JPG'),(27,'C:\\RCS2010\\bitmap\\Emisores.bmp'),(28,'C:\\RCS2010\\bitmap\\AsturiasRacsRx.bmp'),(29,'C:\\RCS2010\\bitmap\\ReceptoresTWR.jpg'),(30,'C:\\RCS2010\\bitmap\\EmisoresTWR.JPG'),(31,'C:\\RCS2010\\bitmap\\EmisoresAPP.JPG'),(32,'C:\\RCS2010\\bitmap\\ReceptoresAPP.JPG'),(33,'C:\\RCS2010\\bitmap\\Sala Equipos TWR.JPG'),(34,'C:\\RCS2010\\bitmap\\Sala Equipos TWR 1.JPG'),(35,'C:\\RCS2010\\bitmap\\Emisores santiago.JPG'),(36,'C:\\RCS2010\\bitmap\\Santiago\\TWR_RX\\Receptores_Twr_Tma.JPG'),(37,'C:\\RCS2010\\bitmap\\Santiago\\RX_APP\\Receptores_TACC.JPG'),(38,'C:\\RCS2010\\bitmap\\Santiago\\TWR_TX\\Emisores_Twr_Tma.JPG'),(39,'C:\\RCS2010\\bitmap\\Santiago\\TX_APP\\Emisores_TACC.JPG'),(40,'C:\\RCS2010\\bitmap\\Santiago\\Sala_Equipos\\Sala_Equipos_EMP.JPG'),(41,'C:\\RCS2010\\bitmap\\Rectificador_SEQ.JPG'),(42,'C:\\RCS2010\\bitmap\\Rectificador_Med.JPG'),(43,'C:\\RCS2010\\bitmap\\DC_DC.JPG'),(44,'C:\\RCS2010\\bitmap\\DITTTEL.JPG'),(45,'C:\\RCS2010\\bitmap\\Santiago\\Fanal\\Fanal_EMP.JPG'),(46,'C:\\RCS2010\\bitmap\\DITTTEL_APP1.JPG'),(47,'C:\\RCS2010\\bitmap\\DITTTEL_APP2.JPG'),(48,'C:\\RCS2010\\bitmap\\DITTTEL_PICT1.JPG'),(49,'C:\\RCS2010\\bitmap\\DITTTEL_PICT2.JPG'),(50,'C:\\RCS2010\\bitmap\\DITTTEL_PICT3.JPG'),(51,'C:\\RCS2010\\bitmap\\EYP_SCQ.JPG'),(52,'C:\\RCS2010\\bitmap\\Santiago\\fa santiago\\f.a..JPG'),(53,'C:\\RCS2010\\Bitmap\\Valdespina\\Receptores.bmp'),(54,'C:\\RCS2010\\Bitmap\\Valdespina\\CentroReceptores.JPG'),(55,'C:\\RCS2010\\Bitmap\\Valdespina\\CentroEmisores.JPG'),(56,'C:\\RCS2010\\Bitmap\\Rectificador.bmp'),(57,'C:\\RCS2010\\Bitmap\\Valdespina\\SEA30DBLVLPTX.JPG'),(58,'C:\\RCS2010\\Bitmap\\Valdespina\\SEA30DBLVLPRX.JPG'),(59,'C:\\RCS2010\\Bitmap\\UPS_EATON.JPG'),(60,'C:\\RCS2010\\Bitmap\\Valdespina\\SEA30DBLVLPRX2.JPG'),(61,'C:\\RCS2010\\Bitmap\\Valdespina\\SEA30DBLVLPTX2.JPG'),(62,'C:\\RCS2010\\bitmap\\Valdespina\\CentroReceptores40.JPG'),(63,'C:\\RCS2010\\bitmap\\Valdespina\\CentroEmisores40.JPG'),(64,'C:\\RCS2010\\bitmap\\Solorzano\\IconoSolorzano.JPG'),(65,'C:\\RCS2010\\bitmap\\Solorzano\\IconoSolorzano40.JPG'),(66,'C:\\RCS2010\\bitmap\\Solorzano\\SEA30DBLSLZ.JPG'),(67,'C:\\RCS2010\\bitmap\\Solorzano\\Icono Solorzano.bmp'),(68,'C:\\RCS2010\\bitmap\\Solorzano\\Icono Solorzano80.bmp'),(69,'C:\\RCS2010\\bitmap\\Valdespina\\Icono Valdespina RE.bmp'),(70,'C:\\RCS2010\\bitmap\\Valdespina\\Icono Valdespina EM80.bmp'),(71,'C:\\RCS2010\\bitmap\\Valdespina\\Icono Valdespina RE80.bmp'),(72,'C:\\RCS2010\\bitmap\\Valladolid\\Icono ValladolidRE80.bmp'),(73,'C:\\RCS2010\\bitmap\\Valladolid\\Icono ValladolidCE80.bmp'),(74,'C:\\RCS2010\\bitmap\\VorDomingo\\Icono VorDomingo80.bmp'),(75,'C:\\RCS2010\\bitmap\\SWITCH_ALLIED.bmp'),(76,'C:\\RCS2010\\bitmap\\Comunicaciones\\Icono Comunicaciones.bmp'),(77,'C:\\RCS2010\\bitmap\\VorDomingo\\Icono VorDomingoRE80.bmp'),(78,'C:\\RCS2010\\bitmap\\VorDomingo\\Icono VorDomingoCE80.bmp'),(79,'C:\\RCS2010\\bitmap\\SEA_30.bmp'),(80,'C:\\RCS2010\\bitmap\\VorDomingo\\SEA30VDTX.JPG'),(81,'C:\\RCS2010\\bitmap\\VorDomingo\\SEA30VDRX.JPG'),(82,'C:\\RCS2010\\bitmap\\Valladolid\\SwitchAT8000SDoble.bmp'),(83,'C:\\RCS2010\\bitmap\\Valladolid\\ValladolidRx.bmp'),(84,'C:\\RCS2010\\bitmap\\Valladolid\\Icono Vallladolid RE80.bmp'),(85,'C:\\RCS2010\\bitmap\\Valladolid\\SEA30TRP_rx.bmp'),(86,'C:\\RCS2010\\bitmap\\Valladolid\\SEA30TRP1_tx.bmp'),(87,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Icono ACC Torrejon RE80.bmp'),(88,'C:\\RCS2010\\bitmap\\Megaplex2100.jpg'),(89,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Alzado_Rack_Provisional.bmp'),(90,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Megaplex2100.jpg'),(91,'C:\\Documents and Settings\\Administrador\\Escritorio\\Fusibles_48_ACC.JPG'),(92,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Fusibles_ACC.jpg'),(93,'C:\\RCS2010\\bitmap\\ACC Torrejón\\SEA30LECM.JPG'),(94,'C:\\RCS2010\\bitmap\\Mega.jpg'),(95,'C:\\RCS2010\\bitmap\\Mux_RAD.JPG'),(96,'C:\\RCS2010\\bitmap\\ACC Torrejón\\SEA30LCEM.JPG'),(97,'C:\\RCS2010\\bitmap\\Valladolid\\Icono VallladolidRE80.bmp'),(98,'C:\\RCS2010\\bitmap\\Air_Mux_RAD.JPG'),(99,'C:\\RCS2010\\bitmap\\PUG5K.jpg'),(100,'C:\\RCS2010\\Bitmap\\Pasarela.bmp'),(101,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento.jpg'),(102,'C:\\RCS2010\\Bitmap\\TarjetasPasarela.bmp'),(103,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_1.jpg'),(104,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_2.jpg'),(105,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_3.jpg'),(106,'C:\\RCS2010\\Bitmap\\Pasarela_Base.bmp'),(107,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_1.jpg'),(108,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_2.jpg'),(109,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_3.jpg'),(110,'C:\\RCS2010\\Bitmap\\Pasarela_Base.bmp'),(111,'C:\\RCS2010\\Bitmap\\IconoPasarela.jpg'),(112,'C:\\RCS2010\\Bitmap\\Bitmap_UG5K.bmp');
/*!40000 ALTER TABLE `bitmaps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_ea`
--

DROP TABLE IF EXISTS `catalogo_ea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_ea` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `V_INF_PREALERTA` bigint(20) NOT NULL,
  `V_SUP_PREALERTA` bigint(20) NOT NULL,
  `V_INF_ALERTA` bigint(20) NOT NULL,
  `V_SUP_ALERTA` bigint(20) NOT NULL,
  `V_INF_ALARMA` bigint(20) NOT NULL,
  `V_SUP_ALARMA` bigint(20) NOT NULL,
  `HISTERESIS` bigint(20) NOT NULL,
  `TINTERROGACION` bigint(20) NOT NULL,
  `REGISTRO` bigint(20) NOT NULL,
  `RANGO_INF` bigint(20) NOT NULL,
  `RANGO_SUP` bigint(20) NOT NULL,
  `TMUESTRA` bigint(20) NOT NULL,
  `PORCENTAJE` bigint(20) NOT NULL,
  `RANGO_INF_REAL` bigint(20) DEFAULT NULL,
  `RANGO_SUP_REAL` bigint(20) DEFAULT NULL,
  `UNIDADES` varchar(10) DEFAULT NULL,
  UNIQUE KEY `UK_CATALOGO_EA` (`IDTIPOEQUIPO`,`ORDEN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_ea`
--

LOCK TABLES `catalogo_ea` WRITE;
/*!40000 ALTER TABLE `catalogo_ea` DISABLE KEYS */;
INSERT INTO `catalogo_ea` VALUES (1000,2,1,1,1,1,1,1,0,0,0,0,2,0,0,0,2,' '),(1000,14,0,4,0,4,0,4,0,0,0,0,4,0,0,0,4,' '),(1000,15,0,0,0,0,0,0,0,0,-1,0,4,0,0,0,4,' '),(1000,16,0,2,0,2,0,2,0,0,-1,0,2,0,0,0,2,' '),(1000,22,0,2,0,2,0,2,0,0,-2,0,2,0,0,0,2,' '),(1000,23,0,2,0,2,0,2,0,0,-2,0,2,0,0,0,2,' '),(1000,24,0,2,0,2,0,2,0,0,-2,0,2,0,0,0,2,' '),(1000,40,0,4,0,4,0,4,0,0,-2,0,4,0,0,0,4,' '),(1000,41,0,4,0,4,0,4,0,0,-2,0,4,0,0,0,4,' '),(1000,42,0,4,0,4,0,4,0,0,-2,0,4,0,0,0,4,' '),(1000,74,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,75,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,76,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,77,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,78,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,79,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,80,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,81,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,82,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,83,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,84,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,85,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,86,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,87,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,88,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,89,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,91,0,3,0,3,0,3,0,0,-2,0,3,0,0,0,3,' '),(1000,125,0,52,0,52,0,52,0,0,-2,0,52,0,0,0,52,' '),(1000,141,0,16,0,16,0,16,0,0,0,0,16,0,0,0,16,' '),(1000,143,0,1,0,1,0,1,0,0,-1,0,2,0,0,0,2,' '),(1000,192,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,193,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,194,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,195,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,196,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,197,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,200,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,206,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,211,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,212,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,214,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,217,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,218,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,220,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,223,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,224,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,226,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,229,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,230,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,232,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,235,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,236,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,238,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,241,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,242,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,244,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,247,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,248,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,250,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,254,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,259,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,260,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,265,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,266,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,271,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,272,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,277,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,278,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,283,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,284,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,289,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,290,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,295,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,296,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,''),(1000,314,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,315,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,316,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,317,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,318,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,319,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,320,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,321,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,322,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,323,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,324,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,325,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,326,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,327,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,328,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,329,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,330,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,331,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,332,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,333,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,334,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,335,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,336,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,337,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,338,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,339,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,340,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,341,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,342,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,343,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,344,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,345,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,346,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,347,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,348,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,349,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,350,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,351,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,352,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,353,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,354,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,355,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,356,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,357,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,358,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,359,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,360,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,361,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(1000,362,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,363,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,364,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,365,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,366,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,367,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,368,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,369,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,370,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,371,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,372,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,373,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,374,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,375,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,376,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(1000,377,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(2000,3,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,'HSec'),(2000,7,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,9,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,10,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,11,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,13,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,15,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,16,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,17,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,19,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,20,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,21,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,22,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,23,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,24,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,25,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,26,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,27,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,28,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,29,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,30,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,31,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,32,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,33,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,34,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,35,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,36,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,37,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,38,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,39,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,40,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,41,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,42,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,43,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,44,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,45,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,46,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,47,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,48,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(2000,49,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(3000,1,1,1,1,1,1,1,0,0,-2,0,2,0,0,0,2,' '),(3000,2,1,1,1,1,1,1,0,0,-2,1,2,0,0,1,2,' '),(3000,3,1,1,1,1,1,1,0,0,-2,0,2,0,0,0,2,' '),(3000,4,1,1,1,1,1,1,0,0,-2,0,2,0,0,0,2,' '),(3000,5,1,1,1,1,1,2,0,0,-2,0,2,0,0,0,2,' '),(3000,8,1,2,1,2,1,2,0,0,-1,0,3,0,0,0,3,' '),(6000,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,2,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,3,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,4,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,5,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,6,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,7,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,8,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,9,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,10,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,11,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,12,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,13,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,14,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,15,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,16,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,17,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,18,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,19,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,20,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,21,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,22,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,23,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(6000,24,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,' '),(9000,1,0,10,0,10,0,10,0,0,-2,0,10,0,0,0,10,' '),(9000,3,0,2,0,2,0,2,0,0,-2,0,2,0,0,0,2,' '),(9000,4,0,0,0,0,0,0,0,0,-2,0,10,0,0,0,10,' '),(9000,6,0,0,0,0,0,0,0,0,-2,0,0,0,0,0,0,' '),(9000,7,0,0,0,0,0,0,0,0,-2,0,10,0,0,0,10,' '),(9000,9,0,0,0,0,0,0,0,0,-2,0,2,0,0,0,2,' '),(9000,10,0,0,0,0,0,0,0,0,-2,0,10,0,0,0,10,' '),(9000,12,0,0,0,0,0,0,0,0,-2,0,2,0,0,0,2,' '),(50000,1,0,9,0,9,0,9,0,0,-2,0,9,0,0,0,9,' '),(50000,2,0,4,0,4,0,4,0,0,-2,0,4,0,0,0,4,' '),(50000,3,0,9,0,9,0,9,0,0,-2,0,9,0,0,0,9,' ');
/*!40000 ALTER TABLE `catalogo_ea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_ea_val`
--

DROP TABLE IF EXISTS `catalogo_ea_val`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_ea_val` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `VALOR` varchar(20) NOT NULL,
  `IDVALOR` bigint(20) NOT NULL,
  UNIQUE KEY `UK_CATALOGO_EA_VAL` (`IDTIPOEQUIPO`,`IDVALOR`,`ORDEN`),
  CONSTRAINT `FK_CATALOGO_EA_VAL_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_ea_val`
--

LOCK TABLES `catalogo_ea_val` WRITE;
/*!40000 ALTER TABLE `catalogo_ea_val` DISABLE KEYS */;
INSERT INTO `catalogo_ea_val` VALUES (1000,2,'No Ini',0),(1000,16,'Descono.',0),(1000,22,'Descono.',0),(1000,23,'Descono.',0),(1000,24,'Descono.',0),(1000,125,'Radio',0),(1000,126,'Radio',0),(1000,127,'Radio',0),(1000,128,'Radio',0),(1000,129,'Radio',0),(1000,130,'Radio',0),(1000,131,'Radio',0),(1000,132,'Radio',0),(1000,133,'Radio',0),(1000,134,'Radio',0),(1000,135,'Radio',0),(1000,136,'Radio',0),(1000,137,'Radio',0),(1000,138,'Radio',0),(1000,139,'Radio',0),(1000,140,'Radio',0),(1000,143,'BD No Ini.',0),(1000,200,'Local Simple',0),(1000,206,'Local Simple',0),(1000,211,'No presente',0),(1000,212,'Local Simple',0),(1000,217,'No presente',0),(1000,218,'Local Simple',0),(1000,223,'No presente',0),(1000,224,'Local Simple',0),(1000,229,'No presente',0),(1000,230,'Local Simple',0),(1000,235,'No presente',0),(1000,236,'Local Simple',0),(1000,241,'No presente',0),(1000,242,'Local Simple',0),(1000,247,'No presente',0),(1000,248,'Local Simple',0),(1000,253,'No presente',0),(1000,254,'Local Simple',0),(1000,259,'No presente',0),(1000,260,'Local Simple',0),(1000,265,'No presente',0),(1000,266,'Local Simple',0),(1000,271,'No presente',0),(1000,272,'Local Simple',0),(1000,277,'No presente',0),(1000,278,'Local Simple',0),(1000,283,'No presente',0),(1000,284,'Local Simple',0),(1000,289,'No presente',0),(1000,290,'Local Simple',0),(1000,295,'No presente',0),(1000,296,'No presente',0),(1000,314,'No Config.',0),(1000,315,'No Config.',0),(1000,316,'No Config.',0),(1000,317,'No Config.',0),(1000,318,'No Config.',0),(1000,319,'No Config.',0),(1000,320,'No Config.',0),(1000,321,'No Config.',0),(1000,322,'No Config.',0),(1000,323,'No Config.',0),(1000,324,'No Config.',0),(1000,325,'No Config.',0),(1000,326,'No Config.',0),(1000,327,'No Config.',0),(1000,328,'No Config.',0),(1000,329,'No Config.',0),(1000,330,'No Config.',0),(1000,331,'No Config.',0),(1000,332,'No Config.',0),(1000,333,'No Config.',0),(1000,334,'No Config.',0),(1000,335,'No Config.',0),(1000,336,'No Config.',0),(1000,337,'No Config.',0),(1000,338,'No Config.',0),(1000,339,'No Config.',0),(1000,340,'No Config.',0),(1000,341,'No Config.',0),(1000,342,'No Config.',0),(1000,343,'No Config.',0),(1000,344,'No Config.',0),(1000,345,'No Config.',0),(1000,346,'No Config.',0),(1000,347,'No Config.',0),(1000,348,'No Config.',0),(1000,349,'No Config.',0),(1000,350,'No Config.',0),(1000,351,'No Config.',0),(1000,352,'No Config.',0),(1000,353,'No Config.',0),(1000,354,'No Config.',0),(1000,355,'No Config.',0),(1000,356,'No Config.',0),(1000,357,'No Config.',0),(1000,358,'No Config.',0),(1000,359,'No Config.',0),(1000,360,'No Config.',0),(1000,361,'No Config.',0),(1000,362,'No Activo',0),(1000,363,'No Activo',0),(1000,364,'No Activo.',0),(1000,365,'No Activo',0),(1000,366,'No Activo',0),(1000,367,'No Activo',0),(1000,368,'No Activo',0),(1000,369,'No Activo',0),(1000,370,'No Activo',0),(1000,371,'No Activo',0),(1000,372,'No Activo',0),(1000,373,'No Activo',0),(1000,374,'No Activo',0),(1000,375,'No Activo',0),(1000,376,'No Activo',0),(1000,377,'No Activo',0),(1000,2,'Ok',1),(1000,16,'IA4',1),(1000,22,'IA4',1),(1000,23,'IA4',1),(1000,24,'IA4',1),(1000,125,'LCEN',1),(1000,126,'LCEN',1),(1000,127,'LCEN',1),(1000,128,'LCEN',1),(1000,129,'LCEN',1),(1000,130,'LCEN',1),(1000,131,'LCEN',1),(1000,132,'LCEN',1),(1000,133,'LCEN',1),(1000,134,'LCEN',1),(1000,135,'LCEN',1),(1000,136,'LCEN',1),(1000,137,'LCEN',1),(1000,138,'LCEN',1),(1000,139,'LCEN',1),(1000,140,'LCEN',1),(1000,143,'BD Ok',1),(1000,200,'Local P/R',1),(1000,206,'Local P/R',1),(1000,211,'Ok',1),(1000,212,'Local P/R',1),(1000,217,'Ok',1),(1000,218,'Local P/R',1),(1000,223,'Ok',1),(1000,224,'Local P/R',1),(1000,229,'Ok',1),(1000,230,'Local P/R',1),(1000,235,'Ok',1),(1000,236,'Local P/R',1),(1000,241,'Ok',1),(1000,242,'Local P/R',1),(1000,247,'Ok',1),(1000,248,'Local P/R',1),(1000,250,'Ok',1),(1000,253,'Ok',1),(1000,254,'Local P/R',1),(1000,259,'Ok',1),(1000,260,'Local P/R',1),(1000,265,'Ok',1),(1000,266,'Local P/R',1),(1000,271,'Ok',1),(1000,272,'Local P/R',1),(1000,277,'Ok',1),(1000,278,'Local P/R',1),(1000,283,'Ok',1),(1000,284,'Local P/R',1),(1000,289,'Ok',1),(1000,290,'Local P/R',1),(1000,295,'Ok',1),(1000,296,'Ok',1),(1000,314,'Config.',1),(1000,315,'Config.',1),(1000,316,'Config.',1),(1000,317,'Config.',1),(1000,318,'Config.',1),(1000,319,'Config.',1),(1000,320,'Config.',1),(1000,321,'Config.',1),(1000,322,'Config.',1),(1000,323,'Config.',1),(1000,324,'Config.',1),(1000,325,'Config.',1),(1000,326,'Config.',1),(1000,327,'Config.',1),(1000,328,'Config.',1),(1000,329,'Config.',1),(1000,330,'Config.',1),(1000,331,'Config.',1),(1000,332,'Config.',1),(1000,333,'Config.',1),(1000,334,'Config.',1),(1000,335,'Config.',1),(1000,336,'Config.',1),(1000,337,'Config.',1),(1000,338,'Config.',1),(1000,339,'Config.',1),(1000,340,'Config.',1),(1000,341,'Config.',1),(1000,342,'Config.',1),(1000,343,'Config.',1),(1000,344,'Config.',1),(1000,345,'Config.',1),(1000,346,'Config.',1),(1000,347,'Config.',1),(1000,348,'Config.',1),(1000,349,'Config.',1),(1000,350,'Config.',1),(1000,351,'Config.',1),(1000,352,'Config.',1),(1000,353,'Config.',1),(1000,354,'Config.',1),(1000,355,'Config.',1),(1000,356,'Config.',1),(1000,357,'Config.',1),(1000,358,'Config.',1),(1000,359,'Config.',1),(1000,360,'Config.',1),(1000,361,'Config.',1),(1000,362,'Activo',1),(1000,363,'Activo',1),(1000,364,'Activo',1),(1000,366,'Activo',1),(1000,367,'Activo',1),(1000,368,'Activo',1),(1000,369,'Activo',1),(1000,370,'Activo',1),(1000,371,'Activo',1),(1000,372,'Activo',1),(1000,373,'Activo',1),(1000,374,'Activo',1),(1000,375,'Activo',1),(1000,376,'Activo',1),(1000,377,'Activo',1),(1000,2,'Fallo',2),(1000,16,'IQ1',2),(1000,22,'IQ1',2),(1000,23,'IQ1',2),(1000,24,'IQ1',2),(1000,125,'PpBC',2),(1000,126,'PpBC',2),(1000,127,'PpBC',2),(1000,128,'PpBC',2),(1000,129,'PpBC',2),(1000,130,'PpBC',2),(1000,131,'PpBC',2),(1000,132,'PpBC',2),(1000,133,'PpBC',2),(1000,134,'PpBC',2),(1000,135,'PpBC',2),(1000,136,'PpBC',2),(1000,137,'PpBC',2),(1000,138,'PpBC',2),(1000,139,'PpBC',2),(1000,140,'PpBC',2),(1000,143,'BD Conflicto',2),(1000,200,'Local FD Simple',2),(1000,206,'Local FD Simple',2),(1000,211,'Fallo',2),(1000,212,'Local FD Simple',2),(1000,217,'Fallo',2),(1000,218,'Local FD Simple',2),(1000,223,'Fallo',2),(1000,224,'Local FD Simple',2),(1000,229,'Fallo',2),(1000,230,'Local FD Simple',2),(1000,235,'Fallo',2),(1000,236,'Local FD Simple',2),(1000,241,'Fallo',2),(1000,242,'Local FD Simple',2),(1000,247,'Fallo',2),(1000,248,'Local FD Simple',2),(1000,253,'Fallo',2),(1000,254,'Local FD Simple',2),(1000,259,'Fallo',2),(1000,260,'Local FD Simple',2),(1000,265,'Fallo',2),(1000,266,'Local FD Simple',2),(1000,271,'Fallo',2),(1000,272,'Local FD Simple',2),(1000,277,'Fallo',2),(1000,278,'Local FD Simple',2),(1000,283,'Fallo',2),(1000,284,'Local FD Simple',2),(1000,289,'Fallo',2),(1000,290,'Local FD Simple',2),(1000,295,'Fallo',2),(1000,296,'Fallo',2),(1000,2,'Aviso',3),(1000,125,'PpBL',3),(1000,126,'PpBL',3),(1000,127,'PpBL',3),(1000,128,'PpBL',3),(1000,129,'PpBL',3),(1000,130,'PpBL',3),(1000,131,'PpBL',3),(1000,132,'PpBL',3),(1000,133,'PpBL',3),(1000,134,'PpBL',3),(1000,135,'PpBL',3),(1000,136,'PpBL',3),(1000,137,'PpBL',3),(1000,138,'PpBL',3),(1000,139,'PpBL',3),(1000,140,'PpBL',3),(1000,200,'Local FD P/R',3),(1000,206,'Local FD P/R',3),(1000,211,'Degradado',3),(1000,212,'Local FD P/R',3),(1000,217,'Degradado',3),(1000,218,'Local FD P/R',3),(1000,223,'Degradado',3),(1000,224,'Local FD P/R',3),(1000,229,'Degradado',3),(1000,230,'Local FD P/R',3),(1000,235,'Degradado',3),(1000,236,'Local FD P/R',3),(1000,241,'Degradado',3),(1000,242,'Local FD P/R',3),(1000,247,'Degradado',3),(1000,248,'Local FD P/R',3),(1000,253,'Degradado',3),(1000,254,'Local FD P/R',3),(1000,259,'Degradado',3),(1000,260,'Local FD P/R',3),(1000,265,'Degradado',3),(1000,266,'Local FD P/R',3),(1000,271,'Degradado',3),(1000,272,'Local FD P/R',3),(1000,277,'Degradado',3),(1000,278,'Local FD P/R',3),(1000,283,'Degradado',3),(1000,284,'Local FD P/R',3),(1000,289,'Degradado',3),(1000,290,'Local FD P/R',3),(1000,295,'Degradado',3),(1000,296,'Degradado',3),(1000,125,'PpAB',4),(1000,126,'PpAB',4),(1000,127,'PpAB',4),(1000,128,'PpAB',4),(1000,129,'PpAB',4),(1000,130,'PpAB',4),(1000,131,'PpAB',4),(1000,132,'PpAB',4),(1000,133,'PpAB',4),(1000,134,'PpAB',4),(1000,135,'PpAB',4),(1000,136,'PpAB',4),(1000,137,'PpAB',4),(1000,138,'PpAB',4),(1000,139,'PpAB',4),(1000,140,'PpAB',4),(1000,200,'Remoto Rx Tx',4),(1000,206,'Remoto Rx Tx',4),(1000,212,'Remoto Rx Tx',4),(1000,218,'Remoto Rx Tx',4),(1000,224,'Remoto Rx Tx',4),(1000,230,'Remoto Rx Tx',4),(1000,236,'Remoto Rx Tx',4),(1000,242,'Remoto Rx Tx',4),(1000,248,'Remoto Rx Tx',4),(1000,254,'Remoto Rx Tx',4),(1000,260,'Remoto Rx Tx',4),(1000,266,'Remoto Rx Tx',4),(1000,272,'Remoto Rx Tx',4),(1000,278,'Remoto Rx Tx',4),(1000,284,'Remoto Rx Tx',4),(1000,290,'Remoto Rx Tx',4),(1000,125,'AtsR2',5),(1000,126,'AtsR2',5),(1000,127,'AtsR2',5),(1000,128,'AtsR2',5),(1000,129,'AtsR2',5),(1000,130,'AtsR2',5),(1000,131,'AtsR2',5),(1000,132,'AtsR2',5),(1000,133,'AtsR2',5),(1000,134,'AtsR2',5),(1000,135,'AtsR2',5),(1000,136,'AtsR2',5),(1000,137,'AtsR2',5),(1000,138,'AtsR2',5),(1000,139,'AtsR2',5),(1000,140,'AtsR2',5),(1000,200,'Remoto Tx',5),(1000,206,'Remoto Tx',5),(1000,212,'Remoto Tx',5),(1000,218,'Remoto Tx',5),(1000,224,'Remoto Tx',5),(1000,230,'Remoto Tx',5),(1000,236,'Remoto Tx',5),(1000,242,'Remoto Tx',5),(1000,248,'Remoto Tx',5),(1000,254,'Remoto Tx',5),(1000,260,'Remoto Tx',5),(1000,266,'Remoto Tx',5),(1000,272,'Remoto Tx',5),(1000,278,'Remoto Tx',5),(1000,284,'Remoto Tx',5),(1000,290,'Remoto Tx',5),(1000,125,'AtsN5',6),(1000,126,'AtsN5',6),(1000,127,'AtsN5',6),(1000,128,'AtsN5',6),(1000,129,'AtsN5',6),(1000,130,'AtsN5',6),(1000,131,'AtsN5',6),(1000,132,'AtsN5',6),(1000,133,'AtsN5',6),(1000,134,'AtsN5',6),(1000,135,'AtsN5',6),(1000,136,'AtsN5',6),(1000,137,'AtsN5',6),(1000,138,'AtsN5',6),(1000,139,'AtsN5',6),(1000,140,'AtsN5',6),(1000,200,'Remoto Rx',6),(1000,206,'Remoto Rx',6),(1000,212,'Remoto Rx',6),(1000,218,'Remoto Rx',6),(1000,224,'Remoto Rx',6),(1000,230,'Remoto Rx',6),(1000,236,'Remoto Rx',6),(1000,242,'Remoto Rx',6),(1000,248,'Remoto Rx',6),(1000,254,'Remoto Rx',6),(1000,260,'Remoto Rx',6),(1000,266,'Remoto Rx',6),(1000,272,'Remoto Rx',6),(1000,278,'Remoto Rx',6),(1000,284,'Remoto Rx',6),(1000,290,'Remoto Rx',6),(1000,125,'AtsQSIG',7),(1000,126,'AtsQSIG',7),(1000,127,'AtsQSIG',7),(1000,128,'AtsQSIG',7),(1000,129,'AtsQSIG',7),(1000,130,'AtsQSIG',7),(1000,131,'AtsQSIG',7),(1000,132,'AtsQSIG',7),(1000,133,'AtsQSIG',7),(1000,134,'AtsQSIG',7),(1000,135,'AtsQSIG',7),(1000,136,'AtsQSIG',7),(1000,137,'AtsQSIG',7),(1000,138,'AtsQSIG',7),(1000,139,'AtsQSIG',7),(1000,140,'AtsQSIG',7),(1000,125,'Tunel_LOC',8),(1000,126,'Tunel_LOC',8),(1000,127,'Tunel_LOC',8),(1000,128,'Tunel_LOC',8),(1000,129,'Tunel_LOC',8),(1000,130,'Tunel_LOC',8),(1000,131,'Tunel_LOC',8),(1000,132,'Tunel_LOC',8),(1000,133,'Tunel_LOC',8),(1000,134,'Tunel_LOC',8),(1000,135,'Tunel_LOC',8),(1000,136,'Tunel_LOC',8),(1000,137,'Tunel_LOC',8),(1000,138,'Tunel_LOC',8),(1000,139,'Tunel_LOC',8),(1000,140,'Tunel_LOC',8),(1000,125,'No Config.',9),(1000,126,'No Config.',9),(1000,127,'No Config.',9),(1000,128,'No Config',9),(1000,129,'No Config',9),(1000,130,'No Config.',9),(1000,131,'No Config.',9),(1000,132,'No Config.',9),(1000,133,'No Config.',9),(1000,134,'No Config.',9),(1000,135,'No Config.',9),(1000,136,'No Config.',9),(1000,137,'No Config.',9),(1000,138,'No Config.',9),(1000,139,'No Config.',9),(1000,140,'No Config.',9),(1000,244,'No Aplicable',9),(1000,125,'Tunel_REM',10),(1000,126,'Tunel_REM',10),(1000,127,'Tunel_REM',10),(1000,128,'Tunel_REM',10),(1000,129,'Tunel_REM',10),(1000,130,'Tunel_REM',10),(1000,131,'Tunel_REM',10),(1000,132,'Tunel_REM',10),(1000,133,'Tunel_REM',10),(1000,134,'Tunel_REM',10),(1000,135,'Tunel_REM',10),(1000,136,'Tunel_REM',10),(1000,137,'Tunel_REM',10),(1000,138,'Tunel_REM',10),(1000,139,'Tunel_REM',10),(1000,140,'Tunel_REM',10),(2000,13,'Up',1),(2000,19,'Up',1),(2000,47,'Enabled',1),(2000,13,'Down',2),(2000,19,'Down',2),(2000,13,'Testing',3),(2000,19,'Testing',3),(2000,13,'Unknown',4),(2000,19,'Unknown',4),(2000,13,'Dormant',5),(2000,19,'Dormant',5),(2000,13,'NoPresent',6),(2000,19,'NotPresent',6),(2000,13,'lLayerDown',7),(2000,19,'lLayerDown',7),(3000,1,'No Present',0),(3000,2,'No Present',0),(3000,3,'No Present',0),(3000,4,'No Config.',0),(3000,5,'No Present',0),(3000,8,'No Presen.',0),(3000,1,'Ok',1),(3000,2,'Ok',1),(3000,3,'Ok',1),(3000,4,'Conectado',1),(3000,5,'Principal',1),(3000,8,'Principal',1),(3000,1,'Error',2),(3000,2,'Error',2),(3000,3,'Error',2),(3000,4,'No Conect.',2),(3000,5,'Reserva',2),(3000,8,'Reserva',2),(3000,8,'Arrancando',3),(6000,1,'No Config.',0),(6000,2,'NO TRX.',0),(6000,3,'Idle',0),(6000,4,'Idle',0),(6000,5,'Idle',0),(6000,6,'Idle',0),(6000,7,'Desc.',0),(6000,8,'Descono.',0),(6000,9,'No Config.',0),(6000,10,'NO TRX.',0),(6000,11,'Idle',0),(6000,12,'Idle',0),(6000,13,'Idle',0),(6000,14,'Idle',0),(6000,15,'Desc.',0),(6000,16,'Descono.',0),(6000,17,'No Config.',0),(6000,18,'NO TRX.',0),(6000,19,'Idle',0),(6000,20,'Idle',0),(6000,21,'Idle',0),(6000,22,'Idle',0),(6000,23,'Desc.',0),(6000,24,'Descono.',0),(6000,1,'Config.',1),(6000,2,'SI TRX.',1),(6000,3,'Activa',1),(6000,4,'Activa',1),(6000,5,'Activa',1),(6000,6,'Activa',1),(6000,7,'TXA-TRXA',1),(6000,8,'RX-A',1),(6000,9,'Config.',1),(6000,10,'SI TRX.',1),(6000,11,'Activa',1),(6000,12,'Activa',1),(6000,13,'Activa',1),(6000,14,'Activa',1),(6000,15,'TXA-TRXA',1),(6000,16,'RX-A',1),(6000,17,'Config.',1),(6000,18,'SI TRX.',1),(6000,19,'Activa',1),(6000,20,'Activa',1),(6000,21,'Activa',1),(6000,22,'Activa',1),(6000,23,'TXA-TRXA',1),(6000,24,'RX-A',1),(6000,3,'Fallo Sesión',2),(6000,4,'Fallo Sesión',2),(6000,5,'Fallo Sesión',2),(6000,6,'Fallo Sesión',2),(6000,7,'TXB-TRXB',2),(6000,8,'RX-B',2),(6000,11,'Fallo Sesión',2),(6000,12,'Fallo Sesión',2),(6000,13,'Fallo Sesión',2),(6000,14,'Fallo Sesión',2),(6000,15,'TXB-TRXB',2),(6000,16,'RX-B',2),(6000,19,'Fallo Sesión',2),(6000,20,'Fallo Sesión',2),(6000,21,'Fallo Sesión',2),(6000,22,'Fallo Sesión',2),(6000,23,'TXB-TRXB',2),(6000,24,'RX-B',2),(6000,3,'No Conf.',9),(6000,4,'No Conf.',9),(6000,5,'No Conf.',9),(6000,6,'No Conf.',9),(6000,11,'No Conf.',9),(6000,12,'No Conf.',9),(6000,13,'No Conf.',9),(6000,14,'No Conf.',9),(6000,20,'No Conf.',9),(6000,21,'No Conf.',9),(6000,22,'No Conf.',9),(9000,3,'-',-1),(9000,6,'-',-1),(9000,9,'-',-1),(9000,12,'-',-1),(9000,1,'Idle',0),(9000,3,'Normal',0),(9000,4,'Idle',0),(9000,6,'Normal',0),(9000,7,'Idle',0),(9000,9,'Normal',0),(9000,10,'Idle',0),(9000,12,'Normal',0),(9000,1,'Activa',1),(9000,3,'Emergencia',1),(9000,4,'Activa',1),(9000,6,'Emergencia',1),(9000,7,'Activa',1),(9000,9,'Emergencia',1),(9000,10,'Activa',1),(9000,12,'Emergencia',1),(9000,1,'OFF',9),(9000,3,'-',9),(9000,4,'OFF',9),(9000,6,'-',9),(9000,7,'OFF',9),(9000,9,'-',9),(9000,10,'OFF',9),(9000,12,'-',9),(50000,1,'No Ini.',-1),(50000,2,'No Ini.',-1),(50000,3,'No Ini.',-1),(50000,2,'Off',0),(50000,3,'No Superv.',0),(50000,1,'Ok.',1),(50000,2,'Llam. Estb',1),(50000,3,'Ok',1),(50000,1,'Fallo',2),(50000,2,'Fallo',2),(50000,3,'Fallo',2),(50000,1,'Colgado',3),(50000,2,'Serv ENT',3),(50000,3,'No Resp.',3),(50000,1,'Descolgado',4),(50000,2,'Serv SAL',4),(50000,1,'No Aplica',9),(50000,3,'No Aplica',9);
/*!40000 ALTER TABLE `catalogo_ea_val` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_ed`
--

DROP TABLE IF EXISTS `catalogo_ed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_ed` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `ALARMA` bigint(20) DEFAULT NULL,
  `TINTERROGACION` bigint(20) NOT NULL,
  `REGISTRO` bigint(20) NOT NULL,
  `TMUESTRA` bigint(20) NOT NULL,
  `CMUESTRA` bigint(20) NOT NULL,
  `DESCRIPCION0` varchar(20) NOT NULL,
  `DESCRIPCION1` varchar(20) NOT NULL,
  UNIQUE KEY `UK_CATALOGO_ED` (`IDTIPOEQUIPO`,`ORDEN`),
  CONSTRAINT `FK_CATALOGO_ED_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_ed`
--

LOCK TABLES `catalogo_ed` WRITE;
/*!40000 ALTER TABLE `catalogo_ed` DISABLE KEYS */;
INSERT INTO `catalogo_ed` VALUES (1000,27,-1,0,0,0,0,'Desconectada','Conectada'),(1000,28,-1,0,0,0,0,'Desconectada','Conectada'),(1000,29,-1,0,0,0,0,'Desconectada','Conectada'),(1000,190,0,0,0,0,0,'Desconect.','Conectado');
/*!40000 ALTER TABLE `catalogo_ed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_et`
--

DROP TABLE IF EXISTS `catalogo_et`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_et` (
  `IDTIPOEQUIPO` bigint(20) DEFAULT NULL,
  `ORDEN` bigint(20) DEFAULT NULL,
  `VALOR` longtext,
  `LONGVALOR` bigint(20) DEFAULT NULL,
  KEY `PK_CATALOGO_ET` (`IDTIPOEQUIPO`,`ORDEN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_et`
--

LOCK TABLES `catalogo_et` WRITE;
/*!40000 ALTER TABLE `catalogo_et` DISABLE KEYS */;
INSERT INTO `catalogo_et` VALUES (15000,56,'',50),(15000,58,'',50),(15000,60,'',50),(6000,59,'',50),(6000,61,'',50),(6000,63,'',50),(1000,1,'',100),(1000,13,'',100),(1000,58,'',50),(1000,59,'',50),(1000,60,'',50),(1000,61,'',50),(1000,62,'',50),(1000,63,'',50),(1000,64,'',50),(1000,65,'',50),(1000,66,'',50),(1000,67,'',50),(1000,68,'',50),(1000,69,'',50),(1000,70,'',50),(1000,71,'',50),(1000,72,'',50),(1000,73,'',50),(2000,1,'',255),(2000,2,'',50),(2000,4,'',255),(2000,5,'',255),(2000,6,'',255),(2000,8,'',255),(2000,12,'',255),(2000,14,'',255),(2000,18,'',50),(1000,146,'',1024),(1000,189,'',1024),(1000,173,'0',1024),(1000,176,'0',1024),(1000,179,'0',1024),(1000,182,'0',1024),(1000,185,'0',1024),(1000,188,'0',1024),(1000,149,'0',1024),(1000,152,'0',1024),(1000,155,'0',1024),(1000,158,'0',1024),(1000,161,'0',1024),(1000,164,'0',1024),(1000,167,'0',1024),(1000,170,'0',1024),(1000,198,'',300),(1000,201,'',20),(1000,207,'0',20),(1000,213,'0',20),(1000,219,'0',20),(1000,225,'0',20),(1000,231,'0',20),(1000,237,'0',20),(1000,243,'0',20),(1000,249,'0',20),(1000,255,'0',20),(1000,261,'0',20),(1000,279,'0',20),(1000,285,'0',30),(1000,291,'0',20),(1000,291,'0',20),(3000,7,'0',200),(9000,2,'',33),(9000,5,'',33),(9000,8,'',33),(9000,11,'',33),(50000,4,'',100),(1000,267,'0',20),(1000,273,'0',20),(3000,9,'0',50);
/*!40000 ALTER TABLE `catalogo_et` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_et_val`
--

DROP TABLE IF EXISTS `catalogo_et_val`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_et_val` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `VALOR` varchar(25) NOT NULL,
  `IDVALOR` bigint(20) NOT NULL,
  `ESTADO` int(3) unsigned zerofill NOT NULL,
  `DESC_ESTADO` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_et_val`
--

LOCK TABLES `catalogo_et_val` WRITE;
/*!40000 ALTER TABLE `catalogo_et_val` DISABLE KEYS */;
INSERT INTO `catalogo_et_val` VALUES (1000,5,'DTS Redémarrer',0,003,'Alarmé'),(1000,5,'Faible Voltage',2,003,'Alarmé'),(1000,5,'Panne Source 1',3,003,'Alarmé'),(1000,5,'Panne Source 2',4,003,'Alarmé'),(1000,5,'Erreur Voltage 5V',5,003,'Alarmé'),(1000,5,'Erreur Voltage 2.5V',6,003,'Alarmé'),(1000,5,'Erreur Voltage 1.25V',7,003,'Alarmé'),(1000,5,'Fausse Zone Horaire',8,003,'Alarmé'),(1000,5,'Err. Zone Horaire TC 1',9,003,'Alarmé'),(1000,5,'Err. Zone Horaire TC 2',10,003,'Alarmé'),(1000,5,'Alarme D\'Entrée',11,003,'Alarmé'),(1000,5,'Irig 1 Bas Voltage',12,003,'Alarmé'),(1000,5,'Irig 2 Bas Voltage',13,003,'Alarmé'),(1000,5,'Erreur Str. Source Temps',16,003,'Alarmé'),(1000,5,' Erreur Source Temps TO',17,003,'Alarmé'),(1000,5,'Heure Non Valide',18,003,'Alarmé'),(1000,5,'NTP Perte Sync',19,003,'Alarmé'),(1000,5,'NTP Erreur Logiciel',20,003,'Alarmé'),(1000,5,'NTP Erreur',21,003,'Alarmé'),(1000,5,'NTP BackUp Active',22,003,'Alarmé'),(1000,5,'Ecart Sync Trop Grand',23,003,'Alarmé'),(1000,5,'Sans Serveur Mail',24,003,'Alarmé'),(1000,5,'SNMP ne Fonctionne Pas',25,003,'Alarmé'),(1000,5,'Sans Liaison Optique',30,003,'Alarmé'),(1000,5,'Sans Liaison Lan',31,003,'Alarmé'),(1000,5,'Changer Secondaire->PPAL',32,003,'Alarmé'),(1000,5,'Source Décalé',33,003,'Alarmé'),(1000,5,'Erreur Source Locale',34,003,'Alarmé'),(6000,5,'Rx Alarme',0,003,'Alarmé'),(6000,12,'Alerté',0,002,'Alerté'),(5000,6,'Alarme TX',0,003,'Alarmé'),(5000,7,'Alerté TX',0,002,'Alerté');
/*!40000 ALTER TABLE `catalogo_et_val` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_relsenialesequipo`
--

DROP TABLE IF EXISTS `catalogo_relsenialesequipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_relsenialesequipo` (
  `IDSENIAL_ENT` bigint(20) NOT NULL,
  `IDSENIAL_SAL` bigint(20) NOT NULL,
  UNIQUE KEY `UK_CATALOGO_RELSENIALESEQUIPO` (`IDSENIAL_ENT`,`IDSENIAL_SAL`),
  KEY `FK_CATALOGO_RELSENIALESEQUIPO_CATALOGOSENIALES1` (`IDSENIAL_SAL`),
  CONSTRAINT `FK_CATALOGO_RELSENIALESEQUIPO_CATALOGOSENIALES` FOREIGN KEY (`IDSENIAL_ENT`) REFERENCES `catalogoseniales` (`IDSENIAL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CATALOGO_RELSENIALESEQUIPO_CATALOGOSENIALES1` FOREIGN KEY (`IDSENIAL_SAL`) REFERENCES `catalogoseniales` (`IDSENIAL`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_relsenialesequipo`
--

LOCK TABLES `catalogo_relsenialesequipo` WRITE;
/*!40000 ALTER TABLE `catalogo_relsenialesequipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `catalogo_relsenialesequipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_sa_int`
--

DROP TABLE IF EXISTS `catalogo_sa_int`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_sa_int` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `RANGO_INF` bigint(20) NOT NULL,
  `RANGO_SUP` bigint(20) NOT NULL,
  `INTERVALO` bigint(20) NOT NULL,
  `UNIDADES` varchar(10) DEFAULT NULL,
  UNIQUE KEY `UK_CATALOGO_SA_INT` (`IDTIPOEQUIPO`,`ORDEN`),
  CONSTRAINT `FK_CATALOGO_SA_INT_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_sa_int`
--

LOCK TABLES `catalogo_sa_int` WRITE;
/*!40000 ALTER TABLE `catalogo_sa_int` DISABLE KEYS */;
INSERT INTO `catalogo_sa_int` VALUES (1000,145,0,9,1,' '),(1000,148,0,9,1,' '),(1000,151,0,9,1,' '),(1000,154,0,9,1,' '),(1000,157,0,9,1,' '),(1000,160,0,9,1,' '),(1000,163,0,9,1,' '),(1000,166,0,9,1,' '),(1000,169,0,9,1,' '),(1000,172,0,9,1,' '),(1000,175,0,9,1,' '),(1000,178,0,9,1,' '),(1000,181,0,9,1,' '),(1000,184,0,9,1,' '),(1000,187,0,9,1,' '),(1000,199,0,9,1,' ');
/*!40000 ALTER TABLE `catalogo_sa_int` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_sa_val`
--

DROP TABLE IF EXISTS `catalogo_sa_val`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_sa_val` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `VALOR` varchar(10) NOT NULL,
  `IDVALOR` bigint(20) NOT NULL,
  `UNIDADES` varchar(10) DEFAULT NULL,
  UNIQUE KEY `UK_CATALOGO_SA_VAL` (`IDTIPOEQUIPO`,`ORDEN`,`IDVALOR`),
  CONSTRAINT `FK_CATALOGO_SA_VAL_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_sa_val`
--

LOCK TABLES `catalogo_sa_val` WRITE;
/*!40000 ALTER TABLE `catalogo_sa_val` DISABLE KEYS */;
INSERT INTO `catalogo_sa_val` VALUES (1000,110,'No Test',0,' '),(1000,110,'Inic. test',1,' '),(1000,111,'No Reset',0,' '),(1000,111,'Reset',1,' '),(1000,144,'Normal',0,' '),(1000,144,'Manto.',1,' '),(1000,147,'Normal',0,''),(1000,147,'Manto.',1,''),(1000,150,'Normal',0,''),(1000,150,'Manto.',1,''),(1000,153,'Normal',0,''),(1000,153,'Manto.',1,''),(1000,156,'Normal',0,''),(1000,156,'Manto.',1,''),(1000,159,'Normal',0,''),(1000,159,'Manto.',1,''),(1000,162,'Normal',0,''),(1000,162,'Manto.',1,''),(1000,165,'Normal',0,''),(1000,165,'Manto.',1,''),(1000,168,'Normal',0,''),(1000,168,'Manto.',1,''),(1000,171,'Normal',0,''),(1000,171,'Manto.',1,''),(1000,174,'Normal',0,''),(1000,174,'Manto.',1,''),(1000,177,'Normal',0,''),(1000,177,'Manto.',1,''),(1000,180,'Normal',0,' '),(1000,180,'Manto.',1,' '),(1000,183,'Normal',0,''),(1000,183,'Manto.',1,''),(1000,186,'Normal',0,''),(1000,186,'Manto.',1,''),(1000,191,'Normal',0,''),(1000,191,'Manto.',1,''),(3000,6,'No Test',0,' '),(3000,6,'Test',1,' ');
/*!40000 ALTER TABLE `catalogo_sa_val` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_sd`
--

DROP TABLE IF EXISTS `catalogo_sd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_sd` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `VALOR` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(15) NOT NULL,
  UNIQUE KEY `UK_CATALOGO_SD` (`IDTIPOEQUIPO`,`ORDEN`,`VALOR`),
  CONSTRAINT `FK_CATALOGO_SD_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_sd`
--

LOCK TABLES `catalogo_sd` WRITE;
/*!40000 ALTER TABLE `catalogo_sd` DISABLE KEYS */;
/*!40000 ALTER TABLE `catalogo_sd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_st`
--

DROP TABLE IF EXISTS `catalogo_st`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogo_st` (
  `IDTIPOEQUIPO` bigint(20) DEFAULT NULL,
  `ORDEN` bigint(20) DEFAULT NULL,
  `VALOR` longtext,
  `LONGVALOR` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_st`
--

LOCK TABLES `catalogo_st` WRITE;
/*!40000 ALTER TABLE `catalogo_st` DISABLE KEYS */;
INSERT INTO `catalogo_st` VALUES (15000,57,'',50),(15000,59,'',50),(15000,61,'',50),(6000,60,'',50),(6000,62,'',50),(6000,64,'',50);
/*!40000 ALTER TABLE `catalogo_st` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogoequipos`
--

DROP TABLE IF EXISTS `catalogoequipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogoequipos` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(32) NOT NULL,
  `VERSIONSNMP` bigint(20) DEFAULT NULL,
  `REINTENTOCNX` bigint(20) DEFAULT NULL,
  `EQUIPORADIO` smallint(6) DEFAULT NULL,
  `OID` varchar(10) DEFAULT NULL,
  `OIDRAIZ` varchar(50) DEFAULT NULL,
  `COMUNITYREAD` varchar(15) DEFAULT NULL,
  `COMUNITYWRITE` varchar(15) DEFAULT NULL,
  `PUERTOTRAP` mediumint(9) DEFAULT NULL,
  `PUERTOAGENTE` mediumint(9) DEFAULT NULL,
  `EQUIPOCORA` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`IDTIPOEQUIPO`),
  UNIQUE KEY `UK_CATALOGOEQUIPOS` (`DESCRIPCION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogoequipos`
--

LOCK TABLES `catalogoequipos` WRITE;
/*!40000 ALTER TABLE `catalogoequipos` DISABLE KEYS */;
INSERT INTO `catalogoequipos` VALUES (1000,'P-UG5K',3,2,0,'.8.3.','1.3.6.1.4.1.7916','public','public',162,161,0),(2000,'SNMPv2-MIB',2,2,0,'1.2.1.','1.3.6.','public','public',162,161,0),(3000,'P-UG5K-CPU',2,2,0,'.8.3.1.','1.3.6.1.4.1.7916','public','public',162,161,0),(6000,'P-UG5K-SIP',2,2,0,'5.1.','1.3.6.1.4.1.7916.8.3.1.','public','public',162,161,0),(9000,'P-UG5K-SRAD',2,2,0,'6.1.','1.3.6.1.4.1.7916.8.3.1.','public','public',162,161,0),(50000,'P-UG5K-STEL',2,3,0,'1.','1.3.6.1.4.1.7916.8.3.1.4.2.','public','private',162,161,0);
/*!40000 ALTER TABLE `catalogoequipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogoestados`
--

DROP TABLE IF EXISTS `catalogoestados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogoestados` (
  `ESTADO` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL,
  PRIMARY KEY (`ESTADO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogoestados`
--

LOCK TABLES `catalogoestados` WRITE;
/*!40000 ALTER TABLE `catalogoestados` DISABLE KEYS */;
INSERT INTO `catalogoestados` VALUES (0,'Normal'),(1,'Prealerta'),(2,'Alerta'),(3,'Alarma');
/*!40000 ALTER TABLE `catalogoestados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogoseniales`
--

DROP TABLE IF EXISTS `catalogoseniales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogoseniales` (
  `IDSENIAL` bigint(10) NOT NULL,
  `IDTIPOEQUIPO` bigint(10) DEFAULT NULL,
  `ORDEN` bigint(10) DEFAULT NULL,
  `IDTIPOSENIAL` bigint(10) DEFAULT NULL,
  `IDDESCRIPCION` bigint(10) DEFAULT NULL,
  `OID` varchar(18) DEFAULT NULL,
  `IDICONO` bigint(10) DEFAULT NULL,
  `COORD_X` bigint(10) DEFAULT NULL,
  `COORD_Y` bigint(10) DEFAULT NULL,
  `TIPODATOSNMP` bigint(10) DEFAULT NULL,
  `PRIORIDAD` bigint(10) DEFAULT NULL,
  `COMUNICACIONES` bigint(10) DEFAULT NULL,
  `OFFSET` bigint(10) DEFAULT NULL,
  `UNIDADES` varchar(10) DEFAULT NULL,
  `VISIBLE` bigint(10) DEFAULT NULL,
  `IDPERFIL` bigint(1) DEFAULT NULL,
  `TRAP` bigint(1) DEFAULT NULL,
  `VISIBLEEQRADIO` bigint(1) DEFAULT NULL,
  `FACTORCONVERSION` double(10,3) DEFAULT NULL,
  `POLLING` bigint(1) DEFAULT NULL,
  PRIMARY KEY (`IDSENIAL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogoseniales`
--

LOCK TABLES `catalogoseniales` WRITE;
/*!40000 ALTER TABLE `catalogoseniales` DISABLE KEYS */;
INSERT INTO `catalogoseniales` VALUES (1127,1000,27,1,32639,'1.3.2.1.3.2',842,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1128,1000,28,1,32640,'1.3.2.1.3.3',843,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1129,1000,29,1,32641,'1.3.2.1.3.4',844,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1202,1000,2,2,32614,'1.1.2.0',558,0,0,2,1,0,0,' ',1,0,0,0,0.000,1),(1203,1000,3,2,32615,'1.1.4.0',604,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1204,1000,4,2,32616,'1.1.5.0',605,0,0,2,0,0,0,' ',0,0,0,0,0.000,0),(1205,1000,5,2,32617,'1.1.6.0',606,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1206,1000,6,2,32618,'1.1.7.0',607,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1207,1000,7,2,32619,'1.1.8.0',608,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1208,1000,8,2,32620,'1.1.9.0',745,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1209,1000,9,2,32621,'1.1.10.0',824,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1214,1000,14,2,32626,'1.3.1.0',829,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1216,1000,16,2,32628,'1.3.2.1.2.1',831,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1222,1000,22,2,32634,'1.3.2.1.2.2',837,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1223,1000,23,2,32635,'1.3.2.1.2.3',838,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1224,1000,24,2,32636,'1.3.2.1.2.4',839,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1325,1000,125,2,32737,'1.4.2.1.3.1',941,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1326,1000,126,2,32738,'1.4.2.1.3.2',942,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1327,1000,127,2,32739,'1.4.2.1.3.3',943,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1328,1000,128,2,32740,'1.4.2.1.3.4',944,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1329,1000,129,2,32741,'1.4.2.1.3.5',945,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1330,1000,130,2,32742,'1.4.2.1.3.6',946,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1331,1000,131,2,32743,'1.4.2.1.3.7',947,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1332,1000,132,2,32744,'1.4.2.1.3.8',948,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1333,1000,133,2,32745,'1.4.2.1.3.9',949,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1334,1000,134,2,32746,'1.4.2.1.3.10',950,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1335,1000,135,2,32747,'1.4.2.1.3.11',951,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1336,1000,136,2,32748,'1.4.2.1.3.12',952,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1337,1000,137,2,32749,'1.4.2.1.3.13',953,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1338,1000,138,2,32750,'1.4.2.1.3.14',954,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1339,1000,139,2,32751,'1.4.2.1.3.15',955,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1340,1000,140,2,32752,'1.4.2.1.3.16',956,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1341,1000,141,2,32753,'1.4.1.0',957,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1343,1000,143,2,32804,'1.1.3.0',1011,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1501,1000,1,5,32613,'1.1.1.0',393,0,0,4,1,0,0,' ',1,0,0,0,0.000,1),(1510,1000,110,4,32722,'1.2.2.0',926,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1511,1000,111,4,32723,'1.2.1.0',927,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(1513,1000,13,5,32625,'1.2.4.2.0',828,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1544,1000,144,4,32805,'1.4.2.1.7.1',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1545,1000,145,4,32806,'1.4.2.1.8.1',1013,0,0,2,3,3,0,' ',1,0,0,0,0.000,0),(1546,1000,146,5,32807,'1.4.2.1.9.1',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1547,1000,147,4,32808,'1.4.2.1.7.2',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1548,1000,148,4,32809,'1.4.2.1.8.2',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1549,1000,149,5,32810,'1.4.2.1.9.2',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1550,1000,150,4,32811,'1.4.2.1.7.3',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1551,1000,151,4,32812,'1.4.2.1.8.3',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1552,1000,152,5,32813,'1.4.2.1.9.3',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1553,1000,153,4,32814,'1.4.2.1.7.4',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1554,1000,154,4,32815,'1.4.2.1.8.4',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1555,1000,155,5,32816,'1.4.2.1.9.4',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1556,1000,156,4,32817,'1.4.2.1.7.5',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1557,1000,157,4,32818,'1.4.2.1.8.5',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1558,1000,58,5,32670,'1.4.2.1.2.1',874,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1559,1000,59,5,32671,'1.4.2.1.2.2',875,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1560,1000,60,5,32672,'1.4.2.1.2.11',876,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1561,1000,61,5,32673,'1.4.2.1.2.12',877,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1562,1000,62,5,32674,'1.4.2.1.2.13',878,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1563,1000,63,5,32675,'1.4.2.1.2.14',879,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1564,1000,64,5,32676,'1.4.2.1.2.15',880,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1565,1000,65,5,32677,'1.4.2.1.2.16',881,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1566,1000,66,5,32678,'1.4.2.1.2.3',882,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1567,1000,67,5,32679,'1.4.2.1.2.4',883,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1568,1000,68,5,32680,'1.4.2.1.2.5',884,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1569,1000,69,5,32681,'1.4.2.1.2.6',885,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1570,1000,70,5,32682,'1.4.2.1.2.7',886,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1571,1000,71,5,32683,'1.4.2.1.2.8',887,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1572,1000,72,5,32684,'1.4.2.1.2.9',888,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1573,1000,73,5,32685,'1.4.2.1.2.10',889,0,0,4,3,0,0,' ',1,0,0,0,0.000,0),(1689,1000,189,5,32850,'1.4.2.1.9.16',1015,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1712,1000,112,6,32724,'1.2.3.0',928,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1858,1000,158,5,32819,'1.4.2.1.9.5',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1859,1000,159,4,32820,'1.4.2.1.7.6',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1860,1000,160,4,32821,'1.4.2.1.8.6',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1861,1000,161,5,32822,'1.4.2.1.9.6',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1862,1000,162,4,32823,'1.4.2.1.7.7',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1863,1000,163,4,32824,'1.4.2.1.8.7',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1864,1000,164,5,32825,'1.4.2.1.9.7',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1865,1000,165,4,32826,'1.4.2.1.7.8',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1866,1000,166,4,32827,'1.4.2.1.8.8',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1867,1000,167,5,32828,'1.4.2.1.9.8',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1868,1000,168,4,32829,'1.4.2.1.7.9',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1869,1000,169,4,32830,'1.4.2.1.8.9',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1870,1000,170,5,32831,'1.4.2.1.9.9',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1871,1000,171,4,32832,'1.4.2.1.7.10',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1872,1000,172,4,32833,'1.4.2.1.8.10',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1873,1000,173,5,32834,'1.4.2.1.9.10',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1874,1000,174,4,32835,'1.4.2.1.7.11',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1875,1000,175,4,32836,'1.4.2.1.8.11',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1876,1000,176,5,32837,'1.4.2.1.9.11',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1877,1000,177,4,32838,'1.4.2.1.7.12',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1878,1000,178,4,32839,'1.4.2.1.8.12',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1879,1000,179,5,32840,'1.4.2.1.9.12',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1880,1000,180,4,32841,'1.4.2.1.7.13',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1881,1000,181,4,32842,'1.4.2.1.8.13',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1882,1000,182,5,32843,'1.4.2.1.9.13',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1883,1000,183,4,32844,'1.4.2.1.7.14',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1884,1000,184,4,32845,'1.4.2.1.8.14',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1885,1000,185,5,32846,'1.4.2.1.9.14',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(1886,1000,186,4,32847,'1.4.2.1.7.15',1012,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1887,1000,187,4,32848,'1.4.2.1.8.15',1013,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(1888,1000,188,5,32849,'1.4.2.1.9.15',1014,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(2190,1000,190,1,32851,'1.3.2.1.3.1',1016,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(2203,2000,3,2,32757,'1.3.0',964,0,0,2,0,0,0,'HSec',1,0,0,0,0.000,0),(2207,2000,7,2,32761,'2.1.0',968,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2209,2000,9,2,32763,'2.2.1.3.1',970,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2210,2000,10,2,32764,'2.2.1.4.1',971,0,0,71,0,0,0,' ',1,0,0,0,0.000,0),(2211,2000,11,2,32765,'2.2.1.5.1',972,0,0,66,0,0,0,' ',1,0,0,0,0.000,0),(2213,2000,13,2,32767,'2.2.1.8.1',974,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2215,2000,15,2,32769,'2.2.1.3.2',976,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2216,2000,16,2,32770,'2.2.1.4.2',977,0,0,71,0,0,0,' ',1,0,0,0,0.000,0),(2217,2000,17,2,32771,'2.2.1.5.2',978,0,0,66,0,0,0,' ',1,0,0,0,0.000,0),(2219,2000,19,2,32773,'2.2.1.8.2',980,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2220,2000,20,2,32774,'11.1.0',981,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2221,2000,21,2,32775,'11.2.0',982,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2222,2000,22,2,32776,'11.3.0',983,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2223,2000,23,2,32777,'11.4.0',984,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2224,2000,24,2,32778,'11.5.0',985,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2225,2000,25,2,32779,'11.6.0',986,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2226,2000,26,2,32780,'11.8.0',987,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2227,2000,27,2,32781,'11.9.0',988,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2228,2000,28,2,32782,'11.10.0',989,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2229,2000,29,2,32783,'11.11.0',990,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2230,2000,30,2,32784,'11.12.0',991,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2231,2000,31,2,32785,'11.13.0',992,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2232,2000,32,2,32786,'11.14.0',993,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2233,2000,33,2,32787,'11.15.0',994,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2234,2000,34,2,32788,'11.16.0',995,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2235,2000,35,2,32789,'11.17.0',996,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2236,2000,36,2,32790,'11.18.0',997,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2237,2000,37,2,32791,'11.19.0',998,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2238,2000,38,2,32792,'11.20.0',999,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2239,2000,39,2,32793,'11.21.0',1000,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2240,2000,40,2,32794,'11.22.0',1001,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2241,2000,41,2,32795,'11.24.0',1002,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2242,2000,42,2,32796,'11.25.0',1003,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2243,2000,43,2,32797,'11.26.0',1004,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2244,2000,44,2,32798,'11.27.0',1005,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2245,2000,45,2,32799,'11.28.0',1006,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2246,2000,46,2,32800,'11.29.0',1007,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2247,2000,47,2,32801,'11.30.0',1008,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(2248,2000,48,2,32802,'11.31.0',1009,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2249,2000,49,2,32803,'11.32.0',1010,0,0,65,0,0,0,' ',1,0,0,0,0.000,0),(2501,2000,1,5,32755,'1.1.0',962,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2502,2000,2,5,32756,'1.2.0',963,0,0,2,0,0,0,' ',0,0,0,0,0.000,0),(2504,2000,4,5,32758,'1.4.0',965,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2505,2000,5,5,32759,'1.5.0',966,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2506,2000,6,5,32760,'1.6.0',967,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2508,2000,8,5,32762,'2.2.1.2.1',969,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2512,2000,12,5,32766,'2.2.1.6.1',973,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2514,2000,14,5,32768,'2.2.1.2.2',975,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(2518,2000,18,5,32772,'2.2.1.6.2',979,0,0,4,0,0,0,' ',1,0,0,0,0.000,0),(3192,1000,192,2,32857,'2.1.1',1026,0,0,6,1,0,0,' ',1,0,0,0,0.000,0),(3193,1000,193,2,32858,'2.1.2',1027,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(3194,1000,194,2,32859,'2.1.3',1028,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3195,1000,195,2,32860,'2.1.4',1029,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(3196,1000,196,2,32861,'2.1.5',1030,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(3197,1000,197,2,32862,'2.1.6',1031,0,0,2,0,0,0,' ',1,0,0,0,0.000,0),(3200,1000,200,2,32866,'1.4.2.1.10.1',1105,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3206,1000,206,2,32872,'1.4.2.1.10.2',1111,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3210,1000,211,2,32877,'1.4.2.1.15.2',1116,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3211,1000,212,2,32878,'1.4.2.1.10.3',1117,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3215,1000,217,2,32883,'1.4.2.1.15.3',1122,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3216,1000,218,2,32884,'1.4.2.1.10.4',1123,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3220,1000,223,2,32889,'1.4.2.1.15.4',1128,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3221,1000,224,2,32890,'1.4.2.1.10.5',1129,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3225,1000,229,2,32895,'1.4.2.1.15.5',1134,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3226,1000,230,2,32896,'1.4.2.1.10.6',1135,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3230,1000,235,2,32901,'1.4.2.1.15.6',1140,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3231,1000,236,2,32902,'1.4.2.1.10.7',1141,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3235,1000,241,2,32907,'1.4.2.1.15.7',1146,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3236,1000,242,2,32908,'1.4.2.1.10.8',1147,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3240,1000,247,2,32913,'1.4.2.1.15.8',1152,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3241,1000,248,2,32914,'1.4.2.1.10.9',1153,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3245,1000,253,2,32919,'1.4.2.1.15.9',1158,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3246,1000,254,2,32920,'1.4.2.1.10.10',1159,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3250,1000,259,2,32925,'1.4.2.1.15.10',1164,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3251,1000,260,2,32926,'1.4.2.1.10.11',1164,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3255,1000,265,2,32931,'1.4.2.1.15.11',1169,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3256,1000,266,2,32932,'1.4.2.1.10.12',1170,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3260,1000,271,2,32937,'1.4.2.1.15.12',1175,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3261,1000,272,2,32938,'1.4.2.1.10.13',1176,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3265,1000,277,2,32943,'1.4.2.1.15.13',1181,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3266,1000,278,2,32944,'1.4.2.1.10.14',1182,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3270,1000,283,2,32949,'1.4.2.1.15.14',1187,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3271,1000,284,2,32950,'1.4.2.1.10.15',1188,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3275,1000,289,2,32955,'1.4.2.1.15.15',1193,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3276,1000,290,2,32980,'1.4.2.1.10.16',1194,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(3280,1000,295,2,32985,'1.4.2.1.15.16',1199,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3281,1000,296,2,32871,'1.4.2.1.15.1',1200,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3362,1000,362,2,33017,'1.4.2.1.17.1',1153,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3363,1000,363,2,33018,'1.4.2.1.17.2',1154,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3364,1000,364,2,33019,'1.4.2.1.17.3',1155,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3365,1000,365,2,33020,'1.4.2.1.17.4',1156,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3366,1000,366,2,33021,'1.4.2.1.17.5',1157,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3367,1000,367,2,33022,'1.4.2.1.17.6',1158,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3368,1000,368,2,33023,'1.4.2.1.17.7',1159,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3369,1000,369,2,33024,'1.4.2.1.17.8',1160,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3370,1000,370,2,33025,'1.4.2.1.17.9',1161,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3371,1000,371,2,33026,'1.4.2.1.17.10',1162,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3372,1000,372,2,33027,'1.4.2.1.17.11',1163,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3373,1000,373,2,33028,'1.4.2.1.17.12',1164,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3374,1000,374,2,33029,'1.4.2.1.17.13',1165,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3375,1000,375,2,33030,'1.4.2.1.17.14',1166,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3376,1000,376,2,33031,'1.4.2.1.17.15',1167,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(3377,1000,377,2,33032,'1.4.2.1.17.16',1168,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(5001,3000,1,2,32852,'1.4.0',1018,0,0,2,2,0,0,' ',1,0,0,0,0.000,0),(5002,3000,2,2,32853,'1.6.0',1022,0,0,2,2,0,0,' ',1,0,0,0,0.000,0),(5003,3000,3,2,32854,'1.7.0',1023,0,0,2,2,0,0,' ',1,0,0,0,0.000,0),(5004,3000,4,2,32855,'1.10.0',1024,0,0,2,2,0,0,' ',1,0,0,0,0.000,0),(5005,3000,5,2,32865,'1.8.0',1076,0,0,2,2,0,0,' ',1,0,0,0,0.000,0),(5006,3000,6,4,32722,'2.2.0',926,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(5007,3000,7,5,32625,'2.4.2.0',828,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(5008,3000,8,2,33033,'1.9.0',1169,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(5009,3000,9,5,33034,'1.13.0',1169,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(5191,1000,191,4,32856,'1.4.2.1.7.16',1025,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(5199,1000,199,4,32864,'1.4.2.1.8.16',1033,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6198,1000,198,5,32863,'2.1.7',1032,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6201,1000,201,5,32867,'1.4.2.1.11.1',1106,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6202,1000,207,5,32873,'1.4.2.1.11.2',1112,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6203,1000,213,5,32879,'1.4.2.1.11.3',1118,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6204,1000,219,5,32885,'1.4.2.1.11.4',1124,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6205,1000,225,5,32891,'1.4.2.1.11.5',1130,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6206,1000,231,5,32897,'1.4.2.1.11.6',1136,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6207,1000,237,5,32903,'1.4.2.1.11.7',1142,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6208,1000,243,5,32909,'1.4.2.1.11.8',1148,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6209,1000,249,5,32915,'1.4.2.1.11.9',1154,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6210,1000,255,5,32921,'1.4.2.1.11.10',1160,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6211,1000,261,5,32927,'1.4.2.1.11.11',1165,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6212,1000,267,5,32933,'1.4.2.1.11.12',1171,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6213,1000,273,5,32939,'1.4.2.1.11.13',1177,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6214,1000,279,5,32945,'1.4.2.1.11.14',1183,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6215,1000,285,5,32951,'1.4.2.1.11.15',1189,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6216,1000,291,5,32981,'1.4.2.1.11.16',1195,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(6218,1000,314,2,32964,'1.5.1.1.2.1',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6219,1000,315,2,32964,'1.5.1.1.10.1',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6220,1000,316,2,32972,'1.5.1.1.18.1',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6221,1000,317,2,32956,'1.5.1.1.2.2',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6222,1000,318,2,32964,'1.5.1.1.10.2',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6223,1000,319,2,32972,'1.5.1.1.18.2',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6224,1000,320,2,32956,'1.5.1.1.2.3',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6225,1000,321,2,32964,'1.5.1.1.10.3',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6226,1000,322,2,32972,'1.5.1.1.18.3',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6227,1000,323,2,32956,'1.5.1.1.2.4',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6228,1000,324,2,32964,'1.5.1.1.10.4',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6229,1000,325,2,32972,'1.5.1.1.18.4',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6230,1000,326,2,32956,'1.5.1.1.2.5',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6231,1000,327,2,32964,'1.5.1.1.10.5',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6232,1000,328,2,32972,'1.5.1.1.18.5',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6233,1000,329,2,32956,'1.5.1.1.2.6',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6234,1000,330,2,32964,'1.5.1.1.10.6',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6235,1000,331,2,32972,'1.5.1.1.18.6',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6236,1000,332,2,32956,'1.5.1.1.2.7',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6237,1000,333,2,32964,'1.5.1.1.10.7',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6238,1000,334,2,32972,'1.5.1.1.18.7',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6239,1000,335,2,32956,'1.5.1.1.2.8',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6240,1000,336,2,32964,'1.5.1.1.10.8',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6241,1000,337,2,32972,'1.5.1.1.18.8',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6242,1000,338,2,32956,'1.5.1.1.2.9',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6243,1000,339,2,32964,'1.5.1.1.10.9',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6244,1000,340,2,32972,'1.5.1.1.18.9',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6245,1000,341,2,32956,'1.5.1.1.2.10',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6246,1000,342,2,32964,'1.5.1.1.10.10',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6247,1000,343,2,32972,'1.5.1.1.18.10',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6248,1000,344,2,32956,'1.5.1.1.2.11',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6249,1000,345,2,32964,'1.5.1.1.10.11',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6250,1000,346,2,32972,'1.5.1.1.18.11',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6251,1000,347,2,32956,'1.5.1.1.2.12',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6252,1000,348,2,32964,'1.5.1.1.10.12',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6253,1000,349,2,32972,'1.5.1.1.18.12',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6254,1000,350,2,32956,'1.5.1.1.2.13',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6255,1000,351,2,32964,'1.5.1.1.10.13',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6256,1000,352,2,32972,'1.5.1.1.18.13',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6257,1000,353,2,32956,'1.5.1.1.2.14',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6258,1000,354,2,32964,'1.5.1.1.10.14',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6259,1000,355,2,32972,'1.5.1.1.18.14',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6260,1000,356,2,32956,'1.5.1.1.2.15',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6261,1000,357,2,32964,'1.5.1.1.10.15',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6262,1000,358,2,32972,'1.5.1.1.18.15',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6263,1000,359,2,32956,'1.5.1.1.2.16',1112,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6264,1000,360,2,32964,'1.5.1.1.10.16',1120,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(6265,1000,361,2,32972,'1.5.1.1.18.16',1128,0,0,2,3,0,0,' ',1,0,0,0,0.000,0),(8001,6000,1,2,32956,'1.2',1112,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8002,6000,2,2,32957,'1.3',1113,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8003,6000,3,2,32958,'1.4',1114,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8004,6000,4,2,32959,'1.5',1115,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8005,6000,5,2,32960,'1.6',1116,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8006,6000,6,2,32961,'1.7',1117,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8007,6000,7,2,32962,'1.8',1118,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8008,6000,8,2,32963,'1.9',1119,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8009,6000,9,2,32964,'1.10',1120,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8010,6000,10,2,32965,'1.11',1121,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8011,6000,11,2,32966,'1.12',1122,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8012,6000,12,2,32967,'1.13',1123,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8013,6000,13,2,32968,'1.14',1124,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8014,6000,14,2,32969,'1.15',1125,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8015,6000,15,2,32970,'1.16',1126,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8016,6000,16,2,32971,'1.17',1127,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8017,6000,17,2,32972,'1.18',1128,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8018,6000,18,2,32973,'1.19',1129,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8019,6000,19,2,32974,'1.20',1130,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8020,6000,20,2,32975,'1.21',1131,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8021,6000,21,2,32976,'1.22',1132,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8022,6000,22,2,32977,'1.23',1133,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8023,6000,23,2,32978,'1.24',1134,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(8024,6000,24,2,32979,'1.25',1135,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11001,9000,1,2,32985,'1.2',1136,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11003,9000,3,2,32987,'1.4',1138,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11004,9000,4,2,32988,'1.5',1139,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11006,9000,6,2,32990,'1.7',1141,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11007,9000,7,2,32991,'1.8',1142,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11009,9000,9,2,32993,'1.10',1144,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11010,9000,10,2,32994,'1.11',1145,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(11012,9000,12,2,32996,'1.13',1147,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(14002,9000,2,5,32986,'1.3',1137,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(14005,9000,5,5,32989,'1.6',1140,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(14008,9000,8,5,32992,'1.9',1143,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(14011,9000,11,5,32995,'1.12',1146,0,0,4,1,0,0,' ',1,0,0,0,0.000,0),(52001,50000,1,2,33013,'12',1149,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(52002,50000,2,2,33014,'13',1150,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(52003,50000,3,2,33015,'14',1151,0,0,2,1,0,0,' ',1,0,0,0,0.000,0),(55004,50000,4,5,33016,'16',1152,0,0,4,1,0,0,' ',1,0,0,0,0.000,0);
/*!40000 ALTER TABLE `catalogoseniales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogotiposeniales`
--

DROP TABLE IF EXISTS `catalogotiposeniales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogotiposeniales` (
  `TIPOSENIAL` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL,
  `TIPO` varchar(2) NOT NULL,
  `TIPOSENIALSHERPA` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`TIPOSENIAL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogotiposeniales`
--

LOCK TABLES `catalogotiposeniales` WRITE;
/*!40000 ALTER TABLE `catalogotiposeniales` DISABLE KEYS */;
INSERT INTO `catalogotiposeniales` VALUES (1,'Entrada Digital','ED',2),(2,'Entrada Analógica','EA',0),(3,'Salida Digital','SD',3),(4,'Salida Analógica','SA',1),(5,'Entrada Texto','ET',4),(6,'Salida Texto','ST',5);
/*!40000 ALTER TABLE `catalogotiposeniales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cfg`
--

DROP TABLE IF EXISTS `cfg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cfg` (
  `idCFG` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text,
  `activa` tinyint(1) DEFAULT NULL,
  `ts_activa` datetime DEFAULT NULL,
  PRIMARY KEY (`idCFG`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cfg`
--

LOCK TABLES `cfg` WRITE;
/*!40000 ALTER TABLE `cfg` DISABLE KEYS */;
INSERT INTO `cfg` VALUES (23,'cfg','desc sdfsdfd',0,'2016-05-04 10:21:44'),(24,'PRUEBAS-03022015','Pruebas Beta 01',NULL,NULL),(25,'Validacion','',1,'2016-05-04 10:22:08');
/*!40000 ALTER TABLE `cfg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cgw`
--

DROP TABLE IF EXISTS `cgw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cgw` (
  `idCGW` int(11) NOT NULL AUTO_INCREMENT,
  `EMPLAZAMIENTO_idEMPLAZAMIENTO` int(11) NOT NULL,
  `REGIONES_idREGIONES` int(11) NOT NULL DEFAULT '1',
  `servicio` int(11) DEFAULT NULL,
  `name` text,
  `dualidad` tinyint(1) DEFAULT NULL,
  `ipv` text,
  `ips` text,
  `nivelconsola` int(11) DEFAULT '65535',
  `puertoconsola` int(11) DEFAULT '19710',
  `nivelIncidencias` int(11) DEFAULT '3',
  PRIMARY KEY (`idCGW`,`EMPLAZAMIENTO_idEMPLAZAMIENTO`),
  KEY `servicios_idx` (`servicio`),
  KEY `fk_CGW_REGIONES1_idx` (`REGIONES_idREGIONES`),
  KEY `fk_CGW_EMPLAZAMIENTO1_idx` (`EMPLAZAMIENTO_idEMPLAZAMIENTO`),
  CONSTRAINT `fk_CGW_EMPLAZAMIENTO1` FOREIGN KEY (`EMPLAZAMIENTO_idEMPLAZAMIENTO`) REFERENCES `emplazamiento` (`idEMPLAZAMIENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_CGW_REGIONES1` FOREIGN KEY (`REGIONES_idREGIONES`) REFERENCES `regiones` (`idREGIONES`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `servicios` FOREIGN KEY (`servicio`) REFERENCES `servicios` (`idSERVICIOS`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cgw`
--

LOCK TABLES `cgw` WRITE;
/*!40000 ALTER TABLE `cgw` DISABLE KEYS */;
INSERT INTO `cgw` VALUES (65,7,1,12,'L-GW1',1,'10.10.184.23','10.10.184.46:5050',65535,19710,3),(184,9,1,13,'R-GW4',NULL,'10.10.184.17','10.30.184.46:3030',65535,19710,3),(185,7,1,12,'L-GW2',1,'10.20.184.23','10.10.184.46:5050',65535,19710,3),(208,9,1,1,'R-GW3',NULL,'10.10.184.22','10.30.184.46:3030',65535,19710,3),(209,23,1,14,'VAL-LOC-SI-10-10',1,'10.10.184.13','10.10.184.46:5050',NULL,NULL,NULL),(210,23,1,14,'VAL-REM-SD-10-20',1,'10.20.184.13','10.10.184.46:5050',NULL,NULL,NULL),(211,23,1,14,'VAL-REM-II-10-30',1,'10.30.184.13','10.10.184.46:5050',NULL,NULL,NULL),(212,23,1,14,'VAL-REM-ID-10-40',1,'10.40.184.13','10.10.184.46:5050',NULL,NULL,NULL),(230,7,1,14,'CGW-1777-14',1,'10.10.184.33','10.10.184.46:5050',0,19710,3);
/*!40000 ALTER TABLE `cgw` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descripcion`
--

DROP TABLE IF EXISTS `descripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descripcion` (
  `IDDESCRIPCION` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(32) NOT NULL,
  `IDIDIOMA` bigint(20) NOT NULL,
  PRIMARY KEY (`IDDESCRIPCION`),
  UNIQUE KEY `UK_DESCRIPCION` (`IDDESCRIPCION`,`IDIDIOMA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descripcion`
--

LOCK TABLES `descripcion` WRITE;
/*!40000 ALTER TABLE `descripcion` DISABLE KEYS */;
INSERT INTO `descripcion` VALUES (32613,'Identificador',1),(32614,'Estado Pasarela',1),(32615,'Estado Fuente Alimentación 1',1),(32616,'Reservado',1),(32617,'Estado LAN 1',1),(32618,'Estado LAN 2',1),(32619,'Estado CPU 1',1),(32620,'Estado CPU 2',1),(32621,'Estado NTP',1),(32625,'Resultado Control',1),(32626,'Tarjetas Configuradas',1),(32628,'Tarjeta 1. Tipo',1),(32634,'Tarjeta 2. Tipo',1),(32635,'Tarjeta 3. Tipo',1),(32636,'Tarjeta 4. Tipo',1),(32639,'Tarjeta 2. Estatus',1),(32640,'Tarjeta 3. Estatus',1),(32641,'Tarjeta 4. Estatus',1),(32670,'Interfaz 1. Descripción',1),(32671,'Interfaz 2. Descripción',1),(32672,'Interfaz 11. Descripción',1),(32673,'Interfaz 12. Descripción',1),(32674,'Interfaz 13. Descripción',1),(32675,'Interfaz 14. Descripción',1),(32676,'Interfaz 15. Descripción',1),(32677,'Interfaz 16. Descripción',1),(32678,'Interfaz 3. Descripción',1),(32679,'Interfaz 4. Descripción',1),(32680,'Interfaz 5. Descripción',1),(32681,'Interfaz 6. Descripción',1),(32682,'Interfaz 7. Descripción',1),(32683,'Interfaz 8. Descripción',1),(32684,'Interfaz 9. Descripción',1),(32685,'Interfaz 10. Descripción',1),(32718,'Interfaz 1. Estatus',1),(32719,'Interfaz 2. Estatus',1),(32720,'Interfaz 3. Estatus',1),(32721,'Interfaz 4. Estatus',1),(32722,'Test Pasarela',1),(32723,'Reset Pasarela',1),(32724,'Conmuta Frecuencia',1),(32725,'Interfaz 5. Estatus',1),(32726,'Interfaz 6. Estatus',1),(32727,'Interfaz 7. Estatus',1),(32728,'Interfaz 8. Estatus',1),(32729,'Interfaz 9. Estatus',1),(32730,'Interfaz 10. Estatus',1),(32731,'Interfaz 11. Estatus',1),(32732,'Interfaz 12. Estatus',1),(32733,'Interfaz 13. Estatus',1),(32734,'Interfaz 14. Estatus',1),(32735,'Interfaz 15. Estatus',1),(32736,'Interfaz 16. Estatus',1),(32737,'Interfaz 1. Tipo',1),(32738,'Interfaz 2. Tipo',1),(32739,'Interfaz 3. Tipo',1),(32740,'Interfaz 4. Tipo',1),(32741,'Interfaz 5. Tipo',1),(32742,'Interfaz 6. Tipo',1),(32743,'Interfaz 7. Tipo',1),(32744,'Interfaz 8. Tipo',1),(32745,'Interfaz 9. Tipo',1),(32746,'Interfaz 10. Tipo',1),(32747,'Interfaz 11. Tipo',1),(32748,'Interfaz 12. Tipo',1),(32749,'Interfaz 13. Tipo',1),(32750,'Interfaz 14. Tipo',1),(32751,'Interfaz 15. Tipo',1),(32752,'Interfaz 16. Tipo',1),(32753,'Número Interfaces',1),(32754,'Interfaz 15. Indice',1),(32755,'sysDescr',1),(32756,'sysObjectID',1),(32757,'sysUpTime',1),(32758,'sysContact',1),(32759,'sysName',1),(32760,'sysLocation',1),(32761,'ifNumber',1),(32762,'ifDescr T1',1),(32763,'ifType T1',1),(32764,'ifMtu T1',1),(32765,'ifSpeed T1',1),(32766,'ifPhysAddress T1',1),(32767,'ifOperStatus T1',1),(32768,'ifDescr T2',1),(32769,'ifType T2',1),(32770,'ifMtu T2',1),(32771,'ifSpeed T2',1),(32772,'ifPhysAddress T2',1),(32773,'ifOperStatus T2',1),(32774,'snmpInPkts',1),(32775,'snmpOutPkts',1),(32776,'snmpInBadVersions',1),(32777,'snmpInBadComunityNames',1),(32778,'snmpInBadComunityUses',1),(32779,'snmpInASNParseErrs',1),(32780,'snmpInTooBigs',1),(32781,'snmpInNoSuchNames',1),(32782,'snmpInBadValues',1),(32783,'snmpInReadsOnlys',1),(32784,'snmpInGenErrors',1),(32785,'snmpInTotalReqVars',1),(32786,'snmpInTotalSetVars',1),(32787,'snmpInGetRequests',1),(32788,'snmpInGetNexts',1),(32789,'snmpInSetRequests',1),(32790,'snmpInGetResponses',1),(32791,'snmpInTraps',1),(32792,'snmpOutTooBigs',1),(32793,'snmpOutNoSuchNames',1),(32794,'snmpOutBadValues',1),(32795,'snmpOutGenErrs',1),(32796,'snmpOutGetRequests',1),(32797,'snmpOutGetNexts',1),(32798,'snmpOutSetRequests',1),(32799,'snmpOutGetResponses',1),(32800,'snmpOutTraps',1),(32801,'snmpEnableAuthenTraps',1),(32802,'snmpSilentDrops',1),(32803,'snmpProxyDrops',1),(32804,'Estado Sincro BD.',1),(32805,'Interfaz 1. Modo Operación',1),(32806,'Interfaz 1. Tipo bucle.',1),(32807,'Interfaz 1. Resultado Bucle',1),(32808,'Interfaz 2. Modo Operación',1),(32809,'Interfaz 2. Tipo bucle.',1),(32810,'Interfaz 2. Resultado Bucle',1),(32811,'Interfaz 3. Modo Operación',1),(32812,'Interfaz 3. Tipo bucle.',1),(32813,'Interfaz 3. Resultado Bucle',1),(32814,'Interfaz 4. Modo Operación',1),(32815,'Interfaz 4. Tipo bucle.',1),(32816,'Interfaz 4. Resultado Bucle',1),(32817,'Interfaz 5. Modo Operación',1),(32818,'Interfaz 5. Tipo bucle.',1),(32819,'Interfaz 5. Resultado Bucle',1),(32820,'Interfaz 6. Modo Operación',1),(32821,'Interfaz 6. Tipo bucle.',1),(32822,'Interfaz 6. Resultado Bucle',1),(32823,'Interfaz 7. Modo Operación',1),(32824,'Interfaz 7. Tipo bucle.',1),(32825,'Interfaz 7. Resultado Bucle',1),(32826,'Interfaz 8. Modo Operación',1),(32827,'Interfaz 8. Tipo bucle.',1),(32828,'Interfaz 8. Resultado Bucle',1),(32829,'Interfaz 9. Modo Operación',1),(32830,'Interfaz 9. Tipo bucle.',1),(32831,'Interfaz 9. Resultado Bucle',1),(32832,'Interfaz 10. Modo Operación',1),(32833,'Interfaz 10. Tipo bucle.',1),(32834,'Interfaz 10. Resultado Bucle',1),(32835,'Interfaz 11. Modo Operación',1),(32836,'Interfaz 11. Tipo bucle.',1),(32837,'Interfaz 11. Resultado Bucle',1),(32838,'Interfaz 12. Modo Operación',1),(32839,'Interfaz 12. Tipo bucle.',1),(32840,'Interfaz 12. Resultado Bucle',1),(32841,'Interfaz 13. Modo Operación',1),(32842,'Interfaz 13. Tipo bucle.',1),(32843,'Interfaz 13. Resultado Bucle',1),(32844,'Interfaz 14. Modo Operación',1),(32845,'Interfaz 14. Tipo bucle.',1),(32846,'Interfaz 14. Resultado Bucle',1),(32847,'Interfaz 15. Modo Operación',1),(32848,'Interfaz 15. Tipo bucle.',1),(32849,'Interfaz 15. Resultado Bucle',1),(32850,'Interfaz 16. Resultado Bucle',1),(32851,'Tarjeta 1. Estatus',1),(32852,'Estado Fuente Alimentación',1),(32853,'Estado LAN 1',1),(32854,'Estado LAN 2',1),(32855,'Estado NTP',1),(32856,'Interfaz 16. Modo Operación',1),(32857,'Trap ConFig.',1),(32858,'Trap Estado',1),(32859,'Trap Tarjeta',1),(32860,'Trap Interfaz',1),(32861,'Trap Históricos',1),(32862,'Entero asociado a Trap.',1),(32863,'Evento Pasarela',1),(32864,'Interfaz 16. Tipo bucle',1),(32865,'Estado CPU',1),(32866,'Inter. 1. Subtipo Radio',1),(32867,'Inter. 1. Frecuencia Radio.',1),(32868,'Inter. 1. Stat. T Loc Telef.',1),(32869,'Inter. 1. Stat. Sesión Telef',1),(32870,'Inter. 1. Stat. T Rem Telef.',1),(32871,'Interfaz 1. Estatus Oper.',1),(32872,'Inter. 2. Subtipo Radio',1),(32873,'Inter. 2. Frecuencia Radio.',1),(32874,'Inter. 2. Stat. T Loc Telef.',1),(32875,'Inter. 2. Stat. Sesión Telef',1),(32876,'Inter. 2. Stat. T Rem Telef.',1),(32877,'Interfaz 2. Estatus Oper.',1),(32878,'Inter. 3. Subtipo Radio',1),(32879,'Inter. 3. Frecuencia Radio.',1),(32880,'Inter. 3. Stat. T Loc Telef.',1),(32881,'Inter. 3. Stat. Sesión Telef',1),(32882,'Inter. 3. Stat. T Rem Telef.',1),(32883,'Interfaz 3. Estatus Oper.',1),(32884,'Inter. 4. Subtipo Radio',1),(32885,'Inter. 4. Frecuencia Radio.',1),(32886,'Inter. 4. Stat. T Loc Telef.',1),(32887,'Inter. 4. Stat. Sesión Telef',1),(32888,'Inter. 4. Stat. T Rem Telef.',1),(32889,'Inter. 4. Stat. Ses. SIP Rad',1),(32890,'Inter. 5. Subtipo Radio',1),(32891,'Inter. 5. Frecuencia Radio.',1),(32892,'Inter. 5. Stat. T Loc Telef.',1),(32893,'Inter. 5. Stat. Sesión Telef',1),(32894,'Inter. 5. Stat. T Rem Telef.',1),(32895,'Interfaz 5. Estatus Oper.',1),(32896,'Inter. 6. Subtipo Radio',1),(32897,'Inter. 6. Frecuencia Radio.',1),(32898,'Inter. 6. Stat. T Loc Telef.',1),(32899,'Inter. 6. Stat. Sesión Telef',1),(32900,'Inter. 6. Stat. T Rem Telef.',1),(32901,'Interfaz 6. Estatus Oper.',1),(32902,'Inter. 7. Subtipo Radio',1),(32903,'Inter. 7. Frecuencia Radio.',1),(32904,'Inter. 7. Stat. T Loc Telef.',1),(32905,'Inter. 7. Stat. Sesión Telef',1),(32906,'Inter. 7. Stat. T Rem Telef.',1),(32907,'Interfaz 7. Estatus Oper.',1),(32908,'Inter. 8. Subtipo Radio',1),(32909,'Inter. 8. Frecuencia Radio.',1),(32910,'Inter. 8. Stat. T Loc Telef.',1),(32911,'Inter. 8. Stat. Sesión Telef',1),(32912,'Inter. 8. Stat. T Rem Telef.',1),(32913,'Interfaz 8. Estatus Oper.',1),(32914,'Inter. 9. Subtipo Radio',1),(32915,'Inter. 9. Frecuencia Radio.',1),(32916,'Inter. 9. Stat. T Loc Telef.',1),(32917,'Inter. 9. Stat. Sesión Telef',1),(32918,'Inter. 9. Stat. T Rem Telef.',1),(32919,'Interfaz 9. Estatus Oper.',1),(32920,'Inter. 10. Subtipo Radio',1),(32921,'Inter. 10. Frecuencia Radio.',1),(32922,'Inter. 10. Stat. T Loc Telef.',1),(32923,'Inter. 10. Stat. Sesión Telef',1),(32924,'Inter. 10. Stat. T Rem Telef.',1),(32925,'Interfaz 10. Estatus Oper.',1),(32926,'Inter. 11. Subtipo Radio',1),(32927,'Inter. 11. Frecuencia Radio.',1),(32928,'Inter. 11. Stat. T Loc Telef.',1),(32929,'Inter. 11. Stat. Sesión Telef',1),(32930,'Inter. 11. Stat. T Rem Telef.',1),(32931,'Interfaz 11. Estatus Oper.',1),(32932,'Inter. 12. Subtipo Radio',1),(32933,'Inter. 12. Frecuencia Radio.',1),(32934,'Inter. 12. Stat. T Loc Telef.',1),(32935,'Inter. 12. Stat. Sesión Telef',1),(32936,'Inter. 12. Stat. T Rem Telef.',1),(32937,'Interfaz 12. Estatus Oper.',1),(32938,'Inter. 13. Subtipo Radio',1),(32939,'Inter. 13. Frecuencia Radio.',1),(32940,'Inter. 13. Stat. T Loc Telef.',1),(32941,'Inter. 13. Stat. Sesión Telef',1),(32942,'Inter. 13. Stat. T Rem Telef.',1),(32943,'Interfaz 13. Estatus Oper.',1),(32944,'Inter. 14. Subtipo Radio',1),(32945,'Inter. 14. Frecuencia Radio.',1),(32946,'Inter. 14. Stat. T Loc Telef.',1),(32947,'Inter. 14. Stat. Sesión Telef',1),(32948,'Inter. 14. Stat. T Rem Telef.',1),(32949,'Interfaz 14. Estatus Oper.',1),(32950,'Inter. 15. Subtipo Radio',1),(32951,'Inter. 15. Frecuencia Radio.',1),(32952,'Inter. 15. Stat. T Loc Telef.',1),(32953,'Inter. 15. Stat. Sesión Telef',1),(32954,'Inter. 15. Stat. T Rem Telef.',1),(32955,'Interfaz 15. Estatus Oper.',1),(32956,'Emplz. 0 Configurado.',1),(32957,'Emplz. 0 Tiene TRX',1),(32958,'Emplz. 0. Ses. TX-A/TRX-A',1),(32959,'Emplz. 0. Ses. TX-B/TRX-B',1),(32960,'Emplz. 0. Ses. RX-A',1),(32961,'Emplz. 0. Ses. RX-B',1),(32962,'Emplz. 0. TX Activo.',1),(32963,'Emplz. 0. RX Activo.',1),(32964,'Emplz. 1. Configurado.',1),(32965,'Emplz. 1. Tiene TRX',1),(32966,'Emplz. 1. Ses. TX-A/TRX-A',1),(32967,'Emplz. 1. Ses. TX-B/TRX-B',1),(32968,'Emplz. 1. Ses. RX-A',1),(32969,'Emplz. 1. Ses. RX-B',1),(32970,'Emplz. 1. TX Activo.',1),(32971,'Emplz. 1. RX Activo.',1),(32972,'Emplz. 3. Configurado.',1),(32973,'Emplz. 3. Tiene TRX',1),(32974,'Emplz. 3. Ses. TX-A/TRX-A',1),(32975,'Emplz. 3. Ses. TX-B/TRX-B',1),(32976,'Emplz. 3. Ses. RX-A',1),(32977,'Emplz. 3. Ses. RX-B',1),(32978,'Emplz. 3. TX Activo.',1),(32979,'Emplz. 3. RX Activo.',1),(32980,'Inter. 16. Subtipo Radio',1),(32981,'Inter. 16. Frecuencia Radio.',1),(32982,'Inter. 16. Stat. T Loc Telef.',1),(32983,'Inter. 16. Stat. Sesión Telef',1),(32984,'Inter. 16. Stat. T Rem Telef.',1),(32985,'Interfaz 16. Estatus Oper.',1),(32986,'Colat. 0. SIP URI',1),(32987,'Colat. 0. Prioridad Ses. SIP',1),(32988,'Colat. 1. Estado Sesión',1),(32989,'Colat. 1. SIP URI',1),(32990,'Colat. 1. Prioridad Ses. SIP',1),(32991,'Colat. 2. Estado Sesión',1),(32992,'Colat. 2. SIP URI',1),(32993,'Colat. 2. Prioridad Ses. SIP',1),(32994,'Colat. 3. Estado Sesión',1),(32995,'Colat. 3. SIP URI',1),(32996,'Colat. 3. Prioridad Ses. SIP',1),(32997,'Colat. 1. SIP TEL',1),(32998,'Colat. 2. SIP TEL',1),(32999,'Colat. 3. SIP TEL',1),(33000,'Colat. 4. SIP TEL',1),(33001,'Colat. 5. SIP TEL',1),(33002,'Colat. 6. SIP TEL',1),(33003,'Colat. 7. SIP TEL',1),(33004,'Colat. 8. SIP TEL',1),(33005,'Colat. 9. SIP TEL',1),(33006,'Colat. 10. SIP TEL',1),(33007,'Colat. 11. SIP TEL',1),(33008,'Colat. 12. SIP TEL',1),(33009,'Colat. 13. SIP TEL',1),(33010,'Colat. 14. SIP TEL',1),(33011,'Colat. 15. SIP TEL',1),(33012,'Colat. 16. SIP TEL',1),(33013,'Est. Tramo Local TEL',1),(33014,'Est. Sesión TEL.',1),(33015,'Est. Tramo Rem TEL',1),(33016,'Colateral URI from TEL',1),(33017,'Interfaz 1. Activo',1),(33018,'Interfaz 2. Activo',1),(33019,'Interfaz 3. Activo',1),(33020,'Interfaz 4. Activo',1),(33021,'Interfaz 5. Activo',1),(33022,'Interfaz 6. Activo',1),(33023,'Interfaz 7. Activo',1),(33024,'Interfaz 8. Activo',1),(33025,'Interfaz 9. Activo',1),(33026,'Interfaz 10. Activo',1),(33027,'Interfaz 11. Activo',1),(33028,'Interfaz 12. Activo',1),(33029,'Interfaz 13. Activo',1),(33030,'Interfaz 14. Activo',1),(33031,'Interfaz 15. Activo',1),(33032,'Interfaz 16. Activo',1),(33033,'Estado CPU Dual',1),(33034,'Versión Software',1);
/*!40000 ALTER TABLE `descripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dg_catalogoequipos`
--

DROP TABLE IF EXISTS `dg_catalogoequipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dg_catalogoequipos` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `IDBITMAP` bigint(20) DEFAULT NULL,
  `IDICONO` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`IDTIPOEQUIPO`),
  KEY `FK_DG_CATALOGOEQUIPOS_BITMAPS` (`IDBITMAP`),
  CONSTRAINT `FK_DG_CATALOGOEQUIPOS_BITMAPS` FOREIGN KEY (`IDBITMAP`) REFERENCES `bitmaps` (`IDBITMAP`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dg_catalogoequipos`
--

LOCK TABLES `dg_catalogoequipos` WRITE;
/*!40000 ALTER TABLE `dg_catalogoequipos` DISABLE KEYS */;
INSERT INTO `dg_catalogoequipos` VALUES (1000,112,358),(2000,100,960),(3000,106,1017),(4000,112,1111),(6000,112,0),(9000,112,0),(50000,102,1148);
/*!40000 ALTER TABLE `dg_catalogoequipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dg_emplazamientos`
--

DROP TABLE IF EXISTS `dg_emplazamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dg_emplazamientos` (
  `IDEMPLAZAMIENTO` bigint(20) NOT NULL,
  `COORD_X` bigint(20) DEFAULT NULL,
  `COORD_Y` bigint(20) DEFAULT NULL,
  `IDBITMAP` bigint(20) DEFAULT NULL,
  `IDPLANO` bigint(20) DEFAULT NULL,
  `IDICONO` bigint(20) DEFAULT NULL,
  KEY `FK_DG_EMPLAZAMIENTOS_BITMAPS` (`IDBITMAP`),
  KEY `FK_DG_EMPLAZAMIENTOS_EMPLAZAMIENTOS` (`IDEMPLAZAMIENTO`),
  KEY `FK_DG_EMPLAZAMIENTOS_PLANOS` (`IDPLANO`),
  CONSTRAINT `FK_DG_EMPLAZAMIENTOS_BITMAPS` FOREIGN KEY (`IDBITMAP`) REFERENCES `bitmaps` (`IDBITMAP`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_DG_EMPLAZAMIENTOS_EMPLAZAMIENTOS` FOREIGN KEY (`IDEMPLAZAMIENTO`) REFERENCES `emplazamientos` (`IDEMPLAZAMIENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_DG_EMPLAZAMIENTOS_PLANOS` FOREIGN KEY (`IDPLANO`) REFERENCES `planos` (`IDPLANO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dg_emplazamientos`
--

LOCK TABLES `dg_emplazamientos` WRITE;
/*!40000 ALTER TABLE `dg_emplazamientos` DISABLE KEYS */;
INSERT INTO `dg_emplazamientos` VALUES (10100000000,80,160,101,64,959);
/*!40000 ALTER TABLE `dg_emplazamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dg_equipos`
--

DROP TABLE IF EXISTS `dg_equipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dg_equipos` (
  `IDEQUIPO` bigint(20) NOT NULL,
  `COORDX_INI` bigint(20) DEFAULT NULL,
  `COORDX_FIN` bigint(20) DEFAULT NULL,
  `COORDY_INI` bigint(20) DEFAULT NULL,
  `COORDY_FIN` bigint(20) DEFAULT NULL,
  KEY `FK_DG_EQUIPOS_EQUIPOS` (`IDEQUIPO`),
  CONSTRAINT `FK_DG_EQUIPOS_EQUIPOS` FOREIGN KEY (`IDEQUIPO`) REFERENCES `equipos` (`IDEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dg_equipos`
--

LOCK TABLES `dg_equipos` WRITE;
/*!40000 ALTER TABLE `dg_equipos` DISABLE KEYS */;
INSERT INTO `dg_equipos` VALUES (10100103000,0,0,0,0),(10100106000,0,0,0,0),(10100102000,0,0,0,0),(10100109000,0,0,0,0),(10100150033,0,0,0,0),(10100101033,0,0,0,0);
/*!40000 ALTER TABLE `dg_equipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emplazamientos`
--

DROP TABLE IF EXISTS `emplazamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emplazamientos` (
  `IDEMPLAZAMIENTO` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(32) NOT NULL,
  `IDSISTEMA` bigint(20) NOT NULL,
  PRIMARY KEY (`IDEMPLAZAMIENTO`),
  UNIQUE KEY `UK_EMPLAZAMIENTOS` (`DESCRIPCION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emplazamientos`
--

LOCK TABLES `emplazamientos` WRITE;
/*!40000 ALTER TABLE `emplazamientos` DISABLE KEYS */;
INSERT INTO `emplazamientos` VALUES (10100000000,'DT',10000000000);
/*!40000 ALTER TABLE `emplazamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos`
--

DROP TABLE IF EXISTS `equipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipos` (
  `IDEQUIPO` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(32) NOT NULL,
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `IDEMPLAZAMIENTO` bigint(20) NOT NULL,
  `IP` varchar(20) DEFAULT NULL,
  `OID` varchar(10) DEFAULT NULL,
  `APLICACION` varchar(250) DEFAULT NULL,
  `BINHIBIDO` smallint(6) DEFAULT NULL,
  `OIDRAIZ` varchar(50) DEFAULT NULL,
  `COMUNITYREAD` varchar(15) DEFAULT NULL,
  `COMUNITYWRITE` varchar(15) DEFAULT NULL,
  `PUERTOTRAP` mediumint(9) DEFAULT NULL,
  `PUERTOAGENTE` mediumint(9) DEFAULT NULL,
  `TEXTORACK` varchar(20) DEFAULT NULL,
  `TEXTOEQUIPO` varchar(20) DEFAULT NULL,
  `REINTENTOCNX` smallint(6) DEFAULT NULL,
  `IDEQEXTERNO` bigint(20) DEFAULT NULL,
  `EQUIPOCORA` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`IDEQUIPO`),
  UNIQUE KEY `UK_EQUIPOS` (`DESCRIPCION`),
  KEY `FK_EQUIPOS_CATALOGOEQUIPOS` (`IDTIPOEQUIPO`),
  KEY `FK_EQUIPOS_EMPLAZAMIENTOS` (`IDEMPLAZAMIENTO`),
  CONSTRAINT `FK_EQUIPOS_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_EQUIPOS_EMPLAZAMIENTOS` FOREIGN KEY (`IDEMPLAZAMIENTO`) REFERENCES `emplazamientos` (`IDEMPLAZAMIENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos`
--

LOCK TABLES `equipos` WRITE;
/*!40000 ALTER TABLE `equipos` DISABLE KEYS */;
INSERT INTO `equipos` VALUES (10100101033,'UG5K-INTERFACES',1000,10100000000,'127.0.0.1','.8.3.','',0,'1.3.6.1.4.1.7916','public','public',162,161,'','',2,0,0),(10100102000,'UG5K-MIB',2000,10100000000,'127.0.0.5','1.2.1.','',0,'1.3.6.','public','public',162,161,'','',2,0,0),(10100103000,'UG5K-CPU',3000,10100000000,'127.0.0.1','.8.3.1.','',0,'1.3.6.1.4.1.7916','public','public',162,161,'','',2,0,0),(10100106000,'UG5K-SIP',6000,10100000000,'','5.1.','',0,'1.3.6.1.4.1.7916.8.3.1.','public','public',162,161,NULL,'',2,0,0),(10100109000,'UG5K-SRAD',9000,10100000000,'127.0.0.5','6.1.','',0,'1.3.6.1.4.1.7916.8.3.1.','public','public',162,161,'','',2,0,0),(10100150033,'UG5K-STEL',50000,10100000000,'','1.','',0,'1.3.6.1.4.1.7916.8.3.1.4.2.','public','private',162,161,'','',3,0,0);
/*!40000 ALTER TABLE `equipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos_inhibidos`
--

DROP TABLE IF EXISTS `equipos_inhibidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipos_inhibidos` (
  `IDEQUIPO` varchar(50) NOT NULL,
  `FECHAHORA` datetime NOT NULL,
  PRIMARY KEY (`IDEQUIPO`),
  UNIQUE KEY `idequipos_inhibidos_UNIQUE` (`IDEQUIPO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Registro de los equipos inhibidos por operador. Unicamente se guarda el identificador del equipo inhibido y la fecha hora de inserccion para terminal cliente';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos_inhibidos`
--

LOCK TABLES `equipos_inhibidos` WRITE;
/*!40000 ALTER TABLE `equipos_inhibidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipos_inhibidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historicotalos`
--

DROP TABLE IF EXISTS `historicotalos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historicotalos` (
  `IDFECHAHORA` datetime(6) NOT NULL,
  `IDINCIDENCIA` bigint(20) NOT NULL,
  `IDSISTEMA` bigint(20) DEFAULT NULL,
  `IDEMPLAZAMIENTO` bigint(20) DEFAULT NULL,
  `IDEQUIPO` bigint(20) DEFAULT NULL,
  `IDTIPOEQUIPO` bigint(20) DEFAULT NULL,
  `IDSENIAL` bigint(20) DEFAULT NULL,
  `ESTADO` int(11) DEFAULT NULL,
  `VALOR` bigint(20) DEFAULT NULL,
  `DESCRIPCION` varchar(80) DEFAULT NULL,
  `OPERADOR` varchar(16) DEFAULT NULL,
  `IDOPERADOR` bigint(20) DEFAULT NULL,
  `COLOR` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historicotalos`
--

LOCK TABLES `historicotalos` WRITE;
/*!40000 ALTER TABLE `historicotalos` DISABLE KEYS */;
/*!40000 ALTER TABLE `historicotalos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iconos`
--

DROP TABLE IF EXISTS `iconos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `iconos` (
  `IDICONO` bigint(20) NOT NULL,
  `ESTADO` bigint(20) NOT NULL,
  `PATH` varchar(100) DEFAULT NULL,
  `COLOR` varchar(11) NOT NULL,
  UNIQUE KEY `UK_ICONOS` (`IDICONO`,`ESTADO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iconos`
--

LOCK TABLES `iconos` WRITE;
/*!40000 ALTER TABLE `iconos` DISABLE KEYS */;
INSERT INTO `iconos` VALUES (0,0,'','30,144,255'),(0,1,'','30,144,255'),(0,2,'','30,144,255'),(0,3,'','30,144,255'),(0,4,'','30,144,255'),(0,5,'','30,144,255'),(1,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(1,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(1,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(1,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(1,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(1,5,'','30,144,255'),(2,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(2,1,'','0,170,0'),(2,2,'','255,255,128'),(2,3,'','255,165,0'),(2,4,'','255,0,0'),(3,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(3,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(3,2,NULL,'255,255,128'),(3,3,NULL,'255,165,0'),(3,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(4,0,'','236,233,216'),(4,1,'','0,170,0'),(4,2,'','255,255,128'),(4,3,'','255,165,0'),(4,4,'','0,170,0'),(5,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(5,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(5,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(5,3,'C:\\RCS2010\\bitmap\\led_inde.ico','255,165,0'),(5,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(6,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(6,1,'','0,170,0'),(6,2,'','255,255,128'),(6,3,'','255,165,0'),(6,4,'','255,0,0'),(7,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(7,1,'','0,170,0'),(7,2,'','255,255,128'),(7,3,'','255,165,0'),(7,4,'','255,0,0'),(8,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(8,1,'','0,170,0'),(8,2,'','255,255,128'),(8,3,'','255,165,0'),(8,4,'','255,0,0'),(9,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(9,1,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','0,170,0'),(9,2,'','255,255,128'),(9,3,'','255,165,0'),(9,4,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,165,0'),(10,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(10,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(10,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(10,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(10,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(11,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(11,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(11,2,'','255,255,128'),(11,3,'','255,165,0'),(11,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(12,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(12,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(12,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(12,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(12,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(13,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(13,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(13,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,0,0'),(13,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,0,0'),(13,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(13,5,'','30,144,255'),(14,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(14,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(14,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(14,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(14,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(15,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(15,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(15,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(15,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(15,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(16,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(16,1,'','0,170,0'),(16,2,'','255,255,128'),(16,3,'','255,165,0'),(16,4,'','255,0,0'),(17,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(17,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(17,2,'','255,255,128'),(17,3,'','255,165,0'),(17,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(18,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(18,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(18,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(18,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(18,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(19,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(19,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(19,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(19,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(19,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(20,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(20,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(20,2,NULL,'255,255,128'),(20,3,NULL,'255,165,0'),(20,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(21,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(21,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(21,2,'','255,255,128'),(21,3,'','255,165,0'),(21,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(22,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(22,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(22,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(22,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(22,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(23,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(23,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(23,2,NULL,'255,255,128'),(23,3,NULL,'255,165,0'),(23,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(24,0,NULL,'236,233,216'),(24,1,NULL,'0,170,0'),(24,2,NULL,'255,255,128'),(24,3,NULL,'255,165,0'),(24,4,NULL,'255,0,0'),(25,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(25,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(25,2,NULL,'255,255,128'),(25,3,NULL,'255,165,0'),(25,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(26,0,'','212,208,200'),(26,1,'','0,170,0'),(26,2,'','255,255,128'),(26,3,'','255,165,0'),(26,4,'','255,0,0'),(26,5,'','30,144,255'),(27,0,'','212,208,200'),(27,1,'','0,170,0'),(27,2,'','255,255,128'),(27,3,'','255,165,0'),(27,4,'','255,0,0'),(27,5,'','30,144,255'),(28,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(28,1,'','0,170,0'),(28,2,'','255,255,128'),(28,3,'','255,165,0'),(28,4,'','255,0,0'),(29,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(29,1,'','0,170,0'),(29,2,'','255,255,128'),(29,3,'','255,165,0'),(29,4,'','255,0,0'),(30,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(30,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(30,2,'','255,255,128'),(30,3,'','255,165,0'),(30,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(31,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(31,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(31,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(31,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(31,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(32,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(32,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(32,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(32,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(32,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(33,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(33,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(33,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(33,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(33,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(34,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(34,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(34,2,NULL,'255,255,128'),(34,3,NULL,'255,165,0'),(34,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(35,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(35,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(35,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(35,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(35,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(36,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(36,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(36,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(36,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(36,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(37,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(37,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(37,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(37,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(37,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(38,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(38,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(38,2,NULL,'255,255,128'),(38,3,NULL,'255,165,0'),(38,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(39,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(39,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(39,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(39,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(39,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(40,0,'','236,233,216'),(40,1,'','0,170,0'),(40,2,'','255,255,128'),(40,3,'','255,165,0'),(40,4,'','255,0,0'),(41,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(41,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(41,2,'','255,255,128'),(41,3,'','255,165,0'),(41,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(42,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(42,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(42,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(42,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(42,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(43,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(43,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(43,2,'','255,255,128'),(43,3,'','255,165,0'),(43,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(44,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(44,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(44,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(44,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,0,0'),(44,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(45,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(45,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(45,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(45,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(45,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(46,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(46,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(46,2,'','255,255,128'),(46,3,'','255,165,0'),(46,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(47,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(47,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(47,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(47,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(47,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(47,5,'','30,144,255'),(48,0,'','192,192,192'),(48,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(48,2,'','255,255,128'),(48,3,'','255,165,0'),(48,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(49,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(49,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(49,2,'','255,255,128'),(49,3,'','255,165,0'),(49,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(50,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(50,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(50,2,'','255,255,128'),(50,3,'','255,165,0'),(50,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(51,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(51,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(51,2,'','255,255,128'),(51,3,'','255,165,0'),(51,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(52,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(52,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(52,2,'','255,255,128'),(52,3,'','255,165,0'),(52,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(53,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(53,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(53,2,NULL,'255,255,128'),(53,3,NULL,'255,165,0'),(53,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(54,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(54,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(54,2,NULL,'255,255,128'),(54,3,NULL,'255,165,0'),(54,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(55,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(55,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(55,2,NULL,'255,255,128'),(55,3,NULL,'255,165,0'),(55,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(56,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(56,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(56,2,NULL,'255,255,128'),(56,3,NULL,'255,165,0'),(56,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(57,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(57,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(57,2,'','255,255,128'),(57,3,'','255,165,0'),(57,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(58,0,'','236,233,216'),(58,1,'','0,170,0'),(58,2,'','255,255,128'),(58,3,'','255,165,0'),(58,4,'','255,0,0'),(59,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(59,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(59,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(59,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(59,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(60,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(60,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(60,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(60,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(60,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(61,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(61,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(61,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(61,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(61,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(62,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(62,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(62,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(62,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(62,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(63,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(63,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(63,2,NULL,'255,255,128'),(63,3,NULL,'255,165,0'),(63,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(64,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(64,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(64,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(64,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(64,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(65,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(65,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(65,2,'','255,255,128'),(65,3,'','255,165,0'),(65,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(66,0,'','212,208,200'),(66,1,'','0,170,0'),(66,2,'','255,255,128'),(66,3,'','255,165,0'),(66,4,'','255,0,0'),(66,5,'','30,144,255'),(67,0,'','236,233,216'),(67,1,'','0,170,0'),(67,2,'','255,255,128'),(67,3,'','255,165,0'),(67,4,'','255,0,0'),(68,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(68,1,'','0,170,0'),(68,2,'','255,255,128'),(68,3,'','255,165,0'),(68,4,'','255,0,0'),(69,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(69,1,'','0,170,0'),(69,2,'','255,255,128'),(69,3,'','255,165,0'),(69,4,'','255,0,0'),(70,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(70,1,'','0,170,0'),(70,2,'','255,255,128'),(70,3,'','255,165,0'),(70,4,'','255,0,0'),(71,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(71,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(71,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(71,3,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,165,0'),(71,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(72,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(72,1,'','0,170,0'),(72,2,'','255,255,128'),(72,3,'','255,165,0'),(72,4,'','255,0,0'),(73,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(73,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(73,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(73,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(73,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(74,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(74,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(74,2,NULL,'255,255,128'),(74,3,NULL,'255,165,0'),(74,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(75,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(75,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(75,2,'','255,255,128'),(75,3,'','255,165,0'),(75,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(76,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(76,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(76,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(76,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(76,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(77,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(77,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(77,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(77,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(77,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(78,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(78,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(78,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(78,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(78,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(79,0,'','212,208,200'),(79,1,'','0,170,0'),(79,2,'','255,255,128'),(79,3,'','255,165,0'),(79,4,'','255,0,0'),(80,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(80,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(80,2,'','255,255,128'),(80,3,'','255,165,0'),(80,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(81,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(81,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(81,2,'','255,255,128'),(81,3,'','255,165,0'),(81,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(82,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(82,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(82,2,'','255,255,128'),(82,3,'','255,165,0'),(82,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(83,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(83,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(83,2,NULL,'255,255,128'),(83,3,NULL,'255,165,0'),(83,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(84,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(84,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(84,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(84,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(84,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(85,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(85,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(85,2,'','255,255,128'),(85,3,'','255,165,0'),(85,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(86,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(86,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(86,2,'','255,255,128'),(86,3,'','255,165,0'),(86,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(87,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(87,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(87,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(87,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(87,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(88,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(88,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(88,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(88,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(88,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(89,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(89,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(89,2,'','255,255,128'),(89,3,'','255,165,0'),(89,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(90,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(90,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(90,2,'','255,255,128'),(90,3,'','255,165,0'),(90,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(91,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(91,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(91,2,'','255,255,128'),(91,3,'','255,165,0'),(91,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(92,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(92,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(92,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(92,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(92,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(93,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(93,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(93,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(93,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(93,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(94,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(94,1,'','0,170,0'),(94,2,'','255,255,128'),(94,3,'','255,165,0'),(94,4,'','255,0,0'),(95,0,'','212,208,200'),(95,1,'','0,170,0'),(95,2,'','255,255,128'),(95,3,'','255,165,0'),(95,4,'','255,0,0'),(96,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','192,192,192'),(96,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico','0,170,0'),(96,2,'','255,255,128'),(96,3,'','255,165,0'),(96,4,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(97,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(97,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(97,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(97,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(97,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(98,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(98,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(98,2,'','255,255,128'),(98,3,'','255,165,0'),(98,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(99,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(99,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(99,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(99,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(99,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(100,0,'','236,233,216'),(100,1,'','0,170,0'),(100,2,'','255,255,128'),(100,3,'','255,165,0'),(100,4,'','255,0,0'),(101,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(101,1,'','0,170,0'),(101,2,'','255,255,128'),(101,3,'','255,165,0'),(101,4,'','255,0,0'),(102,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(102,1,'','0,170,0'),(102,2,'','255,255,128'),(102,3,'','255,165,0'),(102,4,'','255,0,0'),(103,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(103,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(103,2,NULL,'255,255,128'),(103,3,NULL,'255,165,0'),(103,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(104,0,'C:\\RCS2010\\bitmap\\BotonSquelch9000rx.bmp','236,233,216'),(104,1,'','0,170,0'),(104,2,'','255,255,128'),(104,3,'','255,165,0'),(104,4,'','255,0,0'),(105,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(105,1,'','0,170,0'),(105,2,'','255,255,128'),(105,3,'','255,165,0'),(105,4,'','255,0,0'),(106,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(106,1,'','0,170,0'),(106,2,'','255,255,128'),(106,3,'','255,165,0'),(106,4,'','255,0,0'),(107,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(107,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(107,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(107,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(107,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(108,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(108,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(108,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(108,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(108,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(109,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(109,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(109,2,'','255,255,128'),(109,3,'','255,165,0'),(109,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(110,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(110,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(110,2,NULL,'255,255,128'),(110,3,NULL,'255,165,0'),(110,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(111,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(111,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(111,2,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(111,3,'C:\\RCS2010\\bitmap\\ledOk.ico','255,0,0'),(111,4,'C:\\RCS2010\\bitmap\\ledOk.ico','255,0,0'),(112,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(112,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(112,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(112,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(112,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(113,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(113,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(113,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(113,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(113,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(114,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(114,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(114,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(114,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(114,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(115,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(115,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(115,2,NULL,'255,255,128'),(115,3,NULL,'255,165,0'),(115,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(116,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(116,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(116,2,NULL,'255,255,128'),(116,3,NULL,'255,165,0'),(116,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(117,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(117,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(117,2,NULL,'255,255,128'),(117,3,NULL,'255,165,0'),(117,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(118,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(118,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(118,2,NULL,'255,255,128'),(118,3,NULL,'255,165,0'),(118,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(119,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(119,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(119,2,'','255,255,128'),(119,3,'','255,165,0'),(119,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(119,5,'','30,144,255'),(120,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(120,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(120,2,'','255,255,128'),(120,3,'','255,165,0'),(120,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(121,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(121,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(121,2,'','255,255,128'),(121,3,'','255,165,0'),(121,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(122,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(122,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(122,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(122,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(122,4,'','255,0,0'),(123,0,'','236,233,216'),(123,1,'','0,170,0'),(123,2,'','255,255,128'),(123,3,'','255,165,0'),(123,4,'','255,0,0'),(124,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(124,1,'','0,170,0'),(124,2,'','255,255,128'),(124,3,'','255,165,0'),(124,4,'','255,0,0'),(125,0,'','236,233,216'),(125,1,'','0,170,0'),(125,2,'','255,255,128'),(125,3,'','255,165,0'),(125,4,'','255,0,0'),(126,0,NULL,'212,208,200'),(126,1,NULL,'0,170,0'),(126,2,NULL,'255,255,128'),(126,3,NULL,'255,165,0'),(126,4,NULL,'255,0,0'),(127,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(127,1,'','0,170,0'),(127,2,'','255,255,128'),(127,3,'','255,165,0'),(127,4,'','255,0,0'),(128,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(128,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(128,2,'','255,255,128'),(128,3,'','255,165,0'),(128,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(129,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(129,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(129,2,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,255,128'),(129,3,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,165,0'),(129,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(130,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(130,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(130,2,NULL,'255,255,128'),(130,3,NULL,'255,165,0'),(130,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(131,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(131,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(131,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(131,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(131,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(132,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(132,1,'','0,170,0'),(132,2,'','255,255,128'),(132,3,'','255,165,0'),(132,4,'','255,0,0'),(133,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(133,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(133,2,NULL,'255,255,128'),(133,3,NULL,'255,165,0'),(133,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','128,255,128'),(134,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(134,1,'','0,170,0'),(134,2,'','255,255,128'),(134,3,'','255,165,0'),(134,4,'','255,0,0'),(135,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(135,1,'','0,170,0'),(135,2,'','255,255,128'),(135,3,'','255,165,0'),(135,4,'','255,0,0'),(136,0,'','212,208,200'),(136,1,'','0,170,0'),(136,2,'','255,255,128'),(136,3,'','255,165,0'),(136,4,'','255,0,0'),(136,5,'','30,144,255'),(137,0,'','236,233,216'),(137,1,'','0,170,0'),(137,2,'','255,255,128'),(137,3,'','255,165,0'),(137,4,'','255,0,0'),(138,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(138,1,'','0,170,0'),(138,2,'','255,255,128'),(138,3,'','255,165,0'),(138,4,'','255,0,0'),(139,0,'C:\\RCS2010\\bitmap\\BotonTestSy918.bmp','236,233,216'),(139,1,'','0,170,0'),(139,2,'','255,255,128'),(139,3,'','255,165,0'),(139,4,'','255,0,0'),(140,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(140,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(140,2,'','255,255,128'),(140,3,'','255,165,0'),(140,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(141,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(141,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(141,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(141,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(141,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(142,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(142,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(142,2,NULL,'255,255,128'),(142,3,NULL,'255,165,0'),(142,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(143,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(143,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(143,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(143,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(143,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(144,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(144,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(144,2,'','255,255,128'),(144,3,'','255,165,0'),(144,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(145,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(145,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(145,2,NULL,'255,255,128'),(145,3,NULL,'255,165,0'),(145,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(146,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(146,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(146,2,NULL,'255,255,128'),(146,3,NULL,'255,165,0'),(146,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(147,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(147,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(147,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(147,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(147,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(148,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(148,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(148,2,'','255,255,128'),(148,3,'','255,165,0'),(148,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(149,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(149,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(149,2,'','255,255,128'),(149,3,'','255,165,0'),(149,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(149,5,'','30,144,255'),(150,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(150,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(150,2,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,255,128'),(150,3,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,165,0'),(150,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(151,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(151,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(151,2,'','255,255,128'),(151,3,'','255,165,0'),(151,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(152,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(152,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(152,2,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(152,3,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(152,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(153,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(153,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(153,2,'','255,255,128'),(153,3,'','255,165,0'),(153,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(154,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(154,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(154,2,'','255,255,128'),(154,3,'','255,165,0'),(154,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(155,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(155,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(155,2,'','255,255,128'),(155,3,'','255,165,0'),(155,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(156,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(156,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(156,2,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,255,128'),(156,3,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,165,0'),(156,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(157,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(157,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(157,2,'','255,255,128'),(157,3,'','255,165,0'),(157,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(158,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(158,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(158,2,'','255,255,128'),(158,3,'','255,165,0'),(158,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(159,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(159,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(159,2,'','255,255,128'),(159,3,'','255,165,0'),(159,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(160,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','236,233,216'),(160,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(160,2,'','255,255,128'),(160,3,'','255,165,0'),(160,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(161,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(161,1,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','0,170,0'),(161,2,'','255,255,128'),(161,3,'','255,165,0'),(161,4,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,165,0'),(162,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(162,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(162,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(162,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(162,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(163,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(163,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(163,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(163,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(163,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(163,5,'','30,144,255'),(164,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(164,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(164,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,0,0'),(164,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,0,0'),(164,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(165,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(165,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(165,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(165,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(165,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(166,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(166,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(166,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(166,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(166,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(166,5,'','30,144,255'),(167,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(167,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(167,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(167,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(167,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(167,5,'','30,144,255'),(168,0,'','236,233,216'),(168,1,'','0,170,0'),(168,2,'','255,255,128'),(168,3,'','255,165,0'),(168,4,'','0,170,0'),(169,0,'','236,233,216'),(169,1,'','0,170,0'),(169,2,'','255,255,128'),(169,3,'','255,165,0'),(169,4,'','255,0,0'),(169,5,'','30,144,255'),(170,0,'','236,233,216'),(170,1,'','0,170,0'),(170,2,'','255,255,128'),(170,3,'','255,165,0'),(170,4,'','255,0,0'),(171,0,'','236,233,216'),(171,1,'','0,170,0'),(171,2,'','255,255,128'),(171,3,'','255,165,0'),(171,4,'','255,0,0'),(172,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(172,1,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','0,170,0'),(172,2,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,255,128'),(172,3,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,128,255'),(172,4,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,0,0'),(173,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(173,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(173,2,'','255,255,128'),(173,3,'','255,165,0'),(173,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(174,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(174,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(174,2,'','255,255,128'),(174,3,'','255,165,0'),(174,4,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','255,0,0'),(175,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(175,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(175,2,'','255,255,128'),(175,3,'','255,165,0'),(175,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(176,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(176,1,'C:\\RCS2010\\bitmap\\ledCORANaranjaEncendido.ico','0,170,0'),(176,2,'','255,255,128'),(176,3,'','255,165,0'),(176,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(177,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(177,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(177,2,'','255,255,128'),(177,3,'','255,165,0'),(177,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(178,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(178,1,'C:\\RCS2010\\bitmap\\ledCORANaranjaEncendido.ico','0,170,0'),(178,2,'','255,255,128'),(178,3,'','255,165,0'),(178,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(179,0,'','236,233,216'),(179,1,'','0,170,0'),(179,2,'','255,255,128'),(179,3,'','255,165,0'),(179,4,'','255,0,0'),(180,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','212,208,200'),(180,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Encendido.JPG','0,170,0'),(180,2,'','255,255,128'),(180,3,'','255,165,0'),(180,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','0,170,0'),(181,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(181,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(181,2,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,255,128'),(181,3,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','255,165,0'),(181,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(182,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(182,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(182,2,'','255,255,128'),(182,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(182,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(183,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(183,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(183,2,'','255,255,128'),(183,3,'','255,165,0'),(183,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(184,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(184,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(184,2,NULL,'255,255,128'),(184,3,NULL,'255,165,0'),(184,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','0,170,0'),(185,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(185,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(185,2,NULL,'255,255,128'),(185,3,NULL,'255,165,0'),(185,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(186,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(186,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(186,2,NULL,'255,255,128'),(186,3,NULL,'255,165,0'),(186,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(187,0,'','236,233,216'),(187,1,'','0,170,0'),(187,2,'','255,255,128'),(187,3,'','255,165,0'),(187,4,'','255,0,0'),(188,0,'','236,233,216'),(188,1,'','0,170,0'),(188,2,'','255,255,128'),(188,3,'','255,165,0'),(188,4,'','255,0,0'),(189,0,'C:\\RCS2010\\bitmap\\BotonTestIbite900tx.bmp','236,233,216'),(189,1,'','0,170,0'),(189,2,'','255,255,128'),(189,3,'','255,165,0'),(189,4,'','255,0,0'),(190,0,'','236,233,216'),(190,1,'','0,170,0'),(190,2,'','255,255,128'),(190,3,'','255,165,0'),(190,4,'','255,0,0'),(191,0,'','236,233,216'),(191,1,'','0,170,0'),(191,2,'','255,255,128'),(191,3,'','255,165,0'),(191,4,'','255,0,0'),(192,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(192,1,'','0,170,0'),(192,2,'','255,255,128'),(192,3,'','255,165,0'),(192,4,'','255,0,0'),(193,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(193,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(193,2,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(193,3,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,165,0'),(193,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(194,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(194,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico','0,170,0'),(194,2,NULL,'255,255,128'),(194,3,NULL,'255,165,0'),(194,4,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(195,0,NULL,'236,233,216'),(195,1,NULL,'0,170,0'),(195,2,NULL,'255,255,128'),(195,3,NULL,'255,165,0'),(195,4,NULL,'0,170,0'),(196,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(196,1,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(196,2,NULL,'255,255,128'),(196,3,NULL,'255,165,0'),(196,4,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,0,0'),(197,0,'','236,233,216'),(197,1,'','0,170,0'),(197,2,'','255,255,128'),(197,3,'','255,165,0'),(197,4,'','255,0,0'),(198,0,'','236,233,216'),(198,1,'','0,170,0'),(198,2,'','255,255,128'),(198,3,'','255,165,0'),(198,4,'','255,0,0'),(199,0,'','212,208,200'),(199,1,'','0,170,0'),(199,2,'','255,255,128'),(199,3,'','255,165,0'),(199,4,'','255,0,0'),(200,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(200,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(200,2,'','255,255,128'),(200,3,'','255,165,0'),(200,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(201,0,'','236,233,216'),(201,1,'','0,170,0'),(201,2,'','255,255,128'),(201,3,'','255,165,0'),(201,4,'','255,0,0'),(202,0,'','236,233,216'),(202,1,'','0,170,0'),(202,2,'','255,255,128'),(202,3,'','255,165,0'),(202,4,'','255,0,0'),(203,0,'','212,208,200'),(203,1,'','0,170,0'),(203,2,'','255,255,128'),(203,3,'','255,165,0'),(203,4,'','255,0,0'),(204,0,'','236,233,216'),(204,1,'','0,170,0'),(204,2,'','255,255,128'),(204,3,'','255,165,0'),(204,4,'','255,0,0'),(205,0,'','236,233,216'),(205,1,'','0,170,0'),(205,2,'','255,255,128'),(205,3,'','255,165,0'),(205,4,'','255,0,0'),(206,0,'','236,233,216'),(206,1,'','0,170,0'),(206,2,'','255,255,128'),(206,3,'','255,165,0'),(206,4,'','255,0,0'),(207,0,'','236,233,216'),(207,1,'','0,170,0'),(207,2,'','255,255,128'),(207,3,'','255,165,0'),(207,4,'','255,0,0'),(208,0,'','236,233,216'),(208,1,'','0,170,0'),(208,2,'','255,255,128'),(208,3,'','255,165,0'),(208,4,'','255,0,0'),(209,0,'','236,233,216'),(209,1,'','0,170,0'),(209,2,'','255,255,128'),(209,3,'','255,165,0'),(209,4,'','255,0,0'),(210,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(210,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(210,2,'','255,255,128'),(210,3,'','255,165,0'),(210,4,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(211,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(211,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(211,2,NULL,'255,255,128'),(211,3,NULL,'255,165,0'),(211,4,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(212,0,'','236,233,216'),(212,1,'','0,170,0'),(212,2,'','255,255,128'),(212,3,'','255,165,0'),(212,4,'','255,0,0'),(212,5,'','30,144,255'),(213,0,'','236,233,216'),(213,1,'','0,170,0'),(213,2,'','255,255,128'),(213,3,'','255,165,0'),(213,4,'','255,0,0'),(213,5,'','30,144,255'),(214,0,'','236,233,216'),(214,1,'','0,170,0'),(214,2,'','255,255,128'),(214,3,'','255,165,0'),(214,4,'','255,0,0'),(214,5,'','30,144,255'),(215,0,'','236,233,216'),(215,1,'','0,170,0'),(215,2,'','255,255,128'),(215,3,'','255,165,0'),(215,4,'','255,0,0'),(215,5,'','30,144,255'),(216,0,'','236,233,216'),(216,1,'','0,170,0'),(216,2,'','255,255,128'),(216,3,'','255,165,0'),(216,4,'','255,0,0'),(216,5,'','30,144,255'),(217,0,'','236,233,216'),(217,1,'','0,170,0'),(217,2,'','255,255,128'),(217,3,'','255,165,0'),(217,4,'','255,0,0'),(217,5,'','30,144,255'),(218,0,'','236,233,216'),(218,1,'','0,170,0'),(218,2,'','255,255,128'),(218,3,'','255,165,0'),(218,4,'','255,0,0'),(218,5,'','30,144,255'),(219,0,'','236,233,216'),(219,1,'','0,170,0'),(219,2,'','255,255,128'),(219,3,'','255,165,0'),(219,4,'','255,0,0'),(220,0,NULL,'236,233,216'),(220,1,NULL,'0,170,0'),(220,2,NULL,'255,255,128'),(220,3,NULL,'255,165,0'),(220,4,NULL,'0,170,0'),(221,0,NULL,'236,233,216'),(221,1,NULL,'0,170,0'),(221,2,NULL,'255,255,128'),(221,3,NULL,'255,165,0'),(221,4,NULL,'0,170,0'),(222,0,'','236,233,216'),(222,1,'','0,170,0'),(222,2,'','255,255,128'),(222,3,'','255,165,0'),(222,4,'','255,0,0'),(223,0,'','236,233,216'),(223,1,'','0,170,0'),(223,2,'','255,255,128'),(223,3,'','255,165,0'),(223,4,'','255,0,0'),(224,0,'','236,233,216'),(224,1,'','0,170,0'),(224,2,'','255,255,128'),(224,3,'','255,165,0'),(224,4,'','255,0,0'),(225,0,'','236,233,216'),(225,1,'','0,170,0'),(225,2,'','255,255,128'),(225,3,'','255,165,0'),(225,4,'','255,0,0'),(226,0,'','236,233,216'),(226,1,'','0,170,0'),(226,2,'','255,255,128'),(226,3,'','255,165,0'),(226,4,'','255,0,0'),(227,0,'','236,233,216'),(227,1,'','0,170,0'),(227,2,'','255,255,128'),(227,3,'','255,165,0'),(227,4,'','255,0,0'),(228,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(228,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(228,2,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,255,128'),(228,3,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,165,0'),(228,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(229,0,'','236,233,216'),(229,1,'','0,170,0'),(229,2,'','255,255,128'),(229,3,'','255,165,0'),(229,4,'','255,0,0'),(230,0,NULL,'236,233,216'),(230,1,NULL,'0,170,0'),(230,2,NULL,'255,255,128'),(230,3,NULL,'255,165,0'),(230,4,NULL,'0,170,0'),(231,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(231,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(231,2,'','255,255,128'),(231,3,'','255,165,0'),(231,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(232,0,'','236,233,216'),(232,1,'','0,170,0'),(232,2,'','255,255,128'),(232,3,'','255,165,0'),(232,4,'','255,0,0'),(233,0,'','236,233,216'),(233,1,'','0,170,0'),(233,2,'','255,255,128'),(233,3,'','255,165,0'),(233,4,'','255,0,0'),(234,0,'','236,233,216'),(234,1,'','0,170,0'),(234,2,'','255,255,128'),(234,3,'','255,165,0'),(234,4,'','255,0,0'),(235,0,NULL,'236,233,216'),(235,1,NULL,'0,170,0'),(235,2,NULL,'255,255,128'),(235,3,NULL,'255,165,0'),(235,4,NULL,'255,0,0'),(236,0,'','236,233,216'),(236,1,'','0,170,0'),(236,2,'','255,255,128'),(236,3,'','255,165,0'),(236,4,'','255,0,0'),(237,0,'','236,233,216'),(237,1,'','0,170,0'),(237,2,'','255,255,128'),(237,3,'','255,165,0'),(237,4,'','255,0,0'),(238,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(238,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(238,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(238,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(238,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(239,0,'','236,233,216'),(239,1,'','0,170,0'),(239,2,'','255,255,128'),(239,3,'','255,165,0'),(239,4,'','255,0,0'),(240,0,'','236,233,216'),(240,1,'','0,170,0'),(240,2,'','255,255,128'),(240,3,'','255,165,0'),(240,4,'','255,0,0'),(241,0,'','236,233,216'),(241,1,'','0,170,0'),(241,2,'','255,255,128'),(241,3,'','255,165,0'),(241,4,'','255,0,0'),(242,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(242,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(242,2,'','255,255,128'),(242,3,'','255,165,0'),(242,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(243,0,'','236,233,216'),(243,1,'','0,170,0'),(243,2,'','255,255,128'),(243,3,'','255,165,0'),(243,4,'','255,0,0'),(244,0,'','236,233,216'),(244,1,'','0,170,0'),(244,2,'','255,255,128'),(244,3,'','255,165,0'),(244,4,'','255,0,0'),(245,0,'','236,233,216'),(245,1,'','0,170,0'),(245,2,'','255,255,128'),(245,3,'','255,165,0'),(245,4,'','0,170,0'),(246,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(246,1,'C:\\RCS2010\\bitmap\\led_inde.ico','0,170,0'),(246,2,'','255,255,128'),(246,3,'','255,165,0'),(246,4,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(247,0,'','236,233,216'),(247,1,'','0,170,0'),(247,2,'','255,255,128'),(247,3,'','255,165,0'),(247,4,'','0,170,0'),(248,0,'','236,233,216'),(248,1,'','0,170,0'),(248,2,'','255,255,128'),(248,3,'','255,165,0'),(248,4,'','255,0,0'),(249,0,'','236,233,216'),(249,1,'','0,170,0'),(249,2,'','255,255,128'),(249,3,'','255,165,0'),(249,4,'','255,0,0'),(250,0,'','236,233,216'),(250,1,'','0,170,0'),(250,2,'','255,255,128'),(250,3,'','255,165,0'),(250,4,'','255,0,0'),(251,0,'','236,233,216'),(251,1,'','0,170,0'),(251,2,'','255,255,128'),(251,3,'','255,165,0'),(251,4,'','255,0,0'),(252,0,'','236,233,216'),(252,1,'','0,170,0'),(252,2,'','255,255,128'),(252,3,'','255,165,0'),(252,4,'','255,0,0'),(253,0,'','236,233,216'),(253,1,'','0,170,0'),(253,2,'','255,255,128'),(253,3,'','255,165,0'),(253,4,'','255,0,0'),(254,0,'','236,233,216'),(254,1,'','0,170,0'),(254,2,'','255,255,128'),(254,3,'','255,165,0'),(254,4,'','255,0,0'),(255,0,'','236,233,216'),(255,1,'','0,170,0'),(255,2,'','255,255,128'),(255,3,'','255,165,0'),(255,4,'','255,0,0'),(256,0,'','236,233,216'),(256,1,'','0,170,0'),(256,2,'','255,255,128'),(256,3,'','255,165,0'),(256,4,'','255,0,0'),(257,0,'','236,233,216'),(257,1,'','0,170,0'),(257,2,'','255,255,128'),(257,3,'','255,165,0'),(257,4,'','255,0,0'),(258,0,'','236,233,216'),(258,1,'','0,170,0'),(258,2,'','255,255,128'),(258,3,'','255,165,0'),(258,4,'','255,0,0'),(259,0,'','236,233,216'),(259,1,'','0,170,0'),(259,2,'','255,255,128'),(259,3,'','255,165,0'),(259,4,'','255,0,0'),(260,0,'','236,233,216'),(260,1,'','0,170,0'),(260,2,'','255,255,128'),(260,3,'','255,165,0'),(260,4,'','255,0,0'),(261,0,'','236,233,216'),(261,1,'','0,170,0'),(261,2,'','255,255,128'),(261,3,'','255,165,0'),(261,4,'','255,0,0'),(262,0,'','236,233,216'),(262,1,'','0,170,0'),(262,2,'','255,255,128'),(262,3,'','255,165,0'),(262,4,'','255,0,0'),(263,0,NULL,'236,233,216'),(263,1,NULL,'0,170,0'),(263,2,NULL,'255,255,128'),(263,3,NULL,'255,165,0'),(263,4,NULL,'255,0,0'),(264,0,'','236,233,216'),(264,1,'','0,170,0'),(264,2,'','255,255,128'),(264,3,'','255,165,0'),(264,4,'','255,0,0'),(265,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(265,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico','0,170,0'),(265,2,'','255,255,128'),(265,3,'','255,165,0'),(265,4,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(266,0,NULL,'236,233,216'),(266,1,NULL,'0,170,0'),(266,2,NULL,'255,255,128'),(266,3,NULL,'255,165,0'),(266,4,NULL,'0,170,0'),(267,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(267,1,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(267,2,'','255,255,128'),(267,3,'','255,165,0'),(267,4,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,0,0'),(268,0,'','236,233,216'),(268,1,'','0,170,0'),(268,2,'','255,255,128'),(268,3,'','255,165,0'),(268,4,'','255,0,0'),(269,0,NULL,'236,233,216'),(269,1,NULL,'0,170,0'),(269,2,NULL,'255,255,128'),(269,3,NULL,'255,165,0'),(269,4,NULL,'0,170,0'),(270,0,'','236,233,216'),(270,1,'','0,170,0'),(270,2,'','255,255,128'),(270,3,'','255,165,0'),(270,4,'','255,0,0'),(271,0,'','236,233,216'),(271,1,'','0,170,0'),(271,2,'','255,255,128'),(271,3,'','255,165,0'),(271,4,'','255,0,0'),(272,0,'','236,233,216'),(272,1,'','0,170,0'),(272,2,'','255,255,128'),(272,3,'','255,165,0'),(272,4,'','255,0,0'),(273,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(273,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(273,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(273,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(273,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(274,0,'','236,233,216'),(274,1,'','0,170,0'),(274,2,'','255,255,128'),(274,3,'','255,165,0'),(274,4,'','255,0,0'),(275,0,'','236,233,216'),(275,1,'','0,170,0'),(275,2,'','255,255,128'),(275,3,'','255,165,0'),(275,4,'','255,0,0'),(276,0,'','236,233,216'),(276,1,'','0,170,0'),(276,2,'','255,255,128'),(276,3,'','255,165,0'),(276,4,'','255,0,0'),(277,0,'','236,233,216'),(277,1,'','0,170,0'),(277,2,'','255,255,128'),(277,3,'','255,165,0'),(277,4,'','255,0,0'),(278,0,'','236,233,216'),(278,1,'','0,170,0'),(278,2,'','255,255,128'),(278,3,'','255,165,0'),(278,4,'','255,0,0'),(279,0,'','236,233,216'),(279,1,'','0,170,0'),(279,2,'','255,255,128'),(279,3,'','255,165,0'),(279,4,'','255,0,0'),(280,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(280,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico','0,170,0'),(280,2,'','255,255,128'),(280,3,'','255,165,0'),(280,4,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','0,170,0'),(281,0,'C:\\RCS2010\\bitmap\\BotonSquelch9000rx.bmp','236,233,216'),(281,1,'','0,170,0'),(281,2,'','255,255,128'),(281,3,'','255,165,0'),(281,4,'','255,0,0'),(282,0,'','236,233,216'),(282,1,'','0,170,0'),(282,2,'','255,255,128'),(282,3,'','255,165,0'),(282,4,'','255,0,0'),(283,0,'','236,233,216'),(283,1,'','0,170,0'),(283,2,'','255,255,128'),(283,3,'','255,165,0'),(283,4,'','255,0,0'),(284,0,'','236,233,216'),(284,1,'','0,170,0'),(284,2,'','255,255,128'),(284,3,'','255,165,0'),(284,4,'','255,0,0'),(285,0,'','236,233,216'),(285,1,'','0,170,0'),(285,2,'','255,255,128'),(285,3,'','255,165,0'),(285,4,'','255,0,0'),(286,0,'','236,233,216'),(286,1,'','0,170,0'),(286,2,'','255,255,128'),(286,3,'','255,165,0'),(286,4,'','0,170,0'),(287,0,'','236,233,216'),(287,1,'','0,170,0'),(287,2,'','255,255,128'),(287,3,'','255,165,0'),(287,4,'','255,0,0'),(288,0,'','236,233,216'),(288,1,'','0,170,0'),(288,2,'','255,255,128'),(288,3,'','255,165,0'),(288,4,'','255,0,0'),(289,0,'','236,233,216'),(289,1,'','0,170,0'),(289,2,'','255,255,128'),(289,3,'','255,165,0'),(289,4,'','255,0,0'),(290,0,'','236,233,216'),(290,1,'','0,170,0'),(290,2,'','255,255,128'),(290,3,'','255,165,0'),(290,4,'','255,0,0'),(291,0,'','236,233,216'),(291,1,'','0,170,0'),(291,2,'','255,255,128'),(291,3,'','255,165,0'),(291,4,'','255,0,0'),(292,0,'','236,233,216'),(292,1,'','0,170,0'),(292,2,'','255,255,128'),(292,3,'','255,165,0'),(292,4,'','255,0,0'),(293,0,'','236,233,216'),(293,1,'','0,170,0'),(293,2,'','255,255,128'),(293,3,'','255,165,0'),(293,4,'','255,0,0'),(294,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(294,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(294,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(294,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(294,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(294,5,'','30,144,255'),(295,0,'','236,233,216'),(295,1,'','0,170,0'),(295,2,'','255,255,128'),(295,3,'','255,165,0'),(295,4,'','255,0,0'),(296,0,'','236,233,216'),(296,1,'','0,170,0'),(296,2,'','255,255,128'),(296,3,'','255,165,0'),(296,4,'','255,0,0'),(297,0,'','236,233,216'),(297,1,'','0,170,0'),(297,2,'','255,255,128'),(297,3,'','255,165,0'),(297,4,'','255,0,0'),(298,0,'','236,233,216'),(298,1,'','0,170,0'),(298,2,'','255,255,128'),(298,3,'','255,165,0'),(298,4,'','255,0,0'),(299,0,'','236,233,216'),(299,1,'','0,170,0'),(299,2,'','255,255,128'),(299,3,'','255,165,0'),(299,4,'','255,0,0'),(300,0,'','236,233,216'),(300,1,'','0,170,0'),(300,2,'','255,255,128'),(300,3,'','255,165,0'),(300,4,'','255,0,0'),(301,0,'','236,233,216'),(301,1,'','0,170,0'),(301,2,'','0,170,0'),(301,3,'','255,165,0'),(301,4,'','0,170,0'),(302,0,'','236,233,216'),(302,1,'','0,170,0'),(302,2,'','255,255,128'),(302,3,'','255,165,0'),(302,4,'','255,0,0'),(303,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(303,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(303,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(303,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(303,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(304,0,'','236,233,216'),(304,1,'','0,170,0'),(304,2,'','255,255,128'),(304,3,'','255,165,0'),(304,4,'','255,0,0'),(305,0,'C:\\RCS2010\\bitmap\\BotonTestIbite900tx.bmp','236,233,216'),(305,1,'','0,170,0'),(305,2,'','255,255,128'),(305,3,'','255,165,0'),(305,4,'','255,0,0'),(306,0,'','212,208,200'),(306,1,'','0,170,0'),(306,2,'','255,255,128'),(306,3,'','255,165,0'),(306,4,'','255,0,0'),(306,5,'','30,144,255'),(307,0,'','212,208,200'),(307,1,'','0,170,0'),(307,2,'','255,255,128'),(307,3,'','255,165,0'),(307,4,'','255,0,0'),(307,5,'','30,144,255'),(308,0,'','212,208,200'),(308,1,'','0,170,0'),(308,2,'','255,255,128'),(308,3,'','255,165,0'),(308,4,'','255,0,0'),(308,5,'','30,144,255'),(309,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(309,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(309,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(309,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(309,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(310,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(310,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(310,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(310,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(310,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(311,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(311,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(311,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(311,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(311,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(312,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(312,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(312,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(312,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(312,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(313,0,NULL,'236,233,216'),(313,1,NULL,'128,255,128'),(313,2,NULL,'255,255,128'),(313,3,NULL,'255,165,0'),(313,4,NULL,'255,0,0'),(314,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(314,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(314,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(314,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(314,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(315,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(315,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(315,2,'','255,255,128'),(315,3,'','255,165,0'),(315,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(316,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(316,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(316,2,'','255,255,128'),(316,3,'','255,165,0'),(316,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(317,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(317,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(317,2,'','255,255,128'),(317,3,'','255,165,0'),(317,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(318,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(318,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(318,2,'','255,255,128'),(318,3,'','255,165,0'),(318,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(319,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(319,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(319,2,'','255,255,128'),(319,3,'','255,165,0'),(319,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(320,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(320,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(320,2,'','255,255,128'),(320,3,'','255,165,0'),(320,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(321,0,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico','212,208,200'),(321,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(321,2,'','255,255,128'),(321,3,'','255,165,0'),(321,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(322,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(322,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(322,2,NULL,'255,255,128'),(322,3,NULL,'255,165,0'),(322,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(323,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(323,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(323,2,NULL,'255,255,128'),(323,3,NULL,'255,165,0'),(323,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(324,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(324,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(324,2,NULL,'255,255,128'),(324,3,NULL,'255,165,0'),(324,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(325,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(325,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(325,2,NULL,'255,255,128'),(325,3,NULL,'255,165,0'),(325,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(326,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(326,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(326,2,NULL,'255,255,128'),(326,3,NULL,'255,165,0'),(326,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(327,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(327,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(327,2,NULL,'255,255,128'),(327,3,NULL,'255,165,0'),(327,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(328,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(328,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(328,2,NULL,'255,255,128'),(328,3,NULL,'255,165,0'),(328,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(329,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','212,208,200'),(329,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG','128,255,128'),(329,2,NULL,'255,255,128'),(329,3,NULL,'255,165,0'),(329,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG','255,0,0'),(330,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','212,208,200'),(330,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Encendido.JPG','128,255,128'),(330,2,NULL,'255,255,128'),(330,3,NULL,'255,165,0'),(330,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','128,255,128'),(331,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(331,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(331,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(331,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(331,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(332,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(332,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(332,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(332,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(332,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(333,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(333,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(333,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(333,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(333,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(334,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(334,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(334,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(334,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(334,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(335,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(335,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(335,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(335,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(335,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(336,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(336,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(336,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(336,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(336,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(337,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(337,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(337,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(337,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(337,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(338,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(338,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(338,2,'','255,255,128'),(338,3,'','255,165,0'),(338,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(339,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(339,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(339,2,'','255,255,128'),(339,3,'','255,165,0'),(339,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(340,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(340,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(340,2,NULL,'255,255,128'),(340,3,NULL,'255,165,0'),(340,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(341,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(341,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(341,2,NULL,'255,255,128'),(341,3,NULL,'255,165,0'),(341,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(342,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(342,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(342,2,NULL,'255,255,128'),(342,3,NULL,'255,165,0'),(342,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(343,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(343,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(343,2,'','255,255,128'),(343,3,'','255,165,0'),(343,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(344,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(344,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(344,2,'','255,255,128'),(344,3,'','255,165,0'),(344,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(345,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(345,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(345,2,'','255,255,128'),(345,3,'','255,165,0'),(345,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(346,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(346,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(346,2,'','255,255,128'),(346,3,'','255,165,0'),(346,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(347,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(347,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(347,2,'','255,255,128'),(347,3,'','255,165,0'),(347,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(348,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(348,1,'C:\\RCS2010\\bitmap\\led_inde.ico','128,255,128'),(348,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(348,3,'C:\\RCS2010\\bitmap\\led_inde.ico','255,165,0'),(348,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(349,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(349,1,'C:\\RCS2010\\bitmap\\led_inde.ico','128,255,128'),(349,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(349,3,'C:\\RCS2010\\bitmap\\led_inde.ico','255,165,0'),(349,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(350,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(350,1,'C:\\RCS2010\\bitmap\\led_inde.ico','128,255,128'),(350,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(350,3,'C:\\RCS2010\\bitmap\\led_inde.ico','255,165,0'),(350,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(351,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(351,1,'C:\\RCS2010\\bitmap\\led_inde.ico','128,255,128'),(351,2,'C:\\RCS2010\\bitmap\\led_inde.ico','255,255,128'),(351,3,'C:\\RCS2010\\bitmap\\led_inde.ico','255,165,0'),(351,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(352,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(352,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(352,2,NULL,'255,255,128'),(352,3,NULL,'255,165,0'),(352,4,'C:\\RCS2010\\bitmap\\led_inde.ico','255,0,0'),(353,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(353,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(353,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(353,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(353,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(354,0,'','236,233,216'),(354,1,'','128,255,128'),(354,2,'','255,255,128'),(354,3,'','255,165,0'),(354,4,'','255,0,0'),(355,0,'','236,233,216'),(355,1,'','128,255,128'),(355,2,'','255,255,128'),(355,3,'','255,165,0'),(355,4,'','255,0,0'),(356,0,'','236,233,216'),(356,1,'','128,255,128'),(356,2,'','255,255,128'),(356,3,'','255,165,0'),(356,4,'','255,0,0'),(357,0,'','236,233,216'),(357,1,'','128,255,128'),(357,2,'','255,255,128'),(357,3,'','255,165,0'),(357,4,'','255,0,0'),(358,0,'','30,144,255'),(358,1,'','0,170,0'),(358,2,'','255,255,128'),(358,3,'','255,165,0'),(358,4,'','255,0,0'),(358,5,'','30,144,255'),(359,0,'','236,233,216'),(359,1,'','128,255,128'),(359,2,'','255,255,128'),(359,3,'','255,165,0'),(359,4,'','255,0,0'),(360,0,'','236,233,216'),(360,1,'','128,255,128'),(360,2,'','255,255,128'),(360,3,'','255,165,0'),(360,4,'','255,0,0'),(361,0,'','236,233,216'),(361,1,'','128,255,128'),(361,2,'','255,255,128'),(361,3,'','255,165,0'),(361,4,'','255,0,0'),(362,0,'','236,233,216'),(362,1,'','128,255,128'),(362,2,'','255,255,128'),(362,3,'','255,165,0'),(362,4,'','255,0,0'),(363,0,'','236,233,216'),(363,1,'','128,255,128'),(363,2,'','255,255,128'),(363,3,'','255,165,0'),(363,4,'','255,0,0'),(364,0,'','236,233,216'),(364,1,'','128,255,128'),(364,2,'','255,255,128'),(364,3,'','255,165,0'),(364,4,'','255,0,0'),(365,0,'','236,233,216'),(365,1,'','128,255,128'),(365,2,'','255,255,128'),(365,3,'','255,165,0'),(365,4,'','255,0,0'),(366,0,'','236,233,216'),(366,1,'','128,255,128'),(366,2,'','255,255,128'),(366,3,'','255,165,0'),(366,4,'','255,0,0'),(367,0,'','236,233,216'),(367,1,'','128,255,128'),(367,2,'','255,255,128'),(367,3,'','255,165,0'),(367,4,'','255,0,0'),(368,0,'','236,233,216'),(368,1,'','128,255,128'),(368,2,'','255,255,128'),(368,3,'','255,165,0'),(368,4,'','255,0,0'),(369,0,'','236,233,216'),(369,1,'','128,255,128'),(369,2,'','255,255,128'),(369,3,'','255,165,0'),(369,4,'','255,0,0'),(370,0,'','236,233,216'),(370,1,'','128,255,128'),(370,2,'','255,255,128'),(370,3,'','255,165,0'),(370,4,'','255,0,0'),(371,0,'','236,233,216'),(371,1,'','128,255,128'),(371,2,'','255,255,128'),(371,3,'','255,165,0'),(371,4,'','255,0,0'),(371,5,'','30,144,255'),(372,0,'','236,233,216'),(372,1,'','128,255,128'),(372,2,'','255,255,128'),(372,3,'','255,165,0'),(372,4,'','255,0,0'),(372,5,'','30,144,255'),(373,0,'','236,233,216'),(373,1,'','128,255,128'),(373,2,'','255,255,128'),(373,3,'','255,165,0'),(373,4,'','255,0,0'),(374,0,'','236,233,216'),(374,1,'','128,255,128'),(374,2,'','255,255,128'),(374,3,'','255,165,0'),(374,4,'','255,0,0'),(375,0,'','236,233,216'),(375,1,'','128,255,128'),(375,2,'','255,255,128'),(375,3,'','255,165,0'),(375,4,'','255,0,0'),(376,0,'','236,233,216'),(376,1,'','128,255,128'),(376,2,'','255,255,128'),(376,3,'','255,165,0'),(376,4,'','255,0,0'),(377,0,'','236,233,216'),(377,1,'','128,255,128'),(377,2,'','255,255,128'),(377,3,'','255,165,0'),(377,4,'','255,0,0'),(378,0,'','236,233,216'),(378,1,'','128,255,128'),(378,2,'','255,255,128'),(378,3,'','255,165,0'),(378,4,'','255,0,0'),(379,0,'','236,233,216'),(379,1,'','128,255,128'),(379,2,'','255,255,128'),(379,3,'','255,165,0'),(379,4,'','255,0,0'),(380,0,'','236,233,216'),(380,1,'','128,255,128'),(380,2,'','255,255,128'),(380,3,'','255,165,0'),(380,4,'','255,0,0'),(381,0,'','236,233,216'),(381,1,'','128,255,128'),(381,2,'','255,255,128'),(381,3,'','255,165,0'),(381,4,'','255,0,0'),(382,0,'','236,233,216'),(382,1,'','128,255,128'),(382,2,'','255,255,128'),(382,3,'','255,165,0'),(382,4,'','255,0,0'),(383,0,'','236,233,216'),(383,1,'','128,255,128'),(383,2,'','255,255,128'),(383,3,'','255,165,0'),(383,4,'','255,0,0'),(384,0,'','236,233,216'),(384,1,'','128,255,128'),(384,2,'','255,255,128'),(384,3,'','255,165,0'),(384,4,'','255,0,0'),(385,0,'','236,233,216'),(385,1,'','128,255,128'),(385,2,'','255,255,128'),(385,3,'','255,165,0'),(385,4,'','255,0,0'),(386,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(386,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(386,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(386,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(386,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(387,0,'','236,233,216'),(387,1,'','128,255,128'),(387,2,'','255,255,128'),(387,3,'','255,165,0'),(387,4,'','255,0,0'),(388,0,'','236,233,216'),(388,1,'','128,255,128'),(388,2,'','255,255,128'),(388,3,'','255,165,0'),(388,4,'','255,0,0'),(389,0,'','236,233,216'),(389,1,'','128,255,128'),(389,2,'','255,255,128'),(389,3,'','255,165,0'),(389,4,'','255,0,0'),(390,0,'','236,233,216'),(390,1,'','128,255,128'),(390,2,'','255,255,128'),(390,3,'','255,165,0'),(390,4,'','255,0,0'),(391,0,'','236,233,216'),(391,1,'','128,255,128'),(391,2,'','255,255,128'),(391,3,'','255,165,0'),(391,4,'','255,0,0'),(392,0,'','236,233,216'),(392,1,'','128,255,128'),(392,2,'','255,255,128'),(392,3,'','255,165,0'),(392,4,'','255,0,0'),(393,0,'','240,240,240'),(393,1,'','128,255,128'),(393,2,'','255,255,128'),(393,3,'','255,128,0'),(393,4,'','255,0,0'),(393,5,'','30,144,255'),(394,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(394,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(394,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(394,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(394,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(394,5,'','30,144,255'),(395,0,'','236,233,216'),(395,1,'','128,255,128'),(395,2,'','255,255,128'),(395,3,'','255,165,0'),(395,4,'','255,0,0'),(396,0,'','236,233,216'),(396,1,'','128,255,128'),(396,2,'','255,255,128'),(396,3,'','255,165,0'),(396,4,'','255,0,0'),(397,0,'','236,233,216'),(397,1,'','128,255,128'),(397,2,'','255,255,128'),(397,3,'','255,165,0'),(397,4,'','255,0,0'),(398,0,'','236,233,216'),(398,1,'','128,255,128'),(398,2,'','255,255,128'),(398,3,'','255,165,0'),(398,4,'','255,0,0'),(399,0,'','236,233,216'),(399,1,'','128,255,128'),(399,2,'','255,255,128'),(399,3,'','255,165,0'),(399,4,'','255,0,0'),(400,0,'','236,233,216'),(400,1,'','128,255,128'),(400,2,'','255,255,128'),(400,3,'','255,165,0'),(400,4,'','255,0,0'),(401,0,'','236,233,216'),(401,1,'','128,255,128'),(401,2,'','255,255,128'),(401,3,'','255,165,0'),(401,4,'','255,0,0'),(402,0,'','236,233,216'),(402,1,'','128,255,128'),(402,2,'','255,255,128'),(402,3,'','255,165,0'),(402,4,'','255,0,0'),(403,0,'','236,233,216'),(403,1,'','128,255,128'),(403,2,'','255,255,128'),(403,3,'','255,165,0'),(403,4,'','255,0,0'),(404,0,'','236,233,216'),(404,1,'','128,255,128'),(404,2,'','255,255,128'),(404,3,'','255,165,0'),(404,4,'','255,0,0'),(405,0,'','236,233,216'),(405,1,'','128,255,128'),(405,2,'','255,255,128'),(405,3,'','255,165,0'),(405,4,'','255,0,0'),(406,0,'','236,233,216'),(406,1,'','128,255,128'),(406,2,'','255,255,128'),(406,3,'','255,165,0'),(406,4,'','255,0,0'),(407,0,'','236,233,216'),(407,1,'','128,255,128'),(407,2,'','255,255,128'),(407,3,'','255,165,0'),(407,4,'','255,0,0'),(408,0,'','236,233,216'),(408,1,'','128,255,128'),(408,2,'','255,255,128'),(408,3,'','255,165,0'),(408,4,'','255,0,0'),(409,0,'','236,233,216'),(409,1,'','128,255,128'),(409,2,'','255,255,128'),(409,3,'','255,165,0'),(409,4,'','255,0,0'),(410,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(410,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(410,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(410,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(410,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(411,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(411,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(411,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(411,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(411,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(412,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(412,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(412,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(412,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(412,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(413,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(413,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(413,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(413,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(413,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(414,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(414,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(414,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(414,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(414,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(415,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(415,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(415,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(415,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(415,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(416,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(416,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(416,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(416,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(416,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(417,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(417,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(417,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(417,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(417,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(418,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(418,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(418,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(418,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(418,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(419,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(419,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(419,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(419,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(419,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(420,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(420,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(420,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(420,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(420,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(421,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(421,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(421,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(421,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(421,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(422,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(422,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(422,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(422,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(422,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(423,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(423,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(423,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(423,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(423,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(424,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(424,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(424,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(424,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(424,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(425,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(425,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(425,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(425,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(425,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(426,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(426,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(426,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(426,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(426,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(427,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(427,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(427,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(427,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(427,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(428,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(428,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(428,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(428,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(428,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(429,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(429,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(429,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(429,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(429,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(430,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(430,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(430,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(430,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(430,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(431,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(431,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(431,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(431,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(431,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(432,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(432,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(432,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(432,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(432,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(433,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(433,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(433,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(433,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(433,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(434,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(434,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(434,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(434,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(434,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(435,0,'','236,233,216'),(435,1,'','128,255,128'),(435,2,'','255,255,128'),(435,3,'','255,165,0'),(435,4,'','255,0,0'),(436,0,'','236,233,216'),(436,1,'','128,255,128'),(436,2,'','255,255,128'),(436,3,'','255,165,0'),(436,4,'','255,0,0'),(437,0,'','236,233,216'),(437,1,'','128,255,128'),(437,2,'','255,255,128'),(437,3,'','255,165,0'),(437,4,'','255,0,0'),(438,0,'','236,233,216'),(438,1,'','128,255,128'),(438,2,'','255,255,128'),(438,3,'','255,165,0'),(438,4,'','255,0,0'),(439,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(439,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(439,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(439,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(439,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(440,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(440,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(440,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(440,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(440,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(441,0,'','236,233,216'),(441,1,'','128,255,128'),(441,2,'','255,255,128'),(441,3,'','255,165,0'),(441,4,'','255,0,0'),(442,0,'','236,233,216'),(442,1,'','128,255,128'),(442,2,'','255,255,128'),(442,3,'','255,165,0'),(442,4,'','255,0,0'),(443,0,'','236,233,216'),(443,1,'','128,255,128'),(443,2,'','255,255,128'),(443,3,'','255,165,0'),(443,4,'','255,0,0'),(444,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(444,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(444,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(444,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(444,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(445,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(445,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(445,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(445,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(445,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(446,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(446,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(446,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(446,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(446,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(447,0,'','236,233,216'),(447,1,'','128,255,128'),(447,2,'','255,255,128'),(447,3,'','255,165,0'),(447,4,'','255,0,0'),(448,0,'','236,233,216'),(448,1,'','128,255,128'),(448,2,'','255,255,128'),(448,3,'','255,165,0'),(448,4,'','255,0,0'),(449,0,'','236,233,216'),(449,1,'','128,255,128'),(449,2,'','255,255,128'),(449,3,'','255,165,0'),(449,4,'','255,0,0'),(450,0,'','236,233,216'),(450,1,'','128,255,128'),(450,2,'','255,255,128'),(450,3,'','255,165,0'),(450,4,'','255,0,0'),(451,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(451,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(451,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(451,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(451,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(452,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(452,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(452,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(452,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(452,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(453,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(453,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(453,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(453,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(453,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(454,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(454,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(454,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(454,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(454,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(455,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(455,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(455,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(455,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(455,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(456,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(456,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(456,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(456,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(456,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(457,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(457,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(457,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(457,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(457,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(458,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(458,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(458,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(458,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(458,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(459,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(459,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(459,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(459,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(459,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(460,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(460,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(460,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(460,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(460,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(461,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(461,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(461,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(461,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(461,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(462,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(462,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(462,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(462,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(462,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(463,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(463,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(463,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(463,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(463,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(464,0,'C:\\RCS2010\\bitmap\\led_inde.ico','212,208,200'),(464,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(464,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(464,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(464,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(465,0,'','236,233,216'),(465,1,'','128,255,128'),(465,2,'','255,255,128'),(465,3,'','255,165,0'),(465,4,'','255,0,0'),(465,5,'','30,144,255'),(466,0,'','236,233,216'),(466,1,'','128,255,128'),(466,2,'','255,255,128'),(466,3,'','255,165,0'),(466,4,'','255,0,0'),(466,5,'','30,144,255'),(467,0,'','236,233,216'),(467,1,'','128,255,128'),(467,2,'','255,255,128'),(467,3,'','255,165,0'),(467,4,'','255,0,0'),(467,5,'','30,144,255'),(468,0,'','236,233,216'),(468,1,'','128,255,128'),(468,2,'','255,255,128'),(468,3,'','255,165,0'),(468,4,'','255,0,0'),(468,5,'','30,144,255'),(469,0,'','236,233,216'),(469,1,'','128,255,128'),(469,2,'','255,255,128'),(469,3,'','255,165,0'),(469,4,'','255,0,0'),(469,5,'','30,144,255'),(470,0,'','236,233,216'),(470,1,'','128,255,128'),(470,2,'','255,255,128'),(470,3,'','255,165,0'),(470,4,'','255,0,0'),(471,0,'','236,233,216'),(471,1,'','128,255,128'),(471,2,'','255,255,128'),(471,3,'','255,165,0'),(471,4,'','255,0,0'),(471,5,'','30,144,255'),(472,0,'','236,233,216'),(472,1,'','128,255,128'),(472,2,'','255,255,128'),(472,3,'','255,165,0'),(472,4,'','255,0,0'),(472,5,'','30,144,255'),(473,0,'','236,233,216'),(473,1,'','128,255,128'),(473,2,'','255,255,128'),(473,3,'','255,165,0'),(473,4,'','255,0,0'),(473,5,'','30,144,255'),(474,0,'','236,233,216'),(474,1,'','128,255,128'),(474,2,'','255,255,128'),(474,3,'','255,165,0'),(474,4,'','255,0,0'),(474,5,'','30,144,255'),(475,0,'','236,233,216'),(475,1,'','128,255,128'),(475,2,'','255,255,128'),(475,3,'','255,165,0'),(475,4,'','255,0,0'),(475,5,'','30,144,255'),(476,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(476,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(476,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(476,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(476,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(476,5,'','30,144,255'),(477,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(477,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(477,2,'','255,255,128'),(477,3,'','255,165,0'),(477,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(477,5,'','30,144,255'),(478,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(478,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(478,2,'','255,255,128'),(478,3,'','255,165,0'),(478,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(478,5,'','30,144,255'),(479,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(479,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(479,2,'','255,255,128'),(479,3,'','255,165,0'),(479,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(479,5,'','30,144,255'),(480,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(480,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(480,2,'','255,255,128'),(480,3,'','255,165,0'),(480,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(480,5,'','30,144,255'),(481,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(481,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(481,2,'','255,255,128'),(481,3,'','255,165,0'),(481,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(481,5,'','30,144,255'),(482,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(482,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(482,2,'','255,255,128'),(482,3,'','255,165,0'),(482,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(482,5,'','30,144,255'),(483,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(483,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(483,2,'','255,255,128'),(483,3,'','255,165,0'),(483,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(483,5,'','30,144,255'),(484,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(484,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(484,2,'','255,255,128'),(484,3,'','255,165,0'),(484,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(484,5,'','30,144,255'),(485,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(485,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(485,2,'','255,255,128'),(485,3,'','255,165,0'),(485,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(485,5,'','30,144,255'),(486,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(486,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(486,2,'','255,255,128'),(486,3,'','255,165,0'),(486,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(487,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(487,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(487,2,'','255,255,128'),(487,3,'','255,165,0'),(487,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(488,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(488,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(488,2,'','255,255,128'),(488,3,'','255,165,0'),(488,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(489,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(489,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(489,2,'','255,255,128'),(489,3,'','255,165,0'),(489,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(489,5,'','30,144,255'),(490,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(490,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(490,2,'','255,255,128'),(490,3,'','255,165,0'),(490,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(491,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(491,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(491,2,'','255,255,128'),(491,3,'','255,165,0'),(491,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(492,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(492,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(492,2,'','255,255,128'),(492,3,'','255,165,0'),(492,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(493,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(493,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(493,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(493,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(493,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(493,5,'','30,144,255'),(494,0,'','236,233,216'),(494,1,'','128,255,128'),(494,2,'','255,255,128'),(494,3,'','255,165,0'),(494,4,'','255,0,0'),(495,0,'','236,233,216'),(495,1,'','128,255,128'),(495,2,'','255,255,128'),(495,3,'','255,165,0'),(495,4,'','255,0,0'),(496,0,'','236,233,216'),(496,1,'','128,255,128'),(496,2,'','255,255,128'),(496,3,'','255,165,0'),(496,4,'','255,0,0'),(497,0,'','236,233,216'),(497,1,'','128,255,128'),(497,2,'','255,255,128'),(497,3,'','255,165,0'),(497,4,'','255,0,0'),(498,0,'','236,233,216'),(498,1,'','128,255,128'),(498,2,'','255,255,128'),(498,3,'','255,165,0'),(498,4,'','255,0,0'),(499,0,'','236,233,216'),(499,1,'','128,255,128'),(499,2,'','255,255,128'),(499,3,'','255,165,0'),(499,4,'','255,0,0'),(500,0,'','236,233,216'),(500,1,'','128,255,128'),(500,2,'','255,255,128'),(500,3,'','255,165,0'),(500,4,'','255,0,0'),(501,0,'','236,233,216'),(501,1,'','128,255,128'),(501,2,'','255,255,128'),(501,3,'','255,165,0'),(501,4,'','255,0,0'),(502,0,'','236,233,216'),(502,1,'','128,255,128'),(502,2,'','255,255,128'),(502,3,'','255,165,0'),(502,4,'','255,0,0'),(503,0,'','236,233,216'),(503,1,'','128,255,128'),(503,2,'','255,255,128'),(503,3,'','255,165,0'),(503,4,'','255,0,0'),(504,0,'','236,233,216'),(504,1,'','128,255,128'),(504,2,'','255,255,128'),(504,3,'','255,165,0'),(504,4,'','255,0,0'),(504,5,'','30,144,255'),(505,0,'','236,233,216'),(505,1,'','128,255,128'),(505,2,'','255,255,128'),(505,3,'','255,165,0'),(505,4,'','255,0,0'),(505,5,'','30,144,255'),(506,0,'','236,233,216'),(506,1,'','128,255,128'),(506,2,'','255,255,128'),(506,3,'','255,165,0'),(506,4,'','255,0,0'),(506,5,'','30,144,255'),(507,0,'','236,233,216'),(507,1,'','128,255,128'),(507,2,'','255,255,128'),(507,3,'','255,165,0'),(507,4,'','255,0,0'),(507,5,'','30,144,255'),(508,0,'','236,233,216'),(508,1,'','128,255,128'),(508,2,'','255,255,128'),(508,3,'','255,165,0'),(508,4,'','255,0,0'),(508,5,'','30,144,255'),(509,0,'','236,233,216'),(509,1,'','128,255,128'),(509,2,'','255,255,128'),(509,3,'','255,165,0'),(509,4,'','255,0,0'),(510,0,'','236,233,216'),(510,1,'','128,255,128'),(510,2,'','255,255,128'),(510,3,'','255,165,0'),(510,4,'','255,0,0'),(510,5,'','30,144,255'),(511,0,'','236,233,216'),(511,1,'','128,255,128'),(511,2,'','255,255,128'),(511,3,'','255,165,0'),(511,4,'','255,0,0'),(511,5,'','30,144,255'),(512,0,'','236,233,216'),(512,1,'','128,255,128'),(512,2,'','255,255,128'),(512,3,'','255,165,0'),(512,4,'','255,0,0'),(512,5,'','30,144,255'),(513,0,'','236,233,216'),(513,1,'','128,255,128'),(513,2,'','255,255,128'),(513,3,'','255,165,0'),(513,4,'','255,0,0'),(513,5,'','30,144,255'),(514,0,'','236,233,216'),(514,1,'','128,255,128'),(514,2,'','255,255,128'),(514,3,'','255,165,0'),(514,4,'','255,0,0'),(514,5,'','30,144,255'),(515,0,'','236,233,216'),(515,1,'','128,255,128'),(515,2,'','255,255,128'),(515,3,'','255,165,0'),(515,4,'','255,0,0'),(515,5,'','30,144,255'),(516,0,'','236,233,216'),(516,1,'','128,255,128'),(516,2,'','255,255,128'),(516,3,'','255,165,0'),(516,4,'','255,0,0'),(516,5,'','30,144,255'),(517,0,'','236,233,216'),(517,1,'','128,255,128'),(517,2,'','255,255,128'),(517,3,'','255,165,0'),(517,4,'','255,0,0'),(517,5,'','30,144,255'),(518,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(518,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(518,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(518,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(518,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(519,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(519,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(519,2,'','255,255,128'),(519,3,'','255,165,0'),(519,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(520,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(520,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(520,2,'','255,255,128'),(520,3,'','255,165,0'),(520,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(521,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(521,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(521,2,'','255,255,128'),(521,3,'','255,165,0'),(521,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(522,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(522,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(522,2,'','255,255,128'),(522,3,'','255,165,0'),(522,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(522,5,'','30,144,255'),(523,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(523,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(523,2,'','255,255,128'),(523,3,'','255,165,0'),(523,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(524,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(524,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(524,2,'','255,255,128'),(524,3,'','255,165,0'),(524,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(525,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(525,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(525,2,'','255,255,128'),(525,3,'','255,165,0'),(525,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(526,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(526,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(526,2,'','255,255,128'),(526,3,'','255,165,0'),(526,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(527,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(527,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(527,2,'','255,255,128'),(527,3,'','255,165,0'),(527,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(528,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(528,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(528,2,'','255,255,128'),(528,3,'','255,165,0'),(528,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(529,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(529,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(529,2,'','255,255,128'),(529,3,'','255,165,0'),(529,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(530,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(530,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(530,2,'','255,255,128'),(530,3,'','255,165,0'),(530,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(531,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(531,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(531,2,'','255,255,128'),(531,3,'','255,165,0'),(531,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(532,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(532,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(532,2,'','255,255,128'),(532,3,'','255,165,0'),(532,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(533,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(533,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(533,2,'','255,255,128'),(533,3,'','255,165,0'),(533,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(534,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(534,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(534,2,'','255,255,128'),(534,3,'','255,165,0'),(534,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(535,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(535,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(535,2,'','255,255,128'),(535,3,'','255,165,0'),(535,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(536,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(536,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(536,2,'','255,255,128'),(536,3,'','255,165,0'),(536,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(537,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(537,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(537,2,'','255,255,128'),(537,3,'','255,165,0'),(537,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(538,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(538,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(538,2,'','255,255,128'),(538,3,'','255,165,0'),(538,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(539,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(539,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(539,2,'','255,255,128'),(539,3,'','255,165,0'),(539,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(540,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(540,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(540,2,'','255,255,128'),(540,3,'','255,165,0'),(540,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(541,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(541,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(541,2,'','255,255,128'),(541,3,'','255,165,0'),(541,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(542,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(542,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(542,2,'','255,255,128'),(542,3,'','255,165,0'),(542,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(543,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(543,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(543,2,'','255,255,128'),(543,3,'','255,165,0'),(543,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(544,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(544,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(544,2,'','255,255,128'),(544,3,'','255,165,0'),(544,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(545,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(545,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(545,2,'','255,255,128'),(545,3,'','255,165,0'),(545,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(546,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(546,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(546,2,'','255,255,128'),(546,3,'','255,165,0'),(546,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(547,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(547,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(547,2,'','255,255,128'),(547,3,'','255,165,0'),(547,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(548,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(548,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(548,2,'','255,255,128'),(548,3,'','255,165,0'),(548,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(549,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(549,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(549,2,'','255,255,128'),(549,3,'','255,165,0'),(549,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(550,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(550,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(550,2,'','255,255,128'),(550,3,'','255,165,0'),(550,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(551,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(551,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(551,2,'','255,255,128'),(551,3,'','255,165,0'),(551,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(552,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(552,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(552,2,'','255,255,128'),(552,3,'','255,165,0'),(552,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(553,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(553,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(553,2,'','255,255,128'),(553,3,'','255,165,0'),(553,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(554,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(554,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(554,2,'','255,255,128'),(554,3,'','255,165,0'),(554,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(555,0,'','236,233,216'),(555,1,'','128,255,128'),(555,2,'','255,255,128'),(555,3,'','255,165,0'),(555,4,'','255,0,0'),(555,5,'','30,144,255'),(556,0,'','236,233,216'),(556,1,'','128,255,128'),(556,2,'','255,255,128'),(556,3,'','255,165,0'),(556,4,'','255,0,0'),(556,5,'','30,144,255'),(557,0,'','236,233,216'),(557,1,'','128,255,128'),(557,2,'','255,255,128'),(557,3,'','255,165,0'),(557,4,'','255,0,0'),(557,5,'','30,144,255'),(558,0,'','240,240,240'),(558,1,'','0,170,0'),(558,2,'','255,0,0'),(558,3,'','255,165,0'),(558,4,'','255,165,0'),(558,5,'','30,144,255'),(559,0,'','236,233,216'),(559,1,'','128,255,128'),(559,2,'','255,255,128'),(559,3,'','255,165,0'),(559,4,'','255,0,0'),(560,0,'','236,233,216'),(560,1,'','128,255,128'),(560,2,'','255,255,128'),(560,3,'','255,165,0'),(560,4,'','255,0,0'),(561,0,'','236,233,216'),(561,1,'','128,255,128'),(561,2,'','255,255,128'),(561,3,'','255,165,0'),(561,4,'','255,0,0'),(562,0,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','236,233,216'),(562,1,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Encendido.JPG','128,255,128'),(562,2,'','255,255,128'),(562,3,'','255,165,0'),(562,4,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG','255,0,0'),(563,0,'','236,233,216'),(563,1,'','128,255,128'),(563,2,'','255,255,128'),(563,3,'','255,165,0'),(563,4,'','255,0,0'),(564,0,'','236,233,216'),(564,1,'','128,255,128'),(564,2,'','255,255,128'),(564,3,'','255,165,0'),(564,4,'','255,0,0'),(565,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(565,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(565,2,'','255,255,128'),(565,3,'','255,165,0'),(565,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(566,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(566,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(566,2,'','255,255,128'),(566,3,'','255,165,0'),(566,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(567,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(567,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(567,2,'','255,255,128'),(567,3,'','255,165,0'),(567,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(568,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(568,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(568,2,'','255,255,128'),(568,3,'','255,165,0'),(568,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(569,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(569,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(569,2,'','255,255,128'),(569,3,'','255,165,0'),(569,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(570,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(570,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(570,2,'','255,255,128'),(570,3,'','255,165,0'),(570,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(571,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(571,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(571,2,'','255,255,128'),(571,3,'','255,165,0'),(571,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(572,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(572,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(572,2,'','255,255,128'),(572,3,'','255,165,0'),(572,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(573,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(573,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(573,2,'','255,255,128'),(573,3,'','255,165,0'),(573,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(574,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(574,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(574,2,'','255,255,128'),(574,3,'','255,165,0'),(574,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(575,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(575,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(575,2,'','255,255,128'),(575,3,'','255,165,0'),(575,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(576,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(576,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(576,2,'','255,255,128'),(576,3,'','255,165,0'),(576,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(577,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(577,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(577,2,'','255,255,128'),(577,3,'','255,165,0'),(577,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(578,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(578,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(578,2,'','255,255,128'),(578,3,'','255,165,0'),(578,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(579,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(579,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(579,2,'','255,255,128'),(579,3,'','255,165,0'),(579,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(580,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(580,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(580,2,'','255,255,128'),(580,3,'','255,165,0'),(580,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(581,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(581,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(581,2,'','255,255,128'),(581,3,'','255,165,0'),(581,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(582,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(582,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(582,2,'','255,255,128'),(582,3,'','255,165,0'),(582,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(583,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(583,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(583,2,'','255,255,128'),(583,3,'','255,165,0'),(583,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(584,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(584,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(584,2,'','255,255,128'),(584,3,'','255,165,0'),(584,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(585,0,'','236,233,216'),(585,1,'','128,255,128'),(585,2,'','255,255,128'),(585,3,'','255,165,0'),(585,4,'','255,0,0'),(586,0,'','236,233,216'),(586,1,'','128,255,128'),(586,2,'','255,255,128'),(586,3,'','255,165,0'),(586,4,'','255,0,0'),(587,0,'','236,233,216'),(587,1,'','128,255,128'),(587,2,'','255,255,128'),(587,3,'','255,165,0'),(587,4,'','255,0,0'),(588,0,'','236,233,216'),(588,1,'','128,255,128'),(588,2,'','255,255,128'),(588,3,'','255,165,0'),(588,4,'','255,0,0'),(589,0,'','236,233,216'),(589,1,'','128,255,128'),(589,2,'','255,255,128'),(589,3,'','255,165,0'),(589,4,'','255,0,0'),(590,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(590,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepeque¤o.ico','128,255,128'),(590,2,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,255,128'),(590,3,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,165,0'),(590,4,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,0,0'),(591,0,'','236,233,216'),(591,1,'','128,255,128'),(591,2,'','255,255,128'),(591,3,'','255,165,0'),(591,4,'','255,0,0'),(592,0,'','236,233,216'),(592,1,'','128,255,128'),(592,2,'','255,255,128'),(592,3,'','255,0,0'),(592,4,'','255,0,0'),(592,5,'','30,144,255'),(593,0,'','236,233,216'),(593,1,'','128,255,128'),(593,2,'','255,255,128'),(593,3,'','255,165,0'),(593,4,'','255,0,0'),(593,5,'','30,144,255'),(594,0,'','236,233,216'),(594,1,'','128,255,128'),(594,2,'','255,255,128'),(594,3,'','255,165,0'),(594,4,'','255,0,0'),(594,5,'','30,144,255'),(595,0,'','236,233,216'),(595,1,'','128,255,128'),(595,2,'','255,255,128'),(595,3,'','255,165,0'),(595,4,'','255,0,0'),(596,0,'','236,233,216'),(596,1,'','128,255,128'),(596,2,'','255,255,128'),(596,3,'','255,165,0'),(596,4,'','255,0,0'),(596,5,'','30,144,255'),(597,0,'','236,233,216'),(597,1,'','128,255,128'),(597,2,'','255,255,128'),(597,3,'','255,165,0'),(597,4,'','255,0,0'),(597,5,'','30,144,255'),(598,0,'','236,233,216'),(598,1,'','128,255,128'),(598,2,'','255,255,128'),(598,3,'','255,165,0'),(598,4,'','255,0,0'),(599,0,'','236,233,216'),(599,1,'','128,255,128'),(599,2,'','255,255,128'),(599,3,'','255,0,0'),(599,4,'','255,0,0'),(599,5,'','30,144,255'),(600,0,'','236,233,216'),(600,1,'','128,255,128'),(600,2,'','255,255,128'),(600,3,'','255,165,0'),(600,4,'','255,0,0'),(601,0,'','236,233,216'),(601,1,'','128,255,128'),(601,2,'','255,255,128'),(601,3,'','255,165,0'),(601,4,'','255,0,0'),(602,0,'','236,233,216'),(602,1,'','128,255,128'),(602,2,'','255,255,128'),(602,3,'','255,165,0'),(602,4,'','255,0,0'),(603,0,'','236,233,216'),(603,1,'','128,255,128'),(603,2,'','255,255,128'),(603,3,'','255,165,0'),(603,4,'','255,0,0'),(603,5,'','30,144,255'),(604,0,'','240,240,240'),(604,1,'','0,170,0'),(604,2,'','255,255,128'),(604,3,'','255,165,0'),(604,4,'','255,0,0'),(604,5,'','30,144,255'),(605,0,'','240,240,240'),(605,1,'','128,255,128'),(605,2,'','255,255,128'),(605,3,'','255,165,0'),(605,4,'','255,0,0'),(605,5,'','30,144,255'),(606,0,'','240,240,240'),(606,1,'','0,170,0'),(606,2,'','255,255,128'),(606,3,'','255,165,0'),(606,4,'','255,0,0'),(606,5,'','30,144,255'),(607,0,'','240,240,240'),(607,1,'','0,170,0'),(607,2,'','255,255,128'),(607,3,'','255,165,0'),(607,4,'','255,0,0'),(607,5,'','30,144,255'),(608,0,'','240,240,240'),(608,1,'','0,170,0'),(608,2,'','128,128,128'),(608,3,'','128,128,128'),(608,4,'','255,0,0'),(608,5,'','30,144,255'),(609,0,'','236,233,216'),(609,1,'','128,255,128'),(609,2,'','255,255,128'),(609,3,'','255,165,0'),(609,4,'','255,0,0'),(609,5,'','30,144,255'),(610,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(610,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(610,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(610,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(610,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(611,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(611,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(611,2,'','255,255,128'),(611,3,'','255,165,0'),(611,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(612,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(612,1,'C:\\RCS2010\\bitmap\\ledOk.ico','128,255,128'),(612,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(612,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(612,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(613,0,'','236,233,216'),(613,1,'','128,255,128'),(613,2,'','255,255,128'),(613,3,'','255,165,0'),(613,4,'','255,0,0'),(614,0,'','236,233,216'),(614,1,'','128,255,128'),(614,2,'','255,255,128'),(614,3,'','255,165,0'),(614,4,'','255,0,0'),(615,0,'','236,233,216'),(615,1,'','128,255,128'),(615,2,'','255,255,128'),(615,3,'','255,165,0'),(615,4,'','255,0,0'),(616,0,'C:\\RCS2010\\bitmap\\VorDomingo\\SEA30VDTX.JPG','236,233,216'),(616,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(616,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(616,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(616,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(617,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(617,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(617,2,'','255,255,128'),(617,3,'','255,165,0'),(617,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(618,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(618,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(618,2,'','255,255,128'),(618,3,'','255,165,0'),(618,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(619,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(619,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(619,2,'','255,255,128'),(619,3,'','255,165,0'),(619,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(620,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(620,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(620,2,'','255,255,128'),(620,3,'','255,165,0'),(620,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(621,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(621,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(621,2,'','255,255,128'),(621,3,'','255,165,0'),(621,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(622,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(622,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(622,2,'','255,255,128'),(622,3,'','255,165,0'),(622,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(623,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(623,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(623,2,'','255,255,128'),(623,3,'','255,165,0'),(623,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(624,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(624,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(624,2,'','255,255,128'),(624,3,'','255,165,0'),(624,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(625,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(625,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(625,2,'','255,255,128'),(625,3,'','255,165,0'),(625,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(626,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(626,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(626,2,'','255,255,128'),(626,3,'','255,165,0'),(626,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(627,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(627,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(627,2,'','255,255,128'),(627,3,'','255,165,0'),(627,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(628,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(628,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(628,2,'','255,255,128'),(628,3,'','255,165,0'),(628,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(629,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(629,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(629,2,'','255,255,128'),(629,3,'','255,165,0'),(629,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(630,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(630,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(630,2,'','255,255,128'),(630,3,'','255,165,0'),(630,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(631,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(631,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(631,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(631,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(631,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(631,5,'','30,144,255'),(632,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(632,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(632,2,'','255,255,128'),(632,3,'','255,165,0'),(632,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(633,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(633,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(633,2,'','255,255,128'),(633,3,'','255,165,0'),(633,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(634,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(634,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(634,2,'','255,255,128'),(634,3,'','255,165,0'),(634,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(635,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(635,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(635,2,'','255,255,128'),(635,3,'','255,165,0'),(635,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(636,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(636,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(636,2,'','255,255,128'),(636,3,'','255,165,0'),(636,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(637,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(637,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(637,2,'','255,255,128'),(637,3,'','255,165,0'),(637,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(638,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(638,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(638,2,'','255,255,128'),(638,3,'','255,165,0'),(638,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(639,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(639,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(639,2,'','255,255,128'),(639,3,'','255,165,0'),(639,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(640,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(640,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(640,2,'','255,255,128'),(640,3,'','255,165,0'),(640,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(641,0,'','236,233,216'),(641,1,'','128,255,128'),(641,2,'','255,255,128'),(641,3,'','255,165,0'),(641,4,'','255,0,0'),(642,0,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico','236,233,216'),(642,1,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico','128,255,128'),(642,2,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,255,128'),(642,3,'C:\\RCS2010\\bitmap\\ledAlarmapequeÏo.ico','255,165,0'),(642,4,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico','255,0,0'),(643,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(643,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(643,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(643,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(643,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(643,5,'','30,144,255'),(644,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(644,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(644,2,'','255,255,128'),(644,3,'','255,165,0'),(644,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(645,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(645,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(645,2,'','255,255,128'),(645,3,'','255,165,0'),(645,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(646,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(646,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(646,2,'','255,255,128'),(646,3,'','255,165,0'),(646,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(647,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(647,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(647,2,'','255,255,128'),(647,3,'','255,165,0'),(647,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(648,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(648,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(648,2,'','255,255,128'),(648,3,'','255,165,0'),(648,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(649,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(649,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(649,2,'','255,255,128'),(649,3,'','255,165,0'),(649,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(650,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(650,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(650,2,'','255,255,128'),(650,3,'','255,165,0'),(650,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(651,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(651,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(651,2,'','255,255,128'),(651,3,'','255,165,0'),(651,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(652,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(652,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(652,2,'','255,255,128'),(652,3,'','255,165,0'),(652,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(653,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(653,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(653,2,'','255,255,128'),(653,3,'','255,165,0'),(653,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(654,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(654,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(654,2,'','255,255,128'),(654,3,'','255,165,0'),(654,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(655,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(655,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(655,2,'','255,255,128'),(655,3,'','255,165,0'),(655,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(656,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(656,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(656,2,'','255,255,128'),(656,3,'','255,165,0'),(656,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(657,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(657,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(657,2,'','255,255,128'),(657,3,'','255,165,0'),(657,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(658,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(658,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(658,2,'','255,255,128'),(658,3,'','255,165,0'),(658,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(659,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(659,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(659,2,'','255,255,128'),(659,3,'','255,165,0'),(659,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(659,5,'','30,144,255'),(660,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(660,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(660,2,'','255,255,128'),(660,3,'','255,165,0'),(660,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(661,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(661,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(661,2,'','255,255,128'),(661,3,'','255,165,0'),(661,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(662,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(662,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(662,2,'','255,255,128'),(662,3,'','255,165,0'),(662,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(663,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(663,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(663,2,'','255,255,128'),(663,3,'','255,165,0'),(663,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(664,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(664,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(664,2,'','255,255,128'),(664,3,'','255,165,0'),(664,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(665,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(665,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(665,2,'','255,255,128'),(665,3,'','255,165,0'),(665,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(666,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(666,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(666,2,'','255,255,128'),(666,3,'','255,165,0'),(666,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(667,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(667,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(667,2,'','255,255,128'),(667,3,'','255,165,0'),(667,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(668,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(668,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(668,2,'','255,255,128'),(668,3,'','255,165,0'),(668,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(669,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(669,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(669,2,'','255,255,128'),(669,3,'','255,165,0'),(669,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(670,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(670,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(670,2,'','255,255,128'),(670,3,'','255,165,0'),(670,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(671,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(671,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(671,2,'','255,255,128'),(671,3,'','255,165,0'),(671,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(672,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(672,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(672,2,'','255,255,128'),(672,3,'','255,165,0'),(672,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(673,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(673,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(673,2,'','255,255,128'),(673,3,'','255,165,0'),(673,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(674,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(674,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(674,2,'','255,255,128'),(674,3,'','255,165,0'),(674,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(675,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(675,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(675,2,'','255,255,128'),(675,3,'','255,165,0'),(675,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(676,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(676,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(676,2,'','255,255,128'),(676,3,'','255,165,0'),(676,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(677,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(677,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(677,2,'','255,255,128'),(677,3,'','255,165,0'),(677,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(678,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(678,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(678,2,'','255,255,128'),(678,3,'','255,165,0'),(678,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(679,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(679,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(679,2,'','255,255,128'),(679,3,'','255,165,0'),(679,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(680,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(680,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(680,2,'','255,255,128'),(680,3,'','255,165,0'),(680,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(681,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(681,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(681,2,'','255,255,128'),(681,3,'','255,165,0'),(681,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(682,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(682,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(682,2,'','255,255,128'),(682,3,'','255,165,0'),(682,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(683,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(683,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(683,2,'','255,255,128'),(683,3,'','255,165,0'),(683,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(684,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(684,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(684,2,'','255,255,128'),(684,3,'','255,165,0'),(684,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(685,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(685,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(685,2,'','255,255,128'),(685,3,'','255,165,0'),(685,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(686,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(686,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(686,2,'','255,255,128'),(686,3,'','255,165,0'),(686,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(687,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(687,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(687,2,'','255,255,128'),(687,3,'','255,165,0'),(687,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(688,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(688,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(688,2,'','255,255,128'),(688,3,'','255,165,0'),(688,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(689,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(689,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(689,2,'','255,255,128'),(689,3,'','255,165,0'),(689,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(690,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(690,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(690,2,'','255,255,128'),(690,3,'','255,165,0'),(690,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(691,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(691,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(691,2,'','255,255,128'),(691,3,'','255,165,0'),(691,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(692,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(692,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(692,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(692,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(692,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(692,5,'','30,144,255'),(693,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(693,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(693,2,'','255,255,128'),(693,3,'','255,165,0'),(693,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(694,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(694,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(694,2,'','255,255,128'),(694,3,'','255,165,0'),(694,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(695,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(695,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(695,2,'','255,255,128'),(695,3,'','255,165,0'),(695,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(696,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(696,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(696,2,'','255,255,128'),(696,3,'','255,165,0'),(696,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(697,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(697,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(697,2,'','255,255,128'),(697,3,'','255,165,0'),(697,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(698,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(698,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(698,2,'','255,255,128'),(698,3,'','255,165,0'),(698,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(699,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(699,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(699,2,'','255,255,128'),(699,3,'','255,165,0'),(699,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(700,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(700,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(700,2,'','255,255,128'),(700,3,'','255,165,0'),(700,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(701,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(701,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(701,2,'','255,255,128'),(701,3,'','255,165,0'),(701,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(702,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(702,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(702,2,'','255,255,128'),(702,3,'','255,165,0'),(702,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(703,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(703,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(703,2,'','255,255,128'),(703,3,'','255,165,0'),(703,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(704,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(704,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(704,2,'','255,255,128'),(704,3,'','255,165,0'),(704,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(705,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(705,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(705,2,'','255,255,128'),(705,3,'','255,165,0'),(705,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(706,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(706,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(706,2,'','255,255,128'),(706,3,'','255,165,0'),(706,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(707,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(707,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(707,2,'','255,255,128'),(707,3,'','255,165,0'),(707,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(708,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(708,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(708,2,'','255,255,128'),(708,3,'','255,165,0'),(708,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(708,5,'','30,144,255'),(709,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(709,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(709,2,'','255,255,128'),(709,3,'','255,165,0'),(709,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(710,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(710,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(710,2,'','255,255,128'),(710,3,'','255,165,0'),(710,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(711,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(711,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(711,2,'','255,255,128'),(711,3,'','255,165,0'),(711,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(712,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(712,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(712,2,'','255,255,128'),(712,3,'','255,165,0'),(712,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(713,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(713,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(713,2,'','255,255,128'),(713,3,'','255,165,0'),(713,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(714,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(714,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(714,2,'','255,255,128'),(714,3,'','255,165,0'),(714,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(715,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(715,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(715,2,'','255,255,128'),(715,3,'','255,165,0'),(715,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(715,5,'','30,144,255'),(716,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(716,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(716,2,'','255,255,128'),(716,3,'','255,165,0'),(716,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(716,5,'','30,144,255'),(717,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(717,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(717,2,'','255,255,128'),(717,3,'','255,165,0'),(717,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(717,5,'','30,144,255'),(718,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(718,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(718,2,'','255,255,128'),(718,3,'','255,165,0'),(718,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(718,5,'','30,144,255'),(719,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(719,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(719,2,'','255,255,128'),(719,3,'','255,165,0'),(719,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(719,5,'','30,144,255'),(720,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(720,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(720,2,'','255,255,128'),(720,3,'','255,165,0'),(720,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(721,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(721,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(721,2,'','255,255,128'),(721,3,'','255,165,0'),(721,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(721,5,'','30,144,255'),(722,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(722,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(722,2,'','255,255,128'),(722,3,'','255,165,0'),(722,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(722,5,'','30,144,255'),(723,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(723,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(723,2,'','255,255,128'),(723,3,'','255,165,0'),(723,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(724,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(724,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(724,2,'','255,255,128'),(724,3,'','255,165,0'),(724,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(725,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(725,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(725,2,'','255,255,128'),(725,3,'','255,165,0'),(725,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(726,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(726,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(726,2,'','255,255,128'),(726,3,'','255,165,0'),(726,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(727,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(727,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(727,2,'','255,255,128'),(727,3,'','255,165,0'),(727,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(728,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(728,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(728,2,'','255,255,128'),(728,3,'','255,165,0'),(728,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(729,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(729,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(729,2,'','255,255,128'),(729,3,'','255,165,0'),(729,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(730,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(730,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(730,2,'','255,255,128'),(730,3,'','255,165,0'),(730,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(730,5,'','30,144,255'),(731,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(731,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(731,2,'','255,255,128'),(731,3,'','255,165,0'),(731,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(732,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(732,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(732,2,'','255,255,128'),(732,3,'','255,165,0'),(732,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(733,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(733,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(733,2,'','255,255,128'),(733,3,'','255,165,0'),(733,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(734,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(734,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(734,2,'','255,255,128'),(734,3,'','255,165,0'),(734,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(735,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(735,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(735,2,'','255,255,128'),(735,3,'','255,165,0'),(735,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(736,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(736,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(736,2,'','255,255,128'),(736,3,'','255,165,0'),(736,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(737,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(737,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(737,2,'','255,255,128'),(737,3,'','255,165,0'),(737,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(738,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(738,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(738,2,'','255,255,128'),(738,3,'','255,165,0'),(738,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(739,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(739,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(739,2,'','255,255,128'),(739,3,'','255,165,0'),(739,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(740,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(740,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(740,2,'','255,255,128'),(740,3,'','255,165,0'),(740,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(741,0,'C:\\RCS2010\\bitmap\\led_inde.ico','192,192,192'),(741,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(741,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(741,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(741,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(741,5,'','30,144,255'),(742,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(742,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(742,2,'','255,255,128'),(742,3,'','255,165,0'),(742,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(742,5,'','30,144,255'),(743,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(743,1,'C:\\RCS2010\\bitmap\\ledOk.ico','0,170,0'),(743,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(743,3,'C:\\RCS2010\\bitmap\\ledAlerta.ico','255,165,0'),(743,4,'C:\\RCS2010\\bitmap\\ledAlarma.ico','255,0,0'),(743,5,'','30,144,255'),(744,0,'','236,233,216'),(744,1,'','0,170,0'),(744,2,'','255,255,128'),(744,3,'','255,165,0'),(744,4,'','255,0,0'),(744,5,'','30,144,255'),(745,0,'','240,240,240'),(745,1,'','0,170,0'),(745,2,'','128,128,128'),(745,3,'','128,128,128'),(745,4,'','255,0,0'),(745,5,'','30,144,255'),(746,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(746,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(746,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(746,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(746,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(747,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(747,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(747,2,'','255,255,128'),(747,3,'','255,165,0'),(747,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(748,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(748,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(748,2,'','255,255,128'),(748,3,'','255,165,0'),(748,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(749,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(749,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(749,2,'','255,255,128'),(749,3,'','255,165,0'),(749,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(750,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(750,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(750,2,'','255,255,128'),(750,3,'','255,165,0'),(750,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(751,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(751,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(751,2,'','255,255,128'),(751,3,'','255,165,0'),(751,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(752,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(752,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(752,2,'','255,255,128'),(752,3,'','255,165,0'),(752,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(753,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(753,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(753,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(753,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(753,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(754,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(754,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(754,2,'','255,255,128'),(754,3,'','255,165,0'),(754,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(755,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(755,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(755,2,'','255,255,128'),(755,3,'','255,165,0'),(755,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(756,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(756,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(756,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(756,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(756,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(756,5,'','30,144,255'),(757,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(757,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(757,2,'','255,255,128'),(757,3,'','255,165,0'),(757,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(757,5,'','30,144,255'),(758,0,'C:\\RCS2010\\bitmap\\led_inde.ico','236,233,216'),(758,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(758,2,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,255,128'),(758,3,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico','255,165,0'),(758,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(759,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(759,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(759,2,'','255,255,128'),(759,3,'','255,165,0'),(759,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(760,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(760,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(760,2,'','255,255,128'),(760,3,'','255,165,0'),(760,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(761,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(761,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(761,2,'','255,255,128'),(761,3,'','255,165,0'),(761,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(762,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(762,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(762,2,'','255,255,128'),(762,3,'','255,165,0'),(762,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(763,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(763,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(763,2,'','255,255,128'),(763,3,'','255,165,0'),(763,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(764,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(764,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(764,2,'','255,255,128'),(764,3,'','255,165,0'),(764,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(765,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(765,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(765,2,'','255,255,128'),(765,3,'','255,165,0'),(765,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(766,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(766,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(766,2,'','255,255,128'),(766,3,'','255,165,0'),(766,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(767,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(767,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(767,2,'','255,255,128'),(767,3,'','255,165,0'),(767,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(768,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(768,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','128,255,128'),(768,2,'','255,255,128'),(768,3,'','255,165,0'),(768,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(769,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(769,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(769,2,'','255,255,128'),(769,3,'','255,165,0'),(769,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(770,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(770,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(770,2,'','255,255,128'),(770,3,'','255,165,0'),(770,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(771,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(771,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(771,2,'','255,255,128'),(771,3,'','255,165,0'),(771,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(772,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(772,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(772,2,'','255,255,128'),(772,3,'','255,165,0'),(772,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(773,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(773,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(773,2,'','255,255,128'),(773,3,'','255,165,0'),(773,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(774,0,'','236,233,216'),(774,1,'','0,170,0'),(774,2,'','255,255,128'),(774,3,'','255,165,0'),(774,4,'','255,0,0'),(775,0,'','236,233,216'),(775,1,'','0,170,0'),(775,2,'','255,255,128'),(775,3,'','255,165,0'),(775,4,'','255,0,0'),(776,0,'','236,233,216'),(776,1,'','0,170,0'),(776,2,'','255,255,128'),(776,3,'','255,165,0'),(776,4,'','255,0,0'),(777,0,'','236,233,216'),(777,1,'','0,170,0'),(777,2,'','255,255,128'),(777,3,'','255,165,0'),(777,4,'','255,0,0'),(778,0,'','236,233,216'),(778,1,'','0,170,0'),(778,2,'','255,255,128'),(778,3,'','255,165,0'),(778,4,'','255,0,0'),(779,0,'','236,233,216'),(779,1,'','0,170,0'),(779,2,'','255,255,128'),(779,3,'','255,165,0'),(779,4,'','255,0,0'),(780,0,'','236,233,216'),(780,1,'','0,170,0'),(780,2,'','255,255,128'),(780,3,'','255,165,0'),(780,4,'','255,0,0'),(781,0,'','236,233,216'),(781,1,'','0,170,0'),(781,2,'','255,255,128'),(781,3,'','255,165,0'),(781,4,'','255,0,0'),(782,0,'','236,233,216'),(782,1,'','0,170,0'),(782,2,'','255,255,128'),(782,3,'','255,165,0'),(782,4,'','255,0,0'),(783,0,'','236,233,216'),(783,1,'','0,170,0'),(783,2,'','255,255,128'),(783,3,'','255,165,0'),(783,4,'','255,0,0'),(784,0,'','236,233,216'),(784,1,'','0,170,0'),(784,2,'','255,255,128'),(784,3,'','255,165,0'),(784,4,'','255,0,0'),(785,0,'','236,233,216'),(785,1,'','0,170,0'),(785,2,'','255,255,128'),(785,3,'','255,165,0'),(785,4,'','255,0,0'),(786,0,'','236,233,216'),(786,1,'','0,170,0'),(786,2,'','255,255,128'),(786,3,'','255,165,0'),(786,4,'','255,0,0'),(787,0,'','236,233,216'),(787,1,'','0,170,0'),(787,2,'','255,255,128'),(787,3,'','255,165,0'),(787,4,'','255,0,0'),(788,0,'','236,233,216'),(788,1,'','0,170,0'),(788,2,'','255,255,128'),(788,3,'','255,165,0'),(788,4,'','255,0,0'),(789,0,'','236,233,216'),(789,1,'','0,170,0'),(789,2,'','255,255,128'),(789,3,'','255,165,0'),(789,4,'','255,0,0'),(789,5,'','30,144,255'),(790,0,'','236,233,216'),(790,1,'','0,170,0'),(790,2,'','255,255,128'),(790,3,'','255,165,0'),(790,4,'','255,0,0'),(790,5,'','30,144,255'),(791,0,'','236,233,216'),(791,1,'','0,170,0'),(791,2,'','255,255,128'),(791,3,'','255,165,0'),(791,4,'','255,0,0'),(791,5,'','30,144,255'),(792,0,'','236,233,216'),(792,1,'','0,170,0'),(792,2,'','255,255,128'),(792,3,'','255,165,0'),(792,4,'','255,0,0'),(792,5,'','30,144,255'),(793,0,'','236,233,216'),(793,1,'','0,170,0'),(793,2,'','255,255,128'),(793,3,'','255,165,0'),(793,4,'','255,0,0'),(794,0,'','236,233,216'),(794,1,'','0,170,0'),(794,2,'','255,255,128'),(794,3,'','255,165,0'),(794,4,'','255,0,0'),(795,0,'','236,233,216'),(795,1,'','0,170,0'),(795,2,'','255,255,128'),(795,3,'','255,165,0'),(795,4,'','255,0,0'),(796,0,'','236,233,216'),(796,1,'','0,170,0'),(796,2,'','255,255,128'),(796,3,'','255,165,0'),(796,4,'','255,0,0'),(796,5,'','30,144,255'),(797,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(797,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(797,2,'','255,255,128'),(797,3,'','255,165,0'),(797,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(797,5,'','30,144,255'),(798,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(798,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(798,2,'','255,255,128'),(798,3,'','255,165,0'),(798,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(799,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(799,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(799,2,'','255,255,128'),(799,3,'','255,165,0'),(799,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(799,5,'','30,144,255'),(800,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(800,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(800,2,'','255,255,128'),(800,3,'','255,165,0'),(800,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(801,0,'','236,233,216'),(801,1,'','0,170,0'),(801,2,'','255,255,128'),(801,3,'','255,165,0'),(801,4,'','255,0,0'),(802,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(802,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(802,2,'','255,255,128'),(802,3,'','255,165,0'),(802,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(803,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(803,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(803,2,'','255,255,128'),(803,3,'','255,165,0'),(803,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(804,0,'','236,233,216'),(804,1,'','0,170,0'),(804,2,'','255,255,128'),(804,3,'','255,165,0'),(804,4,'','255,0,0'),(805,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(805,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(805,2,'','255,255,128'),(805,3,'','255,165,0'),(805,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(806,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(806,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(806,2,'','255,255,128'),(806,3,'','255,165,0'),(806,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(807,0,'','236,233,216'),(807,1,'','0,170,0'),(807,2,'','255,255,128'),(807,3,'','255,165,0'),(807,4,'','255,0,0'),(807,5,'','30,144,255'),(808,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(808,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(808,2,'','255,255,128'),(808,3,'','255,165,0'),(808,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(808,5,'','30,144,255'),(809,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(809,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(809,2,'','255,255,128'),(809,3,'','255,165,0'),(809,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(809,5,'','30,144,255'),(810,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(810,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(810,2,'','255,255,128'),(810,3,'','255,165,0'),(810,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(810,5,'','30,144,255'),(811,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(811,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(811,2,'','255,255,128'),(811,3,'','255,165,0'),(811,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(811,5,'','30,144,255'),(812,0,'','236,233,216'),(812,1,'','0,170,0'),(812,2,'','255,255,128'),(812,3,'','255,165,0'),(812,4,'','255,0,0'),(812,5,'','30,144,255'),(813,0,'','236,233,216'),(813,1,'','0,170,0'),(813,2,'','255,255,128'),(813,3,'','255,165,0'),(813,4,'','255,0,0'),(813,5,'','30,144,255'),(814,0,'','236,233,216'),(814,1,'','0,170,0'),(814,2,'','255,255,128'),(814,3,'','255,165,0'),(814,4,'','255,0,0'),(814,5,'','30,144,255'),(815,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(815,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(815,2,'','255,255,128'),(815,3,'','255,165,0'),(815,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(815,5,'','30,144,255'),(816,0,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico','236,233,216'),(816,1,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico','0,170,0'),(816,2,'','255,255,128'),(816,3,'','255,165,0'),(816,4,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico','255,0,0'),(816,5,'','30,144,255'),(817,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(817,1,'C:\\RCS2010\\bitmap\\CORABoton.bmp','0,170,0'),(817,2,'','255,255,128'),(817,3,'','255,165,0'),(817,4,'C:\\RCS2010\\bitmap\\CORALocalAuto.bmp','255,0,0'),(817,5,'','30,144,255'),(818,0,'C:\\RCS2010\\bitmap\\CORABoton.jpg','236,233,216'),(818,1,'C:\\RCS2010\\bitmap\\CORABoton.jpg','0,170,0'),(818,2,'','255,255,128'),(818,3,'','255,165,0'),(818,4,'C:\\RCS2010\\bitmap\\CORABoton.bmp','255,0,0'),(818,5,'','30,144,255'),(819,0,'','236,233,216'),(819,1,'','0,170,0'),(819,2,'','255,255,128'),(819,3,'','255,165,0'),(819,4,'','255,0,0'),(819,5,'','30,144,255'),(820,0,'C:\\RCS2010\\bitmap\\CORABoton.bmp','236,233,216'),(820,1,'C:\\RCS2010\\bitmap\\CORALocalAuto.bmp','0,170,0'),(820,2,'','255,255,128'),(820,3,'','255,165,0'),(820,4,'C:\\RCS2010\\bitmap\\CORABoton.bmp','255,0,0'),(820,5,'','30,144,255'),(821,0,'C:\\RCS2010\\bitmap\\ledCORANaranjaEncendido.ico','236,233,216'),(821,1,'C:\\RCS2010\\bitmap\\CORABoton.jpg','0,170,0'),(821,2,'','255,255,128'),(821,3,'','255,165,0'),(821,4,'C:\\RCS2010\\bitmap\\CORABoton.jpg','255,0,0'),(821,5,'','30,144,255'),(822,0,'C:\\RCS2010\\bitmap\\ledCORANaranjaEncendido.ico','236,233,216'),(822,1,'C:\\RCS2010\\bitmap\\CORALocalAuto.bmp','0,170,0'),(822,2,'','255,255,128'),(822,3,'','255,165,0'),(822,4,'C:\\RCS2010\\bitmap\\CORABoton.bmp','255,0,0'),(822,5,'C:\\RCS2010\\bitmap\\CORABoton.bmp','30,144,255'),(823,0,'','236,233,216'),(823,1,'','0,170,0'),(823,2,'','255,255,128'),(823,3,'','255,165,0'),(823,4,'','255,0,0'),(823,5,'','30,144,255'),(824,0,'','240,240,240'),(824,1,'','0,170,0'),(824,2,'','255,255,128'),(824,3,'','255,165,0'),(824,4,'','255,0,0'),(824,5,'','30,144,255'),(825,0,'','240,240,240'),(825,1,'','0,170,0'),(825,2,'','255,255,128'),(825,3,'','255,165,0'),(825,4,'','255,0,0'),(825,5,'','30,144,255'),(826,0,'','240,240,240'),(826,1,'','0,170,0'),(826,2,'','255,255,128'),(826,3,'','255,165,0'),(826,4,'','255,0,0'),(826,5,'','30,144,255'),(827,0,'','240,240,240'),(827,1,'','0,170,0'),(827,2,'','255,255,128'),(827,3,'','255,165,0'),(827,4,'','255,0,0'),(827,5,'','30,144,255'),(828,0,'','240,240,240'),(828,1,'','128,255,128'),(828,2,'','255,255,128'),(828,3,'','255,128,0'),(828,4,'','255,0,0'),(828,5,'','30,144,255'),(829,0,'','240,240,240'),(829,1,'','0,170,0'),(829,2,'','255,255,128'),(829,3,'','255,165,0'),(829,4,'','255,0,0'),(829,5,'','30,144,255'),(830,0,'','240,240,240'),(830,1,'','0,170,0'),(830,2,'','255,255,128'),(830,3,'','255,165,0'),(830,4,'','255,0,0'),(830,5,'','30,144,255'),(831,0,'','240,240,240'),(831,1,'','0,170,0'),(831,2,'','255,255,128'),(831,3,'','255,165,0'),(831,4,'','255,0,0'),(831,5,'','30,144,255'),(832,0,'','240,240,240'),(832,1,'','0,170,0'),(832,2,'','255,255,128'),(832,3,'','255,165,0'),(832,4,'','255,0,0'),(832,5,'','30,144,255'),(833,0,'C:\\RCS2010\\bitmapSEA30_Led_Rojo_Apagado.JPG','240,240,240'),(833,1,'','0,170,0'),(833,2,'','255,255,128'),(833,3,'','255,165,0'),(833,4,'','255,0,0'),(833,5,'','30,144,255'),(834,0,'','240,240,240'),(834,1,'','0,170,0'),(834,2,'','255,255,128'),(834,3,'','255,165,0'),(834,4,'','255,0,0'),(834,5,'','30,144,255'),(835,0,'','240,240,240'),(835,1,'','0,170,0'),(835,2,'','255,255,128'),(835,3,'','255,165,0'),(835,4,'','255,0,0'),(835,5,'','30,144,255'),(836,0,'','240,240,240'),(836,1,'','0,170,0'),(836,2,'','255,255,128'),(836,3,'','255,165,0'),(836,4,'','255,0,0'),(836,5,'','30,144,255'),(837,0,'','240,240,240'),(837,1,'','0,170,0'),(837,2,'','255,255,128'),(837,3,'','255,165,0'),(837,4,'','255,0,0'),(837,5,'','30,144,255'),(838,0,'','240,240,240'),(838,1,'','0,170,0'),(838,2,'','255,255,128'),(838,3,'','255,165,0'),(838,4,'','255,0,0'),(838,5,'','30,144,255'),(839,0,'','240,240,240'),(839,1,'','0,170,0'),(839,2,'','255,255,128'),(839,3,'','255,165,0'),(839,4,'','255,0,0'),(839,5,'','30,144,255'),(840,0,'','240,240,240'),(840,1,'','0,170,0'),(840,2,'','255,255,128'),(840,3,'','255,165,0'),(840,4,'','255,0,0'),(840,5,'','30,144,255'),(841,0,'','240,240,240'),(841,1,'','0,170,0'),(841,2,'','255,255,128'),(841,3,'','255,165,0'),(841,4,'','255,0,0'),(841,5,'','30,144,255'),(842,0,'','240,240,240'),(842,1,'','0,170,0'),(842,2,'','255,255,128'),(842,3,'','255,165,0'),(842,4,'','255,0,0'),(842,5,'','30,144,255'),(843,0,'','240,240,240'),(843,1,'','0,170,0'),(843,2,'','255,255,128'),(843,3,'','255,165,0'),(843,4,'','255,0,0'),(843,5,'','30,144,255'),(844,0,'','240,240,240'),(844,1,'','0,170,0'),(844,2,'','255,255,128'),(844,3,'','255,165,0'),(844,4,'','255,0,0'),(844,5,'','30,144,255'),(845,0,'','240,240,240'),(845,1,'','0,170,0'),(845,2,'','255,255,128'),(845,3,'','255,165,0'),(845,4,'','255,0,0'),(845,5,'','30,144,255'),(846,0,'','240,240,240'),(846,1,'','0,170,0'),(846,2,'','255,255,128'),(846,3,'','255,165,0'),(846,4,'','255,0,0'),(846,5,'','30,144,255'),(847,0,'','240,240,240'),(847,1,'','0,170,0'),(847,2,'','255,255,128'),(847,3,'','255,165,0'),(847,4,'','255,0,0'),(847,5,'','30,144,255'),(848,0,'','240,240,240'),(848,1,'','0,170,0'),(848,2,'','255,255,128'),(848,3,'','255,165,0'),(848,4,'','255,0,0'),(848,5,'','30,144,255'),(849,0,'','240,240,240'),(849,1,'','0,170,0'),(849,2,'','255,255,128'),(849,3,'','255,165,0'),(849,4,'','255,0,0'),(849,5,'','30,144,255'),(850,0,'','240,240,240'),(850,1,'','0,170,0'),(850,2,'','255,255,128'),(850,3,'','255,165,0'),(850,4,'','255,0,0'),(850,5,'','30,144,255'),(851,0,'','240,240,240'),(851,1,'','0,170,0'),(851,2,'','255,255,128'),(851,3,'','255,165,0'),(851,4,'','255,0,0'),(851,5,'','30,144,255'),(852,0,'','240,240,240'),(852,1,'','0,170,0'),(852,2,'','255,255,128'),(852,3,'','255,165,0'),(852,4,'','255,0,0'),(852,5,'','30,144,255'),(853,0,'','240,240,240'),(853,1,'','0,170,0'),(853,2,'','255,255,128'),(853,3,'','255,165,0'),(853,4,'','255,0,0'),(853,5,'','30,144,255'),(854,0,'','240,240,240'),(854,1,'','0,170,0'),(854,2,'','255,255,128'),(854,3,'','255,165,0'),(854,4,'','255,0,0'),(854,5,'','30,144,255'),(855,0,'','240,240,240'),(855,1,'','0,170,0'),(855,2,'','255,255,128'),(855,3,'','255,165,0'),(855,4,'','255,0,0'),(855,5,'','30,144,255'),(856,0,'','240,240,240'),(856,1,'','0,170,0'),(856,2,'','255,255,128'),(856,3,'','255,165,0'),(856,4,'','255,0,0'),(856,5,'','30,144,255'),(857,0,'','240,240,240'),(857,1,'','0,170,0'),(857,2,'','255,255,128'),(857,3,'','255,165,0'),(857,4,'','255,0,0'),(857,5,'','30,144,255'),(858,0,'','240,240,240'),(858,1,'','0,170,0'),(858,2,'','255,255,128'),(858,3,'','255,165,0'),(858,4,'','255,0,0'),(858,5,'','30,144,255'),(859,0,'','240,240,240'),(859,1,'','0,170,0'),(859,2,'','255,255,128'),(859,3,'','255,165,0'),(859,4,'','255,0,0'),(859,5,'','30,144,255'),(860,0,'','240,240,240'),(860,1,'','0,170,0'),(860,2,'','255,255,128'),(860,3,'','255,165,0'),(860,4,'','255,0,0'),(860,5,'','30,144,255'),(861,0,'','240,240,240'),(861,1,'','0,170,0'),(861,2,'','255,255,128'),(861,3,'','255,165,0'),(861,4,'','255,0,0'),(861,5,'','30,144,255'),(862,0,'','240,240,240'),(862,1,'','0,170,0'),(862,2,'','255,255,128'),(862,3,'','255,165,0'),(862,4,'','255,0,0'),(862,5,'','30,144,255'),(863,0,'','240,240,240'),(863,1,'','0,170,0'),(863,2,'','255,255,128'),(863,3,'','255,165,0'),(863,4,'','255,0,0'),(863,5,'','30,144,255'),(864,0,'','240,240,240'),(864,1,'','0,170,0'),(864,2,'','255,255,128'),(864,3,'','255,165,0'),(864,4,'','255,0,0'),(864,5,'','30,144,255'),(865,0,'','240,240,240'),(865,1,'','0,170,0'),(865,2,'','255,255,128'),(865,3,'','255,165,0'),(865,4,'','255,0,0'),(865,5,'','30,144,255'),(866,0,'','240,240,240'),(866,1,'','0,170,0'),(866,2,'','255,255,128'),(866,3,'','255,165,0'),(866,4,'','255,0,0'),(866,5,'','30,144,255'),(867,0,'','240,240,240'),(867,1,'','0,170,0'),(867,2,'','255,255,128'),(867,3,'','255,165,0'),(867,4,'','255,0,0'),(867,5,'','30,144,255'),(868,0,'','240,240,240'),(868,1,'','0,170,0'),(868,2,'','255,255,128'),(868,3,'','255,165,0'),(868,4,'','255,0,0'),(868,5,'','30,144,255'),(869,0,'','240,240,240'),(869,1,'','0,170,0'),(869,2,'','255,255,128'),(869,3,'','255,165,0'),(869,4,'','255,0,0'),(869,5,'','30,144,255'),(870,0,'','240,240,240'),(870,1,'','0,170,0'),(870,2,'','255,255,128'),(870,3,'','255,165,0'),(870,4,'','255,0,0'),(870,5,'','30,144,255'),(871,0,'','240,240,240'),(871,1,'','0,170,0'),(871,2,'','255,255,128'),(871,3,'','255,165,0'),(871,4,'','255,0,0'),(871,5,'','30,144,255'),(872,0,'','240,240,240'),(872,1,'','0,170,0'),(872,2,'','255,255,128'),(872,3,'','255,165,0'),(872,4,'','255,0,0'),(872,5,'','30,144,255'),(873,0,'','240,240,240'),(873,1,'','0,170,0'),(873,2,'','255,255,128'),(873,3,'','255,165,0'),(873,4,'','255,0,0'),(873,5,'','30,144,255'),(874,0,'','240,240,240'),(874,1,'','128,255,128'),(874,2,'','255,255,128'),(874,3,'','255,165,0'),(874,4,'','255,0,0'),(874,5,'','30,144,255'),(875,0,'','240,240,240'),(875,1,'','0,170,0'),(875,2,'','255,255,128'),(875,3,'','255,165,0'),(875,4,'','255,0,0'),(875,5,'','30,144,255'),(876,0,'','240,240,240'),(876,1,'','0,170,0'),(876,2,'','255,255,128'),(876,3,'','255,165,0'),(876,4,'','255,0,0'),(876,5,'','30,144,255'),(877,0,'','240,240,240'),(877,1,'','0,170,0'),(877,2,'','255,255,128'),(877,3,'','255,165,0'),(877,4,'','255,0,0'),(877,5,'','30,144,255'),(878,0,'','240,240,240'),(878,1,'','0,170,0'),(878,2,'','255,255,128'),(878,3,'','255,165,0'),(878,4,'','255,0,0'),(878,5,'','30,144,255'),(879,0,'','240,240,240'),(879,1,'','0,170,0'),(879,2,'','255,255,128'),(879,3,'','255,165,0'),(879,4,'','255,0,0'),(879,5,'','30,144,255'),(880,0,'','240,240,240'),(880,1,'','0,170,0'),(880,2,'','255,255,128'),(880,3,'','255,165,0'),(880,4,'','255,0,0'),(880,5,'','30,144,255'),(881,0,'','240,240,240'),(881,1,'','0,170,0'),(881,2,'','255,255,128'),(881,3,'','255,165,0'),(881,4,'','255,0,0'),(881,5,'','30,144,255'),(882,0,'','240,240,240'),(882,1,'','0,170,0'),(882,2,'','255,255,128'),(882,3,'','255,165,0'),(882,4,'','255,0,0'),(882,5,'','30,144,255'),(883,0,'','240,240,240'),(883,1,'','0,170,0'),(883,2,'','255,255,128'),(883,3,'','255,165,0'),(883,4,'','255,0,0'),(883,5,'','30,144,255'),(884,0,'','240,240,240'),(884,1,'','0,170,0'),(884,2,'','255,255,128'),(884,3,'','255,165,0'),(884,4,'','255,0,0'),(884,5,'','30,144,255'),(885,0,'','240,240,240'),(885,1,'','0,170,0'),(885,2,'','255,255,128'),(885,3,'','255,165,0'),(885,4,'','255,0,0'),(885,5,'','30,144,255'),(886,0,'','240,240,240'),(886,1,'','0,170,0'),(886,2,'','255,255,128'),(886,3,'','255,165,0'),(886,4,'','255,0,0'),(886,5,'','30,144,255'),(887,0,'','240,240,240'),(887,1,'','0,170,0'),(887,2,'','255,255,128'),(887,3,'','255,165,0'),(887,4,'','255,0,0'),(887,5,'','30,144,255'),(888,0,'','240,240,240'),(888,1,'','0,170,0'),(888,2,'','255,255,128'),(888,3,'','255,165,0'),(888,4,'','255,0,0'),(888,5,'','30,144,255'),(889,0,'','240,240,240'),(889,1,'','0,170,0'),(889,2,'','255,255,128'),(889,3,'','255,165,0'),(889,4,'','255,0,0'),(889,5,'','30,144,255'),(890,0,'','240,240,240'),(890,1,'','0,170,0'),(890,2,'','255,255,128'),(890,3,'','255,165,0'),(890,4,'','255,0,0'),(890,5,'','30,144,255'),(891,0,'','240,240,240'),(891,1,'','0,170,0'),(891,2,'','255,255,128'),(891,3,'','255,165,0'),(891,4,'','255,0,0'),(891,5,'','30,144,255'),(892,0,'','240,240,240'),(892,1,'','0,170,0'),(892,2,'','255,255,128'),(892,3,'','255,165,0'),(892,4,'','255,0,0'),(892,5,'','30,144,255'),(893,0,'','240,240,240'),(893,1,'','0,170,0'),(893,2,'','255,255,128'),(893,3,'','255,165,0'),(893,4,'','255,0,0'),(893,5,'','30,144,255'),(894,0,'','240,240,240'),(894,1,'','0,170,0'),(894,2,'','255,255,128'),(894,3,'','255,165,0'),(894,4,'','255,0,0'),(894,5,'','30,144,255'),(895,0,'','240,240,240'),(895,1,'','0,170,0'),(895,2,'','255,255,128'),(895,3,'','255,165,0'),(895,4,'','255,0,0'),(895,5,'','30,144,255'),(896,0,'','240,240,240'),(896,1,'','0,170,0'),(896,2,'','255,255,128'),(896,3,'','255,165,0'),(896,4,'','255,0,0'),(896,5,'','30,144,255'),(897,0,'','240,240,240'),(897,1,'','0,170,0'),(897,2,'','255,255,128'),(897,3,'','255,165,0'),(897,4,'','255,0,0'),(897,5,'','30,144,255'),(898,0,'','240,240,240'),(898,1,'','0,170,0'),(898,2,'','255,255,128'),(898,3,'','255,165,0'),(898,4,'','255,0,0'),(898,5,'','30,144,255'),(899,0,'','240,240,240'),(899,1,'','0,170,0'),(899,2,'','255,255,128'),(899,3,'','255,165,0'),(899,4,'','255,0,0'),(899,5,'','30,144,255'),(900,0,'','240,240,240'),(900,1,'','0,170,0'),(900,2,'','255,255,128'),(900,3,'','255,165,0'),(900,4,'','255,0,0'),(900,5,'','30,144,255'),(901,0,'','240,240,240'),(901,1,'','0,170,0'),(901,2,'','255,255,128'),(901,3,'','255,165,0'),(901,4,'','255,0,0'),(901,5,'','30,144,255'),(902,0,'','240,240,240'),(902,1,'','0,170,0'),(902,2,'','255,255,128'),(902,3,'','255,165,0'),(902,4,'','255,0,0'),(902,5,'','30,144,255'),(903,0,'','240,240,240'),(903,1,'','0,170,0'),(903,2,'','255,255,128'),(903,3,'','255,165,0'),(903,4,'','255,0,0'),(903,5,'','30,144,255'),(904,0,'','240,240,240'),(904,1,'','0,170,0'),(904,2,'','255,255,128'),(904,3,'','255,165,0'),(904,4,'','255,0,0'),(904,5,'','30,144,255'),(905,0,'','240,240,240'),(905,1,'','0,170,0'),(905,2,'','255,255,128'),(905,3,'','255,165,0'),(905,4,'','255,0,0'),(905,5,'','30,144,255'),(906,0,'','240,240,240'),(906,1,'','0,170,0'),(906,2,'','255,255,128'),(906,3,'','255,165,0'),(906,4,'','255,0,0'),(906,5,'','30,144,255'),(907,0,'','240,240,240'),(907,1,'','0,170,0'),(907,2,'','255,255,128'),(907,3,'','255,165,0'),(907,4,'','255,0,0'),(907,5,'','30,144,255'),(908,0,'','240,240,240'),(908,1,'','0,170,0'),(908,2,'','255,255,128'),(908,3,'','255,165,0'),(908,4,'','255,0,0'),(908,5,'','30,144,255'),(909,0,'','240,240,240'),(909,1,'','0,170,0'),(909,2,'','255,255,128'),(909,3,'','255,165,0'),(909,4,'','255,0,0'),(909,5,'','30,144,255'),(910,0,'','240,240,240'),(910,1,'','0,170,0'),(910,2,'','255,255,128'),(910,3,'','255,165,0'),(910,4,'','255,0,0'),(910,5,'','30,144,255'),(911,0,'','240,240,240'),(911,1,'','0,170,0'),(911,2,'','255,255,128'),(911,3,'','255,165,0'),(911,4,'','255,0,0'),(911,5,'','30,144,255'),(912,0,'','240,240,240'),(912,1,'','0,170,0'),(912,2,'','255,255,128'),(912,3,'','255,165,0'),(912,4,'','255,0,0'),(912,5,'','30,144,255'),(913,0,'','240,240,240'),(913,1,'','0,170,0'),(913,2,'','255,255,128'),(913,3,'','255,165,0'),(913,4,'','255,0,0'),(913,5,'','30,144,255'),(914,0,'','240,240,240'),(914,1,'','0,170,0'),(914,2,'','255,255,128'),(914,3,'','255,165,0'),(914,4,'','255,0,0'),(914,5,'','30,144,255'),(915,0,'','240,240,240'),(915,1,'','0,170,0'),(915,2,'','255,255,128'),(915,3,'','255,165,0'),(915,4,'','255,0,0'),(915,5,'','30,144,255'),(916,0,'','240,240,240'),(916,1,'','0,170,0'),(916,2,'','255,255,128'),(916,3,'','255,165,0'),(916,4,'','255,0,0'),(916,5,'','30,144,255'),(917,0,'','240,240,240'),(917,1,'','0,170,0'),(917,2,'','255,255,128'),(917,3,'','255,165,0'),(917,4,'','255,0,0'),(917,5,'','30,144,255'),(918,0,'','240,240,240'),(918,1,'','0,170,0'),(918,2,'','255,255,128'),(918,3,'','255,165,0'),(918,4,'','255,0,0'),(918,5,'','30,144,255'),(919,0,'','240,240,240'),(919,1,'','0,170,0'),(919,2,'','255,255,128'),(919,3,'','255,165,0'),(919,4,'','255,0,0'),(919,5,'','30,144,255'),(920,0,'','240,240,240'),(920,1,'','0,170,0'),(920,2,'','255,255,128'),(920,3,'','255,165,0'),(920,4,'','255,0,0'),(920,5,'','30,144,255'),(921,0,'','240,240,240'),(921,1,'','0,170,0'),(921,2,'','255,255,128'),(921,3,'','255,165,0'),(921,4,'','255,0,0'),(921,5,'','30,144,255'),(922,0,'','240,240,240'),(922,1,'','0,170,0'),(922,2,'','255,0,0'),(922,3,'','255,0,0'),(922,4,'','255,0,0'),(922,5,'','30,144,255'),(923,0,'','240,240,240'),(923,1,'','0,170,0'),(923,2,'','255,0,0'),(923,3,'','255,0,0'),(923,4,'','255,0,0'),(923,5,'','30,144,255'),(924,0,'','240,240,240'),(924,1,'','0,170,0'),(924,2,'','255,0,0'),(924,3,'','255,0,0'),(924,4,'','255,0,0'),(924,5,'','30,144,255'),(925,0,'','240,240,240'),(925,1,'','0,170,0'),(925,2,'','255,0,0'),(925,3,'','255,0,0'),(925,4,'','255,0,0'),(925,5,'','30,144,255'),(926,0,'','240,240,240'),(926,1,'','0,170,0'),(926,2,'','255,255,128'),(926,3,'','255,165,0'),(926,4,'','255,0,0'),(926,5,'','30,144,255'),(927,0,'','240,240,240'),(927,1,'','0,170,0'),(927,2,'','255,255,128'),(927,3,'','255,165,0'),(927,4,'','255,0,0'),(927,5,'','30,144,255'),(928,0,'','240,240,240'),(928,1,'','128,255,128'),(928,2,'','255,255,128'),(928,3,'','255,165,0'),(928,4,'','255,0,0'),(928,5,'','30,144,255'),(929,0,'','240,240,240'),(929,1,'','0,170,0'),(929,2,'','255,0,0'),(929,3,'','255,0,0'),(929,4,'','255,0,0'),(929,5,'','30,144,255'),(930,0,'','240,240,240'),(930,1,'','0,170,0'),(930,2,'','255,0,0'),(930,3,'','255,0,0'),(930,4,'','255,0,0'),(930,5,'','30,144,255'),(931,0,'','240,240,240'),(931,1,'','0,170,0'),(931,2,'','255,0,0'),(931,3,'','255,0,0'),(931,4,'','255,0,0'),(931,5,'','30,144,255'),(932,0,'','240,240,240'),(932,1,'','0,170,0'),(932,2,'','255,0,0'),(932,3,'','255,0,0'),(932,4,'','255,0,0'),(932,5,'','30,144,255'),(933,0,'','240,240,240'),(933,1,'','0,170,0'),(933,2,'','255,0,0'),(933,3,'','255,0,0'),(933,4,'','255,0,0'),(933,5,'','30,144,255'),(934,0,'','240,240,240'),(934,1,'','0,170,0'),(934,2,'','255,0,0'),(934,3,'','255,0,0'),(934,4,'','255,0,0'),(934,5,'','30,144,255'),(935,0,'','240,240,240'),(935,1,'','0,170,0'),(935,2,'','255,0,0'),(935,3,'','255,0,0'),(935,4,'','255,0,0'),(935,5,'','30,144,255'),(936,0,'','240,240,240'),(936,1,'','0,170,0'),(936,2,'','255,0,0'),(936,3,'','255,0,0'),(936,4,'','255,0,0'),(936,5,'','30,144,255'),(937,0,'','240,240,240'),(937,1,'','0,170,0'),(937,2,'','255,0,0'),(937,3,'','255,0,0'),(937,4,'','255,0,0'),(937,5,'','30,144,255'),(938,0,'','240,240,240'),(938,1,'','0,170,0'),(938,2,'','255,0,0'),(938,3,'','255,0,0'),(938,4,'','255,0,0'),(938,5,'','30,144,255'),(939,0,'','240,240,240'),(939,1,'','0,170,0'),(939,2,'','255,0,0'),(939,3,'','255,0,0'),(939,4,'','255,0,0'),(939,5,'','30,144,255'),(940,0,'','240,240,240'),(940,1,'','0,170,0'),(940,2,'','255,0,0'),(940,3,'','255,0,0'),(940,4,'','255,0,0'),(940,5,'','30,144,255'),(941,0,'','240,240,240'),(941,1,'','0,170,0'),(941,2,'','255,255,128'),(941,3,'','255,165,0'),(941,4,'','255,0,0'),(941,5,'','30,144,255'),(942,0,'','240,240,240'),(942,1,'','0,170,0'),(942,2,'','255,255,128'),(942,3,'','255,165,0'),(942,4,'','255,0,0'),(942,5,'','30,144,255'),(943,0,'','240,240,240'),(943,1,'','0,170,0'),(943,2,'','255,255,128'),(943,3,'','255,165,0'),(943,4,'','255,0,0'),(943,5,'','30,144,255'),(944,0,'','240,240,240'),(944,1,'','0,170,0'),(944,2,'','255,255,128'),(944,3,'','255,165,0'),(944,4,'','255,0,0'),(944,5,'','30,144,255'),(945,0,'','240,240,240'),(945,1,'','0,170,0'),(945,2,'','255,255,128'),(945,3,'','255,165,0'),(945,4,'','255,0,0'),(945,5,'','30,144,255'),(946,0,'','240,240,240'),(946,1,'','0,170,0'),(946,2,'','255,255,128'),(946,3,'','255,165,0'),(946,4,'','255,0,0'),(946,5,'','30,144,255'),(947,0,'','240,240,240'),(947,1,'','0,170,0'),(947,2,'','255,255,128'),(947,3,'','255,165,0'),(947,4,'','255,0,0'),(947,5,'','30,144,255'),(948,0,'','240,240,240'),(948,1,'','0,170,0'),(948,2,'','255,255,128'),(948,3,'','255,165,0'),(948,4,'','255,0,0'),(948,5,'','30,144,255'),(949,0,'','240,240,240'),(949,1,'','0,170,0'),(949,2,'','255,255,128'),(949,3,'','255,165,0'),(949,4,'','255,0,0'),(949,5,'','30,144,255'),(950,0,'','240,240,240'),(950,1,'','0,170,0'),(950,2,'','255,255,128'),(950,3,'','255,165,0'),(950,4,'','255,0,0'),(950,5,'','30,144,255'),(951,0,'','240,240,240'),(951,1,'','0,170,0'),(951,2,'','255,255,128'),(951,3,'','255,165,0'),(951,4,'','255,0,0'),(951,5,'','30,144,255'),(952,0,'','240,240,240'),(952,1,'','0,170,0'),(952,2,'','255,255,128'),(952,3,'','255,165,0'),(952,4,'','255,0,0'),(952,5,'','30,144,255'),(953,0,'','240,240,240'),(953,1,'','0,170,0'),(953,2,'','255,255,128'),(953,3,'','255,165,0'),(953,4,'','255,0,0'),(953,5,'','30,144,255'),(954,0,'','240,240,240'),(954,1,'','0,170,0'),(954,2,'','255,255,128'),(954,3,'','255,165,0'),(954,4,'','255,0,0'),(954,5,'','30,144,255'),(955,0,'','240,240,240'),(955,1,'','0,170,0'),(955,2,'','255,255,128'),(955,3,'','255,165,0'),(955,4,'','255,0,0'),(955,5,'','30,144,255'),(956,0,'','240,240,240'),(956,1,'','0,170,0'),(956,2,'','255,255,128'),(956,3,'','255,165,0'),(956,4,'','255,0,0'),(956,5,'','30,144,255'),(957,0,'','240,240,240'),(957,1,'','0,170,0'),(957,2,'','255,255,128'),(957,3,'','255,165,0'),(957,4,'','255,0,0'),(957,5,'','30,144,255'),(958,0,'','240,240,240'),(958,1,'','0,170,0'),(958,2,'','255,255,128'),(958,3,'','255,165,0'),(958,4,'','255,0,0'),(958,5,'','30,144,255'),(959,0,'','30,144,255'),(959,1,'','0,170,0'),(959,2,'','255,255,128'),(959,3,'','255,165,0'),(959,4,'','255,0,0'),(959,5,'','30,144,255'),(960,0,'','30,144,255'),(960,1,'','0,170,0'),(960,2,'','255,255,128'),(960,3,'','255,165,0'),(960,4,'','255,0,0'),(960,5,'','30,144,255'),(961,0,'','240,240,240'),(961,1,'','0,170,0'),(961,2,'','255,255,128'),(961,3,'','255,165,0'),(961,4,'','255,0,0'),(961,5,'','30,144,255'),(962,0,'','240,240,240'),(962,1,'','0,170,0'),(962,2,'','255,255,128'),(962,3,'','255,165,0'),(962,4,'','255,0,0'),(962,5,'','30,144,255'),(963,0,'','240,240,240'),(963,1,'','128,255,128'),(963,2,'','255,255,128'),(963,3,'','255,165,0'),(963,4,'','255,0,0'),(963,5,'','30,144,255'),(964,0,'','240,240,240'),(964,1,'','0,170,0'),(964,2,'','255,255,128'),(964,3,'','255,165,0'),(964,4,'','255,0,0'),(964,5,'','30,144,255'),(965,0,'','240,240,240'),(965,1,'','0,170,0'),(965,2,'','255,255,128'),(965,3,'','255,165,0'),(965,4,'','255,0,0'),(965,5,'','30,144,255'),(966,0,'','240,240,240'),(966,1,'','0,170,0'),(966,2,'','255,255,128'),(966,3,'','255,165,0'),(966,4,'','255,0,0'),(966,5,'','30,144,255'),(967,0,'','240,240,240'),(967,1,'','0,170,0'),(967,2,'','255,255,128'),(967,3,'','255,165,0'),(967,4,'','255,0,0'),(967,5,'','30,144,255'),(968,0,'','240,240,240'),(968,1,'','0,170,0'),(968,2,'','255,255,128'),(968,3,'','255,165,0'),(968,4,'','255,0,0'),(968,5,'','30,144,255'),(969,0,'','240,240,240'),(969,1,'','0,170,0'),(969,2,'','255,255,128'),(969,3,'','255,165,0'),(969,4,'','255,0,0'),(969,5,'','30,144,255'),(970,0,'','240,240,240'),(970,1,'','0,170,0'),(970,2,'','255,255,128'),(970,3,'','255,165,0'),(970,4,'','255,0,0'),(970,5,'','30,144,255'),(971,0,'','240,240,240'),(971,1,'','0,170,0'),(971,2,'','255,255,128'),(971,3,'','255,165,0'),(971,4,'','255,0,0'),(971,5,'','30,144,255'),(972,0,'','240,240,240'),(972,1,'','0,170,0'),(972,2,'','255,255,128'),(972,3,'','255,165,0'),(972,4,'','255,0,0'),(972,5,'','30,144,255'),(973,0,'','240,240,240'),(973,1,'','0,170,0'),(973,2,'','255,255,128'),(973,3,'','255,165,0'),(973,4,'','255,0,0'),(973,5,'','30,144,255'),(974,0,'','240,240,240'),(974,1,'','0,170,0'),(974,2,'','255,255,128'),(974,3,'','255,165,0'),(974,4,'','255,0,0'),(974,5,'','30,144,255'),(975,0,'','240,240,240'),(975,1,'','0,170,0'),(975,2,'','255,255,128'),(975,3,'','255,165,0'),(975,4,'','255,0,0'),(975,5,'','30,144,255'),(976,0,'','240,240,240'),(976,1,'','0,170,0'),(976,2,'','255,255,128'),(976,3,'','255,165,0'),(976,4,'','255,0,0'),(976,5,'','30,144,255'),(977,0,'','240,240,240'),(977,1,'','0,170,0'),(977,2,'','255,255,128'),(977,3,'','255,165,0'),(977,4,'','255,0,0'),(977,5,'','30,144,255'),(978,0,'','240,240,240'),(978,1,'','0,170,0'),(978,2,'','255,255,128'),(978,3,'','255,165,0'),(978,4,'','255,0,0'),(978,5,'','30,144,255'),(979,0,'','240,240,240'),(979,1,'','0,170,0'),(979,2,'','255,255,128'),(979,3,'','255,165,0'),(979,4,'','255,0,0'),(979,5,'','30,144,255'),(980,0,'','240,240,240'),(980,1,'','0,170,0'),(980,2,'','255,255,128'),(980,3,'','255,165,0'),(980,4,'','255,0,0'),(980,5,'','30,144,255'),(981,0,'','240,240,240'),(981,1,'','0,170,0'),(981,2,'','255,255,128'),(981,3,'','255,165,0'),(981,4,'','255,0,0'),(981,5,'','30,144,255'),(982,0,'','240,240,240'),(982,1,'','0,170,0'),(982,2,'','255,255,128'),(982,3,'','255,165,0'),(982,4,'','255,0,0'),(982,5,'','30,144,255'),(983,0,'','240,240,240'),(983,1,'','0,170,0'),(983,2,'','255,255,128'),(983,3,'','255,165,0'),(983,4,'','255,0,0'),(983,5,'','30,144,255'),(984,0,'','240,240,240'),(984,1,'','0,170,0'),(984,2,'','255,255,128'),(984,3,'','255,165,0'),(984,4,'','255,0,0'),(984,5,'','30,144,255'),(985,0,'','240,240,240'),(985,1,'','0,170,0'),(985,2,'','255,255,128'),(985,3,'','255,165,0'),(985,4,'','255,0,0'),(985,5,'','30,144,255'),(986,0,'','240,240,240'),(986,1,'','0,170,0'),(986,2,'','255,255,128'),(986,3,'','255,165,0'),(986,4,'','255,0,0'),(986,5,'','30,144,255'),(987,0,'','240,240,240'),(987,1,'','0,170,0'),(987,2,'','255,255,128'),(987,3,'','255,165,0'),(987,4,'','255,0,0'),(987,5,'','30,144,255'),(988,0,'','240,240,240'),(988,1,'','0,170,0'),(988,2,'','255,255,128'),(988,3,'','255,165,0'),(988,4,'','255,0,0'),(988,5,'','30,144,255'),(989,0,'','240,240,240'),(989,1,'','0,170,0'),(989,2,'','255,255,128'),(989,3,'','255,165,0'),(989,4,'','255,0,0'),(989,5,'','30,144,255'),(990,0,'','240,240,240'),(990,1,'','0,170,0'),(990,2,'','255,255,128'),(990,3,'','255,165,0'),(990,4,'','255,0,0'),(990,5,'','30,144,255'),(991,0,'','240,240,240'),(991,1,'','0,170,0'),(991,2,'','255,255,128'),(991,3,'','255,165,0'),(991,4,'','255,0,0'),(991,5,'','30,144,255'),(992,0,'','240,240,240'),(992,1,'','0,170,0'),(992,2,'','255,255,128'),(992,3,'','255,165,0'),(992,4,'','255,0,0'),(992,5,'','30,144,255'),(993,0,'','240,240,240'),(993,1,'','0,170,0'),(993,2,'','255,255,128'),(993,3,'','255,165,0'),(993,4,'','255,0,0'),(993,5,'','30,144,255'),(994,0,'','240,240,240'),(994,1,'','0,170,0'),(994,2,'','255,255,128'),(994,3,'','255,165,0'),(994,4,'','255,0,0'),(994,5,'','30,144,255'),(995,0,'','240,240,240'),(995,1,'','0,170,0'),(995,2,'','255,255,128'),(995,3,'','255,165,0'),(995,4,'','255,0,0'),(995,5,'','30,144,255'),(996,0,'','240,240,240'),(996,1,'','0,170,0'),(996,2,'','255,255,128'),(996,3,'','255,165,0'),(996,4,'','255,0,0'),(996,5,'','30,144,255'),(997,0,'','240,240,240'),(997,1,'','0,170,0'),(997,2,'','255,255,128'),(997,3,'','255,165,0'),(997,4,'','255,0,0'),(997,5,'','30,144,255'),(998,0,'','240,240,240'),(998,1,'','0,170,0'),(998,2,'','255,255,128'),(998,3,'','255,165,0'),(998,4,'','255,0,0'),(998,5,'','30,144,255'),(999,0,'','240,240,240'),(999,1,'','0,170,0'),(999,2,'','255,255,128'),(999,3,'','255,165,0'),(999,4,'','255,0,0'),(999,5,'','30,144,255'),(1000,0,'','240,240,240'),(1000,1,'','0,170,0'),(1000,2,'','255,255,128'),(1000,3,'','255,165,0'),(1000,4,'','255,0,0'),(1000,5,'','30,144,255'),(1001,0,'','240,240,240'),(1001,1,'','0,170,0'),(1001,2,'','255,255,128'),(1001,3,'','255,165,0'),(1001,4,'','255,0,0'),(1001,5,'','30,144,255'),(1002,0,'','240,240,240'),(1002,1,'','0,170,0'),(1002,2,'','255,255,128'),(1002,3,'','255,165,0'),(1002,4,'','255,0,0'),(1002,5,'','30,144,255'),(1003,0,'','240,240,240'),(1003,1,'','0,170,0'),(1003,2,'','255,255,128'),(1003,3,'','255,165,0'),(1003,4,'','255,0,0'),(1003,5,'','30,144,255'),(1004,0,'','240,240,240'),(1004,1,'','0,170,0'),(1004,2,'','255,255,128'),(1004,3,'','255,165,0'),(1004,4,'','255,0,0'),(1004,5,'','30,144,255'),(1005,0,'','240,240,240'),(1005,1,'','0,170,0'),(1005,2,'','255,255,128'),(1005,3,'','255,165,0'),(1005,4,'','255,0,0'),(1005,5,'','30,144,255'),(1006,0,'','240,240,240'),(1006,1,'','0,170,0'),(1006,2,'','255,255,128'),(1006,3,'','255,165,0'),(1006,4,'','255,0,0'),(1006,5,'','30,144,255'),(1007,0,'','240,240,240'),(1007,1,'','0,170,0'),(1007,2,'','255,255,128'),(1007,3,'','255,165,0'),(1007,4,'','255,0,0'),(1007,5,'','30,144,255'),(1008,0,'','240,240,240'),(1008,1,'','0,170,0'),(1008,2,'','255,255,128'),(1008,3,'','255,165,0'),(1008,4,'','255,0,0'),(1008,5,'','30,144,255'),(1009,0,'','240,240,240'),(1009,1,'','0,170,0'),(1009,2,'','255,255,128'),(1009,3,'','255,165,0'),(1009,4,'','255,0,0'),(1009,5,'','30,144,255'),(1010,0,'','240,240,240'),(1010,1,'','0,170,0'),(1010,2,'','255,255,128'),(1010,3,'','255,165,0'),(1010,4,'','255,0,0'),(1010,5,'','30,144,255'),(1011,0,'','240,240,240'),(1011,1,'','0,170,0'),(1011,2,'','255,255,128'),(1011,3,'','255,165,0'),(1011,4,'','255,0,0'),(1011,5,'','30,144,255'),(1012,0,'','240,240,240'),(1012,1,'','128,255,128'),(1012,2,'','255,255,128'),(1012,3,'','255,165,0'),(1012,4,'','255,0,0'),(1012,5,'','30,144,255'),(1013,0,'','240,240,240'),(1013,1,'','0,170,0'),(1013,2,'','255,255,128'),(1013,3,'','255,165,0'),(1013,4,'','255,0,0'),(1013,5,'','30,144,255'),(1014,0,'','240,240,240'),(1014,1,'','0,170,0'),(1014,2,'','255,255,128'),(1014,3,'','255,165,0'),(1014,4,'','255,0,0'),(1014,5,'','30,144,255'),(1015,0,'','240,240,240'),(1015,1,'','0,170,0'),(1015,2,'','255,255,128'),(1015,3,'','255,165,0'),(1015,4,'','255,0,0'),(1015,5,'','30,144,255'),(1016,0,'','240,240,240'),(1016,1,'','0,170,0'),(1016,2,'','255,255,128'),(1016,3,'','255,165,0'),(1016,4,'','255,0,0'),(1016,5,'','30,144,255'),(1017,0,'','30,144,255'),(1017,1,'','0,170,0'),(1017,2,'','255,255,128'),(1017,3,'','255,165,0'),(1017,4,'','255,0,0'),(1017,5,'','30,144,255'),(1018,0,'','240,240,240'),(1018,1,'','0,170,0'),(1018,2,'','255,255,128'),(1018,3,'','255,165,0'),(1018,4,'','255,0,0'),(1018,5,'','30,144,255'),(1019,0,'','240,240,240'),(1019,1,'','128,255,128'),(1019,2,'','255,255,128'),(1019,3,'','255,165,0'),(1019,4,'','255,0,0'),(1019,5,'','30,144,255'),(1020,0,'','240,240,240'),(1020,1,'','128,255,128'),(1020,2,'','255,255,128'),(1020,3,'','255,165,0'),(1020,4,'','255,0,0'),(1020,5,'','30,144,255'),(1021,0,'','240,240,240'),(1021,1,'','128,255,128'),(1021,2,'','255,255,128'),(1021,3,'','255,165,0'),(1021,4,'','255,0,0'),(1021,5,'','30,144,255'),(1022,0,'','240,240,240'),(1022,1,'','0,170,0'),(1022,2,'','255,255,128'),(1022,3,'','255,165,0'),(1022,4,'','255,0,0'),(1022,5,'','30,144,255'),(1023,0,'','240,240,240'),(1023,1,'','0,170,0'),(1023,2,'','255,255,128'),(1023,3,'','255,165,0'),(1023,4,'','255,0,0'),(1023,5,'','30,144,255'),(1024,0,'','240,240,240'),(1024,1,'','0,170,0'),(1024,2,'','255,255,128'),(1024,3,'','255,165,0'),(1024,4,'','255,165,0'),(1024,5,'','30,144,255'),(1025,0,'','240,240,240'),(1025,1,'','128,255,128'),(1025,2,'','255,255,128'),(1025,3,'','255,165,0'),(1025,4,'','255,0,0'),(1025,5,'','30,144,255'),(1026,0,'','240,240,240'),(1026,1,'','128,255,128'),(1026,2,'','255,255,128'),(1026,3,'','255,165,0'),(1026,4,'','255,0,0'),(1026,5,'','30,144,255'),(1027,0,'','240,240,240'),(1027,1,'','128,255,128'),(1027,2,'','255,255,128'),(1027,3,'','255,165,0'),(1027,4,'','255,0,0'),(1027,5,'','30,144,255'),(1028,0,'','240,240,240'),(1028,1,'','128,255,128'),(1028,2,'','255,255,128'),(1028,3,'','255,165,0'),(1028,4,'','255,0,0'),(1028,5,'','30,144,255'),(1029,0,'','240,240,240'),(1029,1,'','128,255,128'),(1029,2,'','255,255,128'),(1029,3,'','255,165,0'),(1029,4,'','255,0,0'),(1029,5,'','30,144,255'),(1030,0,'','240,240,240'),(1030,1,'','128,255,128'),(1030,2,'','255,255,128'),(1030,3,'','255,165,0'),(1030,4,'','255,0,0'),(1030,5,'','30,144,255'),(1031,0,'','240,240,240'),(1031,1,'','128,255,128'),(1031,2,'','255,255,128'),(1031,3,'','255,165,0'),(1031,4,'','255,0,0'),(1031,5,'','30,144,255'),(1032,0,'','240,240,240'),(1032,1,'','128,255,128'),(1032,2,'','255,255,128'),(1032,3,'','255,165,0'),(1032,4,'','255,0,0'),(1032,5,'','30,144,255'),(1033,0,'','240,240,240'),(1033,1,'','128,255,128'),(1033,2,'','255,255,128'),(1033,3,'','255,165,0'),(1033,4,'','255,0,0'),(1033,5,'','30,144,255'),(1034,0,'','192,192,192'),(1034,1,'','0,170,0'),(1034,2,'','192,192,192'),(1034,3,'','255,128,192'),(1034,4,'','255,0,0'),(1034,5,'','0,0,255'),(1035,0,'','192,192,192'),(1035,1,'','0,170,0'),(1035,2,'','192,192,192'),(1035,3,'','255,128,192'),(1035,4,'','255,0,0'),(1035,5,'','0,0,255'),(1036,0,'','192,192,192'),(1036,1,'','0,170,0'),(1036,2,'','192,192,192'),(1036,3,'','255,128,192'),(1036,4,'','255,0,0'),(1036,5,'','0,0,255'),(1037,0,'','255,255,0'),(1037,1,'','0,170,0'),(1037,2,'','192,192,192'),(1037,3,'','255,128,192'),(1037,4,'','255,0,0'),(1037,5,'','0,0,255'),(1038,0,'','255,255,0'),(1038,1,'','0,170,0'),(1038,2,'','192,192,192'),(1038,3,'','255,128,192'),(1038,4,'','255,0,0'),(1038,5,'','0,0,255'),(1039,0,'','255,255,0'),(1039,1,'','0,170,0'),(1039,2,'','192,192,192'),(1039,3,'','255,128,192'),(1039,4,'','255,0,0'),(1039,5,'','0,0,255'),(1040,0,'','255,255,0'),(1040,1,'','0,170,0'),(1040,2,'','192,192,192'),(1040,3,'','255,128,192'),(1040,4,'','255,0,0'),(1040,5,'','0,0,255'),(1041,0,'','255,255,0'),(1041,1,'','0,170,0'),(1041,2,'','192,192,192'),(1041,3,'','255,128,192'),(1041,4,'','255,0,0'),(1041,5,'','0,0,255'),(1042,0,'','255,255,0'),(1042,1,'','0,170,0'),(1042,2,'','192,192,192'),(1042,3,'','255,128,192'),(1042,4,'','255,0,0'),(1042,5,'','0,0,255'),(1043,0,'','255,255,0'),(1043,1,'','0,170,0'),(1043,2,'','192,192,192'),(1043,3,'','255,128,192'),(1043,4,'','255,0,0'),(1043,5,'','0,0,255'),(1044,0,'','255,255,0'),(1044,1,'','0,170,0'),(1044,2,'','192,192,192'),(1044,3,'','255,128,192'),(1044,4,'','255,0,0'),(1044,5,'','0,0,255'),(1045,0,'','255,255,0'),(1045,1,'','0,170,0'),(1045,2,'','192,192,192'),(1045,3,'','255,128,192'),(1045,4,'','255,0,0'),(1045,5,'','0,0,255'),(1046,0,'','255,255,0'),(1046,1,'','0,170,0'),(1046,2,'','192,192,192'),(1046,3,'','255,128,192'),(1046,4,'','255,0,0'),(1046,5,'','0,0,255'),(1047,0,'','255,255,0'),(1047,1,'','0,170,0'),(1047,2,'','192,192,192'),(1047,3,'','255,128,192'),(1047,4,'','255,0,0'),(1047,5,'','0,0,255'),(1048,0,'','255,255,0'),(1048,1,'','0,170,0'),(1048,2,'','192,192,192'),(1048,3,'','255,128,192'),(1048,4,'','255,0,0'),(1048,5,'','0,0,255'),(1049,0,'','255,255,0'),(1049,1,'','0,170,0'),(1049,2,'','192,192,192'),(1049,3,'','255,128,192'),(1049,4,'','255,0,0'),(1049,5,'','0,0,255'),(1050,0,'','255,255,0'),(1050,1,'','0,170,0'),(1050,2,'','192,192,192'),(1050,3,'','255,128,192'),(1050,4,'','255,0,0'),(1050,5,'','0,0,255'),(1051,0,'','255,255,0'),(1051,1,'','0,170,0'),(1051,2,'','192,192,192'),(1051,3,'','255,128,192'),(1051,4,'','255,0,0'),(1051,5,'','0,0,255'),(1052,0,'','255,255,0'),(1052,1,'','0,170,0'),(1052,2,'','192,192,192'),(1052,3,'','255,128,192'),(1052,4,'','255,0,0'),(1052,5,'','0,0,255'),(1053,0,'','255,255,0'),(1053,1,'','0,170,0'),(1053,2,'','192,192,192'),(1053,3,'','255,128,192'),(1053,4,'','255,0,0'),(1053,5,'','0,0,255'),(1054,0,'','255,255,0'),(1054,1,'','0,170,0'),(1054,2,'','192,192,192'),(1054,3,'','255,128,192'),(1054,4,'','255,0,0'),(1054,5,'','0,0,255'),(1055,0,'','255,255,0'),(1055,1,'','0,170,0'),(1055,2,'','192,192,192'),(1055,3,'','255,128,192'),(1055,4,'','255,0,0'),(1055,5,'','0,0,255'),(1056,0,'','255,255,0'),(1056,1,'','0,170,0'),(1056,2,'','192,192,192'),(1056,3,'','255,128,192'),(1056,4,'','255,0,0'),(1056,5,'','0,0,255'),(1057,0,'','255,255,0'),(1057,1,'','0,170,0'),(1057,2,'','192,192,192'),(1057,3,'','255,128,192'),(1057,4,'','255,0,0'),(1057,5,'','0,0,255'),(1058,0,'','255,255,0'),(1058,1,'','0,170,0'),(1058,2,'','192,192,192'),(1058,3,'','255,128,192'),(1058,4,'','255,0,0'),(1058,5,'','0,0,255'),(1059,0,'','255,255,0'),(1059,1,'','0,170,0'),(1059,2,'','192,192,192'),(1059,3,'','255,128,192'),(1059,4,'','255,0,0'),(1059,5,'','0,0,255'),(1060,0,'','255,255,0'),(1060,1,'','0,170,0'),(1060,2,'','192,192,192'),(1060,3,'','255,128,192'),(1060,4,'','255,0,0'),(1060,5,'','0,0,255'),(1061,0,'','255,255,0'),(1061,1,'','0,170,0'),(1061,2,'','192,192,192'),(1061,3,'','255,128,192'),(1061,4,'','255,0,0'),(1061,5,'','0,0,255'),(1062,0,'','255,255,0'),(1062,1,'','0,170,0'),(1062,2,'','192,192,192'),(1062,3,'','255,128,192'),(1062,4,'','255,0,0'),(1062,5,'','0,0,255'),(1063,0,'','255,255,0'),(1063,1,'','0,170,0'),(1063,2,'','192,192,192'),(1063,3,'','255,128,192'),(1063,4,'','255,0,0'),(1063,5,'','0,0,255'),(1064,0,'','255,255,0'),(1064,1,'','0,170,0'),(1064,2,'','192,192,192'),(1064,3,'','255,128,192'),(1064,4,'','255,0,0'),(1064,5,'','0,0,255'),(1065,0,'','255,255,0'),(1065,1,'','0,170,0'),(1065,2,'','192,192,192'),(1065,3,'','255,128,192'),(1065,4,'','255,0,0'),(1065,5,'','0,0,255'),(1066,0,'','255,255,0'),(1066,1,'','0,170,0'),(1066,2,'','192,192,192'),(1066,3,'','255,128,192'),(1066,4,'','255,0,0'),(1066,5,'','0,0,255'),(1067,0,'','255,255,0'),(1067,1,'','0,170,0'),(1067,2,'','192,192,192'),(1067,3,'','255,128,192'),(1067,4,'','255,0,0'),(1067,5,'','0,0,255'),(1068,0,'','255,255,0'),(1068,1,'','0,170,0'),(1068,2,'','192,192,192'),(1068,3,'','255,128,192'),(1068,4,'','255,0,0'),(1068,5,'','0,0,255'),(1069,0,'','255,255,0'),(1069,1,'','0,170,0'),(1069,2,'','192,192,192'),(1069,3,'','255,128,192'),(1069,4,'','255,0,0'),(1069,5,'','0,0,255'),(1070,0,'','255,255,0'),(1070,1,'','0,170,0'),(1070,2,'','192,192,192'),(1070,3,'','255,128,192'),(1070,4,'','255,0,0'),(1070,5,'','0,0,255'),(1071,0,'','255,255,0'),(1071,1,'','0,170,0'),(1071,2,'','192,192,192'),(1071,3,'','255,128,192'),(1071,4,'','255,0,0'),(1071,5,'','0,0,255'),(1072,0,'','255,255,0'),(1072,1,'','0,170,0'),(1072,2,'','192,192,192'),(1072,3,'','255,128,192'),(1072,4,'','255,0,0'),(1072,5,'','0,0,255'),(1073,0,'','255,255,0'),(1073,1,'','0,170,0'),(1073,2,'','192,192,192'),(1073,3,'','255,128,192'),(1073,4,'','255,0,0'),(1073,5,'','0,0,255'),(1074,0,'','255,255,0'),(1074,1,'','0,170,0'),(1074,2,'','192,192,192'),(1074,3,'','255,128,192'),(1074,4,'','255,0,0'),(1074,5,'','0,0,255'),(1075,0,'','255,255,0'),(1075,1,'','0,170,0'),(1075,2,'','192,192,192'),(1075,3,'','255,128,192'),(1075,4,'','255,0,0'),(1075,5,'','0,0,255'),(1076,0,'','240,240,240'),(1076,1,'','0,170,0'),(1076,2,'','255,255,128'),(1076,3,'','0,170,0'),(1076,4,'','255,0,0'),(1076,5,'','30,144,255'),(1077,0,'','30,144,255'),(1077,1,'','0,170,0'),(1077,2,'','192,192,192'),(1077,3,'','255,128,192'),(1077,4,'','255,0,0'),(1077,5,'','0,0,255'),(1078,0,'','30,144,255'),(1078,1,'','0,170,0'),(1078,2,'','192,192,192'),(1078,3,'','255,128,192'),(1078,4,'','255,0,0'),(1078,5,'','0,0,255'),(1079,0,'','30,144,255'),(1079,1,'','0,170,0'),(1079,2,'','192,192,192'),(1079,3,'','255,128,192'),(1079,4,'','255,0,0'),(1079,5,'','0,0,255'),(1080,0,'','30,144,255'),(1080,1,'','0,170,0'),(1080,2,'','192,192,192'),(1080,3,'','255,128,192'),(1080,4,'','255,0,0'),(1080,5,'','0,0,255'),(1081,0,'','30,144,255'),(1081,1,'','0,170,0'),(1081,2,'','192,192,192'),(1081,3,'','255,128,192'),(1081,4,'','255,0,0'),(1081,5,'','0,0,255'),(1082,0,'','30,144,255'),(1082,1,'','0,170,0'),(1082,2,'','192,192,192'),(1082,3,'','255,128,192'),(1082,4,'','255,0,0'),(1082,5,'','0,0,255'),(1083,0,'','30,144,255'),(1083,1,'','0,170,0'),(1083,2,'','192,192,192'),(1083,3,'','255,128,192'),(1083,4,'','255,0,0'),(1083,5,'','0,0,255'),(1084,0,'','30,144,255'),(1084,1,'','0,170,0'),(1084,2,'','192,192,192'),(1084,3,'','255,128,192'),(1084,4,'','255,0,0'),(1084,5,'','0,0,255'),(1085,0,'','30,144,255'),(1085,1,'','0,170,0'),(1085,2,'','192,192,192'),(1085,3,'','255,128,192'),(1085,4,'','255,0,0'),(1085,5,'','0,0,255'),(1086,0,'','30,144,255'),(1086,1,'','0,170,0'),(1086,2,'','192,192,192'),(1086,3,'','255,128,192'),(1086,4,'','255,0,0'),(1086,5,'','0,0,255'),(1087,0,'','30,144,255'),(1087,1,'','0,170,0'),(1087,2,'','192,192,192'),(1087,3,'','255,128,192'),(1087,4,'','255,0,0'),(1087,5,'','0,0,255'),(1088,0,'','30,144,255'),(1088,1,'','0,170,0'),(1088,2,'','192,192,192'),(1088,3,'','255,128,192'),(1088,4,'','255,0,0'),(1088,5,'','0,0,255'),(1089,0,'','30,144,255'),(1089,1,'','0,170,0'),(1089,2,'','192,192,192'),(1089,3,'','255,128,192'),(1089,4,'','255,0,0'),(1089,5,'','0,0,255'),(1090,0,'','30,144,255'),(1090,1,'','0,170,0'),(1090,2,'','192,192,192'),(1090,3,'','255,128,192'),(1090,4,'','255,0,0'),(1090,5,'','0,0,255'),(1091,0,'','30,144,255'),(1091,1,'','0,170,0'),(1091,2,'','192,192,192'),(1091,3,'','255,128,192'),(1091,4,'','255,0,0'),(1091,5,'','0,0,255'),(1092,0,'','30,144,255'),(1092,1,'','0,170,0'),(1092,2,'','192,192,192'),(1092,3,'','255,128,192'),(1092,4,'','255,0,0'),(1092,5,'','0,0,255'),(1093,0,'','30,144,255'),(1093,1,'','0,170,0'),(1093,2,'','192,192,192'),(1093,3,'','255,128,192'),(1093,4,'','255,0,0'),(1093,5,'','0,0,255'),(1094,0,'','30,144,255'),(1094,1,'','0,170,0'),(1094,2,'','192,192,192'),(1094,3,'','255,128,192'),(1094,4,'','255,0,0'),(1094,5,'','0,0,255'),(1095,0,'','30,144,255'),(1095,1,'','0,170,0'),(1095,2,'','192,192,192'),(1095,3,'','255,128,192'),(1095,4,'','255,0,0'),(1095,5,'','0,0,255'),(1096,0,'','30,144,255'),(1096,1,'','0,170,0'),(1096,2,'','192,192,192'),(1096,3,'','255,128,192'),(1096,4,'','255,0,0'),(1096,5,'','0,0,255'),(1097,0,'','30,144,255'),(1097,1,'','0,170,0'),(1097,2,'','192,192,192'),(1097,3,'','255,128,192'),(1097,4,'','255,0,0'),(1097,5,'','0,0,255'),(1098,0,'','30,144,255'),(1098,1,'','0,170,0'),(1098,2,'','192,192,192'),(1098,3,'','255,128,192'),(1098,4,'','255,0,0'),(1098,5,'','0,0,255'),(1099,0,'','30,144,255'),(1099,1,'','0,170,0'),(1099,2,'','192,192,192'),(1099,3,'','255,128,192'),(1099,4,'','255,0,0'),(1099,5,'','0,0,255'),(1100,0,'','30,144,255'),(1100,1,'','0,170,0'),(1100,2,'','192,192,192'),(1100,3,'','255,128,192'),(1100,4,'','255,0,0'),(1100,5,'','0,0,255'),(1101,0,'','30,144,255'),(1101,1,'','0,170,0'),(1101,2,'','192,192,192'),(1101,3,'','255,128,192'),(1101,4,'','255,0,0'),(1101,5,'','0,0,255'),(1102,0,'','30,144,255'),(1102,1,'','0,170,0'),(1102,2,'','192,192,192'),(1102,3,'','255,128,192'),(1102,4,'','255,0,0'),(1102,5,'','0,0,255'),(1103,0,'','30,144,255'),(1103,1,'','0,170,0'),(1103,2,'','192,192,192'),(1103,3,'','255,128,192'),(1103,4,'','255,0,0'),(1103,5,'','0,0,255'),(1104,0,'','30,144,255'),(1104,1,'','0,170,0'),(1104,2,'','192,192,192'),(1104,3,'','255,128,192'),(1104,4,'','255,0,0'),(1104,5,'','0,0,255'),(1105,0,'','240,240,240'),(1105,1,'','128,255,128'),(1105,2,'','255,255,128'),(1105,3,'','255,165,0'),(1105,4,'','255,0,0'),(1105,5,'','30,144,255'),(1106,0,'','240,240,240'),(1106,1,'','128,255,128'),(1106,2,'','255,255,128'),(1106,3,'','255,128,0'),(1106,4,'','255,0,0'),(1106,5,'','30,144,255'),(1107,0,'','240,240,240'),(1107,1,'','128,255,128'),(1107,2,'','255,255,128'),(1107,3,'','255,165,0'),(1107,4,'','255,0,0'),(1107,5,'','30,144,255'),(1108,0,'','240,240,240'),(1108,1,'','128,255,128'),(1108,2,'','255,255,128'),(1108,3,'','255,165,0'),(1108,4,'','255,0,0'),(1108,5,'','30,144,255'),(1109,0,'','240,240,240'),(1109,1,'','128,255,128'),(1109,2,'','255,255,128'),(1109,3,'','255,165,0'),(1109,4,'','255,0,0'),(1109,5,'','30,144,255'),(1110,0,'','240,240,240'),(1110,1,'','128,255,128'),(1110,2,'','255,255,128'),(1110,3,'','255,165,0'),(1110,4,'','255,0,0'),(1110,5,'','30,144,255'),(1111,0,'','0,128,255'),(1111,1,'','0,170,0'),(1111,2,'','255,255,128'),(1111,3,'','255,165,0'),(1111,4,'','255,0,0'),(1111,5,'','30,144,255'),(1112,0,'','240,240,240'),(1112,1,'','128,255,128'),(1112,2,'','255,255,128'),(1112,3,'','255,165,0'),(1112,4,'','255,0,0'),(1112,5,'','30,144,255'),(1113,0,'','240,240,240'),(1113,1,'','128,255,128'),(1113,2,'','255,255,128'),(1113,3,'','255,165,0'),(1113,4,'','255,0,0'),(1113,5,'','30,144,255'),(1114,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1114,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1114,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1114,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1114,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1114,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1115,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1115,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1115,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1115,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1115,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1115,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1116,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1116,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1116,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1116,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1116,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1116,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1117,0,'','240,240,240'),(1117,1,'','128,255,128'),(1117,2,'','255,255,128'),(1117,3,'','255,165,0'),(1117,4,'','255,0,0'),(1117,5,'','30,144,255'),(1118,0,'','240,240,240'),(1118,1,'','128,255,128'),(1118,2,'','255,255,128'),(1118,3,'','255,128,0'),(1118,4,'','255,0,0'),(1118,5,'','30,144,255'),(1119,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1119,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1119,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1119,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1119,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1119,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1120,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1120,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1120,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1120,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1120,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1120,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1121,0,'','240,240,240'),(1121,1,'','128,255,128'),(1121,2,'','255,255,128'),(1121,3,'','255,165,0'),(1121,4,'','255,0,0'),(1121,5,'','30,144,255'),(1122,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1122,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1122,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1122,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1122,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1122,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1123,0,'','240,240,240'),(1123,1,'','128,255,128'),(1123,2,'','255,255,128'),(1123,3,'','255,165,0'),(1123,4,'','255,0,0'),(1123,5,'','30,144,255'),(1124,0,'','240,240,240'),(1124,1,'','128,255,128'),(1124,2,'','255,255,128'),(1124,3,'','255,128,0'),(1124,4,'','255,0,0'),(1124,5,'','30,144,255'),(1125,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1125,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1125,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1125,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1125,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1125,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1126,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1126,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1126,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1126,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1126,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1126,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1127,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1127,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1127,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1127,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1127,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1127,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1128,0,'','240,240,240'),(1128,1,'','128,255,128'),(1128,2,'','255,255,128'),(1128,3,'','255,165,0'),(1128,4,'','255,0,0'),(1128,5,'','30,144,255'),(1129,0,'','240,240,240'),(1129,1,'','128,255,128'),(1129,2,'','255,255,128'),(1129,3,'','255,165,0'),(1129,4,'','255,0,0'),(1129,5,'','30,144,255'),(1130,0,'','240,240,240'),(1130,1,'','128,255,128'),(1130,2,'','255,255,128'),(1130,3,'','255,128,0'),(1130,4,'','255,0,0'),(1130,5,'','30,144,255'),(1131,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1131,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1131,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1131,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1131,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1131,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1132,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1132,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1132,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1132,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1132,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1132,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1133,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1133,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1133,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1133,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1133,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1133,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1134,0,'C:RCS2010itmapled_inde.ico','240,240,240'),(1134,1,'C:RCS2010itmapled_inde.ico','128,255,128'),(1134,2,'C:RCS2010itmapled_inde.ico','255,255,128'),(1134,3,'C:RCS2010itmapled_inde.ico','255,165,0'),(1134,4,'C:RCS2010itmapled_inde.ico','255,0,0'),(1134,5,'C:RCS2010itmapled_inde.ico','30,144,255'),(1135,0,'','240,240,240'),(1135,1,'','128,255,128'),(1135,2,'','255,255,128'),(1135,3,'','255,165,0'),(1135,4,'','255,0,0'),(1135,5,'','30,144,255'),(1136,0,'','240,240,240'),(1136,1,'','128,255,128'),(1136,2,'','255,255,128'),(1136,3,'','255,128,0'),(1136,4,'','255,0,0'),(1136,5,'','30,144,255'),(1137,0,'','240,240,240'),(1137,1,'','128,255,128'),(1137,2,'','255,255,128'),(1137,3,'','255,128,0'),(1137,4,'','255,0,0'),(1137,5,'','30,144,255'),(1138,0,'','240,240,240'),(1138,1,'','128,255,128'),(1138,2,'','255,255,128'),(1138,3,'','255,165,0'),(1138,4,'','255,0,0'),(1138,5,'','30,144,255'),(1139,0,'','240,240,240'),(1139,1,'','128,255,128'),(1139,2,'','255,255,128'),(1139,3,'','255,165,0'),(1139,4,'','255,0,0'),(1139,5,'','30,144,255'),(1140,0,'','240,240,240'),(1140,1,'','128,255,128'),(1140,2,'','255,255,128'),(1140,3,'','255,128,0'),(1140,4,'','255,0,0'),(1140,5,'','30,144,255'),(1141,0,'','240,240,240'),(1141,1,'','128,255,128'),(1141,2,'','255,255,128'),(1141,3,'','255,165,0'),(1141,4,'','255,0,0'),(1141,5,'','30,144,255'),(1142,0,'','240,240,240'),(1142,1,'','128,255,128'),(1142,2,'','255,255,128'),(1142,3,'','255,128,0'),(1142,4,'','255,0,0'),(1142,5,'','30,144,255'),(1143,0,'','240,240,240'),(1143,1,'','128,255,128'),(1143,2,'','255,255,128'),(1143,3,'','255,128,0'),(1143,4,'','255,0,0'),(1143,5,'','30,144,255'),(1144,0,'','240,240,240'),(1144,1,'','128,255,128'),(1144,2,'','255,255,128'),(1144,3,'','255,165,0'),(1144,4,'','255,0,0'),(1144,5,'','30,144,255'),(1145,0,'','240,240,240'),(1145,1,'','128,255,128'),(1145,2,'','255,255,128'),(1145,3,'','255,165,0'),(1145,4,'','255,0,0'),(1145,5,'','30,144,255'),(1146,0,'','240,240,240'),(1146,1,'','128,255,128'),(1146,2,'','255,255,128'),(1146,3,'','255,128,0'),(1146,4,'','255,0,0'),(1146,5,'','30,144,255'),(1147,0,'','240,240,240'),(1147,1,'','128,255,128'),(1147,2,'','255,255,128'),(1147,3,'','255,165,0'),(1147,4,'','255,0,0'),(1147,5,'','30,144,255'),(1148,0,'','240,240,240'),(1148,1,'','0,170,0'),(1148,2,'','255,255,128'),(1148,3,'','255,128,0'),(1148,4,'','255,0,0'),(1148,5,'','30,144,255'),(1149,0,'','240,240,240'),(1149,1,'','128,255,128'),(1149,2,'','255,255,128'),(1149,3,'','255,128,0'),(1149,4,'','255,0,0'),(1149,5,'','30,144,255'),(1150,0,'','240,240,240'),(1150,1,'','128,255,128'),(1150,2,'','255,255,128'),(1150,3,'','255,128,0'),(1150,4,'','255,0,0'),(1150,5,'','30,144,255'),(1151,0,'','240,240,240'),(1151,1,'','128,255,128'),(1151,2,'','255,255,128'),(1151,3,'','255,128,0'),(1151,4,'','255,0,0'),(1151,5,'','30,144,255'),(1152,0,'','240,240,240'),(1152,1,'','128,255,128'),(1152,2,'','255,255,128'),(1152,3,'','255,128,0'),(1152,4,'','255,0,0'),(1152,5,'','30,144,255'),(1153,0,'','240,240,240'),(1153,1,'','128,255,128'),(1153,2,'','255,255,128'),(1153,3,'','255,128,0'),(1153,4,'','255,0,0'),(1153,5,'','30,144,255'),(1154,0,'','240,240,240'),(1154,1,'','128,255,128'),(1154,2,'','255,255,128'),(1154,3,'','255,128,0'),(1154,4,'','255,0,0'),(1154,5,'','30,144,255'),(1155,0,'','240,240,240'),(1155,1,'','128,255,128'),(1155,2,'','255,255,128'),(1155,3,'','255,128,0'),(1155,4,'','255,0,0'),(1155,5,'','30,144,255'),(1156,0,'','240,240,240'),(1156,1,'','128,255,128'),(1156,2,'','255,255,128'),(1156,3,'','255,128,0'),(1156,4,'','255,0,0'),(1156,5,'','30,144,255'),(1157,0,'','240,240,240'),(1157,1,'','128,255,128'),(1157,2,'','255,255,128'),(1157,3,'','255,128,0'),(1157,4,'','255,0,0'),(1157,5,'','30,144,255'),(1158,0,'','240,240,240'),(1158,1,'','128,255,128'),(1158,2,'','255,255,128'),(1158,3,'','255,128,0'),(1158,4,'','255,0,0'),(1158,5,'','30,144,255'),(1159,0,'','240,240,240'),(1159,1,'','128,255,128'),(1159,2,'','255,255,128'),(1159,3,'','255,128,0'),(1159,4,'','255,0,0'),(1159,5,'','30,144,255'),(1160,0,'','240,240,240'),(1160,1,'','128,255,128'),(1160,2,'','255,255,128'),(1160,3,'','255,128,0'),(1160,4,'','255,0,0'),(1160,5,'','30,144,255'),(1161,0,'','240,240,240'),(1161,1,'','128,255,128'),(1161,2,'','255,255,128'),(1161,3,'','255,128,0'),(1161,4,'','255,0,0'),(1161,5,'','30,144,255'),(1162,0,'','240,240,240'),(1162,1,'','128,255,128'),(1162,2,'','255,255,128'),(1162,3,'','255,128,0'),(1162,4,'','255,0,0'),(1162,5,'','30,144,255'),(1163,0,'','240,240,240'),(1163,1,'','128,255,128'),(1163,2,'','255,255,128'),(1163,3,'','255,128,0'),(1163,4,'','255,0,0'),(1163,5,'','30,144,255'),(1164,0,'','240,240,240'),(1164,1,'','128,255,128'),(1164,2,'','255,255,128'),(1164,3,'','255,128,0'),(1164,4,'','255,0,0'),(1164,5,'','30,144,255'),(1165,0,'','240,240,240'),(1165,1,'','128,255,128'),(1165,2,'','255,255,128'),(1165,3,'','255,128,0'),(1165,4,'','255,0,0'),(1165,5,'','30,144,255'),(1166,0,'','240,240,240'),(1166,1,'','128,255,128'),(1166,2,'','255,255,128'),(1166,3,'','255,128,0'),(1166,4,'','255,0,0'),(1166,5,'','30,144,255'),(1167,0,'','240,240,240'),(1167,1,'','128,255,128'),(1167,2,'','255,255,128'),(1167,3,'','255,128,0'),(1167,4,'','255,0,0'),(1167,5,'','30,144,255'),(1168,0,'','240,240,240'),(1168,1,'','128,255,128'),(1168,2,'','255,255,128'),(1168,3,'','255,128,0'),(1168,4,'','255,0,0'),(1168,5,'','30,144,255'),(1169,0,'','240,240,240'),(1169,1,'','0,170,0'),(1169,2,'','255,255,128'),(1169,3,'','128,255,128'),(1169,4,'','255,0,0'),(1169,5,'','30,144,255'),(1194,0,'','240,240,240'),(1194,1,'','128,255,128'),(1194,2,'','255,255,128'),(1194,3,'','255,165,0'),(1194,4,'','255,0,0'),(1194,5,'','30,144,255'),(1195,0,'','240,240,240'),(1195,1,'','128,255,128'),(1195,2,'','255,255,128'),(1195,3,'','255,128,0'),(1195,4,'','255,0,0'),(1195,5,'','30,144,255'),(1196,0,'','240,240,240'),(1196,1,'','128,255,128'),(1196,2,'','255,255,128'),(1196,3,'','255,165,0'),(1196,4,'','255,0,0'),(1196,5,'','30,144,255'),(1197,0,'','240,240,240'),(1197,1,'','128,255,128'),(1197,2,'','255,255,128'),(1197,3,'','255,165,0'),(1197,4,'','255,0,0'),(1197,5,'','30,144,255'),(1198,0,'','240,240,240'),(1198,1,'','128,255,128'),(1198,2,'','255,255,128'),(1198,3,'','255,165,0'),(1198,4,'','255,0,0'),(1198,5,'','30,144,255'),(1199,0,'','240,240,240'),(1199,1,'','128,255,128'),(1199,2,'','255,255,128'),(1199,3,'','255,165,0'),(1199,4,'','255,0,0'),(1199,5,'','30,144,255'),(1200,0,'','240,240,240'),(1200,1,'','128,255,128'),(1200,2,'','255,255,128'),(1200,3,'','255,165,0'),(1200,4,'','255,0,0'),(1200,5,'','30,144,255'),(1201,0,'','240,240,240'),(1201,1,'','128,255,128'),(1201,2,'','255,255,128'),(1201,3,'','255,165,0'),(1201,4,'','255,0,0'),(1201,5,'','30,144,255'),(1202,0,'','240,240,240'),(1202,1,'','128,255,128'),(1202,2,'','255,255,128'),(1202,3,'','255,165,0'),(1202,4,'','255,0,0'),(1202,5,'','30,144,255'),(1203,0,'','240,240,240'),(1203,1,'','128,255,128'),(1203,2,'','255,255,128'),(1203,3,'','255,165,0'),(1203,4,'','255,0,0'),(1203,5,'','30,144,255'),(1204,0,'','240,240,240'),(1204,1,'','128,255,128'),(1204,2,'','255,255,128'),(1204,3,'','255,165,0'),(1204,4,'','255,0,0'),(1204,5,'','30,144,255'),(1205,0,'','240,240,240'),(1205,1,'','128,255,128'),(1205,2,'','255,255,128'),(1205,3,'','255,165,0'),(1205,4,'','255,0,0'),(1205,5,'','30,144,255'),(1206,0,'','240,240,240'),(1206,1,'','128,255,128'),(1206,2,'','255,255,128'),(1206,3,'','255,165,0'),(1206,4,'','255,0,0'),(1206,5,'','30,144,255'),(1207,0,'','240,240,240'),(1207,1,'','128,255,128'),(1207,2,'','255,255,128'),(1207,3,'','255,165,0'),(1207,4,'','255,0,0'),(1207,5,'','30,144,255'),(1208,0,'','240,240,240'),(1208,1,'','0,170,0'),(1208,2,'','255,255,128'),(1208,3,'','255,165,0'),(1208,4,'','255,0,0'),(1208,5,'','30,144,255'),(1209,0,'','240,240,240'),(1209,1,'','0,170,0'),(1209,2,'','255,255,128'),(1209,3,'','255,165,0'),(1209,4,'','255,0,0'),(1209,5,'','30,144,255'),(1210,0,'','240,240,240'),(1210,1,'','128,255,128'),(1210,2,'','255,255,128'),(1210,3,'','255,165,0'),(1210,4,'','255,0,0'),(1210,5,'','30,144,255'),(1211,0,'','240,240,240'),(1211,1,'','0,170,0'),(1211,2,'','255,255,128'),(1211,3,'','255,165,0'),(1211,4,'','255,0,0'),(1211,5,'','30,144,255'),(1212,0,'','240,240,240'),(1212,1,'','0,170,0'),(1212,2,'','255,255,128'),(1212,3,'','255,165,0'),(1212,4,'','255,0,0'),(1212,5,'','30,144,255'),(1213,0,'','240,240,240'),(1213,1,'','0,170,0'),(1213,2,'','255,255,128'),(1213,3,'','255,165,0'),(1213,4,'','255,0,0'),(1213,5,'','30,144,255'),(1214,0,'','240,240,240'),(1214,1,'','0,170,0'),(1214,2,'','255,255,128'),(1214,3,'','255,165,0'),(1214,4,'','255,0,0'),(1214,5,'','30,144,255'),(1215,0,'','240,240,240'),(1215,1,'','0,170,0'),(1215,2,'','255,255,128'),(1215,3,'','255,165,0'),(1215,4,'','255,0,0'),(1215,5,'','30,144,255'),(1216,0,'','240,240,240'),(1216,1,'','0,170,0'),(1216,2,'','255,255,128'),(1216,3,'','255,165,0'),(1216,4,'','255,0,0'),(1216,5,'','30,144,255');
/*!40000 ALTER TABLE `iconos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incidencias`
--

DROP TABLE IF EXISTS `incidencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `incidencias` (
  `IDINCIDENCIA` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(50) NOT NULL,
  `COLOR` varchar(11) NOT NULL,
  PRIMARY KEY (`IDINCIDENCIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidencias`
--

LOCK TABLES `incidencias` WRITE;
/*!40000 ALTER TABLE `incidencias` DISABLE KEYS */;
INSERT INTO `incidencias` VALUES (1,'Comunicaciones Conex.','0,255,0'),(2,'Comunicaciones Desconex.','255,0,0'),(3,'Estado','0,0,0'),(4,'Mando','0,0,0'),(5,'Sesión usuario','0,0,255'),(6,'Aplicación','0,0,255');
/*!40000 ALTER TABLE `incidencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `info_cgw`
--

DROP TABLE IF EXISTS `info_cgw`;
/*!50001 DROP VIEW IF EXISTS `info_cgw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `info_cgw` AS SELECT 
 1 AS `name`,
 1 AS `dual_cpu`,
 1 AS `emplazamiento`,
 1 AS `num_cpu`,
 1 AS `virtual_ip`,
 1 AS `dual_lan`,
 1 AS `ip_eth0`,
 1 AS `ip_eth1`,
 1 AS `bound_ip`,
 1 AS `gateway_ip`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `operadores`
--

DROP TABLE IF EXISTS `operadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `operadores` (
  `IDOPERADOR` bigint(20) NOT NULL,
  `LOGIN` varchar(16) NOT NULL,
  `PASSWORD` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`IDOPERADOR`),
  UNIQUE KEY `UK_OPERADORES` (`LOGIN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operadores`
--

LOCK TABLES `operadores` WRITE;
/*!40000 ALTER TABLE `operadores` DISABLE KEYS */;
INSERT INTO `operadores` VALUES (1,'admin','admin'),(2,'ope','acom'),(3,'gestor','gestor'),(4,'SupervACC','SupervACC'),(6,'super','acom'),(11,'root','1');
/*!40000 ALTER TABLE `operadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfiles` (
  `IDPERFIL` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(30) NOT NULL,
  `FUNCIONALIDAD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`IDPERFIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
INSERT INTO `perfiles` VALUES (1,'Administrador','Configuración, Modif. parametros Equipo, Telemandos, Monitorización Sistema'),(2,'Gestor',' Modif. parametros Equipo, Telemandos, Monitorización Sistema'),(3,'Operador','Telemandos, Monitorización Sistema'),(4,'Supervisor','Monitorización Sistema');
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planos` (
  `IDPLANO` bigint(20) NOT NULL,
  `PATH` varchar(100) NOT NULL,
  PRIMARY KEY (`IDPLANO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
INSERT INTO `planos` VALUES (1,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\TWR.bmp'),(2,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Emisores.bmp'),(3,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Receptores.bmp'),(4,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Alzado rack Emisores.JPG'),(5,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Alzado rack Receptores con coras.JPG'),(6,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Morgal.bmp'),(7,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Santiago.jpg'),(8,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Solorzano.JPG'),(9,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Plano Base.bmp'),(10,'C:\\proy\\sherpa\\configuracion\\editor\\bitmap\\Alzado Racks Solorzano.JPG'),(11,'C:\\Talos\\editor\\bitmap\\Solorzano.JPG'),(12,'C:\\Talos\\editor\\bitmap\\Alzado Racks Solorzano.JPG'),(13,'C:\\RCS-2010\\bitmap\\Solorzano.JPG'),(14,'C:\\RCS-2010\\bitmap\\Alzado Racks Solorzano.JPG'),(15,'C:\\RCS2010\\bitmap\\Alzado Racks Solorzano.JPG'),(16,'C:\\RCS2010\\bitmap\\Santiago\\Entreplanta\\SantiagoEntreplanta.JPG'),(17,'C:\\RCS2010\\bitmap\\Solorzano.JPG'),(18,'C:\\RCS2010\\bitmap\\Santiago\\Emisores\\Emisores.JPG'),(19,'C:\\RCS2010\\bitmap\\Santiago\\TWR_RX\\TWR_RX.JPG'),(20,'C:\\RCS2010\\bitmap\\Santiago\\TWR_TX\\TWR_TX.JPG'),(21,'C:\\RCS2010\\bitmap\\RutasEmisores.JPG'),(22,'C:\\RCS2010\\bitmap\\Santiago\\RUTAS_TX\\Rutas_TX.JPG'),(23,'C:\\RCS2010\\bitmap\\Santiago\\Aeropuerto\\SCQ.JPG'),(24,'C:\\RCS2010\\bitmap\\Santiago\\Aeropuerto\\Santiago2.JPG'),(25,'C:\\RCS2010\\bitmap\\Plano BaseBego.bmp'),(26,'C:\\rcs2010\\bitmap\\Plano Base.JPG'),(27,'C:\\RCS2010\\bitmap\\Santiago\\TWR_RX\\RXAPP.JPG'),(28,'C:\\RCS2010\\bitmap\\Santiago\\RX_APP\\RXAPP.JPG'),(29,'C:\\RCS2010\\bitmap\\Santiago\\Sala_Equipos\\Sala_Equipos.JPG'),(30,'C:\\RCS2010\\bitmap\\Santiago\\TX_APP\\Rutas_TX.JPG'),(31,'C:\\RCS2010\\bitmap\\Santiago\\Fanal\\Fanal.JPG'),(32,'C:\\RCS2010\\bitmap\\Santiago\\Sala_Equipos\\Sala_Equipos_TACC_FIBRA.JPG'),(33,'C:\\RCS2010\\Bitmap\\Valdespina\\Valdespina.JPG'),(34,'C:\\RCS2010\\Bitmap\\Valdespina\\CentroReceptores.JPG'),(35,'C:\\RCS2010\\Bitmap\\Valdespina\\Receptores.bmp'),(36,'C:\\RCS2010\\Bitmap\\Valdespina\\Emisores.bmp'),(37,'C:\\RCS2010\\bitmap\\fondo2rims.bmp'),(38,'C:\\RCS2010\\bitmap\\Solorzano\\Alzado Racks Solorzano.JPG'),(39,'C:\\RCS2010\\bitmap\\Solorzano\\IconoSolorzano40.JPG'),(40,'C:\\RCS2010\\bitmap\\Fondo FIR.bmp'),(41,'C:\\RCS2010\\bitmap\\Fondo FIR Centrado.bmp'),(42,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Fondo_FIR.bmp'),(43,'C:\\RCS2010\\bitmap\\Comunicaciones\\Comunicaciones.bmp'),(44,'C:\\RCS2010\\bitmap\\Valladolid\\Icono ValladolidRE80.bmp'),(45,'C:\\RCS2010\\bitmap\\Valladolid\\Icono ValladolidCE80.bmp'),(46,'C:\\RCS2010\\bitmap\\VorDomingo\\Icono VorDomingoRE80.bmp'),(47,'C:\\RCS2010\\bitmap\\VorDomingo\\Icono VorDomingoCE80.bmp'),(48,'C:\\RCS2010\\bitmap\\VorDomingo\\Receptores.bmp'),(49,'C:\\RCS2010\\bitmap\\VorDomingo\\Emisores.bmp'),(50,'C:\\RCS2010\\bitmap\\Valladolid\\ValladolidRx.bmp'),(51,'C:\\RCS2010\\bitmap\\Valladolid\\ValladolidRxa.bmp'),(52,'C:\\RCS2010\\bitmap\\Valladolid\\ValladolidTx.bmp'),(53,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Alzado_Rack_Provisional.bmp'),(54,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Rack_Fir_provisional2.bmp'),(55,'C:\\RCS2010\\bitmap\\ACC Torrejón\\Alzado_Rack_Unico_ACC.jpg'),(56,'C:\\RCS2010\\bitmap\\Comunicaciones\\ComunicacionesVic.bmp'),(57,'C:\\RCS2010\\Bitmap\\SABADELL\\Plano base.JPG'),(58,'C:\\RCS2010\\bitmap\\SABADELL\\Plano base.JPG'),(59,'C:\\RCS2010\\Bitmap\\SABADELL\\Plano base.JPG'),(60,'C:\\RCS2010\\bitmapSABADELL\\Plano base.JPG'),(61,'C:\\RCS2010\\Bitmap\\SABADELL\\Plano base.JPG'),(62,'C:\\RCS2010\\bitmap\\SABADELL\\Plano base.JPG'),(63,'C:\\RCS2010\\bitmap\\SABADELL\\Plano base.JPG'),(64,'C:\\RCS2010\\Bitmap\\Emplazamiento.jpg'),(65,'C:\\RCS2010\\Bitmap\\Sistema.jpg'),(66,'C:\\RCS2010\\Bitmap\\Emplazamiento_1.jpg'),(67,'C:\\RCS2010\\Bitmap\\Emplazamiento_2.jpg'),(68,'C:\\RCS2010\\Bitmap\\BitmapEmplazamiento_3.jpg'),(69,'C:\\RCS2010\\Bitmap\\Emplazamiento_1.jpg'),(70,'C:\\RCS2010\\Bitmap\\Emplazamiento_2.jpg'),(71,'C:\\RCS2010\\Bitmap\\Emplazamiento_3.jpg');
/*!40000 ALTER TABLE `planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prioridad`
--

DROP TABLE IF EXISTS `prioridad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prioridad` (
  `IDPRIORIDAD` bigint(20) NOT NULL,
  `TIEMPO` bigint(20) NOT NULL,
  `DESCRIPCION` char(15) NOT NULL,
  PRIMARY KEY (`IDPRIORIDAD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prioridad`
--

LOCK TABLES `prioridad` WRITE;
/*!40000 ALTER TABLE `prioridad` DISABLE KEYS */;
INSERT INTO `prioridad` VALUES (0,10000,'Sin Prioridad'),(1,3000,'Alta'),(2,6000,'Media'),(3,10000,'Baja');
/*!40000 ALTER TABLE `prioridad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reloperadoresperfiles`
--

DROP TABLE IF EXISTS `reloperadoresperfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reloperadoresperfiles` (
  `IDPERFIL` bigint(20) NOT NULL,
  `IDOPERADOR` bigint(20) NOT NULL,
  UNIQUE KEY `UK_RELOPERADORESPERFILES` (`IDPERFIL`,`IDOPERADOR`),
  KEY `FK_RELOPERADORESPERFILES_OPERADORES` (`IDOPERADOR`),
  CONSTRAINT `FK_RELOPERADORESPERFILES_OPERADORES` FOREIGN KEY (`IDOPERADOR`) REFERENCES `operadores` (`IDOPERADOR`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_RELOPERADORESPERFILES_PERFILES` FOREIGN KEY (`IDPERFIL`) REFERENCES `perfiles` (`IDPERFIL`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reloperadoresperfiles`
--

LOCK TABLES `reloperadoresperfiles` WRITE;
/*!40000 ALTER TABLE `reloperadoresperfiles` DISABLE KEYS */;
INSERT INTO `reloperadoresperfiles` VALUES (1,1),(3,2),(2,3),(3,4),(4,6),(1,11);
/*!40000 ALTER TABLE `reloperadoresperfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reloperadorperfilemplazamiento`
--

DROP TABLE IF EXISTS `reloperadorperfilemplazamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reloperadorperfilemplazamiento` (
  `IDPERFIL` bigint(20) NOT NULL,
  `IDOPERADOR` bigint(20) NOT NULL,
  `IDEMPLAZAMIENTO` bigint(20) NOT NULL,
  UNIQUE KEY `UK_RELOPERADORPERFILEMPLAZAMIENTO` (`IDPERFIL`,`IDEMPLAZAMIENTO`,`IDOPERADOR`),
  KEY `FK_RELOPERADORPERFILEMPLAZAMIENTO_EMPLAZAMIENTOS` (`IDEMPLAZAMIENTO`),
  KEY `FK_RELOPERADORPERFILEMPLAZAMIENTO_OPERADORES` (`IDOPERADOR`),
  CONSTRAINT `FK_RELOPERADORPERFILEMPLAZAMIENTO_EMPLAZAMIENTOS` FOREIGN KEY (`IDEMPLAZAMIENTO`) REFERENCES `emplazamientos` (`IDEMPLAZAMIENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_RELOPERADORPERFILEMPLAZAMIENTO_OPERADORES` FOREIGN KEY (`IDOPERADOR`) REFERENCES `operadores` (`IDOPERADOR`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_RELOPERADORPERFILEMPLAZAMIENTO_PERFILES` FOREIGN KEY (`IDPERFIL`) REFERENCES `perfiles` (`IDPERFIL`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reloperadorperfilemplazamiento`
--

LOCK TABLES `reloperadorperfilemplazamiento` WRITE;
/*!40000 ALTER TABLE `reloperadorperfilemplazamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `reloperadorperfilemplazamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `riconos`
--

DROP TABLE IF EXISTS `riconos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `riconos` (
  `ICONID` bigint(20) NOT NULL,
  `PATH` varchar(100) NOT NULL,
  PRIMARY KEY (`ICONID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riconos`
--

LOCK TABLES `riconos` WRITE;
/*!40000 ALTER TABLE `riconos` DISABLE KEYS */;
INSERT INTO `riconos` VALUES (1,'C:\\RCS2010\\bitmap\\ledCORANaranjaEncendido.ico'),(2,'C:\\RCS2010\\bitmap\\CORABoton.jpg'),(3,'C:\\RCS2010\\bitmap\\CORABoton.bmp'),(4,'C:\\RCS2010\\bitmap\\CORALocalAuto.bmp'),(5,'C:\\RCS2010\\bitmap\\CORARectApagado.bmp'),(6,'C:\\RCS2010\\bitmap\\CORARectEncendido.bmp'),(7,'C:\\RCS2010r\\bitmap\\CORARemotoManual.bmp'),(8,'C:\\RCS2010\\bitmap\\EstadoCoraFalloAC.bmp'),(9,'C:\\RCS2010\\bitmap\\EstadoCoraOK.bmp'),(10,'C:\\RCS2010\\bitmap\\estadoCoraFalloDC.bmp'),(11,'C:\\RCS2010\\bitmap\\ledAlarma.ico'),(12,'C:\\RCS2010\\bitmap\\ledAlerta.ico'),(13,'C:\\RCS2010\\bitmap\\ledCORARojoApagado.ico'),(14,'C:\\RCS2010\\bitmap\\ledCORARojoEncendido.ico'),(15,'C:\\RCS2010\\bitmap\\ledCORAVerdeApagado.ico'),(16,'C:\\RCS2010\\bitmap\\ledCORAVerdeEncendido.ico'),(17,'C:\\RCS2010\\bitmap\\ledOk.ico'),(18,'C:\\RCS2010\\bitmap\\ledPreAlerta.ico'),(19,'C:\\RCS2010\\bitmap\\led_inde.ico'),(20,'C:\\RCS2010\\bitmap\\BotonTestIbite900tx.bmp'),(21,'C:\\RCS2010\\bitmap\\BotonTestSy918.bmp'),(22,'C:\\RCS2010\\bitmap\\ledAlertaROE.ico'),(23,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Apagado.JPG'),(24,'C:\\RCS2010\\bitmap\\SEA30_Led_Rojo_Encendido.JPG'),(25,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Apagado.JPG'),(26,'C:\\RCS2010\\bitmap\\SEA30_Led_Naranja_Encendido.JPG'),(27,'C:\\RCS2010\\bitmap\\ledIndeterminadopequeño.bmp'),(28,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepequeño.ico'),(29,'C:\\RCS2010\\bitmap\\ledApagadoVerdepequeño.ico'),(30,'C:\\RCS2010\\bitmap\\BotonSquelch9000rx.bmp'),(31,'C:\\RCS2010\\bitmap\\ledAlarmapequeño.ico'),(32,'C:\\RCS2010\\bitmap\\ledEncendidoVerdepeque¤o.ico'),(33,'C:\\RCS2010\\bitmap\\VorDomingo\\SEA30VDTX.JPG'),(34,'C:\\RCS2010\\bitmap\\ledAlarmapequeÏo.ico'),(35,'C:\\RCS2010\\bitmapPUG5K - desconocida.jpg'),(36,'C:\\RCS2010\\bitmapPUG5K - OK.jpg'),(37,'C:\\RCS2010\\bitmapPUG5K - Reconocida.jpg'),(38,'C:\\RCS2010\\bitmapPUG5K - Alerta.jpg'),(39,'C:\\RCS2010\\bitmapPUG5K - Caida.jpg'),(40,'C:\\RCS2010\\bitmapPUG5K - Alarma.jpg'),(41,'C:\\RCS2010\\BitmapTarjetasInd.jpg'),(42,'C:\\RCS2010\\BitmapTarjetasOk.jpg'),(43,'C:\\RCS2010\\BitmapTarjetasError.jpg');
/*!40000 ALTER TABLE `riconos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seniales`
--

DROP TABLE IF EXISTS `seniales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seniales` (
  `IDTIPOEQUIPO` bigint(20) NOT NULL,
  `IDSENIAL` bigint(20) NOT NULL,
  `IDEQUIPO` bigint(20) NOT NULL,
  `IDTIPOSENIAL` bigint(20) NOT NULL,
  `ORDEN` bigint(20) NOT NULL,
  `V_INF_PREALERTA` decimal(12,2) NOT NULL,
  `V_SUP_PREALERTA` decimal(12,2) NOT NULL,
  `V_INF_ALERTA` decimal(12,2) NOT NULL,
  `V_SUP_ALERTA` decimal(12,2) NOT NULL,
  `V_INF_ALARMA` decimal(12,2) NOT NULL,
  `V_SUP_ALARMA` decimal(12,2) NOT NULL,
  `ACTIVO` bigint(20) NOT NULL,
  `TINTERROGACION` bigint(20) NOT NULL,
  `REGISTRO` bigint(20) NOT NULL,
  `TMUESTRA` bigint(20) NOT NULL,
  `TPORCENTAJE` bigint(20) NOT NULL,
  `IDEQUIPOASOC` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`IDSENIAL`),
  KEY `FK_SENIALES_CATALOGOEQUIPOS` (`IDTIPOEQUIPO`),
  KEY `FK_SENIALES_CATALOGOTIPOSENIALES` (`IDTIPOSENIAL`),
  KEY `FK_SENIALES_EQUIPOS` (`IDEQUIPO`),
  CONSTRAINT `FK_SENIALES_CATALOGOEQUIPOS` FOREIGN KEY (`IDTIPOEQUIPO`) REFERENCES `catalogoequipos` (`IDTIPOEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_SENIALES_CATALOGOTIPOSENIALES` FOREIGN KEY (`IDTIPOSENIAL`) REFERENCES `catalogotiposeniales` (`TIPOSENIAL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_SENIALES_EQUIPOS` FOREIGN KEY (`IDEQUIPO`) REFERENCES `equipos` (`IDEQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seniales`
--

LOCK TABLES `seniales` WRITE;
/*!40000 ALTER TABLE `seniales` DISABLE KEYS */;
INSERT INTO `seniales` VALUES (1000,10100102060,10100101033,1,27,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100102061,10100101033,1,28,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100102062,10100101033,1,29,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100102223,10100101033,1,190,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103035,10100101033,2,2,1.00,1.00,1.00,1.00,1.00,1.00,1,0,0,0,0,0),(1000,10100103036,10100101033,2,3,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103037,10100101033,2,4,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103038,10100101033,2,5,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103039,10100101033,2,6,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103040,10100101033,2,7,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103041,10100101033,2,8,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103042,10100101033,2,9,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103047,10100101033,2,14,0.00,4.00,0.00,4.00,0.00,4.00,1,0,0,0,0,0),(1000,10100103049,10100101033,2,16,0.00,2.00,0.00,2.00,0.00,2.00,1,0,-1,0,0,0),(1000,10100103055,10100101033,2,22,0.00,2.00,0.00,2.00,0.00,2.00,1,0,-2,0,0,0),(1000,10100103056,10100101033,2,23,0.00,2.00,0.00,2.00,0.00,2.00,1,0,-2,0,0,0),(1000,10100103057,10100101033,2,24,0.00,2.00,0.00,2.00,0.00,2.00,1,0,-2,0,0,0),(1000,10100103158,10100101033,2,125,0.00,52.00,0.00,52.00,0.00,52.00,1,0,-2,0,0,0),(1000,10100103159,10100101033,2,126,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103160,10100101033,2,127,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103161,10100101033,2,128,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103162,10100101033,2,129,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103163,10100101033,2,130,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103164,10100101033,2,131,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103165,10100101033,2,132,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103166,10100101033,2,133,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103167,10100101033,2,134,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103168,10100101033,2,135,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103169,10100101033,2,136,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103170,10100101033,2,137,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103171,10100101033,2,138,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103172,10100101033,2,139,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103173,10100101033,2,140,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103174,10100101033,2,141,0.00,16.00,0.00,16.00,0.00,16.00,1,0,0,0,0,0),(1000,10100103176,10100101033,2,143,0.00,1.00,0.00,1.00,0.00,1.00,1,0,-1,0,0,0),(1000,10100103225,10100101033,2,192,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103226,10100101033,2,193,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103227,10100101033,2,194,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103228,10100101033,2,195,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103229,10100101033,2,196,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103230,10100101033,2,197,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103233,10100101033,2,200,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103239,10100101033,2,206,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103244,10100101033,2,211,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103245,10100101033,2,212,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103250,10100101033,2,217,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103251,10100101033,2,218,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103256,10100101033,2,223,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103257,10100101033,2,224,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103262,10100101033,2,229,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103263,10100101033,2,230,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103268,10100101033,2,235,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103269,10100101033,2,236,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103274,10100101033,2,241,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103275,10100101033,2,242,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103280,10100101033,2,247,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103281,10100101033,2,248,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103286,10100101033,2,253,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100103287,10100101033,2,254,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103292,10100101033,2,259,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103293,10100101033,2,260,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103298,10100101033,2,265,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103299,10100101033,2,266,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103304,10100101033,2,271,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103305,10100101033,2,272,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103310,10100101033,2,277,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103311,10100101033,2,278,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103316,10100101033,2,283,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103317,10100101033,2,284,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103322,10100101033,2,289,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103323,10100101033,2,290,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103328,10100101033,2,295,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103329,10100101033,2,296,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103347,10100101033,2,314,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103348,10100101033,2,315,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103349,10100101033,2,316,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103350,10100101033,2,317,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103351,10100101033,2,318,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103352,10100101033,2,319,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103353,10100101033,2,320,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103354,10100101033,2,321,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103355,10100101033,2,322,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103356,10100101033,2,323,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103357,10100101033,2,324,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103358,10100101033,2,325,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103359,10100101033,2,326,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103360,10100101033,2,327,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103361,10100101033,2,328,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103362,10100101033,2,329,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103363,10100101033,2,330,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103364,10100101033,2,331,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103365,10100101033,2,332,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103366,10100101033,2,333,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103367,10100101033,2,334,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103368,10100101033,2,335,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103369,10100101033,2,336,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103370,10100101033,2,337,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103371,10100101033,2,338,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103372,10100101033,2,339,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103373,10100101033,2,340,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103374,10100101033,2,341,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103375,10100101033,2,342,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103376,10100101033,2,343,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103377,10100101033,2,344,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103378,10100101033,2,345,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103379,10100101033,2,346,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103380,10100101033,2,347,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103381,10100101033,2,348,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103382,10100101033,2,349,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103383,10100101033,2,350,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103384,10100101033,2,351,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103385,10100101033,2,352,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103386,10100101033,2,353,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103387,10100101033,2,354,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103388,10100101033,2,355,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103389,10100101033,2,356,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103390,10100101033,2,357,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103391,10100101033,2,358,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103392,10100101033,2,359,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103393,10100101033,2,360,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103394,10100101033,2,361,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(1000,10100103395,10100101033,2,362,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103396,10100101033,2,363,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103397,10100101033,2,364,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103398,10100101033,2,365,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103399,10100101033,2,366,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103400,10100101033,2,367,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103401,10100101033,2,368,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103402,10100101033,2,369,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103403,10100101033,2,370,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103404,10100101033,2,371,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103405,10100101033,2,372,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103406,10100101033,2,373,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103407,10100101033,2,374,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103408,10100101033,2,375,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103409,10100101033,2,376,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(1000,10100103410,10100101033,2,377,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(2000,10100104003,10100102000,2,3,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104007,10100102000,2,7,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104009,10100102000,2,9,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104010,10100102000,2,10,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104011,10100102000,2,11,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104013,10100102000,2,13,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104015,10100102000,2,15,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104016,10100102000,2,16,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104017,10100102000,2,17,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104019,10100102000,2,19,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104020,10100102000,2,20,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104021,10100102000,2,21,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104022,10100102000,2,22,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104023,10100102000,2,23,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104024,10100102000,2,24,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104025,10100102000,2,25,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104026,10100102000,2,26,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104027,10100102000,2,27,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104028,10100102000,2,28,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104029,10100102000,2,29,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104030,10100102000,2,30,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104031,10100102000,2,31,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104032,10100102000,2,32,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104033,10100102000,2,33,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104034,10100102000,2,34,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104035,10100102000,2,35,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104036,10100102000,2,36,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104037,10100102000,2,37,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104038,10100102000,2,38,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104039,10100102000,2,39,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104040,10100102000,2,40,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104041,10100102000,2,41,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104042,10100102000,2,42,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104043,10100102000,2,43,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104044,10100102000,2,44,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104045,10100102000,2,45,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104046,10100102000,2,46,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104047,10100102000,2,47,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104048,10100102000,2,48,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(2000,10100104049,10100102000,2,49,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(3000,10100105001,10100103000,2,1,1.00,1.00,1.00,1.00,1.00,1.00,1,0,-2,0,0,0),(3000,10100105002,10100103000,2,2,1.00,1.00,1.00,1.00,1.00,1.00,1,0,-2,0,0,0),(3000,10100105003,10100103000,2,3,1.00,1.00,1.00,1.00,1.00,1.00,1,0,-2,0,0,0),(3000,10100105004,10100103000,2,4,1.00,1.00,1.00,1.00,1.00,1.00,1,0,-2,0,0,0),(3000,10100105005,10100103000,2,5,1.00,1.00,1.00,1.00,1.00,2.00,1,0,-2,0,0,0),(3000,10100105006,10100103000,4,6,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(3000,10100105007,10100103000,5,7,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(3000,10100105008,10100103000,2,8,1.00,2.00,1.00,2.00,1.00,2.00,1,0,0,0,0,0),(3000,10100105009,10100103000,5,9,1.00,2.00,1.00,2.00,1.00,2.00,1,0,0,0,0,0),(1000,10100105143,10100101033,4,110,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105144,10100101033,4,111,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105177,10100101033,4,144,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105178,10100101033,4,145,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105180,10100101033,4,147,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105181,10100101033,4,148,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105183,10100101033,4,150,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105184,10100101033,4,151,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105186,10100101033,4,153,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105187,10100101033,4,154,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105189,10100101033,4,156,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105190,10100101033,4,157,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105192,10100101033,4,159,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105193,10100101033,4,160,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105195,10100101033,4,162,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105196,10100101033,4,163,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105198,10100101033,4,165,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105199,10100101033,4,166,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105201,10100101033,4,168,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105202,10100101033,4,169,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105204,10100101033,4,171,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105205,10100101033,4,172,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105207,10100101033,4,174,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105208,10100101033,4,175,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105210,10100101033,4,177,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105211,10100101033,4,178,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105213,10100101033,4,180,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105214,10100101033,4,181,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105216,10100101033,4,183,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105217,10100101033,4,184,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105219,10100101033,4,186,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105220,10100101033,4,187,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105224,10100101033,4,191,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100105232,10100101033,4,199,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106034,10100101033,5,1,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106046,10100101033,5,13,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106091,10100101033,5,58,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106092,10100101033,5,59,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106093,10100101033,5,60,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106094,10100101033,5,61,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106095,10100101033,5,62,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106096,10100101033,5,63,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106097,10100101033,5,64,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106098,10100101033,5,65,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106099,10100101033,5,66,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106100,10100101033,5,67,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106101,10100101033,5,68,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106102,10100101033,5,69,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106103,10100101033,5,70,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106104,10100101033,5,71,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106105,10100101033,5,72,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106106,10100101033,5,73,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106179,10100101033,5,146,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106182,10100101033,5,149,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106185,10100101033,5,152,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106188,10100101033,5,155,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106191,10100101033,5,158,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106194,10100101033,5,161,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106197,10100101033,5,164,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106200,10100101033,5,167,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106203,10100101033,5,170,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106206,10100101033,5,173,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106209,10100101033,5,176,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106212,10100101033,5,179,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106215,10100101033,5,182,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106218,10100101033,5,185,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106221,10100101033,5,188,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106222,10100101033,5,189,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106231,10100101033,5,198,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106234,10100101033,5,201,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106240,10100101033,5,207,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106246,10100101033,5,213,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106252,10100101033,5,219,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106258,10100101033,5,225,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106264,10100101033,5,231,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106270,10100101033,5,237,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106276,10100101033,5,243,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106282,10100101033,5,249,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106288,10100101033,5,255,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106294,10100101033,5,261,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106300,10100101033,5,267,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106306,10100101033,5,273,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106312,10100101033,5,279,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106318,10100101033,5,285,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100106324,10100101033,5,291,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107001,10100102000,5,1,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107002,10100102000,5,2,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107004,10100102000,5,4,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107005,10100102000,5,5,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107006,10100102000,5,6,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107008,10100102000,5,8,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107012,10100102000,5,12,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107014,10100102000,5,14,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(2000,10100107018,10100102000,5,18,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(1000,10100107145,10100101033,6,112,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(6000,10100108001,10100106000,2,1,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108002,10100106000,2,2,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108003,10100106000,2,3,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108004,10100106000,2,4,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108005,10100106000,2,5,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108006,10100106000,2,6,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108007,10100106000,2,7,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108008,10100106000,2,8,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108009,10100106000,2,9,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108010,10100106000,2,10,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108011,10100106000,2,11,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108012,10100106000,2,12,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108013,10100106000,2,13,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108014,10100106000,2,14,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108015,10100106000,2,15,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108016,10100106000,2,16,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108017,10100106000,2,17,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108018,10100106000,2,18,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108019,10100106000,2,19,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108020,10100106000,2,20,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108021,10100106000,2,21,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108022,10100106000,2,22,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108023,10100106000,2,23,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(6000,10100108024,10100106000,2,24,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-1,0,0,0),(9000,10100111001,10100109000,2,1,0.00,10.00,0.00,10.00,0.00,10.00,1,0,-2,0,0,0),(9000,10100111003,10100109000,2,3,0.00,2.00,0.00,2.00,0.00,2.00,1,0,-2,0,0,0),(9000,10100111004,10100109000,2,4,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100111006,10100109000,2,6,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100111007,10100109000,2,7,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100111009,10100109000,2,9,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100111010,10100109000,2,10,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100111012,10100109000,2,12,0.00,0.00,0.00,0.00,0.00,0.00,1,0,-2,0,0,0),(9000,10100114002,10100109000,5,2,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(9000,10100114005,10100109000,5,5,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(9000,10100114008,10100109000,5,8,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(9000,10100114011,10100109000,5,11,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0),(50000,10100152034,10100150033,2,1,0.00,9.00,0.00,9.00,0.00,9.00,1,0,-2,0,0,0),(50000,10100152035,10100150033,2,2,0.00,4.00,0.00,4.00,0.00,4.00,1,0,-2,0,0,0),(50000,10100152036,10100150033,2,3,0.00,9.00,0.00,9.00,0.00,9.00,1,0,-2,0,0,0),(50000,10100155037,10100150033,5,4,0.00,0.00,0.00,0.00,0.00,0.00,1,0,0,0,0,0);
/*!40000 ALTER TABLE `seniales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sistemas`
--

DROP TABLE IF EXISTS `sistemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sistemas` (
  `IDSISTEMA` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(32) NOT NULL,
  `IDPLANO` bigint(20) NOT NULL,
  PRIMARY KEY (`IDSISTEMA`),
  UNIQUE KEY `UK_SISTEMAS` (`DESCRIPCION`),
  KEY `FK_SISTEMAS_PLANOS` (`IDPLANO`),
  CONSTRAINT `FK_SISTEMAS_PLANOS` FOREIGN KEY (`IDPLANO`) REFERENCES `planos` (`IDPLANO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sistemas`
--

LOCK TABLES `sistemas` WRITE;
/*!40000 ALTER TABLE `sistemas` DISABLE KEYS */;
/*!40000 ALTER TABLE `sistemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `spvs_cgw`
--

DROP TABLE IF EXISTS `spvs_cgw`;
/*!50001 DROP VIEW IF EXISTS `spvs_cgw`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_cgw` AS SELECT 
 1 AS `name`,
 1 AS `resource`,
 1 AS `slave_rank`,
 1 AS `slave_type`,
 1 AS `resource_type`,
 1 AS `resource_rank`,
 1 AS `frecuencia`,
 1 AS `resource_subtype`,
 1 AS `remoto`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `spvs_site`
--

DROP TABLE IF EXISTS `spvs_site`;
/*!50001 DROP VIEW IF EXISTS `spvs_site`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `spvs_site` AS SELECT 
 1 AS `idEMPLAZAMIENTO`,
 1 AS `name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `sysdiagrams`
--

DROP TABLE IF EXISTS `sysdiagrams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sysdiagrams` (
  `name` varchar(128) NOT NULL,
  `principal_id` int(11) NOT NULL,
  `diagram_id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `definition` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sysdiagrams`
--

LOCK TABLES `sysdiagrams` WRITE;
/*!40000 ALTER TABLE `sysdiagrams` DISABLE KEYS */;
/*!40000 ALTER TABLE `sysdiagrams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbconfig`
--

DROP TABLE IF EXISTS `tbconfig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbconfig` (
  `IDCONFIG` bigint(20) NOT NULL,
  `STRCONFIG` varchar(50) NOT NULL,
  `BNUMERICO` varchar(1) NOT NULL,
  `STRSTRING` varchar(100) DEFAULT NULL,
  `IVALOR` bigint(20) DEFAULT NULL,
  UNIQUE KEY `UK_TBCONFIG` (`IDCONFIG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbconfig`
--

LOCK TABLES `tbconfig` WRITE;
/*!40000 ALTER TABLE `tbconfig` DISABLE KEYS */;
INSERT INTO `tbconfig` VALUES (1,'Dias de permanencia datos historicos','1',NULL,30),(2,'Path de la aplicación para copiar la OID','0','C://Documents and Settings//bhuetos//Escritorio//MIB Browser',NULL),(3,'Tiempo para polling','1',NULL,1000),(4,'Tiempo máximo en sesión','1',NULL,600);
/*!40000 ALTER TABLE `tbconfig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terminales`
--

DROP TABLE IF EXISTS `terminales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `terminales` (
  `IDTERMINAL` bigint(20) NOT NULL,
  `DESCRIPCION` varchar(50) DEFAULT NULL,
  `IP` varchar(20) NOT NULL,
  `ID_PC` varchar(32) NOT NULL DEFAULT 'CLIENTE-XX',
  PRIMARY KEY (`IDTERMINAL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terminales`
--

LOCK TABLES `terminales` WRITE;
/*!40000 ALTER TABLE `terminales` DISABLE KEYS */;
INSERT INTO `terminales` VALUES (1,'NUCLEO-IDI-PC','10.10.184.87','CLIENTE-01'),(2,'VOTER-WS','10.10.184.10','CLIENTE-02');
/*!40000 ALTER TABLE `terminales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vinfoagrup`
--

DROP TABLE IF EXISTS `vinfoagrup`;
/*!50001 DROP VIEW IF EXISTS `vinfoagrup`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoagrup` AS SELECT 
 1 AS `AGRUPAMIENTO`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoagrupeq`
--

DROP TABLE IF EXISTS `vinfoagrupeq`;
/*!50001 DROP VIEW IF EXISTS `vinfoagrupeq`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoagrupeq` AS SELECT 
 1 AS `agrupamiento`,
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `IP`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoagrupeqsen`
--

DROP TABLE IF EXISTS `vinfoagrupeqsen`;
/*!50001 DROP VIEW IF EXISTS `vinfoagrupeqsen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoagrupeqsen` AS SELECT 
 1 AS `agrupamiento`,
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `ip`,
 1 AS `oideq`,
 1 AS `reintentocnx`,
 1 AS `senial`,
 1 AS `tiposenial`,
 1 AS `orden`,
 1 AS `v_inf_prealerta`,
 1 AS `v_sup_prealerta`,
 1 AS `v_inf_alerta`,
 1 AS `v_sup_alerta`,
 1 AS `v_inf_alarma`,
 1 AS `v_sup_alarma`,
 1 AS `oidsen`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfocatalogoeqsen`
--

DROP TABLE IF EXISTS `vinfocatalogoeqsen`;
/*!50001 DROP VIEW IF EXISTS `vinfocatalogoeqsen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfocatalogoeqsen` AS SELECT 
 1 AS `tipoequipo`,
 1 AS `tiposenial`,
 1 AS `orden`,
 1 AS `senial`,
 1 AS `oidsen`,
 1 AS `v_inf_prealerta`,
 1 AS `v_sup_prealerta`,
 1 AS `v_inf_alerta`,
 1 AS `v_sup_alerta`,
 1 AS `v_inf_alarma`,
 1 AS `v_sup_alarma`,
 1 AS `rango_inf`,
 1 AS `rango_sup`,
 1 AS `intervalo`,
 1 AS `idvalor`,
 1 AS `valor`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoempl`
--

DROP TABLE IF EXISTS `vinfoempl`;
/*!50001 DROP VIEW IF EXISTS `vinfoempl`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoempl` AS SELECT 
 1 AS `EMPLAZAMIENTO`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoemplagrup`
--

DROP TABLE IF EXISTS `vinfoemplagrup`;
/*!50001 DROP VIEW IF EXISTS `vinfoemplagrup`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoemplagrup` AS SELECT 
 1 AS `emplazamiento`,
 1 AS `agrupamiento`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoemplagrupeq`
--

DROP TABLE IF EXISTS `vinfoemplagrupeq`;
/*!50001 DROP VIEW IF EXISTS `vinfoemplagrupeq`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoemplagrupeq` AS SELECT 
 1 AS `emplazamiento`,
 1 AS `agrupamiento`,
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `ip`,
 1 AS `oid`,
 1 AS `reintentocnx`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoemplagrupeqsen`
--

DROP TABLE IF EXISTS `vinfoemplagrupeqsen`;
/*!50001 DROP VIEW IF EXISTS `vinfoemplagrupeqsen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoemplagrupeqsen` AS SELECT 
 1 AS `emplazamiento`,
 1 AS `agrupamiento`,
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `ip`,
 1 AS `oideq`,
 1 AS `reintentocnx`,
 1 AS `senial`,
 1 AS `tiposenial`,
 1 AS `orden`,
 1 AS `v_inf_prealerta`,
 1 AS `v_sup_prealerta`,
 1 AS `v_inf_alerta`,
 1 AS `v_sup_alerta`,
 1 AS `v_inf_alarma`,
 1 AS `v_sup_alarma`,
 1 AS `oidsen`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoempleq`
--

DROP TABLE IF EXISTS `vinfoempleq`;
/*!50001 DROP VIEW IF EXISTS `vinfoempleq`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoempleq` AS SELECT 
 1 AS `emplazamiento`,
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `ip`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoemplsen`
--

DROP TABLE IF EXISTS `vinfoemplsen`;
/*!50001 DROP VIEW IF EXISTS `vinfoemplsen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoemplsen` AS SELECT 
 1 AS `emplazamiento`,
 1 AS `equipo`,
 1 AS `senial`,
 1 AS `tipoequipo`,
 1 AS `tiposenial`,
 1 AS `orden`,
 1 AS `v_inf_prealerta`,
 1 AS `v_sup_prealerta`,
 1 AS `v_inf_alerta`,
 1 AS `v_sup_alerta`,
 1 AS `v_inf_alarma`,
 1 AS `v_sup_alarma`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoeq`
--

DROP TABLE IF EXISTS `vinfoeq`;
/*!50001 DROP VIEW IF EXISTS `vinfoeq`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoeq` AS SELECT 
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `IP`,
 1 AS `OID`,
 1 AS `REINTENTOCNX`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfoeqsen`
--

DROP TABLE IF EXISTS `vinfoeqsen`;
/*!50001 DROP VIEW IF EXISTS `vinfoeqsen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfoeqsen` AS SELECT 
 1 AS `equipo`,
 1 AS `tipoequipo`,
 1 AS `ip`,
 1 AS `oideq`,
 1 AS `reintentocnx`,
 1 AS `senial`,
 1 AS `tiposenial`,
 1 AS `orden`,
 1 AS `v_inf_prealerta`,
 1 AS `v_sup_prealerta`,
 1 AS `v_inf_alerta`,
 1 AS `v_sup_alerta`,
 1 AS `v_inf_alarma`,
 1 AS `v_sup_alarma`,
 1 AS `oidsen`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfooper`
--

DROP TABLE IF EXISTS `vinfooper`;
/*!50001 DROP VIEW IF EXISTS `vinfooper`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfooper` AS SELECT 
 1 AS `operador`,
 1 AS `emplazamiento`,
 1 AS `perfil`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vinfosen`
--

DROP TABLE IF EXISTS `vinfosen`;
/*!50001 DROP VIEW IF EXISTS `vinfosen`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vinfosen` AS SELECT 
 1 AS `senial`,
 1 AS `tipoequipo`,
 1 AS `tiposenial`,
 1 AS `ORDEN`,
 1 AS `V_INF_PREALERTA`,
 1 AS `V_SUP_PREALERTA`,
 1 AS `V_INF_ALERTA`,
 1 AS `V_SUP_ALERTA`,
 1 AS `V_INF_ALARMA`,
 1 AS `V_SUP_ALARMA`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vseniales`
--

DROP TABLE IF EXISTS `vseniales`;
/*!50001 DROP VIEW IF EXISTS `vseniales`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vseniales` AS SELECT 
 1 AS `idtipoequipo`,
 1 AS `idsenial`,
 1 AS `descripcion`,
 1 AS `IDTIPOSENIAL`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vseniales1`
--

DROP TABLE IF EXISTS `vseniales1`;
/*!50001 DROP VIEW IF EXISTS `vseniales1`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vseniales1` AS SELECT 
 1 AS `IDSENIAL`,
 1 AS `DESCRIPCION`*/;
SET character_set_client = @saved_cs_client;

--
-- Current Database: `ug5kv2`
--

USE `ug5kv2`;

--
-- Final view structure for view `alarmas_view`
--

/*!50001 DROP VIEW IF EXISTS `alarmas_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alarmas_view` AS select `a`.`idHistoricoIncidencias` AS `idHistoricoIncidencias`,`a`.`FechaHora` AS `FechaHora`,`a`.`IdEmplaz` AS `idEmplaz`,`a`.`IdHw` AS `IdHw`,`a`.`TipoHw` AS `TipoHw`,`a`.`Descripcion` AS `descripcion`,`b`.`Nivel` AS `Nivel` from (`historicoincidencias` `a` join `incidencias` `b`) where ((`a`.`IdIncidencia` = `b`.`IdIncidencia`) and (`b`.`LineaEventos` = 1) and isnull(`a`.`Reconocida`)) order by `b`.`Nivel` desc limit 200 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `emplazamiento`
--

/*!50001 DROP VIEW IF EXISTS `emplazamiento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `emplazamiento` AS select `e`.`idemplazamiento` AS `idEMPLAZAMIENTO`,`e`.`configuracion_id` AS `cfg_idCFG`,`e`.`nombre` AS `name` from `emplazamientos` `e` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `info_cgw`
--

/*!50001 DROP VIEW IF EXISTS `info_cgw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `info_cgw` AS select `p`.`nombre` AS `name`,1 AS `dual_cpu`,`e`.`nombre` AS `emplazamiento`,1 AS `num_cpu`,`p`.`ip_virtual` AS `virtual_ip`,1 AS `dual_lan`,'' AS `ip_eth0`,'' AS `ip_eth1`,`p`.`ip_cpu0` AS `bound_ip`,`p`.`ip_gtw0` AS `gateway_ip`,`e`.`idemplazamiento` AS `idemplazamiento`,`e`.`configuracion_id` AS `idconfiguracion`,`p`.`idpasarela` AS `idpasarela` from ((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) where (`c`.`activa` = 1) union select `p`.`nombre` AS `name`,1 AS `dual_cpu`,`e`.`nombre` AS `emplazamiento`,2 AS `num_cpu`,`p`.`ip_virtual` AS `virtual_ip`,1 AS `dual_lan`,'' AS `ip_eth0`,'' AS `ip_eth1`,`p`.`ip_cpu1` AS `bound_ip`,`p`.`ip_gtw1` AS `gateway_ip`,`e`.`idemplazamiento` AS `idemplazamiento`,`e`.`configuracion_id` AS `idconfiguracion`,`p`.`idpasarela` AS `idpasarela` from ((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) where (`c`.`activa` = 1) order by `idconfiguracion`,`emplazamiento`,`name`,`num_cpu` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `info_cgw_all`
--

/*!50001 DROP VIEW IF EXISTS `info_cgw_all`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `info_cgw_all` AS select `p`.`nombre` AS `name`,1 AS `dual_cpu`,`e`.`nombre` AS `emplazamiento`,1 AS `num_cpu`,`p`.`ip_virtual` AS `virtual_ip`,1 AS `dual_lan`,'' AS `ip_eth0`,'' AS `ip_eth1`,`p`.`ip_cpu0` AS `bound_ip`,`p`.`ip_gtw0` AS `gateway_ip`,`e`.`idemplazamiento` AS `idemplazamiento`,`e`.`configuracion_id` AS `idconfiguracion`,`p`.`idpasarela` AS `idpasarela` from ((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) union select `p`.`nombre` AS `name`,1 AS `dual_cpu`,`e`.`nombre` AS `emplazamiento`,2 AS `num_cpu`,`p`.`ip_virtual` AS `virtual_ip`,1 AS `dual_lan`,'' AS `ip_eth0`,'' AS `ip_eth1`,`p`.`ip_cpu1` AS `bound_ip`,`p`.`ip_gtw1` AS `gateway_ip`,`e`.`idemplazamiento` AS `idemplazamiento`,`e`.`configuracion_id` AS `idconfiguracion`,`p`.`idpasarela` AS `idpasarela` from ((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) order by `idconfiguracion`,`emplazamiento`,`name`,`num_cpu` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_cgw`
--

/*!50001 DROP VIEW IF EXISTS `spvs_cgw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_cgw` AS select `p`.`nombre` AS `name`,`rr`.`nombre` AS `resource`,`rr`.`columna` AS `slave_rank`,0 AS `slave_type`,1 AS `resource_type`,`rr`.`fila` AS `resource_rank`,cast(`rr`.`frecuencia` as char(7) charset utf8) AS `frecuencia`,`rr`.`tipo_agente` AS `resource_subtype`,(case when (`rr`.`tipo_agente` > 3) then 'True' else 'False' end) AS `remoto`,`p`.`idpasarela` AS `idpasarela` from (((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) left join `recursos_radio` `rr` on((`p`.`idpasarela` = `rr`.`pasarela_id`))) where ((`c`.`activa` = 1) and (`rr`.`nombre` is not null)) union select `p`.`nombre` AS `name`,`rt`.`nombre` AS `resource`,`rt`.`columna` AS `slave_rank`,0 AS `slave_type`,2 AS `resource_type`,`rt`.`fila` AS `resource_rank`,NULL AS `frecuencia`,`rt`.`tipo_interfaz_tel` AS `resource_subtype`,'False' AS `remoto`,`p`.`idpasarela` AS `idpasarela` from (((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) left join `recursos_telefono` `rt` on((`p`.`idpasarela` = `rt`.`pasarela_id`))) where ((`c`.`activa` = 1) and (`rt`.`nombre` is not null)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_cgw_reserva`
--

/*!50001 DROP VIEW IF EXISTS `spvs_cgw_reserva`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_cgw_reserva` AS select `p`.`nombre` AS `name`,`rr`.`columna` AS `slave_rank`,0 AS `slave_type`,1 AS `resource_type`,`rr`.`fila` AS `resource_rank`,cast(`rr`.`frecuencia` as char(7) charset utf8) AS `frecuencia`,`rr`.`tipo_agente` AS `resource_subtype`,(case when (`rr`.`tipo_agente` > 3) then 'True' else 'False' end) AS `remoto` from (((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) left join `recursos_radio` `rr` on((`p`.`idpasarela` = `rr`.`pasarela_id`))) where ((`c`.`activa` = 1) and (`rr`.`nombre` is not null)) group by `name` union select `p`.`nombre` AS `name`,`rt`.`columna` AS `slave_rank`,0 AS `slave_type`,2 AS `resource_type`,`rt`.`fila` AS `resource_rank`,NULL AS `frecuencia`,`rt`.`tipo_interfaz_tel` AS `resource_subtype`,'False' AS `remoto` from (((`pasarelas` `p` left join `emplazamientos` `e` on((`p`.`emplazamiento_id` = `e`.`idemplazamiento`))) left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) left join `recursos_telefono` `rt` on((`p`.`idpasarela` = `rt`.`pasarela_id`))) where ((`c`.`activa` = 1) and (`rt`.`nombre` is not null)) group by `name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_site`
--

/*!50001 DROP VIEW IF EXISTS `spvs_site`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_site` AS select `e`.`idemplazamiento` AS `idEMPLAZAMIENTO`,`e`.`nombre` AS `name`,`e`.`configuracion_id` AS `configuracion` from (`emplazamientos` `e` left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) where (`c`.`activa` = 1) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_site_all`
--

/*!50001 DROP VIEW IF EXISTS `spvs_site_all`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_site_all` AS select `e`.`idemplazamiento` AS `idEMPLAZAMIENTO`,`e`.`nombre` AS `name`,`e`.`configuracion_id` AS `configuracion` from (`emplazamientos` `e` left join `configuraciones` `c` on((`e`.`configuracion_id` = `c`.`idconfiguracion`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Current Database: `rcs`
--

USE `rcs`;

--
-- Final view structure for view `alarmas_view`
--

/*!50001 DROP VIEW IF EXISTS `alarmas_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alarmas_view` AS select 1 AS `idHistoricoIncidencias`,1 AS `FechaHora`,1 AS `idEmplaz`,1 AS `IdHw`,1 AS `TipoHw`,1 AS `descripcion`,1 AS `Nivel` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `alivegateways_view`
--

/*!50001 DROP VIEW IF EXISTS `alivegateways_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `alivegateways_view` AS select 1 AS `idCGW`,1 AS `EMPLAZAMIENTO_idEMPLAZAMIENTO`,1 AS `REGIONES_idREGIONES`,1 AS `servicio`,1 AS `name`,1 AS `dualidad`,1 AS `ipv`,1 AS `ips`,1 AS `nivelconsola`,1 AS `puertoconsola`,1 AS `nivelIncidencias`,1 AS `idEMPLAZAMIENTO`,1 AS `site`,1 AS `CFG_idCFG`,1 AS `Activa` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `info_cgw`
--

/*!50001 DROP VIEW IF EXISTS `info_cgw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `info_cgw` AS select 1 AS `name`,1 AS `dual_cpu`,1 AS `emplazamiento`,1 AS `num_cpu`,1 AS `virtual_ip`,1 AS `dual_lan`,1 AS `ip_eth0`,1 AS `ip_eth1`,1 AS `bound_ip`,1 AS `gateway_ip` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_cgw`
--

/*!50001 DROP VIEW IF EXISTS `spvs_cgw`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_cgw` AS select 1 AS `name`,1 AS `resource`,1 AS `slave_rank`,1 AS `slave_type`,1 AS `resource_type`,1 AS `resource_rank`,1 AS `frecuencia`,1 AS `resource_subtype`,1 AS `remoto` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `spvs_site`
--

/*!50001 DROP VIEW IF EXISTS `spvs_site`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `spvs_site` AS select 1 AS `idEMPLAZAMIENTO`,1 AS `name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoagrup`
--

/*!50001 DROP VIEW IF EXISTS `vinfoagrup`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoagrup` AS select distinct `agrupamientos`.`DESCRIPCION` AS `AGRUPAMIENTO` from `agrupamientos` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoagrupeq`
--

/*!50001 DROP VIEW IF EXISTS `vinfoagrupeq`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoagrupeq` AS select 1 AS `agrupamiento`,1 AS `equipo`,1 AS `tipoequipo`,1 AS `IP` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoagrupeqsen`
--

/*!50001 DROP VIEW IF EXISTS `vinfoagrupeqsen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoagrupeqsen` AS select 1 AS `agrupamiento`,1 AS `equipo`,1 AS `tipoequipo`,1 AS `ip`,1 AS `oideq`,1 AS `reintentocnx`,1 AS `senial`,1 AS `tiposenial`,1 AS `orden`,1 AS `v_inf_prealerta`,1 AS `v_sup_prealerta`,1 AS `v_inf_alerta`,1 AS `v_sup_alerta`,1 AS `v_inf_alarma`,1 AS `v_sup_alarma`,1 AS `oidsen` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfocatalogoeqsen`
--

/*!50001 DROP VIEW IF EXISTS `vinfocatalogoeqsen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfocatalogoeqsen` AS select `catalogoequipos`.`DESCRIPCION` AS `tipoequipo`,`catalogotiposeniales`.`DESCRIPCION` AS `tiposenial`,`catalogoseniales`.`ORDEN` AS `orden`,`descripcion`.`DESCRIPCION` AS `senial`,`catalogoseniales`.`OID` AS `oidsen`,NULL AS `v_inf_prealerta`,NULL AS `v_sup_prealerta`,NULL AS `v_inf_alerta`,NULL AS `v_sup_alerta`,NULL AS `v_inf_alarma`,NULL AS `v_sup_alarma`,NULL AS `rango_inf`,NULL AS `rango_sup`,NULL AS `intervalo`,NULL AS `idvalor`,NULL AS `valor` from (((`catalogoseniales` join `catalogoequipos`) join `descripcion`) join `catalogotiposeniales`) where ((`catalogoseniales`.`IDTIPOEQUIPO` = `catalogoequipos`.`IDTIPOEQUIPO`) and (`catalogoseniales`.`IDDESCRIPCION` = `descripcion`.`IDDESCRIPCION`) and (`catalogoseniales`.`IDTIPOSENIAL` = `catalogotiposeniales`.`TIPOSENIAL`) and ((`catalogotiposeniales`.`TIPO` = 'ED') or (`catalogotiposeniales`.`TIPO` = 'SD') or (`catalogotiposeniales`.`TIPO` = 'SA'))) union select `catalogoequipos`.`DESCRIPCION` AS `tipoequipo`,`catalogotiposeniales`.`DESCRIPCION` AS `tiposenial`,`catalogoseniales`.`ORDEN` AS `orden`,`descripcion`.`DESCRIPCION` AS `senial`,`catalogoseniales`.`OID` AS `oidsen`,`catalogo_ea`.`V_INF_PREALERTA` AS `v_inf_prealerta`,`catalogo_ea`.`V_SUP_PREALERTA` AS `v_sup_prealerta`,`catalogo_ea`.`V_INF_ALERTA` AS `v_inf_alerta`,`catalogo_ea`.`V_SUP_ALERTA` AS `v_sup_alerta`,`catalogo_ea`.`V_INF_ALARMA` AS `v_inf_alarma`,`catalogo_ea`.`V_SUP_ALARMA` AS `v_sup_alarma`,NULL AS `rango_inf`,NULL AS `rango_sup`,NULL AS `intervalo`,NULL AS `idvalor`,NULL AS `valor` from ((((`catalogoseniales` join `catalogoequipos`) join `descripcion`) join `catalogotiposeniales`) join `catalogo_ea`) where ((`catalogoseniales`.`IDTIPOEQUIPO` = `catalogoequipos`.`IDTIPOEQUIPO`) and (`catalogoseniales`.`IDDESCRIPCION` = `descripcion`.`IDDESCRIPCION`) and (`catalogoseniales`.`IDTIPOSENIAL` = `catalogotiposeniales`.`TIPOSENIAL`) and (`catalogotiposeniales`.`TIPO` = 'EA') and (`catalogo_ea`.`IDTIPOEQUIPO` = `catalogoseniales`.`IDTIPOEQUIPO`) and (`catalogo_ea`.`ORDEN` = `catalogoseniales`.`ORDEN`)) union select `catalogoequipos`.`DESCRIPCION` AS `tipoequipo`,`catalogotiposeniales`.`DESCRIPCION` AS `tiposenial`,`catalogoseniales`.`ORDEN` AS `orden`,`descripcion`.`DESCRIPCION` AS `senial`,`catalogoseniales`.`OID` AS `oidsen`,NULL AS `v_inf_prealerta`,NULL AS `v_sup_prealerta`,NULL AS `v_inf_alerta`,NULL AS `v_sup_alerta`,NULL AS `v_inf_alarma`,NULL AS `v_sup_alarma`,NULL AS `rango_inf`,NULL AS `rango_sup`,NULL AS `intervalo`,`catalogo_ea_val`.`IDVALOR` AS `idvalor`,`catalogo_ea_val`.`VALOR` AS `valor` from ((((`catalogoseniales` join `catalogoequipos`) join `descripcion`) join `catalogotiposeniales`) join `catalogo_ea_val`) where ((`catalogoseniales`.`IDTIPOEQUIPO` = `catalogoequipos`.`IDTIPOEQUIPO`) and (`catalogoseniales`.`IDDESCRIPCION` = `descripcion`.`IDDESCRIPCION`) and (`catalogoseniales`.`IDTIPOSENIAL` = `catalogotiposeniales`.`TIPOSENIAL`) and (`catalogotiposeniales`.`TIPO` = 'EA') and (`catalogo_ea_val`.`IDTIPOEQUIPO` = `catalogoseniales`.`IDTIPOEQUIPO`) and (`catalogo_ea_val`.`ORDEN` = `catalogoseniales`.`ORDEN`)) union select `catalogoequipos`.`DESCRIPCION` AS `tipoequipo`,`catalogotiposeniales`.`DESCRIPCION` AS `tiposenial`,`catalogoseniales`.`ORDEN` AS `orden`,`descripcion`.`DESCRIPCION` AS `senial`,`catalogoseniales`.`OID` AS `oidsen`,NULL AS `v_inf_prealerta`,NULL AS `v_sup_prealerta`,NULL AS `v_inf_alerta`,NULL AS `v_sup_alerta`,NULL AS `v_inf_alarma`,NULL AS `v_sup_alarma`,NULL AS `rango_inf`,NULL AS `rango_sup`,NULL AS `intervalo`,`catalogo_sa_val`.`IDVALOR` AS `idvalor`,`catalogo_sa_val`.`VALOR` AS `valor` from ((((`catalogoseniales` join `catalogoequipos`) join `descripcion`) join `catalogotiposeniales`) join `catalogo_sa_val`) where ((`catalogoseniales`.`IDTIPOEQUIPO` = `catalogoequipos`.`IDTIPOEQUIPO`) and (`catalogoseniales`.`IDDESCRIPCION` = `descripcion`.`IDDESCRIPCION`) and (`catalogoseniales`.`IDTIPOSENIAL` = `catalogotiposeniales`.`TIPOSENIAL`) and (`catalogotiposeniales`.`TIPO` = 'SA') and (`catalogo_sa_val`.`IDTIPOEQUIPO` = `catalogoseniales`.`IDTIPOEQUIPO`) and (`catalogo_sa_val`.`ORDEN` = `catalogoseniales`.`ORDEN`)) union select `catalogoequipos`.`DESCRIPCION` AS `tipoequipo`,`catalogotiposeniales`.`DESCRIPCION` AS `tiposenial`,`catalogoseniales`.`ORDEN` AS `orden`,`descripcion`.`DESCRIPCION` AS `senial`,`catalogoseniales`.`OID` AS `oidsen`,NULL AS `v_inf_prealerta`,NULL AS `v_sup_prealerta`,NULL AS `v_inf_alerta`,NULL AS `v_sup_alerta`,NULL AS `v_inf_alarma`,NULL AS `v_sup_alarma`,`catalogo_sa_int`.`RANGO_INF` AS `rango_inf`,`catalogo_sa_int`.`RANGO_SUP` AS `rango_sup`,`catalogo_sa_int`.`INTERVALO` AS `intervalo`,NULL AS `idvalor`,NULL AS `valor` from ((((`catalogoseniales` join `catalogoequipos`) join `descripcion`) join `catalogotiposeniales`) join `catalogo_sa_int`) where ((`catalogoseniales`.`IDTIPOEQUIPO` = `catalogoequipos`.`IDTIPOEQUIPO`) and (`catalogoseniales`.`IDDESCRIPCION` = `descripcion`.`IDDESCRIPCION`) and (`catalogoseniales`.`IDTIPOSENIAL` = `catalogotiposeniales`.`TIPOSENIAL`) and (`catalogotiposeniales`.`TIPO` = 'SA') and (`catalogo_sa_int`.`IDTIPOEQUIPO` = `catalogoseniales`.`IDTIPOEQUIPO`) and (`catalogo_sa_int`.`ORDEN` = `catalogoseniales`.`ORDEN`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoempl`
--

/*!50001 DROP VIEW IF EXISTS `vinfoempl`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoempl` AS select 1 AS `EMPLAZAMIENTO` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoemplagrup`
--

/*!50001 DROP VIEW IF EXISTS `vinfoemplagrup`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoemplagrup` AS select 1 AS `emplazamiento`,1 AS `agrupamiento` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoemplagrupeq`
--

/*!50001 DROP VIEW IF EXISTS `vinfoemplagrupeq`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoemplagrupeq` AS select 1 AS `emplazamiento`,1 AS `agrupamiento`,1 AS `equipo`,1 AS `tipoequipo`,1 AS `ip`,1 AS `oid`,1 AS `reintentocnx` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoemplagrupeqsen`
--

/*!50001 DROP VIEW IF EXISTS `vinfoemplagrupeqsen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoemplagrupeqsen` AS select 1 AS `emplazamiento`,1 AS `agrupamiento`,1 AS `equipo`,1 AS `tipoequipo`,1 AS `ip`,1 AS `oideq`,1 AS `reintentocnx`,1 AS `senial`,1 AS `tiposenial`,1 AS `orden`,1 AS `v_inf_prealerta`,1 AS `v_sup_prealerta`,1 AS `v_inf_alerta`,1 AS `v_sup_alerta`,1 AS `v_inf_alarma`,1 AS `v_sup_alarma`,1 AS `oidsen` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoempleq`
--

/*!50001 DROP VIEW IF EXISTS `vinfoempleq`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoempleq` AS select 1 AS `emplazamiento`,1 AS `equipo`,1 AS `tipoequipo`,1 AS `ip` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoemplsen`
--

/*!50001 DROP VIEW IF EXISTS `vinfoemplsen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoemplsen` AS select 1 AS `emplazamiento`,1 AS `equipo`,1 AS `senial`,1 AS `tipoequipo`,1 AS `tiposenial`,1 AS `orden`,1 AS `v_inf_prealerta`,1 AS `v_sup_prealerta`,1 AS `v_inf_alerta`,1 AS `v_sup_alerta`,1 AS `v_inf_alarma`,1 AS `v_sup_alarma` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoeq`
--

/*!50001 DROP VIEW IF EXISTS `vinfoeq`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoeq` AS select 1 AS `equipo`,1 AS `tipoequipo`,1 AS `IP`,1 AS `OID`,1 AS `REINTENTOCNX` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfoeqsen`
--

/*!50001 DROP VIEW IF EXISTS `vinfoeqsen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfoeqsen` AS select 1 AS `equipo`,1 AS `tipoequipo`,1 AS `ip`,1 AS `oideq`,1 AS `reintentocnx`,1 AS `senial`,1 AS `tiposenial`,1 AS `orden`,1 AS `v_inf_prealerta`,1 AS `v_sup_prealerta`,1 AS `v_inf_alerta`,1 AS `v_sup_alerta`,1 AS `v_inf_alarma`,1 AS `v_sup_alarma`,1 AS `oidsen` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfooper`
--

/*!50001 DROP VIEW IF EXISTS `vinfooper`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfooper` AS select 1 AS `operador`,1 AS `emplazamiento`,1 AS `perfil` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vinfosen`
--

/*!50001 DROP VIEW IF EXISTS `vinfosen`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vinfosen` AS select 1 AS `senial`,1 AS `tipoequipo`,1 AS `tiposenial`,1 AS `ORDEN`,1 AS `V_INF_PREALERTA`,1 AS `V_SUP_PREALERTA`,1 AS `V_INF_ALERTA`,1 AS `V_SUP_ALERTA`,1 AS `V_INF_ALARMA`,1 AS `V_SUP_ALARMA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vseniales`
--

/*!50001 DROP VIEW IF EXISTS `vseniales`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vseniales` AS select 1 AS `idtipoequipo`,1 AS `idsenial`,1 AS `descripcion`,1 AS `IDTIPOSENIAL` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vseniales1`
--

/*!50001 DROP VIEW IF EXISTS `vseniales1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vseniales1` AS select 1 AS `IDSENIAL`,1 AS `DESCRIPCION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-07 11:00:23
