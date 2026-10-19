CREATE TABLE IF NOT EXISTS memories(namespace TEXT,key TEXT,value TEXT,updated TEXT,PRIMARY KEY(namespace,key));
CREATE TABLE IF NOT EXISTS runs(id INTEGER PRIMARY KEY,created TEXT,backend TEXT,model TEXT,payload TEXT);
