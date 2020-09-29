import { GET_LAUNCHES, GET_LAUNCHES_FAILURE, GET_LAUNCHES_SUCCESS } from "../types";

const initialState = {
    launches: [],
    loading: false,
    error: null
};

const launchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAUNCHES:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.launches
            };
        case GET_LAUNCHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                launches: []
            };
        default:
            return state;
    }
};

export default launchesReducer;
