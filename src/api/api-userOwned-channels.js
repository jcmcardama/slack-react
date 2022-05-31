import { myHeader } from './header'

export const userOwnedChannels = () => {
    let myHeaders = myHeader()

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/channel/owned", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}