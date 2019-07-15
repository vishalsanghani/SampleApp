import axios from 'axios';
import * as Constants from "../utils/Constants";

const request = async function (options, isHeader = true) {

    let authHeader = null;
    if (isHeader) {
        /**
         * We can store and get auth token from AsyncStorage*/
        // authHeader = await AsyncStorage.getItem("Auth");
    }

    const client = axios.create({
        baseURL: Constants.BASE_URL,
        /**
         * We can directly add auth token into header*/
        // headers: { 'Authorization': 'Bearer '+authHeader }

    });

    const onSuccess = function (response) {

        console.log('Request Successful!', response);
        return response.data;
    }

    const onError = function (error) {
        console.log('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.debug('Status:', error.response.status);
            console.debug('Data:', error.response.data);
            console.debug('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.debug('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };


    return client(options)
      .then(onSuccess)
      .catch(onError);
};

export default request;
