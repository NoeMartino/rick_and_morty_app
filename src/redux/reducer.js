const initialState = {
    myFavorites: [],
    myFavoritesCopy: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                myFavoritesCopy: [...state.myFavorites, action.payload]
            }
        case "DELETE_FAVORITE":
            let deletedCharacter = state.myFavoritesCopy.filter(character => character.id !== action.payload)
            return {
                ...state,
                myFavorites: [...deletedCharacter],
                myFavoritesCopy: [...deletedCharacter]
            }
        case "FILTER":
            let filteredCharacters;
            if (action.payload !== "All") {
                filteredCharacters = state.myFavoritesCopy.filter(char => char.gender === action.payload)
            } else {
                filteredCharacters = [...state.myFavoritesCopy]
            }
            return {
                ...state,
                myFavorites: [...filteredCharacters]
            }
        case "ORDER":
            let orderFavorites;
            if (action.payload === "Ascendente") {
                orderFavorites = state.myFavorites.sort((a, b) =>
                    a.id > b.id ? 1 : -1
                );
            } else {
                orderFavorites = state.myFavorites.sort((a, b) =>
                    a.id < b.id ? 1 : -1
                );
            }
            return {
                ...state,
                myFavorites: [...orderFavorites]
            };
        default:
            return { ...state }
    }
}

export default reducer;