import SearchBar from '../searchbar/SearchBar'
import style from '../nav/Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav (props) {
    return (
    <div>
        <nav className= {style.nav}>
            <Link to= "/home" className={style.links} >Home</Link>
            <Link to= "/about" className={style.links} >About</Link>
            <Link to= "/favorites" className={style.links} >Favorites</Link>
            <SearchBar onSearch={props.onSearch} random={props.random}/>
            <button className={style.buttonNav} onClick={props.logout}>Log Out</button>
        </nav>
    </div>
    )
};