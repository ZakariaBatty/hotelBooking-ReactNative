
export const Profile = async () => {
    try {
        // get data 
        const response = await fetch('https://api.hoodzpronos.com/profile', { withCredentials: true });
        //If response is in json then in success
        const data = await response.json();
        //Success 
        //If response is not in json then in error
    } catch (error) {
        //Error 
        console.error(error);
    }
}

//@ get history
export const getHistory = () => async dispatch => {
    try {
        const res = await fetch(('https://api.hoodzpronos.com//findOneSub', { withCredentials: true });
        if (res) {
            // console.log(res.data);
            dispatch({ type: userTypes.HISTORY, payload: res.data });
        }
    } catch (err) {
        // dispatch({ type: userTypes.ERROR, payload: err?.response?.data?.error });
    }
};


export const getExpectations = async () => {
    try {
        // get data 
        const response = await fetch('https://api.hoodzpronos.com//expectations', { withCredentials: true });
        //If response is in json then in success
        const data = await response.json();
        //Success 
        //If response is not in json then in error
    } catch (error) {
        //Error 
        console.error(error);
    }
}