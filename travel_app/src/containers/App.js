import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
import MorePlaces from '../components/main/MorePlaces';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import '../css/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app__layout app__background'>
        <Header/>
        <main className='main__layout--content'>
          <Switch>
            <Route exact path='/'component={Main}/>
            <Route path='/more-places'component={MorePlaces}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;