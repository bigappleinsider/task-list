import PropTypes from 'prop-types';
import React from 'react';

import Card from '~src/components/Card';

import s from './TaskListing.scss'

const TaskListing = ({ tasks, handleDeleteTask }) => {
    return (
        <div className={s['taskListing']}>
        {tasks.map((item, idx) => {
            return (<Card handleDeleteTask={handleDeleteTask} key={idx} idx={idx} item={item} />);
        })}
        </div>
    );
}

TaskListing.propTypes = {
    tasks: PropTypes.array,
    handleDeleteTask: PropTypes.func
};

export default TaskListing;
