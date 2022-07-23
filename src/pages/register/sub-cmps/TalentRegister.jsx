import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'

import { useAuth } from '../../../hooks/useAuth'
import { ReactComponent as RegisterSvg } from '../../../utils/svg/RegisterPageSvg.svg'

import { IconWithPosition, RightComponent, StyledInputWrapper, StyledRegisterButton } from "../style";
import { RegisterTitle } from '../style'
import { LeftComponent } from "../style";
import { Pane as Right } from "../style";
import { Pane as Left } from "../style";
import { RegisterPageContainer } from "../style";
import { FormContainer } from "../style";
import { StyledInput } from "../style";


import { UserIcon } from '../../../utils/icons/'
import { EmailIcon } from '../../../utils/icons/'
import { PasswordIcon } from '../../../utils/icons/'
import { MobileIcon } from '../../../utils/icons/'


const TalentRegister = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onTouched' });
    const { signUp } = useAuth();
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data);
        dispatch(signUp(data))

    }

    const password = watch('password');

    return (
        <RegisterPageContainer>

            <Right>
                <RightComponent className="talent-register-page">

                    <RegisterTitle>
                        <span>בואו נירשם לuTalent</span>
                        <span>!</span>
                    </RegisterTitle>

                    {/* <FormContainer> */}

                    <FormContainer className="register-form" onSubmit={handleSubmit(onSubmit)} >

                        <StyledInputWrapper>
                            <StyledInput
                                type="text"
                                {
                                ...register("username",
                                    {
                                        required: true
                                    })
                                }
                                placeholder="שם משתמש"
                                icon={<UserIcon />}
                            />
                            <IconWithPosition>
                                <UserIcon />
                            </IconWithPosition>
                        </StyledInputWrapper>

                        {errors.username && <span>שדה חובה</span>}

                        {/* <StyledInput
                            type="text"
                            {
                            ...register("lastName",
                                {
                                    required: true
                                })
                            }
                            placeholder="שם משפחה"
                        />

                        {errors.lastname && <span>שדה חובה</span>} */}
                        <StyledInputWrapper>

                            <StyledInput
                                type="text"
                                {
                                ...register("email",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'פורמט האימייל שגוי'
                                        }
                                    })
                                }
                                placeholder="אימייל"
                            />
                            <IconWithPosition>
                                <EmailIcon />
                            </IconWithPosition>
                        </StyledInputWrapper>
                        {errors.email && <span>אימייל הוא שדה חובה</span>}
                        <StyledInputWrapper>

                            <StyledInput
                                type="password"
                                style={{ "border": errors.password ? "2px solid red" : "2px solid black" }}
                                {
                                ...register("password",
                                    {
                                        required: "סיסמא היא שדה חובה",
                                        minLength: {
                                            value: 4, message: "הסיסמא חייבת לכלול 4 תווים לפחות"
                                        }
                                    }
                                )}

                                placeholder="סיסמא"
                            />
                            <IconWithPosition>
                                <PasswordIcon />
                            </IconWithPosition>
                        </StyledInputWrapper>

                        {errors.password && <span> {errors.password.message} </span>}
                        <StyledInputWrapper>

                            <StyledInput
                                type="password"
                                {
                                ...register("confirmPassword",
                                    {
                                        required: "סיסמא היא שדה חובה",
                                        minLength: {
                                            message: "הסיסמא חייבת לכלול 4 תווים לפחות"
                                        },
                                        validate: value => value === password || "הסיסמאות אינן זהות"
                                    }
                                )}

                                placeholder="אימות סיסמא"
                                onPaste={e => {
                                    e.preventDefault();
                                    return false;
                                }}
                            />
                            <IconWithPosition>
                                <PasswordIcon />
                            </IconWithPosition>
                        </StyledInputWrapper>

                        {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}
                        <StyledInputWrapper>

                            <StyledInput
                                type="tel"
                                {
                                ...register("mobile",
                                    {

                                        minLength: {
                                            value: 10,
                                            message: "מספר טלפון חייב להיות בן 10 ספרות"
                                        },
                                    }
                                )}

                                placeholder="מספר טלפון"

                            />
                            <IconWithPosition>
                                <MobileIcon />
                            </IconWithPosition>
                        </StyledInputWrapper>
                        {errors.mobile && <span> {errors.mobile.message} </span>}
                        {/* 
                            <StyledUploadInput>
                                    העלה תמונת פרופיל
                                <input
                                    type="file"
                                    name="תמונת פרופיל"
                                />
                            </StyledUploadInput>

                            <StyledInput
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

                            <StyledInput
                                type="textarea"
                                {
                                ...register("describe",
                                    {

                                        minLength: {
                                            value: 15,
                                            message: "תיאור משמעותי ומושך הוא מעל 15 תווים לפחות"
                                        },
                                    }
                                )}

                                placeholder="ספק קצת מידע על עצמך!"

                            />

                            {errors.describe && <span> {errors.describe.message} </span>} */}

                        <StyledRegisterButton type="submit" >הרשמה</StyledRegisterButton>

                    </FormContainer>
                    {/* </FormContainer> */}
                </RightComponent>
            </Right>

            <Left>
                <LeftComponent>
                    <RegisterSvg />
                </LeftComponent>
            </Left>
        </RegisterPageContainer >

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