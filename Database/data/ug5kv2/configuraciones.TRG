TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`%` TRIGGER `configuraciones_BEFORE_DELETE` BEFORE DELETE ON `configuraciones` FOR EACH ROW BEGIN\nDECLARE specialty CONDITION FOR SQLSTATE \'45001\';\n	IF old.activa=1 THEN\n		SIGNAL SQLSTATE \'45000\'\n		SET MESSAGE_TEXT = \'No se pueden borrar las configuraciones supervisadas\', MYSQL_ERRNO = 1001;\n      END IF;\nEND'
sql_modes=1411383296
definers='root@%'
client_cs_names='utf8mb4'
connection_cl_names='utf8mb4_general_ci'
db_cl_names='latin1_spanish_ci'
created=1685523610497236
