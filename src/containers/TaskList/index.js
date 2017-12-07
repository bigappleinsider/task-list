import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '~src/actions';
import Navigation from '~src/components/Navigation';
import AddTaskForm from '~src/components/AddTaskForm';
import TaskListing from '~src/components/TaskListing';
import Alert from '~src/components/Alert';
import s from './TaskList.scss';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleSaveTasks = this.handleSaveTasks.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleDismissAlert = this.handleDismissAlert.bind(this);
    }
    componentWillMount() {
        this.props.fetchTasks();
    }
    handleShowForm() {
        this.setState({ showForm: true });
    }
    handleSubmitForm(task) {
        this.props.addTask(task);
    }
    handleSaveTasks() {
        this.props.saveTasks();
    }
    handleDeleteTask(idx) {
        this.props.deleteTask(idx);
    }
    handleDismissAlert() {
      this.props.dismissAlert();
    }
    render() {
        const { isSaveEnabled, tasks, alert } = this.props;
        return (
          <div className={s['taskList']}>
            <Navigation saveEnabled={isSaveEnabled} handleShowForm={this.handleShowForm} handleSaveTasks={this.handleSaveTasks} />
            {this.state.showForm &&
                <AddTaskForm handleSubmitForm={this.handleSubmitForm} />}
            <TaskListing handleDeleteTask={this.handleDeleteTask} tasks={tasks} />
            {alert && alert.message && <Alert type={alert.type} handleDismissAlert={this.handleDismissAlert}>{alert.message}</Alert>}
          </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    isSaveEnabled: PropTypes.bool,
    alert: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer.tasks,
        isSaveEnabled: state.tasksReducer.isSaveEnabled,
        alert: state.tasksReducer.alert
    };
};

export default connect(
    mapStateToProps,
    actions
)(TaskList);
