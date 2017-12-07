import PropTypes from 'prop-types';
import React from 'react';

import s from './Card.scss';

const Card = ({ item, idx, handleDeleteTask }) => {
    return (
        <div className={s['card']}>
            <div className={s['cardContent']}>
            {item.name}
            </div>
            <div className={s['deleteCard']} onClick={() => handleDeleteTask(idx)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    handleDeleteTask: PropTypes.func
};

export default Card;
