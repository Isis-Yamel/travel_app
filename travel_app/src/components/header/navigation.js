import Dropdown from '../../elements/dropdown';
import React, { Component } from 'react';
import '../../css/navigation.scss';

class Navigation extends Component {

    state = {
        cities: [
            {
                id: 0,
                title: 'Berlin',
                selected: false,
                key: 'location'
            },
            {
                id: 1,
                title: 'Bogota',
                selected: false,
                key: 'location'
            }
        ]
    };

    render () {
        return (
            <div className='navigation__layout--grid'>
                <Dropdown
                    title='Cities'
                    list={this.state.cities}
                />
                <button className='navigation__layout--bar'>SigIn</button>
                <select className='navigation__layout--bar' name='language'>
                    <option>spanish</option>
                    <option>english</option>
                </select>
            </div>
        );
    };
};

export default Navigation;