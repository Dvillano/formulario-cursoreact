const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Envio el HTML en el GET request
app.get("/", (req, res) => {
    res.send(__dirname + "/public/index.html")
})

//Envio los datos obtenidos en el metodo POST despues de enviar el form
app.post("/form", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    const paisNacimiento = req.body.paisNacimiento;
    const paisResidencia = req.body.paisResidencia;
    const html = '<!DOCTYPE html> <html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"><title>Formulario de registro</title></head><body><div id="container"><p>Nombre: ' + nombre + '</p>' + '<p>Apellido: ' + apellido + '</p>'+ '<p>Edad: ' + edad + '</p>'+'<p>Numero de telefono: ' + telefono + '</p>' + '<p>Pais de Nacimiento: ' + paisNacimiento + '</p>'+ '<p>Pais de Residencia: ' + paisResidencia + '</p>'+ '<p></p><button><a href="/">Volver al registro</a></button></div></body></html>'
    res.send(html);
})

//Redirecciono al inicio en caso de ir a otra pagina
app.get("*", (req,res) => {
    res.redirect("/");
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log("Server iniciado en puerto 3000");
})