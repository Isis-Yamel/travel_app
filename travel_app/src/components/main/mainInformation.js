import React from 'react';
import '../../css/styles/mainInformation.scss';

const MainInformation = props => {
    return (
        <section className='mainInformation__layout'>
            <p className='mainInformation__text--style scrollbar'>{props.information}</p>
            <p>Read More</p>
        </section>
    );
};

MainInformation.defaultProps = {
    information: 'The true delight is in the finding out, rather than in the knowing.'
}

export default MainInformation;