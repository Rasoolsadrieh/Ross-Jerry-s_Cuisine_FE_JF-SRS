import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerDelete() {

    const navigate = useNavigate();
<<<<<<< HEAD
    const url = "https://rossrestaurant.azurewebsites.net";
=======
    const url = "https://rossandjerry.azurewebsites.net";
>>>>>>> main

 
    const usernameInput = useRef();
 
    
    async function deletec() {

        const user = {

            username: usernameInput.current.value,
 
            
        };
        try {
            const response = await axios.delete(`${url}/customers?username=${usernameInput.current.value}`, user);
            console.log(response.data);
            navigate("/");
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
            <h4>Hello,  please enter your information below.</h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button> 
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter Your Username" ref={usernameInput}></input>
            <br></br>
            <button onClick={deletec}>Delete Customer Account</button>
        </>
    );

}