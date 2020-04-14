import * as actionTypes from './types';

export function fetchCities(event) {
  return dispatch => {
      fetch(`https://raw.githubusercontent.com/Isis-Yamel/mockData/master/citiesOptions.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(chooseCity(data));
      });
    };
};

export function chooseCity(data) {
    return async dispatch => {
      dispatch({
        type: actionTypes.CHOOSE_CITY,
        city: data
        });
    };
};
