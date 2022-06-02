import { myHeader } from './header'

export const fetchUserDetails = () => {
    let myHeaders = myHeader()
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("http://206.189.91.54//api/v1/users", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

export const userIdByEmail = async (email) => {
    let usersArray = await fetchUserDetails()
    let user = usersArray.data.filter(userData => {
        return userData.uid === email
    })
    return user.length === 0 ? 'User not found!' : user[0].id
}