import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from '../detail/Detail.module.css'

export default function Detail(props) {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={style.divDetail}>
            <div className={style.divContent}>
                <div className={style.divText}>
                    <h1>{character.name}</h1>
                    {character.status && <p style={{ fontSize: "large" }}><b>Status: </b>{character.status}</p>}
                    {character.species && <p style={{ fontSize: "large" }}><b>Specie: </b>{character.species}</p>}
                    {character.gender && <p style={{ fontSize: "large" }}><b>Gender: </b>{character.gender}</p>}
                    <p style={{ fontSize: "large" }}><b>Origin: </b>{character?.origin?.name}</p>
                </div>
                <img className={style.imgDetail} src={character.image} alt={character.name}></img>
            </div>
            <div className={style.buttonContainer}>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <button className={style.button}>Back to home</button>
                </Link>
            </div>
        </div>
    )
};