//LOGIN AND REGISTRATION

//REGISTRATION
export const userRegistration = (email, password, passwordConfirmation) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);

    var requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

//LOGIN
export const userLogin = async (email, password) => {
    let raw = {
        email: email,
        password: password
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)

    }
    //[wip]
    await fetch('http://206.189.91.54//api/v1/auth/sign_in', options)
            .then((response) => response.header)
}