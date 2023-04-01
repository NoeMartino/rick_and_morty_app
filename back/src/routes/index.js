const { Router } = require("express");

const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { getFavs } = require("../controllers/getFavs");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { login } = require("../controllers/login");
const { postUser } = require("../controllers/postUser");

const router = Router();

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)

router.get("/fav", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

router.get("/login", login);
router.post("/login", postUser);

module.exports = router;