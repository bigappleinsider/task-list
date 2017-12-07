import axios from 'axios';
import Config from 'Config';
import * as types from './types';
import axiosRetry from 'axios-retry';
import { ALERT_TYPES } from '~src/constants/Config';

axiosRetry(axios, { retries: 3, retryCondition: () => true });


export function fetchTasks() {
    return function(dispatch) {
        axios.get(`${Config.serverUrl}/${Config.name}/tasks`)
            .then(response => {
                dispatch({
                    type: types.FETCH_TASKS,
                    payload: response.data.tasks ? response.data.tasks : []
                });
            })
            .catch(function (error) {
              const alert = {
                type: ALERT_TYPES.ERROR,
                message: 'Oops. We are unable to retrieve the list of tasks.'
              };
              dispatch({
                  type: types.ALERT,
                  payload: alert
              });
            });
    };
}

export function saveTasks() {
    return (dispatch, getState) => {
        const state = getState();
        const {tasks} = state.tasksReducer;
        axios.post(`${Config.serverUrl}/${Config.name}/tasks`, {tasks})
            .then(response => {
                const alert = {
                  type: ALERT_TYPES.ERROR,
                  message: 'Tasks saved successfully.'
                };
                dispatch({
                    type: types.SAVED,
                    payload: alert
                });
            })
            .catch(function (error) {
              const alert = {
                type: ALERT_TYPES.ERROR,
                message: 'Oops. We are unable to save the list of tasks'
              };
              dispatch({
                  type: types.ALERT,
                  payload: alert
              });
            });

    };
}

export function deleteTask(idx) {
    return (dispatch) => {
        dispatch({
            type: types.DELETE_TASK,
            payload: idx
        });
        const alert = {
          type: ALERT_TYPES.SUCCESS,
          message: 'Tasks deleted successfully.'
        };
        dispatch({
            type: types.ALERT,
            payload: alert
        });

    }
}

export function dismissAlert() {
    return (dispatch) => {
        dispatch({
            type: types.ALERT_DISMISS,
        });
    }
}

export function addTask(task) {
    return (dispatch) => {
      dispatch({
            type: types.ADD_TASK,
            payload: task
        });
        const alert = {
          type: ALERT_TYPES.SUCCESS,
          message: 'Tasks added successfully.'
        };
        dispatch({
            type: types.ALERT,
            payload: alert
        });
    };
}
