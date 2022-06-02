import { myHeader } from './header'

export const userChannels = () => {
    let myHeaders = myHeader()

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://206.189.91.54//api/v1/channels", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
export const channels = []

export const userChannelNamesAndId = async () => {
    const channelObjArr = await userChannels()
    const channelArr = channelObjArr.data
    
    if(channelArr === undefined) return 
    else {
        for(let i = 0; i<channelArr.length; i++) {
            channels.push({id: channelArr[i].id, name: channelArr[i].name})
        }
    }
}