import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddTaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.taskNameInput.focus();
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event) {
        this.props.handleSubmitForm({ name: this.state.name });
        this.setState({ name: '' });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Task Name
                        <input type="text" ref={(input) => {this.taskNameInput = input}} value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

AddTaskForm.propTypes = {
    handleSubmitForm: PropTypes.func
};

export default AddTaskForm;
