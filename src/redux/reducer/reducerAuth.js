import * as types from './../type';

const initialState = {
    isLoad: true,
    isSuccess: false,
    isFailed: false,
}

export default function reducerAuth(state = initialState, action){
    switch (action.type){
        case `${types.LOGIN}_PENDING`:
            return{
                ...state,
                isLoad: true
            };
        case `${types.LOGIN}_FULFILLED`:
            return{
                ...state,
                isSuccess: true,
                isLoad: false
            };
        case `${types.LOGIN}_REJECTED`:
            return{
                ...state,
                isFailed: true,
                isLoad: false
            }; 
        default:
            return state;           
    }
}