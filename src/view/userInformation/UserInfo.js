import React,{useState,useEffect} from 'react'
import registerModel from "../../model/RegisterModel"
import NavBar from "../../components/Navbar";


function UserInfo() {
     const [dataArray, setDataArray] = useState([]);

      useEffect(() => {
            registerModel.getRegisterData();
      }, []);
    return (
      <div>
        <NavBar />
        <h2>hello UserInfo</h2>

      </div>
    );
}

export default UserInfo
