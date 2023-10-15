alter table bandejaentrada add constraint FK_BANDEJAENTRADA_USUARIO foreign key (usr_codigo)
	references usuario(usr_codigo) on delete restrict on update restrict;


