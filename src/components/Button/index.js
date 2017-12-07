import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './Button.scss';

const Button = ({ enabled, className, children, onClick }) => {
    return (
        <button
            className={cx(className, enabled?s['enabled']:null)}
            onClick={onClick}
            >{children}</button>
    );
}

Button.propTypes = {
    enabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};
export default Button;
