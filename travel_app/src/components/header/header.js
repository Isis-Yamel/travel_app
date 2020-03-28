import Navigation from './navigation';
import React from 'react';

import '../../css/styles/header.scss';

const Header = () => {
    return (
        <header className='header__layout--grid'>
            <i className="fas fa-mountain header__layout--logo"></i>
            <Navigation/>
        </header>
    );
};

export default Header;