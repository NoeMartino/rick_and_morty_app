const { Favorite } = require('../DB_connection');

//Modo controller sin ruta
// const postFav = async (character) => {
//     try {
//         const { name, status, species, gender, origin, image } = character
//         if(!name || !status || !species || !gender || !origin || !image) throw Error("Faltan datos obligatorios")
//         const newFavorite = {
//             name,
//             status,
//             species,
//             gender,
//             origin,
//             image
//         }
//         await Favorite.create(newFavorite)
//         return newFavorite;
//     } catch (error) {
//         return { error: error.message }
//     }
// }

const postFav = async (req, res) => {
    const { idUser } = req.query;
    const { id, name, species, gender, image } = req.body;
    try {
      if (!id || !name || !species || !gender || !image)
        res.status(401).json({ error: "Faltan datos" });
      const [fav, created] = await Favorite.findOrCreate({
        where: {
          id,
          name,
          species,
          gender,
          image,
        },
      });
      fav.addUser(idUser);
      res.status(200).json(fav);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { postFav };