const axios = require("axios")

//Una forma de hacer una función para no repetir código
// const filterData = (data) => {
//     return {
//         id: data.id,
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species
//     }
// }

//Y en el then => .then(data => let character = filterData(data))

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             let character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species
//             }
//             res.writeHead(200, { "Content-type": "application/json" }).end(JSON.stringify(character))
//         })
//         .catch(err => res.writeHead(500, { "Contest-type": "text/plain" }).end(err.message))
// }

const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (req, res) => {
//     const { id } = req.params;

//     axios(URL + id)
//     //.then ( ({ data }) => {
//         //const character = filterData(data)
//         //res.status(200).json(character)
//     //}
//         .then((response) => {
//             const character = {
//                 id: response.data.id,
//                 name: response.data.name,
//                 species: response.data.species,
//                 image: response.data.image,
//                 gender: response.data.gender
//             }
//             res.status(200).json(character)
//         })
//         .catch((error) => res.status(500).send(error.message))
// }

async function getCharById(req, res) {
    const { id } = req.params;
    try {
        const response = await axios(URL + id)
        const character = {
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender
        }
        res.status(200).json(character)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getCharById;
