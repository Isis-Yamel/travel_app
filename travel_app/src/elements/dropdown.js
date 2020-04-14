import DropdownItems from './dropdownItems';
import React, { Component, Fragment } from 'react';
// import { fetchCities } from '../store/actions/actions';
import '../css/styles/dropdown.scss';

class Dropdown extends Component {

    state = {
        listOpen: false,
    }

    componentDidMount () {
        this.props.fetchData();
    };

    toggleList (event) {
        event.preventDefault();
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    };

    render () {
        return (
            <Fragment>
                <div className='dropdown__container--grid' onClick={(event) => this.toggleList(event)}>
                    <h2 className='dropdown__container--style'>{this.props.title}</h2>
                    <DropdownItems
                        list={this.props.list}
                        listOpen={this.state.listOpen}
                    />
                </div>
            </Fragment>
        );
    };
};

export default Dropdown;