import React from "react";
import {createAction} from "../../internal/AppUtils";
import ModulesAPI from "../../internal/api/ModulesAPI";


export const Modules = {
    GET_BANNER_ADS: 'GET_BANNER_ADS',
    GET_CATEGORY: 'GET_CATEGORY',
    GET_PRODUCTS: 'GET_PRODUCTS',
};


export default {
    getBannerAds: createAction(Modules.GET_BANNER_ADS, async () => {
        return await ModulesAPI.getBanner()
    }),
    getCategory: createAction(Modules.GET_CATEGORY, async () => {
        return await ModulesAPI.getCategory()
    }),
    getProducts: createAction(Modules.GET_PRODUCTS, async () => {
        return await ModulesAPI.getProducts()
    }),
};
