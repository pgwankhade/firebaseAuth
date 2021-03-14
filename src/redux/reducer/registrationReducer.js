import { authtype } from '../actiontype/Authtype'

export const registration = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case authtype.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: payload
      }
    case authtype.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: payload
      }
    case "USERUID":
      return {
        ...state,
        useruid: payload
      }

    default:
      return state;
  }
};
