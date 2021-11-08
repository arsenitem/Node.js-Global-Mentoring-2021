CREATE TABLE USERS (
    id UUID PRIMARY KEY NOT NULL,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    isDeleted BOOLEAN NOT NULL
);

INSERT INTO users(id, login, password, age, isdeleted)
VALUES ('35154bd4-ff13-4997-9caa-a2bd22222895', 'admin', 'adm_password', 22, false),
('c7f6e956-40af-11ec-973a-0242ac130003', 'developer', 'dev_password', 35, false),
('b9ef8dfe-40af-11ec-973a-0242ac130003', 'user', 'usr_password', 17, false),
('be01ccc2-40af-11ec-973a-0242ac130003', 'arsenii', '1q2w3e4r', 22, false);