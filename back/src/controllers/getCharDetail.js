const axios = require("axios")

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let character = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin.name
//         }
//         res.writeHead(200, { "Content-type": "application/json" })
//         res.end(JSON.stringify(character))
//     })
//     .catch(err => res.writeHead(500, { "Contest-type": "text/plain" }).end("No se encontró el personaje"))
// }

const URL = "https://rickandmortyapi.com/api/character/"

// const getCharDetail = (req, res) => {
//     const { id } = req.params;

//     axios(URL + id)
//         .then((response) => {
//             const character = {
//                 id: response.data.id,
//                 name: response.data.name,
//                 species: response.data.species,
//                 image: response.data.image,
//                 gender: response.data.gender,
//                 status: response.data.status.name,
//                 origin: response.data.origin
//             }
//             res.status(200).json(character)
//         })
//         .catch((error) => res.status(500).send(error.message))
// }

const getCharDetail = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios(URL + id)
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender,
            status: response.data.status,
            origin: response.data.origin.name
        }
        res.status(200).json(character)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getCharDetail;