import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
import React from 'react';
import '../css/styles/App.scss';

const App = () => {
  return (
    <div className='app__layout app__background'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;