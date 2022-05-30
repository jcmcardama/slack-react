export const createChannelMembers = (channelName, userIds) => {
    var myHeaders = new Headers();
    myHeaders.append("access-token", "EbBRhHlxy_onrPLeDoxzbQ");
    myHeaders.append("client", "YXLnTVh802pqPnrJDNfbqg");
    myHeaders.append("expiry", "1621406884");
    myHeaders.append("uid", "user@example.com");

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