import React from 'react';
import '../../css/styles/mainGallery.scss';

const MainGallery = () => {
    return (
        <div className='mainGallery__layout'>
            <button className='mainGallery__button--style'>
                <i className="fas fa-images mainGallery__button--icon"></i>
            </button>
        </div>
    );
};

export default MainGallery;