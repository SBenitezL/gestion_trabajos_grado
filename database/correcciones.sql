alter table bandejaentrada add constraint FK_BANDEJAENTRADA_USUARIO foreign key (usr_codigo)
	references usuario(usr_codigo) on delete restrict on update restrict;

alter table proceso drop column inv_codigo;
ALTER TABLE proceso ADD prc_tipo VARCHAR(30);

ALTER TABLE proceso DROP FOREIGN KEY FK_ASESORAR;
alter table proceso drop COLUMN ASE_CC;
ALTER TABLE proceso add column nom_asesor varchar(150);
