import { myHeader } from './header'

export const retrieveMessage = (receiverId) => {
  let myHeaders = myHeader()

  let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

  fetch(`http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=${receiverId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
          for(let i = 0; i < result.data.length; i++){
              console.log(result.data[i].body);
          }
      })
      .catch(error => console.log('error', error));
};

