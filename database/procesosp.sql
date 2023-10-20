DELIMITER $$
CREATE or replace PROCEDURE ContarRegistrosPrcIdAnioActual(in pCodigo decimal(12,0),in ase decimal(12,0), in titulo varchar(150), in tipo varchar(30))
BEGIN
    DECLARE anio_actual INT;
    DECLARE contador INT;

    SET anio_actual = YEAR(CURRENT_DATE());

    SELECT COUNT(*)
    INTO contador
    FROM proceso
    WHERE prc_id LIKE CONCAT(anio_actual, '%');

	insert into proceso VALUES (anio_actual + (contador+1)/1000, pCodigo, null, null, null, ase, 0,0,0,titulo,tipo);
    select prc_id, usr_codigo, a_id, b_id, c_id, ase_cc, prc_form_a, prc_form_b, prc_form_c, prc_titulo, prc_tipo
    from proceso
    where prc_id = anio_actual + (contador+1)/1000; 
END;
$$
DELIMITER ;
