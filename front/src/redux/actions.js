// export const addFavorite = (character) => {
//     return { type: "ADD_FAVORITE", payload: character }
// }

export const addFavorite = (character) => {
    return async function (dispatch) {
        try {
            const data = await fetch('http://localhost:3001/fav', {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                if(data) dispatch({
                    type: "ADD_FAVORITE",
                    payload: data,
                })

        } catch (error) {
            console.log(error);
        }
    }
}

// export const deleteFavorite = (id) => {
//     return { type: "DELETE_FAVORITE", payload: id }
// }

export const deleteFavorite = (id) => {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav/${id}`, {
                method: 'DELETE'
            })
                .then((response) => response.json())
                    if (data) dispatch({
                        type: "DELETE_FAVORITE",
                        payload: id,
                    })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFavorites = () => {
    return async function (dispatch) {
        try {
            const data = await fetch("http://localhost:3001/fav")
                .then((response) => response.json())
                    if (data) dispatch({
                        type: "GET_FAVORITES",
                        payload: data,
                    })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterCards = (status) => {
    return { type: "FILTER", payload: status }
}

export const orderCards = (id) => {
    return { type: "ORDER", payload: id }
}