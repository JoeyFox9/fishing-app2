import React from 'react';

//API URL
export const API_URL = 'http://10.0.0.9:3000';

//API End Points
export const REGISTER = `${API_URL}/user/signup`;
export const LOGIN = `${API_URL}/user/login`;
export const INFO = `${API_URL}/user/info`;
export const UPDATE_PROFILE = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;
export const CATCHES = `${API_URL}/user/catches`