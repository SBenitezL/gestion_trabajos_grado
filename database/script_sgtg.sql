/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     4/10/2023 4:29:26 p. m.                      */
/*==============================================================*/


drop table if exists ANEXOS;

drop table if exists ARCHIVOS;

drop table if exists AREAS_INTERES;

drop table if exists AREAS_INTERES_TI_A;

drop table if exists ASESOR;

drop table if exists BANDEJAENTRADA;

drop table if exists ESTUDIANTE;

drop table if exists EVALUARDECANATURA;

drop table if exists EVALUARFACULTAD;

drop table if exists INTERES_USUARIO;

drop table if exists NOTIFICACIONES;

drop table if exists PROCESO;

drop table if exists ROL;

drop table if exists TIPO_DOCUMENTO;

drop table if exists TI_A;

drop table if exists TI_B;

drop table if exists TI_C;

drop table if exists USUARIOROL;

/*==============================================================*/
/* Table: ANEXOS                                                */
/*==============================================================*/
create table ANEXOS
(
   ANX_ID               int not null,
   TD_ID                int not null,
   PRC_ID               numeric(7,3) not null,
   ANX_RECIBIDO         date not null,
   ANX_SRC              text not null,
   primary key (ANX_ID)
);

/*==============================================================*/
/* Table: ARCHIVOS                                              */
/*==============================================================*/
create table ARCHIVOS
(
   ARC_ID               int not null,
   A_ID                 int,
   C_ID                 int,
   B_ID                 int,
   ARC_RUTA             text not null,
   ARC_RECIBIDO         date not null,
   primary key (ARC_ID)
);

/*==============================================================*/
/* Table: AREAS_INTERES                                         */
/*==============================================================*/
create table AREAS_INTERES
(
   AI_ID                int not null,
   AI_NOMBRE            varchar(60) not null,
   primary key (AI_ID)
);

/*==============================================================*/
/* Table: AREAS_INTERES_TI_A                                    */
/*==============================================================*/
create table AREAS_INTERES_TI_A
(
   AI_ID                int not null,
   A_ID                 int not null,
   primary key (AI_ID, A_ID)
);

/*==============================================================*/
/* Table: ASESOR                                                */
/*==============================================================*/
create table ASESOR
(
   ASE_CC               numeric(12,0) not null,
   ASE_NOMBRE           varchar(150) not null,
   ASE_CORREO           varchar(50) not null,
   ASE_EMPRESA          varchar(50) not null,
   primary key (ASE_CC)
);

/*==============================================================*/
/* Table: BANDEJAENTRADA                                        */
/*==============================================================*/
create table BANDEJAENTRADA
(
   NOT_ID               int not null,
   USR_CODIGO           numeric(12,0) not null,
   primary key (NOT_ID, USR_CODIGO)
);

/*==============================================================*/
/* Table: ESTUDIANTE                                            */
/*==============================================================*/
create table ESTUDIANTE
(
   EST_CODIGO           numeric(12,0) not null,
   PRC_ID               numeric(7,3) not null,
   EST_NOMBRE           varchar(150) not null,
   EST_CORREO           varchar(50) not null,
   primary key (EST_CODIGO)
);

/*==============================================================*/
/* Table: EVALUARDECANATURA                                     */
/*==============================================================*/
create table EVALUARDECANATURA
(
   USR_CODIGO           numeric(12,0) not null,
   PRC_ID               numeric(7,3) not null,
   primary key (USR_CODIGO, PRC_ID)
);

/*==============================================================*/
/* Table: EVALUARFACULTAD                                       */
/*==============================================================*/
create table EVALUARFACULTAD
(
   USR_CODIGO           numeric(12,0) not null,
   PRC_ID               numeric(7,3) not null,
   primary key (USR_CODIGO, PRC_ID)
);

/*==============================================================*/
/* Table: INTERES_USUARIO                                       */
/*==============================================================*/
create table INTERES_USUARIO
(
   USR_CODIGO           numeric(12,0) not null,
   AI_ID                int not null,
   primary key (USR_CODIGO, AI_ID)
);

/*==============================================================*/
/* Table: NOTIFICACIONES                                        */
/*==============================================================*/
create table NOTIFICACIONES
(
   NOT_ID               int not null,
   NOT_MSG              text not null,
   NOT_ENVIO            date not null,
   primary key (NOT_ID)
);

/*==============================================================*/
/* Table: PROCESO                                               */
/*==============================================================*/
create table PROCESO
(
   PRC_ID               numeric(7,3) not null,
   USR_CODIGO           numeric(12,0) not null,
   A_ID                 int,
   B_ID                 int,
   C_ID                 int,
   ASE_CC               numeric(12,0),
   INV_CODIGO           numeric(12,0) not null,
   PRC_FORM_A           bool not null,
   PRC_FORM_B           bool not null,
   PRC_FORM_C           bool not null,
   PRC_TITULO           varchar(150) not null,
   primary key (PRC_ID)
);

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL
(
   ROL_ID               numeric(2,0) not null,
   ROL_NOMBRE           varchar(40) not null,
   primary key (ROL_ID)
);

