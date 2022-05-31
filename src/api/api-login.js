//LOGIN
export const UserLogin = (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };
        
    fetch("http://206.189.91.54//api/v1/auth/sign_in", requestOptions)
        .then(response => {
            localStorage.setItem("access-token", JSON.stringify(response.headers.get('access-token')))
            localStorage.setItem("client", JSON.stringify(response.headers.get('client')))
            localStorage.setItem("expiry", JSON.stringify(response.headers.get('expiry')))
            localStorage.setItem("uid", JSON.stringify(response.headers.get('uid')))
            return response.json();
        })
        .then(result => {
            if(result.success === undefined)localStorage.setItem("userId", JSON.stringify(result.data.id));
            else if(!(result.success)){console.log(result.errors)};
        })
        .catch(error => {
            console.log(error)
        });
}
