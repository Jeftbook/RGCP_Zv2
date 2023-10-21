const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/RGCP_DB.db');

//Guarda la info de un nuevo usuario
function CreateUserUG(nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia, callback) {
    db.run("INSERT INTO usuarioGeneral (nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia], callback);
}

//Devuelve todos los usuarios
function ReadAllUserUG(callback) {
    db.all("SELECT rowid AS UserGenID, nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia FROM usuarioGeneral", callback);
}

//Devuelve un usuario especifico
function ReadUserUG(UserGenID, callback) {
    db.get("SELECT * FROM usuarioGeneral WHERE UserGenID = ?", [UserGenID], callback);
}

//Actualiza los datos de un usuario especificado por su id
function UpdateUserUG(nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia, UserGenID, callback) {
    db.run("UPDATE usuarioGeneral SET nombre = ?, apellido = ?, email = ?, edad = ?, dni = ?, ambito = ?, disciplina = ?, trabajo_de = ?, biografia = ? WHERE UserGenID = ?", [nombre, apellido, email, edad, dni, ambito, disciplina, trabajo_de, biografia, UserGenID], callback);
}

//Elimina a un usuario especificado por su id
function DeleteUserUG(UserGenID, callback) {
    db.run("DELETE FROM usuarioGeneral WHERE UserGenID = ?", [UserGenID], callback);
}

module.exports = {
    CreateUserUG,
    ReadAllUserUG,
    ReadUserUG,
    UpdateUserUG,
    DeleteUserUG
}