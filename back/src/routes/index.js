const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail")
let favs = require("../utils/favs")

const router = Router();

router.get("/onsearch/:id", getCharById)

router.get("/detail/:id", getCharDetail)

//Mientras tenga diferentes métodos puede utilizarse la misma ruta
//Las funciones (controladores) deberían hacerse en archivos separados (modularizar)
//En este caso como son pocas y cortas lo hice en el mismo archivo de rutas
//Sino se hace como con getCharById y getCharDetail

router.post("/fav", (req, res) => {
    let char = req.body;
    if ( char && favs.push(char)) res.status(201).json(char)
})

router.get("/fav", (req, res) => {
    if (favs) res.status(201).json(favs)
})

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;

    favs = favs.filter( f => f.id !== Number(id))
    res.status(200).json({ success: true })
})

module.exports = router;