insert into rol values(1,'ADMINISTRADOR'), (2,'DIRECTOR');
insert into usuario values (104619021331,"santiago benitez",'sbenitez', 'prueba', 'sbenitez@unicauca.edu.co');
insert into usuariorol values (104619021331,2,sysdate,null);
INSERT INTO `estudiante` (`EST_CODIGO`, `PRC_ID`, `EST_NOMBRE`, `EST_CORREO`) VALUES ('1', null, 'Santiago', 'sbenitez@unicauca.edu.co');
INSERT INTO ROL VALUES(3, 'JEFATURA'),(4, 'CONSEJO DE FACULTAD'), (5, 'EVALUADOR');