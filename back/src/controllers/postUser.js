const { User } = require('../DB_connection');

//Modo controller sin ruta
// const postUser = async (character) => {
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

const postUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password)
        res.status(400).json({ error: "Faltan datos" });
      const [user, created] = await User.findOrCreate({
        where: { email, password },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { postUser };