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
    case "KEY_VALUE":
      return {
        ...state,
        keyvalue: payload
      }
    case "GOTO_LOGIN":
      return {
        ...state,
        gotologin: payload
      }

    default:
      return state;
  }
};
