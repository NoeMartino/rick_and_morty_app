const validate = (userData) => {

    const errors = {}

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username) || userData.username === "" || userData.username.length > 35) {
        errors.username = "Username must be an email of no more than 35 characters long"
    }
    if (!/\d/.test(userData.password) || userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Password must include at least one number and it must be between 6 and 10 characters long"
    }

    return errors;
}

export default validate;