import * as types from './../type';

const initialState = {
    isLoad: true,
    isSuccess: false,
    isFailed: false,
    name:false,
    email:false,
    password:false
}

export default function reducerAuth(state = initialState, action){
    switch (action.type){
        case `${types.REGISTER}`:
            return{
                ...state,
                name:action.name,
                email:action.email,
                password:action.password,
            };
        default:
            return state;           
    }
}