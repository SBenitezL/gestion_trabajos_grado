-- Permitir que los campos mencionados puedan ser NULL
ALTER TABLE TI_A
MODIFY A_PER_PROGRAMA bool NULL;

ALTER TABLE TI_A
MODIFY A_REVISION date NULL;

ALTER TABLE TI_A
MODIFY A_RECIBIDO date NULL;

ALTER TABLE TI_A
MODIFY A_OBSERVACIONES text NULL;

ALTER TABLE TI_A
MODIFY A_NO_REVISION number NULL;

-- Establecer el valor predeterminado de numero_de_revision en 0
ALTER TABLE TI_A
MODIFY numero_de_revision number(1) DEFAULT 0;



