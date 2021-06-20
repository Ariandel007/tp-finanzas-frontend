
import axiosClient from '../config/axios-client';

import { tokenAuth } from '../config/token';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_REGISTER,
    AUTH_REGISTER_ERROR,
    AUTH_REGISTER_SUCCESS
} from '../types';


export function userLoginAction(user) {
    return async (dispatch) => {
        dispatch(login());

        try {
            tokenAuth(null);

            const res = await axiosClient.post('/user/login', user);
            
            const responseLogin = res.data;

            tokenAuth(responseLogin.token);

            dispatch(loginSuccess(responseLogin));

            localStorage.setItem('token-receipt', responseLogin.token);

            localStorage.setItem('user-receipt', JSON.stringify(responseLogin.user));

        } catch (error) {
            dispatch(loginError());
        }
    }
}

export function userRegisterAction(userToRegister) {
    return async (dispatch) => {
        dispatch(register);

        try {
            const res = await axiosClient.post('/user/register', userToRegister);

            const responseRegister = res.data;

            tokenAuth(responseRegister.token);

            dispatch(registerSuccess(responseRegister));

            localStorage.setItem('token-receipt', responseRegister.token);

            localStorage.setItem('user-receipt', JSON.stringify(responseRegister.user));

        } catch (error) {
            dispatch(registerError());
        }
    }
}

//login
const login = () => ({
    type: AUTH_LOGIN
});

const loginSuccess = (responseLogin) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: responseLogin
});

const loginError = () => ({
    type: AUTH_LOGIN_ERROR
});

//register
const register = () => ({
    type: AUTH_REGISTER
});

const registerSuccess = (responseRegister) => ({
    type: AUTH_REGISTER_SUCCESS,
    payload: responseRegister
});

const registerError = () => ({
    type: AUTH_REGISTER_ERROR
});
