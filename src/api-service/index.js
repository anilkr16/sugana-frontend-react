import axios from 'axios';
import {constants} from '../constants';
const apiservice = (url, httpMethod, data) => {
    const header = {}
    switch(httpMethod) {
        case 'GET': {
            return axios.get(url, {method: httpMethod, data: data, headers: header})
                .then(response => response.data)
                .catch(error => error)
        }
        case 'POST': {
            return axios.post(url, data)
                .then(response => response.data)
                .catch(error => error)
        }
        case 'PUT': {
            return axios.put(url, data)
                .then(response => response.data)
                .catch(error => error)
        }
        case 'DELETE': {
            return axios.delete(url, data)
                .then(response => response.data)
                .catch(error => error)
        }
        case 'GETALL': {
            return axios.all(url)
                .then(response => response)
                .catch(error => error)
        }
    }
}
export const getService = url => apiservice(url, constants.APIConstant.httpMethods.GET);
export const getAllService = urls => apiservice(urls, constants.APIConstant.httpMethods.GETALL);
export const postService = (url, data) => apiservice(url, constants.APIConstant.httpMethods.POST, data);
export const putervice = (url, data) => apiservice(url, constants.APIConstant.httpMethods.PUT, data);
export const deleteService = (url, data) => apiservice(url, constants.APIConstant.httpMethods.DELETE, data);