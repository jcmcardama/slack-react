export const retrieveMessage = (receiverId) => {
    const accessToken = JSON.parse(localStorage.getItem("access-token"));
    const client = JSON.parse(localStorage.getItem("client"));
    const expiry = JSON.parse(localStorage.getItem("expiry"));
    const uid = JSON.parse(localStorage.getItem("uid"));
    var myHeaders = new Headers();
    myHeaders.append("access-token", accessToken);
    myHeaders.append("client", client);
    myHeaders.append("expiry", expiry);
    myHeaders.append("uid", uid);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
      
    fetch(`http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=${receiverId}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            for(let i = 0; i < result.data.length; i++){
                console.log(result.data[i].body);
            }
        })
        .catch(error => console.log('error', error));
};