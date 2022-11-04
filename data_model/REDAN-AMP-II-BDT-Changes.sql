use `ug5kv2`;

ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD `llamada_automatica` boolean DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD `iTmMaxConversacion` int DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD iControlTmLlam boolean DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD RespuestaSIP_ATSR2 int DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono` 
	ADD TmTonoBloqueo int DEFAULT 1;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD TmBloqueoLib int DEFAULT 100;
--
--
--
ALTER TABLE `ug5kv2`.`pasarelas`
	ADD COLUMN refresher int DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`pasarelas`
	ADD COLUMN supervisionTlf int DEFAULT 1;
--
--
--