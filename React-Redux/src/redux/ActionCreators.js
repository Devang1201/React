//Functions that returns an action

//Action is an object that contains a type describing what action needs to be performed and some data

import {BUY_CAKE, BUY_ICE_CREAM, ADD_CAKE, ADD_ICE_CREAM} from "./ActionTypes";


export function BuyCake(numCakes){
    return {
        type: BUY_CAKE,
        payload: numCakes
    };
}

export function AddCake(numCakes){
    return {
        type: ADD_CAKE,
        payload: numCakes
    };
}

export function BuyIceCream(numIceCreams){
    return {
        type: BUY_ICE_CREAM,
        payload: numIceCreams
    };
}

export function AddIceCream(numIceCreams){
    return {
        type: ADD_ICE_CREAM,
        payload: numIceCreams
    };
}