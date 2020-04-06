import React, { Fragment } from 'react';
import '../css/styles/dropdown.scss';

const DropdownItems = props => {

    const handleOnClick = (title) => {
        console.log(title)
    };

    const renderIconList = () => {
        return (
            props.listOpen
            ? <i className="fas fa-angle-up dropdown__container--icon"></i>
            : <i className="fas fa-angle-down dropdown__container--icon"></i>
        );
    };

    const renderList = () => {
        let list;

        if (props.listOpen) {
            list = (
                <ul className='dropdown__list--style'>
                    {props.list.map((item) => (
                        <li onClick={() => handleOnClick(item.title)} className='dropdown__list--item' key={item.id} >{item.title}</li>
                    ))}
                </ul>
            );
        }

        return list;
    };

    return (
        <Fragment>
            {renderIconList()}
            {renderList()}
        </Fragment>
    );
};

export default DropdownItems;