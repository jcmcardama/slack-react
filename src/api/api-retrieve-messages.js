import { myHeader } from './header'

export const retrieveMessage = (receiverId, receiverClass) => {
  let myHeaders = myHeader()

  let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  return fetch(`http://206.189.91.54//api/v1/messages?receiver_class=${receiverClass}&receiver_id=${receiverId}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

export const listMessage = async (receiverId, receiverClass) => {
  let messageArray = await retrieveMessage(receiverId, receiverClass);
  return messageArray;
}