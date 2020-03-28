import Dropdown from '../../elements/dropdown';
import React, { Component } from 'react';
import '../../css/styles/navigation.scss';

class Navigation extends Component {

    state = {
        cities: [
            {
                id: 0,
                title: 'Berlin',
                selected: false
            },
            {
                id: 1,
                title: 'Bogota',
                selected: false
            },
            {
                id: 2,
                title: 'Oslo',
                selected: false
            }
        ],
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
                    list={this.state.cities}
                />
                <Dropdown
                    title='lang'
                    list={this.state.languages}
                />
            </section>
        );
    };
};

export default Navigation;