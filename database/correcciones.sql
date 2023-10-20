alter table bandejaentrada add constraint FK_BANDEJAENTRADA_USUARIO foreign key (usr_codigo)
	references usuario(usr_codigo) on delete restrict on update restrict;

alter table proceso drop column inv_codigo;
ALTER TABLE proceso ADD prc_tipo VARCHAR(30);

