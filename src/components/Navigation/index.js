import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Button from '~src/components/Button';
import s from './Navigation.scss';

const Navigation = ({ handleShowForm, handleSaveTasks, saveEnabled }) => {
    return (
        <div className={s['navigation']}>
            <div className={s['header']}>
            Tasks
            </div>
            <div className={s['actions']}>
                <Button onClick={handleShowForm}>Add Task</Button>
                <Button onClick={saveEnabled?handleSaveTasks:null} enabled={saveEnabled}>Save</Button>
            </div>
        </div>
    );
}
Navigation.propTypes = {
    handleShowForm: PropTypes.func,
    handleSaveTasks: PropTypes.func,
    saveEnabled: PropTypes.bool
};

export default Navigation;
