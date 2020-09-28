import { GET_HISTORY, GET_HISTORY_FAILURE, GET_HISTORY_SUCCESS } from "../types";
import { API_BASE_URL } from "../../constants";
import axios from "axios";

const getHistory = () => ({
    type: GET_HISTORY
});

const getHistorySuccess = history => ({
    type: GET_HISTORY_SUCCESS,
    history
});

const getHistoryFailure = error => ({
    type: GET_HISTORY_FAILURE,
    error
});

const getHistoryApi = () => {
    return dispatch => {
        dispatch(getHistory());
        return axios.get(`${API_BASE_URL}/history`)
            .then(({data}) => {
                dispatch(getHistorySuccess(data));
            })
            .catch(({error}) => {
                dispatch(getHistoryFailure(error));
            });
    };
};

export { getHistory, getHistorySuccess, getHistoryFailure, getHistoryApi };
