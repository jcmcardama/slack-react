export const createChannelMembers = (channelName, userIds) => {
    const userHeader = () => {
        const header = {
            accessToken: JSON.parse(localStorage.getItem("access-token")),
            client: JSON.parse(localStorage.getItem("client")),
            expiry: JSON.parse(localStorage.getItem("expiry")),
            uid: JSON.parse(localStorage.getItem("uid"))
        }

        return header
    }

    const myHeader = () => {
        const headers = userHeader()

        let myHeaders = new Headers();
        myHeaders.append("access-token", headers.accessToken);
        myHeaders.append("client", headers.client);
        myHeaders.append("expiry", headers.expiry);
        myHeaders.append("uid", headers.uid);
        myHeaders.append("content-type", 'application/json');

        return myHeaders
    }

    let channelBody = {
        "name": channelName,
        "user_ids": userIds
    }

    let requestOptions = {
        method: 'POST',
        headers: myHeader(),
        body: JSON.stringify(channelBody),
        redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/channels", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.data !== undefined){
                window.location.href = '/panel';
            }
            else if(!(result.success)){alert(result.errors)};
        })
        .catch(error => console.log('error', error));
};