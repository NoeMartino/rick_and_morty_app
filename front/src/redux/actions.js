export const addFavorite = (character, idUser) => {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`, {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }).then((response) => response.json())
                if(data) dispatch({
                    type: "ADD_FAVORITE",
                    payload: data,
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteFavorite = (id, idUser) => {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav/${id}?idUser=${idUser}`, {
                method: 'DELETE'
            }).then((response) => response.json())
                    if (data) dispatch({
                        type: "DELETE_FAVORITE",
                        payload: id,
                    })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFavorites = (idUser) => {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`)
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

export function login(email, password) {
    return async function (dispatch) {
      try {
        const obj = await fetch(
          `http://localhost:3001/login?email=${email}&password=${password}`
        ).then((response) => response.json());
        
        if (obj.access) dispatch({ type: "LOGIN", payload: obj.id });
      } catch (error) {
        console.log(error);
      }
    };
  }