// Cargar los módulos
import express from "express";
import mysql from "mysql";

const configConnection = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const connection = mysql.createConnection(configConnection);

const router = express.Router();

router.get("/", (req, res) => {
    const select = "SELECT * FROM agenda"
    connection.query(select, (err, result, fields) => {
      if (err) throw err;
      res.render("index", {title: "Mis contactos", contactos: result});
    })

});

router.get("/formulario", (req, res) => {
  res.send("Seré dinámico algún día...");
});

router.post("/insert", (req, res) => {
  const { nombre, apellido, tel, tipo } = req.body;
  const insert = `INSERT INTO agenda(nombre, apellido, telefono, tipo) VALUES ('${nombre}', '${apellido}', '${tel}', '${tipo}')`;
  connection.query(insert, (err, result, fields) => {
    if (err) throw err;
    res.redirect("/");
  });
  // res.send('Seré dinámico algún día...')
});

// Exportación con 'type': 'modules'
export default router;
// Esta no
// module.exports = router;
