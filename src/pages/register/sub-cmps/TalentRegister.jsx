import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'

import { useAuth } from '../../../hooks/useAuth'

const TalentRegister = () => {

    const { register, handleSubmit, watch, formState: {errors} } = useForm({ mode: 'onTouched' });
    const { signUp } = useAuth();
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        dispatch(signUp(data))

    }
    
    const password = watch('password');

    return(

        <section className="talent-register-page">

            <div className="register-header">

                <h1>הירשם</h1>

            </div>

            <form className="register-form" onSubmit={handleSubmit(onSubmit)} >

                <input
                        type="text"
                        {
                            ...register("firstName",
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
                            ...register("lastName",
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
                                required: true,
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Email format is wrong'
                                }
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
                                validate: value => value === password || "הסיסמאות אינן זהות"
                            }
                            )}

                        placeholder="אימות סיסמא"
                        onPaste={e => {
                            e.preventDefault();
                            return false;
                        }}
                />

                {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}

                <input
                        type="tel"
                        {
                            ...register("mobile",
                            {
                                
                                minLength: {
                                    value: 10,
                                    message: "מספר טלפון חייב להיות בן 10 ספרות"},
                            }
                            )}

                        placeholder="מספר טלפון"

                />

                {errors.mobile && <span> {errors.mobile.message} </span>}


                <input
                        type="file"
                        placeholder="תמונת פרופיל"
                />

                <input
                        type="number"
                        {
                            ...register("age",
                            {
                                
                                
                                    min: 18,
                                    message: "הגיל חייב להיות מעל 18",
                            }
                            )}

                        placeholder="גיל"

                />

                {errors.age && <span> {errors.age.message} </span>}

                <input
                        type="textarea"
                        {
                            ...register("describe",
                            {
                                
                                minLength: {
                                    value: 15,
                                    message: "תיאור משמעותי ומושך הוא מעל 15 תווים לפחות"},
                            }
                            )}

                        placeholder="ספק קצת מידע על עצמך!"

                />

                {errors.describe && <span> {errors.describe.message} </span>}

                <input type="submit" className="register-confirm-button" />

            </form>

        </section>

        )
}

export default TalentRegister

/**
 * 
 * 
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        },
        cards: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Card'
        },
 */