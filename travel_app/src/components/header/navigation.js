import Dropdown from '../../elements/dropdown';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../store/actions/actions';
import '../../css/styles/navigation.scss';

class Navigation extends Component {

    state = {
        languages: [
            {
                id: '1a',
                title: 'Spanish',
                selected: false
            },
            {
                id: '1b',
                title: 'English',
                selected: false
            }
        ]
    };

    render () {
        return (
            <section className='navigation__layout--grid'>
                <Dropdown
                    title='cities'
                    list={this.props.data}
                    fetchData={this.props.fetchCities}
                />
                {/* <Dropdown
                    title='lang'
                    list={this.state.languages}
                /> */}
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.city
    };
};

const mapDispatchToProps = { fetchCities };

export default connect(mapStateToProps, mapDispatchToProps) (Navigation);