export const addFavorite = (character) => {
    return { type: "ADD_FAVORITE", payload: character }
}

export const deleteFavorite = (id) => {
    return { type: "DELETE_FAVORITE", payload: id }
}

export const filterCards = (status) => {
    return { type: "FILTER", payload: status }
}

export const orderCards = (id) => {
    return { type: "ORDER", payload: id }
}