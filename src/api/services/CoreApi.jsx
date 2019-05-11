'use strict';
import AxiosProvider from './AxiosProvider';

let url = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';



class CoreApi {
    constructor(baseUrl = url) {

        this.api = AxiosProvider(baseUrl);
        this.baseUrl = baseUrl;


        this._afterResponse = this._afterResponse.bind(this);
        this.setInterceptors(this._beforeRequest, this._requestError, this._afterResponse, this._responseError);
    }



    setEndpointUrl(url) {
        this.api.defaults.baseURL = this.baseUrl + "/" + url;
    }

    setInterceptors(beforeRequest, requestError, afterResponse, responseError) {
        this.api.interceptors.request.use(beforeRequest, requestError);
        this.api.interceptors.response.use(afterResponse, responseError);
    }

    _beforeRequest(config) {

        return config;
    }

    _requestError(error) {
        throw error
    }

    _afterResponse(resp) {


        return resp
    }

    _responseError(error) {

        throw error
    }
}


export default CoreApi;
