import { myHeader } from './header'

export const sendMessage = (receiverId, message) => {
    let myHeaders = myHeader()

    const formData = new FormData();
    formData.append("receiver_id", receiverId);
    formData.append("receiver_class", "User");
    formData.append("body", message);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    fetch("http://206.189.91.54//api/v1/messages", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};