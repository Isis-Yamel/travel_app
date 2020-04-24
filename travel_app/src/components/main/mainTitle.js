import React from 'react';
import '../../css/styles/mainTitle.scss';

const MainTitle = props => {
    return (
        <section className='mainTitle__layout'>
            <h2 className='mainTitle__title'>{props.title}</h2>
            <p className='mainTitle__quote'>{props.subtitle}</p>
        </section>
    );
};

MainTitle.defaultProps = {
    title: 'Welcome',
    subtitle: 'Please choose a city on the menu above'
};

export default MainTitle;