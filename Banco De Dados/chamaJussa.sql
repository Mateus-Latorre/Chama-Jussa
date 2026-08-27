CREATE DATABASE chamaJussadb;
USE chamaJussadb;

CREATE TABLE OrdemServico (
	idServico VARCHAR(40) PRIMARY KEY,
	Titulo VARCHAR(100) NOT NULL,
	Equipamento VARCHAR(100),
	Lugar VARCHAR(100) NOT NULL,
	Descricao VARCHAR(250) NOT NULL,
	FotoURL VARCHAR(255),
	DataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
	idUsuario VARCHAR(40) NOT NULL,
	idStatus VARCHAR(20) DEFAULT 'Aberta',
	CONSTRAINT fk_StatusOrdem FOREIGN KEY (idStatus) REFERENCES StatusOrdem(idStatus),
	CONSTRAINT fk_Usuario FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE StatusOrdem (
	idStatus VARCHAR(20) PRIMARY KEY,
	Descricao VARCHAR(50) NOT NULL
);

INSERT INTO StatusOrdem (idStatus, Descricao) VALUES
('Aberta', 'Solicitação aberta'), ('Andamento', 'Solicitação em andamento'), ('Finalizado', 'Solicitação finalizada');
Select * from StatusOrdem;

CREATE TABLE Usuario(
	idUsuario VARCHAR(40) PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL,
	Email VARCHAR(256) UNIQUE NOT NULL,
	Senha VARCHAR(60) NOT NULL
);

SELECT * FROM Usuario;
CREATE TABLE Notificacao (
    idNotificacao INT IDENTITY(1,1) PRIMARY KEY,
    idUsuario VARCHAR(40) NOT NULL,
    mensagem VARCHAR(255) NOT NULL,
    lida BIT DEFAULT 0,
    dataCriacao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);