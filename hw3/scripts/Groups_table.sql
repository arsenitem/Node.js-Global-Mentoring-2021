CREATE TABLE Groups (
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    permissions VARCHAR(30)[] NOT NULL
);

INSERT INTO Groups(id, name, permissions)
VALUES ('80c70d0f-866e-4070-b5a3-2204e66646f8', 'read_group', ARRAY['READ']),
('3c3b9940-49f9-11ec-81d3-0242ac130003', 'write_group', ARRAY['READ', 'WRITE']),
('526a312c-49f9-11ec-81d3-0242ac130003', 'delete_group', ARRAY['READ', 'WRITE', 'DELETE']);