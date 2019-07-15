import React from 'react';
import {Map} from 'immutable'
import {Modules} from './Actions';

const InitialState = new Map({
    categoryList: [],
    productList: [],
    bannerList: []
});

export const Reducer = (state = InitialState, action) => {
    const {payload, type} = action;
    switch (type) {

        case Modules.GET_BANNER_ADS:
            if (payload) {
                return state.set('bannerList', payload)
            }
            return state;
        case Modules.GET_CATEGORY:
            if (payload) {
                return state.set('categoryList', payload)
            }
            return state;
        case Modules.GET_PRODUCTS:
            if (payload) {
                return state.set('productList', payload)
            }
            return state;
        default:
            return state;
    }
};
