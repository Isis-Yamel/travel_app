import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCitiesInfo } from '../store/actions/actions';
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
                    <li onClick={() => props.fetchCitiesInfo(item.city)} className='dropdown__list--item' key={item.id} >{item.city}</li>
                ))}
            </ul>
        );
    }

    return list;
};

const mapDispatchToProps = { fetchCitiesInfo };

export default connect (null, mapDispatchToProps) (DropdownItems);