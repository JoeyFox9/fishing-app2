//Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;

export const  initialState = {
    isLoggedIn: false,
    user: null
};

//REDUCER
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:{
            let { user } = action;

            return {...state, isLoggedIn: true, user};
        }

        case LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducer;

//References:
// https://reactnavigation.org/docs/auth-flow/
// https://betterprogramming.pub/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd
