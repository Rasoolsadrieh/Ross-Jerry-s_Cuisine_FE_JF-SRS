import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuUpdate() {
    
    const navigate = useNavigate();
<<<<<<< HEAD
    const url = "https://rossrestaurant.azurewebsites.net";
=======
    const url = "https://rossandjerry.azurewebsites.net";
>>>>>>> main
    

    const itemNameInput = useRef();
    const itemCostInput = useRef();
    const itemProteinInput = useRef();
    const isSubstitutableInput = useRef();    
    
        // async-await
        async function updateFood() {
 
            const user = {
                itemName: itemNameInput.current.value,
                itemCost: itemCostInput.current.value,
                itemProtein: itemProteinInput.current.value,
                itemIs_substitutable: isSubstitutableInput.current.value
                
            };
            try {
                const response = await axios.put(`${url}/menus`, user);
                console.log(response.data);
                navigate("/adashboard");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }

        async function dashboardReturn(){
            navigate("/adashboard");
        }
    
    
    
    
    
    return (
        <>
            <h4>Enter menu information below</h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <input placeholder="Enter menu item" ref={itemNameInput}></input>
            <input placeholder="Enter menu cost" ref={itemCostInput}></input>
            <input placeholder="Enter menu protein" ref={itemProteinInput}></input>
            <input placeholder="Enter if the item is substituble" ref={isSubstitutableInput}></input>

            <button onClick={updateFood}>Update food</button>
        </>
    );
}