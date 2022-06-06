
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuCreate() {
    
    const navigate = useNavigate();
    const url = "https://rossandjerry.azurewebsites.net";
    

    const itemNameInput = useRef();
    const itemCostInput = useRef();
    const itemProteinInput = useRef();
    const isSubstitutableInput = useRef();    
    
        // async-await
        async function registerFood() {
            // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
            // error due to the refInput.current = undefined, meaning there is no .value available
            const user = {
                itemName: itemNameInput.current.value,
                itemCost: itemCostInput.current.value,
                itemProtein: itemProteinInput.current.value,
                itemIs_substitutable: isSubstitutableInput.current.value
                
            };
            try {
                const response = await axios.post(`${url}/menus`, user);
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

            <button onClick={registerFood}>Register food</button>
        </>
    );
}
