import * as types from '../actions/types';

const initialState = {
  city: 'Bogotá'
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.UPDATE_INFO:
      return( {
        city: actions.city
      });

    default: return state;
  }
};