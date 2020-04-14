import React, { Fragment } from 'react';
import '../css/styles/dropdown.scss';

const DropdownItems = props => {
    return (
        <Fragment>
            {renderIconList(props)}
            {renderList(props)}
        </Fragment>
    );
};

const renderIconList = props => {
    return (
        props.listOpen
        ? <i className="fas fa-angle-up dropdown__container--icon"></i>
        : <i className="fas fa-angle-down dropdown__container--icon"></i>
    );
};

const renderList = props => {
    let list;

    if (props.listOpen) {
        list = (
            <ul className='dropdown__list--style'>
                {props.list.data.map((item) => (
                    <li className='dropdown__list--item' key={item.id} >{item.cityName}</li>
                ))}
            </ul>
        );
    }

    return list;
};

export default DropdownItems;