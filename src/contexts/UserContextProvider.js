import { useState } from "react";
import { userLoginContext } from "./userLoginContext";
import axios from "axios";
import {compareSync} from 'bcryptjs'


function UserContextProvider({children}) {
  let [currentUser, setCurrentUser] = useState({});
  let [userLoginStatus, setUserLoginStatus] = useState(false);
  let [error,setError]=useState('')


  async function onUserLogin(userCredObj) {
    console.log(userCredObj)
    //make api call to verify credentials
    let res = await axios.get(
      `http://localhost:4000/users?username=${userCredObj.username}`
    );
    let usersList = res.data;
console.log(usersList)
    //if user not existed
    if (usersList.length === 0) {
      setError("Invalid Username");
    }
    //if username is matched, then compare passwords
    else {
      let result = compareSync(userCredObj.password, usersList[0].password);
      //if passwords are not matcted
      if (result === false) {
        setError("Invalid password");
      }
      //if passwords are matched, navigate to user profile
      else {
        setCurrentUser(usersList[0]);
        setUserLoginStatus(true);
     //  navigate("/user-profile");
      }
    }
  }

 // console.log(currentUser)
  return (
    <userLoginContext.Provider
      value={[currentUser, setCurrentUser, userLoginStatus, setUserLoginStatus,onUserLogin]}
    >
        {children}
    </userLoginContext.Provider>
  );
}

export default UserContextProvider;