import { myHeader } from './header'

export const channelDetails = (channelId) => {
    let myHeaders = myHeader()

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`http://206.189.91.54//api/v1/channels/${channelId}`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}