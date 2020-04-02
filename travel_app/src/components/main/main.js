import MainGallery from './mainGallery';
import MainInformation from './mainInformation';
import MainTitle from './mainTitle';
import React from 'react';
import '../../css/styles/main.scss';

const Main = () => {
    return (
        <main className='main__layout main__test'>
            <MainTitle/>
            <MainInformation/>
            <MainGallery/>
        </main>
    );
};

export default Main;