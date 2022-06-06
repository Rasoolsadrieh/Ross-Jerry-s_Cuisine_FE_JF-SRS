import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderAdd(){

    const [menuBody, setMenuBody] = useState([]);
    const navigate = useNavigate();
<<<<<<< HEAD
    const url = "https://rossrestaurant.azurewebsites.net";
=======
    const url = "https://rossandjerry.azurewebsites.net";
>>>>>>> main

    const menuItemInput = useRef();
    const orderDateInput = useRef();
    const favoriteInput = useRef();
    const customerUsernameInput1 = useRef();

    const ccNumberInput = useRef();
    const ccNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customerUsernameInput = useRef();

    const costInput = useRef();

    async function orders(){

        const user = {
            menuItem: menuItemInput.current.value,
            orderDate: orderDateInput.current.value,
         //   comment: commentInput.current.value,
            favorite: favoriteInput.current.value,
            customerUsername: customerUsernameInput1.current.value,
        };
        try {
            const response = await axios.post(`${url}/orders`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }
    async function entercc() {
        const user1 = {
            ccNumber: ccNumberInput.current.value,
            ccName: ccNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            zip: zipInput.current.value,
            limit: limitInput.current.value - costInput.current.value,
            customerUsername: customerUsernameInput.current.value,
        };
        try {
            const response = await axios.put(`${url}/creditcards`, user1);
            console.log(response.data);
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }
    // function payBalance(){
    //     if(limit ===0 || parseInt(limitInput.current.value)){
    //         setShowMessage(!showMessage)
    //     }else{
    //         setlimitInput(limit - parseInt(limitInput.current.value));
    //     }
    //     }
    
    async function findAll() {
        try {
            const response = await fetch(`${url}/menus`);
            const menus = await response.json();
            const menuTableRows = menus.map((e) => {
                return (
                    <tr>
                        <td>{e.itemName}</td>
                        <td>{e.itemCost}</td>
                        <td>{e.itemProtein}</td>
                        <td>{e.itemIs_substitutable}</td>
                       
                    </tr>
                );
            });

            setMenuBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }
    async function dashboardReturn(){
        navigate("/dashboard");
    }

    return (
        <>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <button onClick={findAll}>Find Menu Items</button>
            <table>
                <thead>
                    <tr>
                        <th>itemName</th>
                        <th>itemCost</th>
                        <th>itemProtein</th>
                        <th>itemIs_substitutable</th>
                        
                    </tr>
                </thead>
                <tbody>{menuBody}</tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <h4>Place an order Below.</h4>
            <input placeholder="Enter Menu Item" ref={menuItemInput}></input>
            <input placeholder="Enter Order date" ref={orderDateInput}></input>
            <input placeholder="Enter True to favorite item" ref={favoriteInput}></input>
            <br></br>
            <input placeholder="Enter Username" ref={customerUsernameInput1}></input>
            <input placeholder="Enter the cost of the item" ref={costInput}></input>
            <br></br>
            <br></br>
            <button onClick={orders}>Place Order</button>
            <br></br>
            <br></br>
            <br></br>
            <h4>Pay with your credit card.</h4>
            <input placeholder="Enter Credit Card Number" ref={ccNumberInput}></input>
            <input placeholder="Enter Credit Card Name" ref={ccNameInput}></input>
            <input placeholder="Enter Credit Card cvv" ref={cvvInput}></input>
            <input placeholder="Enter Credit Card expiration date" ref={expDateInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter zip code" ref={zipInput}></input>
            <input placeholder="Enter Credit Card limit" ref={limitInput}></input>
            <input placeholder="Enter Your Username" ref={customerUsernameInput}></input>
            <input placeholder="Enter the cost of the item" ref={costInput}></input>
            <br></br>
            <button onClick={entercc}>Pay Order</button>
        </>
    )

}