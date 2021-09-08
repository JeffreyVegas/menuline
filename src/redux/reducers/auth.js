import { types } from '../types';

const initalState = {
  uid: null,
  name: null,
  photoUrl: null,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoUrl: action.payload.photoURL,
      };
    case types.logout:
      return initalState;
    default:
      return state;
  }
};
