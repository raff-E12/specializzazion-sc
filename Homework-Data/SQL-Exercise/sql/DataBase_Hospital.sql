CREATE TABLE `Ambulatorio` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`Studio` VARCHAR(255) UNIQUE,
	`Indirizzo` VARCHAR(255),
	`Città` VARCHAR(255),
	`Apertura` DATETIME,
	`Chiusura` DATETIME,
	`Provincia` VARCHAR(255),
	`Prestazione` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Medici` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`Nome` VARCHAR(255),
	`Cognome` VARCHAR(255),
	`email` VARCHAR(255),
	`Telefono` VARCHAR(255),
	`Attivo` BOOLEAN NOT NULL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Pazienti` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`Nome` VARCHAR(255),
	`Cognome` VARCHAR(255),
	`Sesso` CHAR(1) NOT NULL,
	`Telefono` VARCHAR(255),
	`Email` VARCHAR(255),
	`Indirizzo` VARCHAR(255) NOT NULL,
	`Provincia` VARCHAR(255),
	`Attivo` BOOLEAN,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Prenotazione` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`id_Paziente` INTEGER,
	`id_Medico` INTEGER,
	`id_Prestazione` INTEGER,
	`Note_Medico` VARCHAR(255),
	`Inizio` DATETIME,
	`Fine` DATETIME NOT NULL,
	`Stato` BOOLEAN,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Prestazione` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`id_Medico` INTEGER,
	`id_Ambulatotrio` INTEGER,
	`Tipo_Prestazione` VARCHAR(255),
	`Descrizione` TEXT(65535) NOT NULL,
	`Codice_Fiscale` VARCHAR(255) NOT NULL,
	PRIMARY KEY(`id`)
);


ALTER TABLE `Pazienti`
ADD FOREIGN KEY(`id`) REFERENCES `Prenotazione`(`id_Paziente`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Medici`
ADD FOREIGN KEY(`id`) REFERENCES `Prenotazione`(`id_Medico`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Medici`
ADD FOREIGN KEY(`id`) REFERENCES `Prestazione`(`id_Medico`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Ambulatorio`
ADD FOREIGN KEY(`id`) REFERENCES `Prestazione`(`id_Ambulatotrio`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Prestazione`
ADD FOREIGN KEY(`id`) REFERENCES `Prenotazione`(`id_Prestazione`)
ON UPDATE NO ACTION ON DELETE NO ACTION;