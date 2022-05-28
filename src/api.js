export const userRegistration = (email, password, password_confirmation) => {
    var raw = "{\n    \"email\": \"user2@example.com\",\n    \"password\": \"12345678\",\n    \"password_confirmation\": \"12345678\"\n}";

    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};