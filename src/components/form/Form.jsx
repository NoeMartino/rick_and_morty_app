import { useState } from "react";
import validate from "./validate";
import style from '../form/Form.module.css'

const Form = (props) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <form className= {style.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input type="text" name="username" value={userData.username} placeholder="" onChange={handleInputChange} className={errors.username ? 'warning' : 'input'}/>
            {errors.username && <p className={style.danger}>{errors.username}</p>}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} placeholder="" onChange={handleInputChange} className={errors.password && 'warning'}/>
            {errors.password && <p className={style.danger}>{errors.password}</p>}
            <button className= {style.buttonForm} type="submit">Log In</button>
        </form>
    )
}

export default Form;