import React, { Component, Fragment } from 'react';
import '../css/styles/dropdown.scss';

class Dropdown extends Component {

    state = {
        listOpen: false,
    }

    toggleList () {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    };

    renderIconList () {
        return (
            this.state.listOpen
            ? <i className="fas fa-angle-up dropdown__container--icon"></i>
            : <i className="fas fa-angle-down dropdown__container--icon"></i>
        );
    };

    renderList () {
        let list;

        if (this.state.listOpen) {
            list = (
                <ul className='dropdown__list--style'>
                    {this.props.list.map((item) => (
                        <li className='dropdown__list--item' key={item.id} >{item.title}</li>
                    ))}
                </ul>
            );
        }

        return list;
    };

    render () {
        return (
            <Fragment>
                <div className='dropdown__container--grid' onClick={() => this.toggleList()}>
                    <h2 className='dropdown__container--style'>{this.props.title}</h2>
                    {this.renderIconList()}
                    {this.renderList()}
                </div>
            </Fragment>
        );
    };
};

export default Dropdown;