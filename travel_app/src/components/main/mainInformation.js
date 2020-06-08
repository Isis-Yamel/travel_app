import { Link } from 'react-router-dom';
import React from 'react';
import '../../css/styles/mainInformation.scss';

const MainInformation = props => {
    return (
        <section className='mainInformation__layout'>
            <p className='mainInformation__text--style scrollbar'>{props.information}</p>
            <p><Link to='/more-places/'>More</Link></p>
        </section>
    );
};

MainInformation.defaultProps = {
    information: `The true delight is in the finding out, rather than in the knowing.
    Our purpose is to give you a quick guide about some cities you may travel for bunch of reasons.`
}

export default MainInformation;