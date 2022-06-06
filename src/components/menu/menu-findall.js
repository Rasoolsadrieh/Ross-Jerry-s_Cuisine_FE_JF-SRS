import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuFindAll() {

    const navigate = useNavigate();
    const [menuBody, setMenuBody] = useState([]);
    const url = "https://rossrestaurant.azurewebsites.net";

    // async function findAllFood() {
    //     try{
    //         await axios.get(`${url}/menus`);
    //     }catch (error){
    //         console.error(error);
    //     }
    // }
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
        <button onClick={findAll}>Find Menu Items</button>
        <button onClick={dashboardReturn}>Return to Dashboard</button>
        <table>
                <thead>
                    <tr>
                        <th>itemName </th>
                        <th>itemCost </th>
                        <th>itemProtein </th>
                        <th>itemIs_substitutable </th>
                        
                    </tr>
                </thead>
                <tbody>{menuBody}</tbody>
            </table>
        {/* <h1>Menu for Ross and Jerry's Cuisine</h1>
        <button onClick={findAll}>View Menu</button> */}
        </>
    )
}