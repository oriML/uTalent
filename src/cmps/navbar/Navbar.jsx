import React from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom"

import { useAuth } from '../../hooks/useAuth'

import * as S from './style'

const Navbar = () => {
    
    const dispatch = useDispatch();
    const { logOut } = useAuth();

    return (

    <section className="navbar_wrapper full">
        <S.Mui_Navbar>
            <div className="main-layout">
                <S.Mui_Toolbar>

                <S.Mui_Link to='/profile'>
                    <S.Mui_Button>
                        פרופיל
                    </S.Mui_Button>
                </S.Mui_Link>

                <S.Mui_Link to='/'>
                    <S.Mui_Button>
                        בית
                    </S.Mui_Button>
                </S.Mui_Link>

                <S.Mui_Link to='/upload'>
                    <S.Mui_Button>
                        העלאת תוכן
                    </S.Mui_Button>
                </S.Mui_Link>

                <S.Mui_Link to='/about' >
                    <S.Mui_Button>
                        קצת עלינו
                    </S.Mui_Button>
                </S.Mui_Link>

                <S.Mui_Link to='/register'>
                    <S.Mui_Button>
                        הירשם
                    </S.Mui_Button>
                </S.Mui_Link>

                <S.Mui_Link to='/login'>
                    <S.Mui_Button>
                        התחבר
                    </S.Mui_Button>
            
                </S.Mui_Link>

                <S.Mui_Link to='/' onClick={()=> dispatch(logOut())} >
                    <S.Mui_Button>
                        התנתק
                    </S.Mui_Button>
                </S.Mui_Link>


                </S.Mui_Toolbar>
            </div>
        </S.Mui_Navbar>
    </section>

)
    }

export default Navbar