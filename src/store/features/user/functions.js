import axios from "axios";

const url = process.env.REACT_APP_USERS_URL;

export const asyncUserFunctions = {

    getUserFromServer:

    async function(user, { dispatch, getState}){
        const { userAuth } = getState();
        if(userAuth.isAuth)
            {
                const config = { 
                    params: {email: user.email},
                    headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                    }
                
                return await axios.get( url, config)
            }
    },
    
    signUpUserAtServer:

    async function({stsTokenManager,userData}, { dispatch, getState}){
        const config = { 
                user: {
                    ...userData,
                    joinDate: Date.now(),
                    tokensHandler: {...stsTokenManager}
                },
                headers:{ 'Authorization': 'Bearer ' + stsTokenManager.accessToken }
                }
            
        return axios.post( url, config)
    },
    
    updateUserAtServer:

    async function(params, {dispatch, getState}){
        const config = {
            params:{ id: params.uid}
        }
       return axios.put(url, config)
    },
    
    deleteUserAtServer:

    async function({id, uid}, {dispatch, getState}){
        
        localStorage.removeItem('user')
    
        const config = {
            params:{ id, uid}
        }
       return axios.delete(url, config)
       .then(res => {
           localStorage.removeItem('user');
        } )
       .catch(err => console.log('failed/delete user',err))
    },

}