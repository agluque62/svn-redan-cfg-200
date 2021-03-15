/*
SQLyog Community v11.2 (64 bit)
MySQL - 5.6.11-log : Database - ug5kv2
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ug5kv2` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */;

USE `ug5kv2`;

/*Table structure for table `incidencias` */

DROP TABLE IF EXISTS `incidencias`;

CREATE TABLE `incidencias` (
  `IdIncidencia` int(10) unsigned NOT NULL,
  `Incidencia` varchar(180) COLLATE latin1_spanish_ci NOT NULL,
  `Descripcion` varchar(180) COLLATE latin1_spanish_ci NOT NULL,
  `LineaEventos` tinyint(1) NOT NULL,
  `Grupo` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `Error` tinyint(1) NOT NULL DEFAULT '0',
  `Nivel` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdIncidencia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `incidencias` */

insert  into `incidencias`(`IdIncidencia`,`Incidencia`,`Descripcion`,`LineaEventos`,`Grupo`,`Error`,`Nivel`) 
values 
(47,'Inicio sesión RCS2010 UG5KR','Inicio sesión RCS2010 UG5KR  del usuario: {0}',0,'SEGURIDAD',0,0),
(48,'Recahazada sesión RCS2010 UG5KR','Rechazada sesión RCS2010 UG5KR  al usuario: {0}',0,'SEGURIDAD',0,0),
(49,'Fin sesion RCS2010 UG5KR','Fin sesion RCS2010 UG5KR  del usuario: {0}',0,'SEGURIDAD',0,0),
(50,'Inicio sesión Configuración Centralizada','Inicio sesión Configuración Centralizada  del usuario',1,'SEGURIDAD',0,1),
(51,'Rechazado  sesión Configuración Centralizada','Rechazada sesión Configuración Centralizada  del usuario ',1,'SEGURIDAD',0,2),
(52,'Alta Usuario','Alta Usuario',0,'SEGURIDAD',0,0),
(53,'Borrado Usuario','Borrado Usuario ',0,'SEGURIDAD',0,0),
(54,'Modificado Usuario','Modificado Usuario',0,'SEGURIDAD',0,0),
(55,'Fin sesion  Configuración Centralizada ','Fin sesion  Configuración Centralizada  del usuario ',1,'SEGURIDAD',0,1),
(105,'Carga de Configuración Remota','Carga de Configuración Remota',0,'CONF-R',0,0),
(106,'Error Carga Configuración Remota','Error Carga Configuración Remota',0,'CONF-R',0,0),
(107,'Alta de Pasarela','Alta de Pasarela',0,'CONF-R',0,0),
(108,'Baja de Pasarela','Baja de Pasarela',0,'CONF-R',0,0),
(109,'Modificación de Parámetros Generales de Pasarela','Modificación de Parámetros Generales de Pasarela',0,'CONF-R',0,0),
(110,'Modificación Rutas ATS','Modificación Rutas ATS',0,'CONF-R',0,0),
(113,'Alta de Recurso','Alta de Recurso',0,'CONF-R',0,0),
(114,'Baja de Recurso','Baja de Recurso',0,'CONF-R',0,0),
(115,'Modificación de Parámetros de Recurso','Modificación de Parámetros de Recurso',0,'CONF-R',0,0),
(116,'Modificación de Parámetros Lógicos de  Recurso','Modificación de Parámetros Lógicos de  Recurso',0,'CONF-R',0,0),
(117,'Baja de Tabla de Calificación de Audio','Baja de Tabla de Calificación de Audio',0,'CONF-R',0,0),
(118,'Alta de Tabla de Calificación de Audio','Alta de Tabla de Calificación de Audio',0,'CONF-R',0,0),
(119,'Activacion de Configuracion en Campo', 'Activacion de Configuracion en Campo. CFG: {0}.', 0, 'CONF-R', 0, 0),
(120,'Error en Activacion de Configuracion en Campo', 'Error en Activacion de Configuracion en Campo. CFG: {0}. Error: {1}', 1, 'CONF-R', 0, 0),
(121,'Carga de Configuracion en Pasarela', 'Carga de Configuracion en Pasarela. Pasarela: {0}.', 0, 'CONF-R', 0, 0),
(122,'Error en Carga de Configuracion en Pasarela', 'Error en Carga de Configuracion en Pasarela. Pasarela: {0}. Error: {1}', 1, 'CONF-R', 0, 0),
(150,'Modificación de Parámetros Generales de Pasarela.','Modificación Parámetro en: {0}. {1}',0,'CONF-L',0,0),
(153,'Modificación de Parámetros Lógico de Recurso','Modificación SW en Recurso: {0}. {1}. {2}',0,'CONF-L',0,0),
(154,'Generación de Configuración por Defecto.','Generación de Configuración por Defecto: {0}. {1}',0,'CONF-L',0,0),
(155,'Activación de Configuración por Defecto.','Activación de Configuración por Defecto: {0}. {1}',0,'CONF-L',0,0),
(156,'Borrado de Configuración por Defecto','Borrado de Configuración por Defecto: {0}. {1}',0,'CONF-L',0,0),
(157,'Alta Recurso Radio','Recurso Radio  Añadido: {0}. {1}. {2}',0,'CONF-L',0,0),
(158,'Baja Recurso Radio','Recurso Radio Eliminado: {0}. {1}. {2}',0,'CONF-L',0,0),
(159,'Alta Recurso Telefonía','Recurso Telefónico Añadido: {0}. {1}. {2}',0,'CONF-L',0,0),
(160,'Baja Recurso Telefonía','Recurso Telefónico  Eliminado: {0} . {1} . {2}',0,'CONF-L',0,0),
(161,'Conflicto de configuraciones','Conflicto de Configuración en GW: {0}. {1}. {2}',0,'CONF-L',0,0),
(180,'Carga versión Software Pasarela','Carga de Versión Software Pasarela: {0} {1}',0,'MAN-L',0,0),
(181,'Selección Activación Recurso', 'Selección Activación Recurso {0}:  {1} ', 0, 'MAN-L', 0, 0),
(182,'Reset Remoto','Reset Remoto: {0}',0,'MAN-L',0,0),
(183,'Selección Bucle Prueba','Selección Bucle: {0} {1}  en {2}.',0,'MAN-L',0,0),
(184,'Comando Bite','Selección  BITE: {0}',0,'MAN-L',0,0),
(185,'Conmutacion P/R','Selección Conmutación P/R: {0}',0,'MAN-L',0,0),
(186,'Selección Modo','Selección Modo: {0}',0,'MAN-L',0,0),
(187,'Resultado Comando Bite','Resultado  BITE: {0} : {1}',0,'MAN-L',0,0),
(188,'Resultado Activación Recurso', 'Resultado Activación de Recurso {0}: {1}', 0, 'MAN-L', 0, 0),
(193,'Resultado  bucle prueba','Resultado Bucle: {0} en {1} : {2}',0,'MAN-L',0,0),
(195,'Resultado Conmutacion P/R','Resultado  Conmutación P/R: {0} {1}',0,'MAN-L',0,0),
(196,'Resultado  Modo','Resultado  Modo: {0}',0,'MAN-L',0,0),
(198,'Inhibición Registro Histórico Pasarela', 'Inhibición Registro Histórico Pasarela: {0}', 0, 'MAN-L', 0, 0),
(199,'Resultado Inhibición Registro Histórico Pasarela', 'Resultado Inhibición Registro Histórico Pasarela: {0}', 0, 'MAN-L', 0, 0),
(201,'Arranque APP RCS2010','Arranque APP RCS2010 UG5KR en puesto: {0}',1,'SP-GEN',0,1),
(202,'Cierre Aplicacion APP RCS2010','Cierre Aplicacion APP RCS2010 UG5KR  en puesto: {0}',1,'SP-GEN',0,1),
(210,'Inicio sesión APP UG5KR CVS', 'Inicio sesión APP UG5KR CVS del usuario: {0}', 0, 'SEGURIDAD', 0, 0),
(211,'Recahazada sesión APP UG5KR CVS', 'Rechazada sesión  APP UG5KR CVS al usuario: {0}', 0, 'SEGURIDAD', 0, 0),
(212,'Fin sesion  APP UG5KR CVS', 'Fin sesionAPP UG5KR CVS del usuario: {0}', 0, 'SEGURIDAD', 0, 0),
(213,'Arranque APP APP UG5KR CVS', 'Arranque APP UG5KR CVS en puesto: {0}', 1, 'SP-GEN', 0, 2),
(214,'Cierre APP UG5KR CVS', 'Cierre en puesto: {0}', 1, 'SP-GEN', 0, 2),
(215,'Resultado carga versión Software Pasarela', 'Resultado carga de Versión Software Pasarela: {0} {1}', 0, 'MAN-L', 0, 0),
(2000,'Cambio estado Pasarela','Cambio estado pasarela: {0}',1,'SP-PASARELA',0,2),
(2003,'Cambio Estado LAN','Cambio Estado LANs. CGW: {0} : LAN1 {1}  : LAN2 {2}',1,'SP-PASARELA',0,2),
(2005,'Cambio Estado CPU','Cambio Estado CPUs. CGW: {0} : CPU Local {1}  : CPU Dual {2}',1,'SP-PASARELA',0,2),
(2007,'Conexión Recurso Radio','Conexión Recurso Radio: {0}',1,'SP-PASARELA',0,0),
(2008,'Desconexión Recurso Radio','Desconexión Recurso Radio: {0}',1,'SP-PASARELA',1,1),
(2009,'Conexión Recurso Telefonía','Conexión Recurso Telefonía: {0}',1,'SP-PASARELA',0,0),
(2010,'Desconexión Recurso Telefonía','Desconexión Recurso Telefonía: {0}',1,'SP-PASARELA',1,1),
(2011,'Conexión Tarjeta Interfaz (esclava-tipo)','Conexión Tarjeta Interfaz. Número: {0}: Tipo: {1}',1,'SP-PASARELA',0,0),
(2012,'Desconexión Tarjeta Interfaz (esclava-tipo)','Desconexión Tarjeta Interfaz. Número: {0}: Tipo: {1}',1,'SP-PASARELA',1,1),
(2013,'Conexión Recurso R2','Conexión Recurso R2: {0}',1,'SP-PASARELA',0,0),
(2014,'Desconexión Recurso R2.','Desconexión Recurso R2: {0}',1,'SP-PASARELA',1,1),
(2015,'Conexión Recurso N5','Conexión Recurso N5: {0}',1,'SP-PASARELA',0,0),
(2016,'Desconexión Recurso N5','Desconexión Recurso N5: {0}',1,'SP-PASARELA',1,1),
(2017,'Conexión Recurso QSIG','Conexión Recurso QSIG: {0}',1,'SP-PASARELA',0,0),
(2018,'Desconexión Recurso  QSIG','Desconexión Recurso QSIG: {0}',1,'SP-PASARELA',1,1),
(2019,'Conexión Recurso LCEN','Conexión Recurso LCEN: {0}',1,'SP-PASARELA',0,0),
(2020,'Desconexión Recurso  LCEN','Desconexión Recurso  LCEN: {0}',1,'SP-PASARELA',1,1),
(2021,'Servicio NTP Conectado','Servicio NTP Conectado {0}',1,'SP-PASARELA',0,0),
(2022,'Servicio NTP Desconectado','Servicio NTP Desconectado {0}',1,'SP-PASARELA',1,2),
(2027,'Cambio estado Sincro BD.','Cambio estado Sincro BD: {0}',1,'SP-PASARELA',0,2),
(2101,'Caída/establecimiento sesión SIP','Cambio sesión SIP. Recurso: {0} Sesión:  {1} {2} {3} ',0,'SP-RADIO',0,0),
(2102,'Cambio PTT','Cambio estado PTT. Recurso: {0} Estado: {1}',0,'SP-RADIO',0,0),
(2103,'Cambio SQU','Cambio estado SQU. Recurso: {0} Estado: {1}',0,'SP-RADIO',0,0),
(2200,'Error Protocolo LCEN','Error Protocolo LCEN. Recurso: {0}',0,'SP-TELEFONIA',1,0),
(2202,'Fallo test LCEN VoIP (mensaje Options)','Fallo test LCEN VoIP. Recurso: {0}',1,'SP-TELEFONIA',1,1),
(2203,'Error Protocolo R2','Error Protocolo R2. Recurso: {0}.',1,'SP-TELEFONIA',1,1),
(2204,'Fallo llamada de test R2 SCV','Fallo llamada de test R2 SCV. Recurso: {0}',1,'SP-TELEFONIA',1,1),
(2205,'Fallo llamada de test R2 VoIP (mensaje Options)','Fallo llamada de test R2 VoIP. Recurso: {0}',1,'SP-TELEFONIA',1,1),
(2206,'Error Protocolo N5','Error Protocolo N5. Recurso: {0}.',1,'SP-TELEFONIA',1,1),
(2207,'Fallo llamada de test N5 SCV','Fallo llamada de test N5 SCV. Recurso: {0}',1,'SP-TELEFONIA',1,1),
(2208,'Fallo llamada de test N5 VoIP (mensaje Options)','Fallo llamada de test N5 VoIP. Recurso: {0}',1,'SP-TELEFONIA',1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
