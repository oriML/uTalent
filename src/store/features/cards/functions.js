
import axios from 'axios';

const url = process.env.REACT_APP_CARDS_URL;

export const asyncCardsFunctions = {

        getCards:

        async function(){
            //we want it to work for all 
            return axios.get(url)

            // const { userAuth } = getState();
    
            // if(userAuth.isAuth)
            //     {
            //     const { userAuth } = getState();
            //     const config = {
            //         headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
            //     }
            //    return axios.get(url, config)
            //     }
        },

        getFilteredCards:

        async function(filter, { dispatch, getState }){
                
            const { userAuth } = getState();

            if(userAuth.isAuth)
                {
                const config = {
                    params: { filter: filter },
                    headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
            return await axios.get(url, config)
            }
        },
}