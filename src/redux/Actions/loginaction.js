import firebase from "../../Fire";
import {authtype} from '../actiontype/Authtype'

export const loginAction = ({email, password}) => async dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log("user", user)
      dispatch({ type:authtype.LOGIN_SUCCESS , payload: "true" });
      dispatch({type:"USERUID", payload:user.user.uid})
      dispatch({type:"GOTO_LOGIN", payload:false})
    })
    .catch(function(error) {
      alert(error);
    });
};

