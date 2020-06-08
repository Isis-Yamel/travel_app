import React from 'react';
import test from '../../assets/street-test.jpg';
import '../../css/styles/morePlaces.scss';

const MorePlaces = () => {
    return (
        <div className='morePlaces__layout'>
            <section className='moreInformation'>
                <h2>More about ....</h2>
                <p>Request with the information</p>
            </section>
            <img className='moreImage' src={test} alt="city image"/>
        </div>
    );
};

export default MorePlaces;