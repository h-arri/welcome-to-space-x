import { GET_HISTORY, GET_HISTORY_FAILURE, GET_HISTORY_SUCCESS } from "../types";

const initialState = {
    history: [],
    loading: false,
    error: null
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                history: action.history
            };
        case GET_HISTORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                reminders: []
            };
        default:
            return state;
    }
};

export default historyReducer;
