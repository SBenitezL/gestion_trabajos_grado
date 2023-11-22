insert into rol values(1,'ADMINISTRADOR'), (2,'DIRECTOR');
insert into usuario values (104619021331,"santiago benitez",'sbenitez', 'prueba', 'sbenitez@unicauca.edu.co');
insert into usuariorol values (104619021331,2,sysdate,null);
INSERT INTO `estudiante` (`EST_CODIGO`, `PRC_ID`, `EST_NOMBRE`, `EST_CORREO`) VALUES ('1', null, 'Santiago', 'sbenitez@unicauca.edu.co');
INSERT INTO ROL VALUES(3, 'JEFATURA'),(4, 'CONSEJO DE FACULTAD'), (5, 'EVALUADOR');
/**
 * SELECT a.ANX_SRC AS RUTA
 * FROM ANEXOS a INNER JOIN PROCESO p
 * ON a.PRC_ID = p.PRC_ID 
 * INNER JOIN ESTUDIANTE e 
 * ON e.PRC_ID = p.PRC_ID
 * es.EST_CODIGO=?;
 */
/**
 * INSERT INTO ANEXOS (TD_ID,PRC_ID,ANX_RECIBIDO,ANX_SRC) VALUES(1,?,?,?);
 */
/**
 * SELECT PRC_ID as prc
 * FROM PROCESO
 * WHERE USR_CODIGO=?;
 */
 INSERT INTO `tipo_documento` (`TD_ID`, `TD_NOMBRE`) VALUES ('1', 'Anteproyecto');