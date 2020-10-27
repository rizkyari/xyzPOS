import * as types from './../type';

export const handleOnModal = data => ({
    type: types.MODAL_LOGIN,
    data
})

export const handleRegister = (data,login) =>({
    type: types.MODAL_REGISTER,
    data,
    login,
})

export const handleSubmit = (name,email,password)=>({
    type: types.REGISTER,
    name,
    email,
    password,
})