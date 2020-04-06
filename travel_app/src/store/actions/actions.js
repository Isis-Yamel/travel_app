import * as actionTypes from './types';

export function updateInfo(city) {
    return async dispatch => {
      dispatch({
        type: actionTypes.UPDATE_INFO,
        city
        });
    };
};