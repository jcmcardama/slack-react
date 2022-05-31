// Retrieve message
let myHeaders = new Headers();
myHeaders.append("access-token", "haXWCLr264GN4T2F5qSSug");
myHeaders.append("client", "_690jUPp79Ik24mMmKlQJA");
myHeaders.append("expiry", "1626789364");
myHeaders.append("uid", "user1@example.com");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));