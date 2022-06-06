import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderUpdate(){

    const navigate = useNavigate();
    const url = "https://rossandjerry.azurewebsites.net";

    const menuItemInput = useRef();
    const orderDateInput = useRef();
    const commentInput = useRef();
    const favoriteInput = useRef();
    const customerUsernameInput = useRef();

    async function orderupd(){

        const user = {
            menuItem: menuItemInput.current.value,
            orderDate: orderDateInput.current.value,
            comment: commentInput.current.value,
            favorite: favoriteInput.current.value,
            customerUsername: customerUsernameInput.current.value,
        };
        try {
            const response = await axios.put(`${url}/orders`, user);
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
            <h4>Place an order Below.</h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <input placeholder="Enter new Menu Item" ref={menuItemInput}></input>
            <input placeholder="Enter Order date" ref={orderDateInput}></input>
            <input placeholder="Enter comment for change " ref={orderDateInput}></input>
            <input placeholder="Enter True to favorite item" ref={favoriteInput}></input>
            <input placeholder="Enter Username" ref={customerUsernameInput}></input>
            <br></br>
            <button onClick={orderupd}>Place Order</button>
        </>
    )

}