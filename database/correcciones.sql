alter table bandejaentrada add constraint FK_BANDEJAENTRADA_USUARIO foreign key (usr_codigo)
	references usuario(usr_codigo) on delete restrict on update restrict;

alter table proceso drop column inv_codigo;
ALTER TABLE proceso ADD prc_tipo VARCHAR(30);

ALTER TABLE proceso DROP FOREIGN KEY FK_ASESORAR;
alter table proceso drop COLUMN ASE_CC;
ALTER TABLE proceso add column nom_asesor varchar(150);
ALTER TABLE estudiante
MODIFY COLUMN prc_id decimal(7,3) NULL;

//Cambio 13/11/2023
ALTER TABLE ti_a add column a_interes text not null;
//16/11/2023
ALTER TABLE archivos
MODIFY COLUMN arc_id INT AUTO_INCREMENT;
//19/11/2023
ALTER TABLE usuario
MODIFY usuario.usr_password VARCHAR(64);
//20/11/2023
ALTER TABLE ANEXOS
MODIFY COLUMN ANX_ID INT AUTO_INCREMENT;
//22/11/2023
alter table evaluarfacultad add constraint FK_EVALUARFACULTAD_USUARIO foreign key (USR_CODIGO)
      references usuario (USR_CODIGO) on delete restrict on update restrict;
//3/12/2023
ALTER TABLE ti_b DROP USR_CODIGO;
alter TABLE ti_b MODIFY COLUMN B_ID int(11) AUTO_INCREMENT;
ALTER TABLE ti_b
MODIFY COLUMN B_APORTES tinyint null,
MODIFY COLUMN B_OBJETIVOS tinyint null,
MODIFY COLUMN B_METODOLOGIA tinyint null,
MODIFY COLUMN B_ENTREGA tinyint null,
MODIFY COLUMN B_ESTRUCTURA tinyint null,
MODIFY COLUMN B_CRONOGRAMA tinyint null,
MODIFY COLUMN B_PATROCINIO tinyint null,
MODIFY COLUMN B_CONCEPTO tinyint null,
MODIFY COLUMN B_RECIBIDO date null,
MODIFY COLUMN B_OBSERVACIONES text null,
MODIFY COLUMN B_NO_REVISIONES int null,
MODIFY COLUMN B_REVISION date null;
