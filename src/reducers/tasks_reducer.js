import * as types from '~src/actions/types';

const INITIAL_STATE = { tasks: [], isSaveEnabled: false, alert: {} };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.FETCH_TASKS:
            return { ...state, tasks: action.payload };
        case types.ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                isSaveEnabled: true
            };
        case types.DELETE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, action.payload),
                    ...state.tasks.slice(action.payload + 1)
                ],
                isSaveEnabled: true
            };
        case types.SAVED:
            return {
                ...state,
                isSaveEnabled: false            };
        case types.ALERT:
              return {
                ...state,
                alert: action.payload
              };
        case types.ALERT_DISMISS:
          return {
            ...state,
            alert: {}
          };
        default:
            return state;
    }
}
