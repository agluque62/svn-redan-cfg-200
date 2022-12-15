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
	ADD TmTonoBloqueo int DEFAULT 0;
--
--
--
ALTER TABLE `ug5kv2`.`recursos_telefono`
	ADD TmBloqueoLib int DEFAULT 0;
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
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{LOGIN_CENTRALIZED}",
	Incidencia = "{LOGIN_CENTRALIZED_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 50;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{REJECT_SESSION}",
	Incidencia = "{REJECT_SESSION_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 51;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{USER_REGISTERED}",
	Incidencia = "{USER_REGISTERED_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 52;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{USER_DELETED}",
	Incidencia = "{USER_DELETED_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 53;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{USER_MODIFIED}",
	Incidencia = "{USER_MODIFIED_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 54;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{END_SESSION}",
	Incidencia = "{END_SESSION_TEXT}",
	Grupo = "{SECURITY}" 
	WHERE IdIncidencia = 55;
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{CONFIG_CREATE}",
	Incidencia = "{CONFIG_CREATE_TEXT}" 
	WHERE IdIncidencia = 101; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{CONFIG_DELETE}",
	Incidencia = "{CONFIG_DELETE_TEXT}" 
	WHERE IdIncidencia = 102; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{CONFIG_UPDATE}",
	Incidencia = "{CONFIG_UPDATE_TEXT}" 
	WHERE IdIncidencia = 103; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{GATEWAY_CREATE}",
	Incidencia = "{GATEWAY_CREATE_TEXT}" 
	WHERE IdIncidencia = 107; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{GATEWAY_DELETE}",
	Incidencia = "{GATEWAY_DELETE_TEXT}" 
	WHERE IdIncidencia = 108; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{GATEWAY_UPDATE}",
	Incidencia = "{GATEWAY_UPDATE_TEXT}" 
	WHERE IdIncidencia = 109; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{GATEWAY_UPDATE_PARAM}",
	Incidencia = "{GATEWAY_UPDATE_PARAM_TEXT}" 
	WHERE IdIncidencia = 110;  
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{RESOURCE_CREATE}",
	Incidencia = "{RESOURCE_CREATE_TEXT}" 
	WHERE IdIncidencia = 113; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{RESOURCE_DELETE}",
	Incidencia = "{RESOURCE_DELETE_TEXT}" 
	WHERE IdIncidencia = 114; 
--
--
--
UPDATE `ug5kv2`.`incidencias` 
	SET Descripcion = "{RESOURCE_UPDATE}",
	Incidencia = "{RESOURCE_UPDATE_TEXT}" 
	WHERE IdIncidencia = 115;

--
--
--