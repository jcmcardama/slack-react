import { myHeader } from './header'

export const fetchUserDetails = async (email) => {
    let myHeaders = myHeader()
    let receiverId
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://206.189.91.54//api/v1/users", requestOptions)
        .then(response => {return response.json()})
        .then(result => {
            const newResult = Array.from(result.data)
            let receiverDetails = newResult.filter( (obj) => {
                return obj.uid === email
            })
            receiverId = receiverDetails[0].id
            return receiverId
        })
        .catch(error => console.log('error', error));

    console.log(receiverId)
    return receiverId
}