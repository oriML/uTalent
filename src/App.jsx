import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';

import { Provider } from 'react-redux'
import { store } from './store/store'

import Navbar from './cmps/navbar/Navbar';
import Footer from './cmps/footer/Footer';

import './assets/main.css';


const App = () => {
  return (

    <Provider store={store} >
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
      </Provider>

  );
}

export default App;
