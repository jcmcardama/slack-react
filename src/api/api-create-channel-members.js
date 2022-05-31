import { myHeader } from './header'

export const createChannelMembers = (channelName, userIds) => {
    let myHeaders = myHeader()

    const formData = new FormData();
    formData.append("name", channelName);
    formData.append("user_ids", userIds);

    let requestOptions = {
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