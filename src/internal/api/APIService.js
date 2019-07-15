import request from './request'
import * as Constants from "../utils/Constants";

function getCategory() {
    return request({
        url: Constants.CATEGORY,
        method: 'GET',
    },false);
}

function getProducts() {
    return request({
        url: Constants.PRODUCTS,
        method: 'GET',
    },false);
}

function getBanner() {
    return request({
        url: Constants.BANNER,
        method: 'GET',
    },false);
}


const APIService = {
    getCategory, getProducts, getBanner
};

export default APIService;
