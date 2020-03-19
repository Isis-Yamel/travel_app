import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
import React, { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;