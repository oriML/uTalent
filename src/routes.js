import About from "./pages/about/About"
import Feed from "./pages/feed/Feed"
import Homepage from "./pages/homepage/Homepage"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import TalentRegister from "./pages/register/sub-cmps/TalentRegister"
import Upload from "./pages/upload/Upload"

export const routes =  [
    
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/upload',
            component: Upload
        },
        {
            path: '/feed/',
            component: Feed
        },
        {
            path: '/feed/:_category',
            component: Feed
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: TalentRegister
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/about',
            component: About
        },
        
       
    ]