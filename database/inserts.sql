insert into rol values(1,'ADMINISTRADOR'), (2,'DIRECTOR');
--INSERT INTO `proceso` (`PRC_ID`, `USR_CODIGO`, `A_ID`, `B_ID`, `C_ID`, `ASE_CC`, `PRC_FORM_A`, `PRC_FORM_B`, `PRC_FORM_C`, `PRC_TITULO`, `prc_tipo`) VALUES ('2023.1', '104619021313', '2', NULL, NULL, NULL, '0', '0', '0', 'IA xd', 'Trabajo de Grado');
--INSERT INTO `estudiante` (`EST_CODIGO`, `PRC_ID`, `EST_NOMBRE`, `EST_CORREO`) VALUES ('1', '2023.100', 'Santiago', 'sbenitez@unicauca.edu.co');

insert into usuario values (104619021331,"santiago benitez",'sbenitez', 'prueba', 'sbenitez@unicauca.edu.co');
insert into usuariorol values (104619021331,2,sysdate,null);
INSERT INTO  estudiante (EST_CODIGO, PRC_ID, EST_NOMBRE, EST_CORREO) VALUES ('1', null, 'Santiago', 'sbenitez@unicauca.edu.co');