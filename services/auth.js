import axios from 'axios';

import * as c from '../constants';

export async function register(data){
    try{
        let res = await axios.post(c.REGISTER, data);

        return res.data;
    }catch (e) {
        throw handler(e)
    }
}

export async function login(data){
    try{

        console.log(data)
        let res = await axios.post(c.LOGIN, data);
        console.log(res.data)
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function getCatches(data){
    try{

        let res = await axios.post(c.CATCHES, data);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export async function addCatch(data){
    try{
        console.log(data)
        let res = await axios.put(c.ADDCATCH, data);
        return res.data;
    }catch(e){
        throw handler(e);
    }
}

export async function forgotPassword(data) {
    try {
        let res = await axios.post(c.FORGOT_PASSWORD, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function updateProfile(userId, data){
    try{
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for ( let key in data )
            form_data.append(key, data[key]);

        let res = await axios.put(`${c.UPDATE_PROFILE}/${userId}`, form_data, options);
        return res.data;
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd
