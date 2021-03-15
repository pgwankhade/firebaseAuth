import { authtype } from '../actiontype/Authtype'
import { auth } from '../../Fire'
import firebase from "../../Fire";
const database = firebase.firestore()
const databaseRef = firebase.database().ref();
const userDetailsRef = databaseRef.child("user-details");
const storage = firebase.storage()

export const registeruser = ({ firstname, lastname, age, mobile, email, password, image , address }) => async dispatch => {

  console.log(image)
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      // database.collection("user").doc().set({ userId: user.user.uid, firstname: firstname, lastname:lastname, age:age, address: address, mobile:mobile})
      const uploadTask = storage.ref(`/images/${image.name}`).put(image);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("url",url)
            database.collection("user").doc().set({ userId: user.user.uid, firstname: firstname, lastname:lastname, age:age, address: address, mobile:mobile, image:url})
          });
      });
      // userDetailsRef.push().set({ userId: user.user.uid, firstname: firstname, lastname:lastname, age:age, address: address });
      dispatch({type:"GOTO_LOGIN", payload:true})
    })
    .catch(function (error) {
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



