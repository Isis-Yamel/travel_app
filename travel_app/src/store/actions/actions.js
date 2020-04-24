import * as actionTypes from './types';

export function fetchCities() {
  return dispatch => {
      fetch(`https://raw.githubusercontent.com/Isis-Yamel/mockData/master/citiesOptions.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getCity(data));
      });
    };
};

export function getCity(data) {
    return async dispatch => {
      dispatch({
        type: actionTypes.GET_CITIES,
        city: data
        });
    };
};

export function fetchCitiesInfo(cityName) {
  return dispatch => {
      fetch(`https://raw.githubusercontent.com/Isis-Yamel/mockData/master/citiesInformation.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(citiesInfo(data.data.filter(city => city.cityName === cityName)));
      });
    };
};

export function citiesInfo(data) {

    return async dispatch => {
      dispatch({
        type: actionTypes.CHOOSE_CITY,
        selectedCity: data[0]
        });
    };
};