/*==============================================================*/
/* Table: TIPO_DOCUMENTO                                        */
/*==============================================================*/
create table TIPO_DOCUMENTO
(
   TD_ID                int not null,
   TD_NOMBRE            varchar(50) not null,
   primary key (TD_ID)
);

/*==============================================================*/
/* Table: TI_A                                                  */
/*==============================================================*/
create table TI_A
(
   A_ID                 int not null,
   A_OBJETIVOS          text not null,
   A_CON_ENTREGA        text not null,
   A_REALIZACION        text not null,
   A_RECURSOS           text not null,
   A_FINANCIACION       text not null,
   A_PER_PROGRAMA       bool not null,
   A_REVISION           date not null,
   A_RECIBIDO           date not null,
   A_OBSERVACIONES      text not null,
   A_NO_REVISION        int not null,
   primary key (A_ID)
);

/*==============================================================*/
/* Table: TI_B                                                  */
/*==============================================================*/
create table TI_B
(
   B_ID                 int not null,
   USR_CODIGO           numeric(12,0) not null,
   B_APORTES            bool not null,
   B_OBJETIVOS          bool not null,
   B_METODOLOGIA        bool not null,
   B_ENTREGA            bool not null,
   B_ESTRUCTURA         bool not null,
   B_CRONOGRAMA         bool not null,
   B_PATROCINIO         bool not null,
   B_CONCEPTO           bool not null,
   B_RECIBIDO           date not null,
   B_OBSERVACIONES      text not null,
   B_NO_REVISIONES      int not null,
   B_REVISION           date,
   primary key (B_ID)
);

/*==============================================================*/
/* Table: TI_C                                                  */
/*==============================================================*/
create table TI_C
(
   C_ID                 int not null,
   C_DESARROLLO         text not null,
   C_ESTRUCTURA         bool not null,
   C_CON_COMITE         bool not null,
   C_CON_DEPTO          bool not null,
   C_RECIBIDO           date not null,
   C_OBSERVACIONES      text not null,
   C_NO_REVISION        int not null,
   C_REVISION           date not null,
   primary key (C_ID)
);

/*==============================================================*/
/* Table: USUARIOROL                                            */
/*==============================================================*/
create table USUARIOROL
(
   USR_CODIGO           numeric(12,0) not null,
   ROL_ID               numeric(2,0) not null,
   FECHAINICIO          date not null,
   FECHAFIN             date,
   primary key (USR_CODIGO, ROL_ID)
);

alter table ANEXOS add constraint FK_ES_UN foreign key (TD_ID)
      references TIPO_DOCUMENTO (TD_ID) on delete restrict on update restrict;

alter table ANEXOS add constraint FK_INGRESA foreign key (PRC_ID)
      references PROCESO (PRC_ID) on delete restrict on update restrict;

alter table ARCHIVOS add constraint FK_INSTANCIA foreign key (A_ID)
      references TI_A (A_ID) on delete restrict on update restrict;

alter table ARCHIVOS add constraint FK_INSTANCIA2 foreign key (C_ID)
      references TI_C (C_ID) on delete restrict on update restrict;

alter table ARCHIVOS add constraint FK_INSTANCIA3 foreign key (B_ID)
      references TI_B (B_ID) on delete restrict on update restrict;

alter table AREAS_INTERES_TI_A add constraint FK_AREAS_INTERES_TI_A foreign key (A_ID)
      references TI_A (A_ID) on delete restrict on update restrict;

alter table AREAS_INTERES_TI_A add constraint FK_AREAS_INTERES_TI_A2 foreign key (AI_ID)
      references AREAS_INTERES (AI_ID) on delete restrict on update restrict;

alter table BANDEJAENTRADA add constraint FK_BANDEJAENTRADA2 foreign key (NOT_ID)
      references NOTIFICACIONES (NOT_ID) on delete restrict on update restrict;

alter table ESTUDIANTE add constraint FK_REALIZA foreign key (PRC_ID)
      references PROCESO (PRC_ID) on delete restrict on update restrict;

alter table EVALUARDECANATURA add constraint FK_EVALUARDECANATURA foreign key (PRC_ID)
      references PROCESO (PRC_ID) on delete restrict on update restrict;

alter table EVALUARFACULTAD add constraint FK_EVALUARFACULTAD foreign key (PRC_ID)
      references PROCESO (PRC_ID) on delete restrict on update restrict;

alter table INTERES_USUARIO add constraint FK_INTERES_USUARIO foreign key (AI_ID)
      references AREAS_INTERES (AI_ID) on delete restrict on update restrict;

alter table PROCESO add constraint FK_ASESORAR foreign key (ASE_CC)
      references ASESOR (ASE_CC) on delete restrict on update restrict;

alter table PROCESO add constraint FK_CONTIENE4 foreign key (A_ID)
      references TI_A (A_ID) on delete restrict on update restrict;

alter table PROCESO add constraint FK_CONTIENE5 foreign key (B_ID)
      references TI_B (B_ID) on delete restrict on update restrict;

alter table PROCESO add constraint FK_CONTIENE6 foreign key (C_ID)
      references TI_C (C_ID) on delete restrict on update restrict;

alter table USUARIOROL add constraint FK_USUARIOROL foreign key (ROL_ID)
      references ROL (ROL_ID) on delete restrict on update restrict;

