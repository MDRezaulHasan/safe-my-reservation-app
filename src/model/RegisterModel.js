
import * as firebase from "firebase";
import Fire from "../config/Firebase";

class RegisterModel {
  constructor(props) {
    this.signIn = this.signIn.bind(this);
    this.setBookingData = this.signIn.bind(this);
  }

  setRegisterData(props) {
    console.log("M: " + props.data.userName + "\n");
    const db = firebase.firestore();
   
   db.collection("dataForRegister").add({
      userName: props.data.userName,
      email: props.data.email,
      password: props.data.password,
      confirmPassword: props.data.confirmPassword,
      phoneNumber: props.data.phoneNumber,
    });
  }

  signUp(props) {
    console.log("M: " + props.data.email + "\n");
    console.log("MPaa " + props.data.password + "\n");
    const email = props.data.email;
    const password = props.data.password;
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Successfully Singed up");
      })
      .catch((err) => {
        //window.alert("Please enter 6 degit password!");
        window.alert("Error: " + err.toString());
      });
  }

  signIn(props) {
    const email = props.data.email;
    const password = props.data.password;
    console.log("M: " + email + "\n");
    console.log("M: " + password + "\n");
    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert("Successfully Logged in");
      })
      .catch((err) => {
        alert("Error : " + err.toString());
      });
  }

  getRegisterData() {
    const db = firebase.firestore();
    db.collection("dataForRegister")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`ModelReg: ${doc.id} => ${doc.data()}`);
        });
      });
  }
}
const registerModel = new RegisterModel();
export default registerModel;
