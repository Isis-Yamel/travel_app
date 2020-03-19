import React, { Component, Fragment } from 'react';
import '../css/dropdown.scss';

class Dropdown extends Component {

    state = {
        listOpen: false,
    }

    handleCLick () {
        this.setState({
            listOpen: false
        });
    };

    toggleList () {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    };

    render () {
        const{listOpen} = this.state;
        return (
            <Fragment>
                <div className='dropdown__container--grid' onClick={() => this.toggleList()}>
                    <h2 className='dropdown__container--style'>Cities</h2>
                    {listOpen
                    ? <i className="fas fa-arrow-up dropdown__container--icon"></i>
                    : <i className="fas fa-arrow-down dropdown__container--icon"></i>
                    }
                    {listOpen && <ul>
                        {this.props.list.map((item) => (
                            <li key={item.id} >{item.title}</li>
                        ))}
                    </ul>}
                </div>
            </Fragment>
        );
    };
};

export default Dropdown;