import * as types from '../actions/types';

const initialState = {
  city: [],
  chooseCity: {}
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case types.GET_CITIES:
      return( {
        ...state,
        city: actions.city
      });

    case types.CHOOSE_CITY:
      return({
        ...state,
        chooseCity: actions.selectedCity
      })

    default: return state;
  }
};
