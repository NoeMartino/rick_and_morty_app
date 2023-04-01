const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { idUser } = req.query;
  const { id } = req.params;

  console.log(id);
  console.log(idUser);

  try {
    const fav = await Favorite.findOne({where: {id}})

    await fav.removeUser(idUser);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { deleteFav };