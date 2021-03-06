import { authtype } from '../actiontype/Authtype'
import { auth } from '../../Fire'
import firebase from "../../Fire";
const database = firebase.firestore()
const databaseRef = firebase.database().ref();
const userDetailsRef = databaseRef.child("user-details");
const storage = firebase.storage()

export const registeruser = ({ firstname, lastname, age, mobile, email, password, image , address }) => async dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      const uploadTask = storage.ref(`/images/${image.name}`).put(image);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            database.collection("user").doc().set({ userId: user.user.uid, firstname: firstname, lastname:lastname, age:age, address: address, mobile:mobile, image:url})
          });
      });
      dispatch({type:"GOTO_LOGIN", payload:true})
    })
    .catch(function (error) {
      alert(error);
    });
};

