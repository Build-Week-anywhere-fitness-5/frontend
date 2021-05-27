import axios from "axios";

function createAuthorization() {
    const authToken = localStorage.getItem('token');
    const axiosInstanceWithAuthorizationHeader = axios.create({
        baseURL: 'https://backend-ptct-anywhere-fitness.herokuapp.com/',
        headers: { 'Authorization' : authToken}
    });

    return axiosInstanceWithAuthorizationHeader;
}

export default createAuthorization;