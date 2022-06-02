import { myHeader } from './header'

export const recentDm = () => {
    let myHeaders = myHeader()

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://206.189.91.54//api/v1/users/recent", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
export const recentMessages = []

export const fetchRecentMessages = async () => {
    const messageObjArr = await recentDm()
    const messageArr = messageObjArr.data
    let keyGen = 1000
    for(let i = 0; i<messageArr.length; i++) {
        recentMessages.push({id: messageArr[i].id, uid: messageArr[i].uid, key: keyGen++})
        
    }
}