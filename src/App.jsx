import { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux'

import { routes } from './routes';
import { setUser } from './store/features/user'
import { setUserAuth } from './store/features/userAuth'

import Navbar from './cmps/navbar/Navbar';
import Footer from './cmps/footer/Footer';

import './assets/main.css';


const App = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      console.log('app is on and user isnt gone')
      dispatch(setUser(user))
      dispatch(setUserAuth())
    }

  }, [])
  return (

    
      <section className="App main-layout">

        <Navbar />
          <Switch>
                {
                  routes.map(({path, component}) => <Route exact key={path} path={path} component={component} />
                  )
                }
          </Switch>
        <Footer />

      </section>

  );
}

export default App;
