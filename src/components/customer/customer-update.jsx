import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerUpdate() {

    const navigate = useNavigate();
    const url = "https://rossrestaurant.azurewebsites.net";

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    const balanceInput = useRef();
    const isAdminInput = useRef();
    
    async function updatec() {

        const user = {
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            balance: balanceInput.current.value,
            isAdmin: isAdminInput.current.value,
            
        };
        try {
            const response = await axios.put(`${url}/customers`, user);
            console.log(response.data);
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }
    async function dashboardReturn(){
        navigate("/dashboard");
    }
    return (
        <>
            <h4>Hello,  please update your information below.</h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <input placeholder="Enter First Name" ref={fnameInput}></input>
            <input placeholder="Enter Last Name" ref={lnameInput}></input>
            <input placeholder="Enter balance" ref={balanceInput}></input>
            <input placeholder="Enter if admin" ref={isAdminInput}></input>
            
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
            <br></br>
            <button onClick={updatec}>Update Information</button>
        </>
    );
}
