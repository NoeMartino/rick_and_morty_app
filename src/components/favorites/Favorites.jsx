import style from '../favorites/Favorites.module.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = () => {

   const myFavorites = useSelector((state) => state.myFavorites);

   const dispatch = useDispatch();

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }

   return (
      <div className={style.generalContainer}>
         <h1 className={style.myFavoritesTitle} >My favorites</h1>
         <select onChange={handleOrder} className={style.select} >
            <option value="order" desabled="desabled">Order by</option>
            <option value="Ascendente">Ascending</option>
            <option value="Descendente">Descending</option>
         </select>
         <select onChange={handleFilter} className={style.select} >
            <option value="filter" desabled="desabled">Order by</option>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
         </select>
         <div className={style.favoriteContainer}>
            {myFavorites.map((character) => {
               return <div className={style.favoriteCard} key={character.id}>
                  <img src={character.image} className={style.favoriteImagen} alt={character.name} />
                  <Link to={`/detail/${character.id}`} style={{ textDecoration: "none", backgroundColor: "rgb(170, 143, 196)", color: "rgb(38, 6, 68)" }}>
                     <h2 className={style.favoriteTitle}>{character.name}</h2>
                  </Link>
                  <div className={style.favoriteTitlesContainer}>
                     <h2 className={style.favoriteTitles}>{character.species}</h2>
                     <h2 className={style.favoriteTitles}>{character.gender}</h2>
                  </div>
               </div>
            })}
         </div>
      </div>
    )
}

// export function mapStateToProps(state) {
//     return {
//        myFavorites: state.myFavorites
//     }
//  }

export default Favorites;