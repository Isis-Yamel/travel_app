import logo from '../../assets/logo.jpg';
import Navigation from './navigation';
import React from 'react';

import '../../css/header.scss';

const Header = () => {
    return (
        <header className='header_layout--grid'>
            <img className='header__logo--style' src={logo} alt='website logo'/>
            <Navigation/>
        </header>
    );
};

export default Header;