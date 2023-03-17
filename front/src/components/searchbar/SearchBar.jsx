import style from '../searchbar/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [character, setCharacter] = useState ("");

   const handleChange = (event) => {
      setCharacter(event.target.value)
   };

   const handleClick = () => {
      props.onSearch(character)
      setCharacter("")
   };

   return (
      <div className={style.barContainer}>
         <input className={style.input}
            type="search"
            placeholder="Search"
            value={character}
            onChange={handleChange} />
         <button className={style.buttonSearch}
            onClick={handleClick}>
            Add</button>
         <button className={style.buttonSearch}
            onClick={props.random}>
            Add random character
         </button>
      </div>
   );
}
