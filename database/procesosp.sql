DELIMITER $$
CREATE or replace PROCEDURE ContarRegistrosPrcIdAnioActual(in pCodigo decimal(12,0),in ase varchar(150), in titulo varchar(150), in tipo varchar(30))
BEGIN
    DECLARE anio_actual INT;
    DECLARE contador INT;

    SET anio_actual = YEAR(CURRENT_DATE());

    SELECT COUNT(*)
    INTO contador
    FROM proceso
    WHERE prc_id LIKE CONCAT(anio_actual, '%');

	insert into proceso VALUES (anio_actual + (contador+1)/1000, pCodigo, null, null, null,0,0,0,titulo,tipo, ase);
    select prc_id, usr_codigo, a_id, b_id, c_id, nom_asesor, prc_form_a, prc_form_b, prc_form_c, prc_titulo, prc_tipo
    from proceso
    where prc_id = anio_actual + (contador+1)/1000; 
END;
$$
DELIMITER ;

DELIMITER //
CREATE OR REPLACE PROCEDURE verificarUsuario(in prmCod decimal(12,0), in prmUsr varchar(100), in prmEmail varchar(50))
BEGIN
  SELECT COUNT(usr_codigo)
  FROM usuario
  where usr_codigo = prmCod or upper(usr_correo) = upper(prmEmail) or upper(usr_login) = upper(prmUsr);
END //
DELIMITER ;



DELIMITER //

CREATE or replace PROCEDURE ConsultarRevisionA()
BEGIN
    SELECT 
        proceso.prc_id, 
        prc_tipo, 
        prc_titulo,
        est_codigo, 
        est_nombre, 
        prc_form_a as fA_estado, 
        a_no_revision as fA_revisiones
    FROM proceso
    JOIN ti_a ON proceso.A_ID = ti_a.A_ID
    JOIN estudiante ON proceso.PRC_ID = estudiante.prc_id
    where prc_form_a = 1;
END //

DELIMITER ;

//13-11-2023
DELIMITER //
CREATE OR REPLACE PROCEDURE  reporteEstudiantes(in id decimal(7,3))
BEGIN
	select est_nombre "nombre", est_codigo "codigo"
	from estudiante
	where prc_id = id;
END//
DELIMITER ;
//Actualizado 21/11/2023
DELIMITER //
CREATE OR REPLACE PROCEDURE  reporteFormatoA(in id int(11))
BEGIN
select a_objetivos "objetivos",
		a_con_entrega "condEntrega", 
        a_realizacion "realizacion", 
        a_recursos "recursos", 
        a_financiacion "financiacion", 
        a_interes "aportes", 
        DATE_FORMAT(a_recibido,'%d-%m-%Y') "recibido",
        A_NO_REVISION "revision"
from ti_a
where a_id = id;
END//
DELIMITER ;
DELIMITER //
CREATE OR REPLACE PROCEDURE  reporteProceso(in id decimal(7,3))
BEGIN
select PRC_TITULO "titulo", upper(prc_tipo) "tipo", nom_asesor "asesor", usr_nombre "director", prc_id "id"
from proceso join usuario
on (proceso.USR_CODIGO = usuario.usr_codigo)
where prc_id = id;
END//
DELIMITER ;

//21/11/2023
DELIMITER //
create or REPLACE procedure recuperarEvaluadores()
begin
	select usuario.usr_codigo, usr_nombre, usuario.usr_correo
	from usuario join usuariorol on (usuario.usr_codigo = usuariorol.USR_CODIGO)
	where usuariorol.ROL_ID = 5 and usuariorol.FECHAFIN is null;
end//

DELIMITER ;

//22/11/2023

DELIMITER //
CREATE OR REPLACE PROCEDURE verificarEvaluadores(IN ev1 decimal(12,0), IN ev2 decimal(12,0))
BEGIN
	select usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo
	from usuario join usuariorol on(usuariorol.USR_CODIGO = usuario.usr_codigo)
	where usuariorol.ROL_ID = 5 and (usuario.usr_codigo = ev1 or usuariorol.USR_CODIGO = ev2);
END //
DELIMITER ;
//22/11/2023
DELIMITER //
DELIMITER //
CREATE OR REPLACE PROCEDURE verificarAsignados(IN id decimal(7,3))
BEGIN
	SELECT usuario.usr_codigo, usuario.usr_nombre, usuario.usr_correo
	FROM evaluarfacultad join usuario on (usuario.usr_codigo = evaluarfacultad.USR_CODIGO)
	WHERE evaluarfacultad.PRC_ID = id;
END //
DELIMITER ;