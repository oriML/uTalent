import { useState } from "react";
import { useForm } from 'react-hook-form'

const ConsumerRegister = () => {

    const { register, handleSubmit, watch, formState: {errors} } = useForm({ mode: 'onTouched' });

    const onSubmit = data => {
        console.log(data);

    }
    
    const password = watch('password');

    return(

        <section className="consumer-register-page">

            <div className="register-header">

                <h1>הירשם</h1>

            </div>

            <form className="register-form" onSubmit={handleSubmit(onSubmit)} >

                <input
                        type="text"
                        {
                            ...register("username",
                            {
                                required: true
                            })
                        }
                        placeholder="שם פרטי"
                />

                {errors.username && <span>שדה חובה</span>}

                <input
                        type="text"
                        {
                            ...register("lastname",
                            {
                                required: true
                            })
                        }
                        placeholder="שם משפחה"
                />

                {errors.lastname && <span>שדה חובה</span>}

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
                        style={{"border": errors.password?"2px solid red": "2px solid black"}}
                        {
                            ...register("password",
                            {
                                required: "Password is required",
                                minLength: {value: 4, message: "הסיסמא חייבת לכלול 4 תווים לפחות"
                            }
                            }
                            )}

                        placeholder="סיסמא"
                />

                {errors.password && <span> {errors.password.message} </span>}

                <input
                        type="password"
                        {
                            ...register("confirmPassword",
                            {
                                required: "Password is required",
                                minLength: {
                                    message: "הסיסמא חייבת לכלול 4 תווים לפחות"},
                                validate: value => value === password || "The passwords don't match"
                            }
                            )}

                        placeholder="אימות סיסמא"
                        onPaste={e => {
                            e.preventDefault();
                            return false;
                        }}
                />

                {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}

                
                
                <input type="submit" className="register-confirm-button" />

            </form>

        </section>

        )
}

export default ConsumerRegister