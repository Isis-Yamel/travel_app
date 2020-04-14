import * as types from '../actions/types';

const initialState = {
  city: []
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.CHOOSE_CITY:
      return( {
        ...state.city,
        city: actions.city
      });

    default: return state;
  }
};