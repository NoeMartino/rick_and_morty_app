import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Error from './components/error/Error';
import Favorites from './components/favorites/Favorites';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions";

function App () {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  //const username = "noelia.martino@live.com.ar";
  //const password = 'noe110912';

  const dispatch = useDispatch();
  const user = useSelector((state) => state.idUser);

  function logIn(userData) {
    dispatch(login(userData.username, userData.password));
    if (user) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access])

  const logout = () => {
    setAccess(false)
  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  return (
    <div /*className='App' style={{ padding: '25px'}}*/ >
      {/* {location.pathname === "/" ? <Form login= {login} /> : <Nav onSearch={onSearch} random= {random} logout= {logout}/>} */}
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}
      <Routes>
        <Route exact path="/" element={<Form logIn={logIn} />}></Route>
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path= "*" element= {<Error />}/>
      </Routes>
    </div>
  )
}

export default App;
