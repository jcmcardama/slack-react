export const createChannelMembers = (channelName, userIds) => {
    const accessToken = JSON.parse(localStorage.getItem("access-token"));
    const client = JSON.parse(localStorage.getItem("client"));
    const expiry = JSON.parse(localStorage.getItem("expiry"));
    const uid = JSON.parse(localStorage.getItem("uid"));
    var myHeaders = new Headers();
    myHeaders.append("access-token", accessToken);
    myHeaders.append("client", client);
    myHeaders.append("expiry", expiry);
    myHeaders.append("uid", uid);

    const formData = new FormData();
    formData.append("name", channelName);
    formData.append("user_ids", userIds);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/channels", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};