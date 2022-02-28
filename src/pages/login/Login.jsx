import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { authFromFirebase, logOut } from '../../store/features/userAuth'
import { getUser } from "../../store/features/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAuth } from '../../hooks/'



const getUserState = (state) => state.user;

const Login = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { login } = useAuth();
    const { isLoading, isLogged } = useSelector(getUserState)

    console.log(isLoading, isLogged)

    const onSubmit = async data => dispatch(login(data)) 
    
    return(

        <section className="login-page">
        {
            !isLogged?
        <>
            <div className="login-header">
                <h1>התחבר</h1>
            </div>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)} >

                <input
                        type="text"
                        {
                            ...register("email",
                            {
                                required: true
                            })
                        }
                        placeholder="אימייל"
                />

                {errors.email && <span>Email is invalid</span>}

                <input
                        type="password"
                        {
                            ...register("password",
                            {
                                required: "Password is required",
                            }
                            )}

                        placeholder="סיסמא"
                />

                {errors.password && <span> {errors.password.message} </span>}

                <input type="submit" className="login-confirm-button" />

            </form>
        </>

    :
    <h1>Connected!!!!!</h1>


}
        </section>

        )
}

export default Login