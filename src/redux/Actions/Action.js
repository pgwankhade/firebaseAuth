import {authtype} from '../actiontype/Authtype'
import {auth} from '../../Fire'
import firebase from "../../Fire";

const database = firebase.firestore()
const databaseRef = firebase.database().ref();
const userDetailsRef = databaseRef.child("user-details");
const storage = firebase.storage()

export const registeruser = ({firstname,lastname,age,mobile,email,password,image}) => async dispatch => {

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      //  database.collection("user").doc().set({ userId: user.user.uid, firstname:"priyanka"})
      userDetailsRef.push().set({ userId: user.user.uid, name:"priyanka" });
      dispatch({ type: authtype.REGISTER_SUCCESS, payload: true});
      dispatch({type:"USERUID", payload:user.user.uid})
    })
    .catch(function(error) {
      alert(error);
    });
};




// export const registeruser =({firstname,lastname,age,mobile,email,password,image})=>{
//     console.log("object",{firstname,lastname,age,mobile,email,password,image})
//     const user = localStorage.setItem("user", JSON.stringify([{firstname,lastname,age,mobile,email,password,image}]))
//     return {
        // type:authtype.REGISTER_SUCCESS,
        // payload:{firstname,lastname,age,mobile,email,password,image}
//     }
// }



