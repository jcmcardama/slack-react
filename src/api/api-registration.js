export const userRegistration = (email, password, passwordConfirmation) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);

    // var body = {
    //     "email": email,
    //     "password": password,
    //     "password_confirmation": passwordConfirmation
    // };

    let requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.status === "success" ? window.location.href = '/signin' : alert(result.errors.full_messages[0])
        })
        .catch(error => console.log('error', error));
};