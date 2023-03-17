import style from './Card.module.css';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Card({ onClose, name, species, gender, image, id }) {

   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch()

   const myFavorites = useSelector((state) => state.myFavorites);

   const handleFavorite = (id) => {
      if(isFav) {
         setIsFav(false)
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav(true)
         dispatch(addFavorite({ onClose, name, species, gender, image, id }))
      }
   }

   useEffect(() => {
      myFavorites && myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         <div className={style.buttonContainer}>
            {isFav ? (<button className={style.heartButton} onClick={() => handleFavorite(id)}>❤️</button>) :
         (<button className={style.heartButton} onClick={() => handleFavorite(id)}>🤍</button>)}
         <button className={style.button} onClick={onClose}>X</button>
         </div>
         <img src={image} className={style.imagen} alt={name} />
         <Link style={{ textDecoration: "none", backgroundColor: "rgb(170, 143, 196)", color: "rgb(38, 6, 68)" }} to= {`/detail/${id}`}>
            <h2 className={style.title}>{name}</h2>
         </Link>
         <div className={style.titlesContainer}>
            <h2 className={style.titles}>{species}</h2>
            <h2 className={style.titles}>{gender}</h2>
         </div>
      </div>
   )
}

// export function mapStateToProps(state) {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// export function mapDispatchToProps(dispatch) {
//    return {
//       addFavorite: (character) => dispatch(addFavorite(character)),
//       deleteFavorite: (id) => dispatch(deleteFavorite(id))
//    }
// }

// export default connect(null, mapDispatchToProps)(Card);

export default Card;
