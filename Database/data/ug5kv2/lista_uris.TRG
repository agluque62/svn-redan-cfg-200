TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER `lista_uris_BEFORE_INSERT` BEFORE INSERT ON `lista_uris` FOR EACH ROW BEGIN\n	IF (NEW.uri NOT LIKE \'sip:%\') THEN\n		set NEW.uri = CONCAT(\'sip:\', NEW.uri);\n	END IF;\nEND'
sql_modes=524288
definers='root@%'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_general_ci'
db_cl_names='latin1_spanish_ci'
created=1685523610556981
