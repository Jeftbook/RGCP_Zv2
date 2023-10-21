const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/RGCP_DB.db');

//Guarda la info de una nueva publicacion
function CreatePubli(categorias, img, texto, fechaDeRealizacion, callback) {
    db.run("INSERT INTO publicaciones (categorias, img, texto, fechaDeRealizacion) VALUES (?, ?, ?, ?)", [categorias, img, texto, fechaDeRealizacion], callback);
}

//Devuelve todos las publicaciones
function ReadAllPubli(callback) {
    db.all("SELECT rowid AS publicacionID, categorias, img, texto, fechaDeRealizacion FROM publicaciones", callback);
}

//Devuelve una publicacion especifica
function ReadPubli(publicacionID, callback) {
    db.get("SELECT * FROM publicaciones WHERE publicacionID = ?", [publicacionID], callback);
}

//Actualiza los datos de una publicacion especificada por su id
function UpdatePubli(categorias, img, texto, fechaDeRealizacion, publicacionID, callback) {
    db.run("UPDATE publicaciones SET categorias = ?, img = ?, texto = ?, fechaDeRealizacion = ? WHERE publicacionID = ?", [categorias, img, texto, fechaDeRealizacion, publicacionID], callback);
}

//Elimina a una publicacion especificada por su id
function DeletePubli(publicacionID, callback) {
    db.run("DELETE FROM publicaciones WHERE publicacionID = ?", [publicacionID], callback);
}