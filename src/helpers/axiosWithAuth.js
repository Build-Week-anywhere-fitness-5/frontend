import axios from "axios";


function createAuthorization() {

    const authToken = localStorage.getItem('token');

    const axiosInstanceWithAuthorizationHeader = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: { 'Authorization' : authToken}
    });

    return axiosInstanceWithAuthorizationHeader;
}

export default createAuthorization;