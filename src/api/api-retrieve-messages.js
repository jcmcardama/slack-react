import { myHeader } from './header'

export const retrieveMessage = (receiverId, receiverClass) => {
  let myHeaders = myHeader()

  let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  fetch(`http://206.189.91.54//api/v1/messages?receiver_class=${receiverClass}&receiver_id=${receiverId}`, requestOptions)
    .then(response => {
      return response.json();
    })
    .then(result => {
      localStorage.setItem("dataMessages", JSON.stringify(result));
    })
    .catch(error => console.log('error', error));
};