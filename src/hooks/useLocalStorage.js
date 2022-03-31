import React from 'react'


function useLocalStorage() {
  
    const saveUserInLS = () => (dispatch, state) => {

        localStorage.setItem('user', JSON.stringify(state().user));
    };

    const removeUserfromLS = () => {
        localStorage.removeItem('user');
    };

    const getUserFromLS = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        return user? user : false;
    }
  
  return {
      saveUserInLS,
      removeUserfromLS,
      getUserFromLS,
    }


}

export default useLocalStorage