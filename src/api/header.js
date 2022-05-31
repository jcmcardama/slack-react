export const userHeader = () => {
    const header = {
        accessToken: JSON.parse(localStorage.getItem("access-token")),
        client: JSON.parse(localStorage.getItem("client")),
        expiry: JSON.parse(localStorage.getItem("expiry")),
        uid: JSON.parse(localStorage.getItem("uid"))
    }

    return header
}

export const myHeader = () => {
    const headers = userHeader() 

    let myHeaders = new Headers();
    myHeaders.append("access-token", headers.accessToken);
    myHeaders.append("client", headers.client);
    myHeaders.append("expiry", headers.expiry);
    myHeaders.append("uid", headers.uid);

    return myHeaders
}

