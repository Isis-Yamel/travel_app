import Dropdown from '../../elements/dropdown';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../store/actions/actions';
import '../../css/styles/navigation.scss';

const Navigation = props => {
    return (
        <section className='navigation__layout--grid'>
            <Dropdown
                title='cities'
                list={props.data}
                fetchData={props.fetchCities}
            />
        </section>
    );
};

const mapStateToProps = state => {
    return {
        data: state.city
    };
};

const mapDispatchToProps = { fetchCities };

export default connect(mapStateToProps, mapDispatchToProps) (Navigation);