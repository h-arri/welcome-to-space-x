import { GET_LAUNCHES, GET_LAUNCHES_SUCCESS, GET_LAUNCHES_FAILURE } from "../types";
import { API_BASE_URL } from "../../constants";
import axios from "axios";

const getLaunches = () => ({
    type: GET_LAUNCHES
});

const getLaunchesSuccess = launches => ({
    type: GET_LAUNCHES_SUCCESS,
    launches
});

const getLaunchesFailure = error => ({
    type: GET_LAUNCHES_FAILURE,
    error
});

const getLaunchesApi = () => {
    return dispatch => {
        dispatch(getLaunches());
        return axios.get(`${API_BASE_URL}/launches`)
            .then(({data}) => {
                dispatch(getLaunchesSuccess(data));
            })
            .catch(({error}) => {
                dispatch(getLaunchesFailure(error));
            });
    };
};

export { getLaunches, getLaunchesSuccess, getLaunchesFailure, getLaunchesApi };
