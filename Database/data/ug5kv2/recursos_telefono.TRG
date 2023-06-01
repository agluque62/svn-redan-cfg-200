TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER `recurso_telefono_BEFORE_INSERT` BEFORE INSERT ON `recursos_telefono` FOR EACH ROW BEGIN\n	IF (NEW.uri_telefonica NOT LIKE \'sip:%\') THEN\n		IF(NEW.uri_telefonica NOT LIKE \'\') THEN\n			set NEW.uri_telefonica = CONCAT(\'sip:\', NEW.uri_telefonica);\n		END IF;\n    END IF;\n	IF (NEW.additional_uri_remota NOT LIKE \'sip:%\') THEN\n		IF(NEW.additional_uri_remota NOT LIKE \'\') THEN\n			set NEW.additional_uri_remota = CONCAT(\'sip:\', NEW.additional_uri_remota);\n		END IF;\n    END IF;\nEND' 'CREATE DEFINER=`root`@`%` TRIGGER `recursos_telefono_BEFORE_UPDATE` BEFORE UPDATE ON `recursos_telefono` FOR EACH ROW BEGIN\n	IF(NEW.uri_telefonica NOT LIKE \'\' AND NEW.uri_telefonica NOT LIKE \'sip:%\') THEN\n		set NEW.uri_telefonica = CONCAT(\'sip:\', NEW.uri_telefonica);\n	END IF;\n	IF(NEW.additional_uri_remota NOT LIKE \'\' AND NEW.additional_uri_remota NOT LIKE \'sip:%\') THEN\n		set NEW.additional_uri_remota = CONCAT(\'sip:\', NEW.additional_uri_remota);\n	END IF;\nEND'
sql_modes=1411383296 1411383296
definers='root@%' 'root@%'
client_cs_names='utf8mb4' 'utf8mb4'
connection_cl_names='utf8mb4_general_ci' 'utf8mb4_general_ci'
db_cl_names='latin1_spanish_ci' 'latin1_spanish_ci'
created=1685523610660519 1685523610609623
