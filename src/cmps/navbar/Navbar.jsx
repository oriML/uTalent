import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => (

    <section className="navbar_wrapper full">
        <div className="main-layout">
            <nav className="menu">

                <div className="user_tab">

                    <Link to='/profile'>
                        פרופיל
                    </Link>

                </div>

                <div className="home_tab">

                    <Link to='/'>
                        בית
                    </Link>

                </div>

                <div className="upload_tab">

                    <Link to='/upload'>
                        העלאת תוכן
                    </Link>

                </div>

                <div className="about_tab">

                    <Link to='/about' >
                        קצת עלינו
                    </Link>

                </div>

                <div className="signin_tab">

                    <Link to='/register'>
                        הירשם
                    </Link>

                </div>

                <div className="signin_tab">

                    <Link to='/login'>
                        התחבר
                    </Link>
                
                </div>

                <div className="signout_tab">

                    <Link to='/' >
                        התנתק
                    </Link>

                </div>

            </nav>
        </div>
    </section>

)

export default Navbar