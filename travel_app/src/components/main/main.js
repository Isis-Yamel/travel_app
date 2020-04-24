import MainGallery from './mainGallery';
import MainInformation from './mainInformation';
import MainTitle from './mainTitle';
import React from 'react';
import { connect } from 'react-redux';
import '../../css/styles/main.scss';

const Main = props => {
    return (
        <main className='main__layout main__style'>
            <MainTitle
                title={props.data.cityName}
                subtitle={props.data.legend}
            />
            <MainInformation
                information={props.data.description}
            />
            <MainGallery/>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        data: state.chooseCity
    };
};

export default connect(mapStateToProps, null)(Main);