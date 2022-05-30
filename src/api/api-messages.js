// Retrieve message
const retrieveMessage = async (headerObject, receiverId) => {
    const options = {
        method: 'GET',
        headers: {
            'access-token': headerObject.token,
            'client': headerObject.client,
            'expiry': headerObject.expiry,
            'uid': headerObject.uid
        }
    }

    await fetch(`http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=${receiverId}`, options)
            .then((response) => response.json())
            .then((result) => console.log(result)) //get the body's data for the message
}