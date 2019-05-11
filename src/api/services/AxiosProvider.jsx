'use strict';
import axios from 'axios';

function AxiosProvider(baseUrl) {
    let instance =  axios.create({
        baseURL: baseUrl
    });
    instance.interceptors.request.use(beforeRequest,requestError);
    instance.interceptors.response.use(afterResponse,responseError);

    return instance;



    function beforeRequest(config) {
        return config;
    }
    function requestError(error) {
        return Promise.reject(error);
    }

    function afterResponse(resp) {
        return resp;
    }

    function responseError(error) {
        return Promise.reject(error);
    }
}

export default AxiosProvider;
