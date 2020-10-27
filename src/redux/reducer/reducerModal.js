import * as types from './../type';

const initialState = {
    isLoad: true,
    isSuccess: false,
    isFailed: false,
    show:false,
    register: false,
}

export default function reducerModal(state = initialState, action){
    switch (action.type){
        case `${types.MODAL_LOGIN}` :
            return{
                ...state,
                show:action.data
            }
        case `${types.MODAL_REGISTER}`:  
            return{
                ...state,
                register: action.data,
                show: action.login,
            }
        default:
            return state;  
    }
}