
import axios from 'axios';

const url = process.env.REACT_APP_CARDS_URL;

export const asyncCardsFunctions = {

        getCards:

        async function(i, {dispatch, getState}){

            const { userAuth } = getState();
    
            if(userAuth.isAuth)
                {
                const { userAuth } = getState();
                const config = {
                    headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
               return axios.get(url, config)
                }
            
            const unloggedUrl = process.env.REACT_APP_UNLOGGED_CARDS_URL;
                
            return axios.get(unloggedUrl)
        },

        getFilteredCards:

        async function(filter, { dispatch, getState }){
                
            const { userAuth } = getState();
             
            if(userAuth.isAuth)
                {
                const config = {
                     data: filter ,
                    headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
            return await axios.post(url + 'filter', config)
            }
        },
}