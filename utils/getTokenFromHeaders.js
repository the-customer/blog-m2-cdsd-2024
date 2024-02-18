const getTokenFromHeaders = req => {
    const headersData = req.headers;
    const token = 
    headersData['authorization'] ? 
    headersData['authorization'].split(' ')[1] : '';//Enlever le bearer
    if(token !== undefined){
        return token;
    }
    return false;
}

module.exports = getTokenFromHeaders;
