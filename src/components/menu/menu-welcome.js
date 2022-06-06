import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import MenuCreate from "./menu-create";

export default function MenuWelcome() {
    const [menuBody, setMenuBody] = useState([]);
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);
    const url = "https://rossandjerry.azurewebsites.net";

    useEffect(() => {
        findAll();
    }, [menu]);

    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            const response = await fetch(`${url}/menu`);
            const menus = await response.json();
            const menuTableRows = menus.map((e) => {
                return (
                    <tr>
                        <td>{e.itemName}</td>
                        <td>{e.hp}</td>
                    </tr>
                );
            });

            setMenuBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }

    // const menuHard = {
    //     itemName: "teryaki",
    //     cost: 10,
    //     protein: 20,
      
        
    // };

    async function createMenu() {
        try {
            await axios.post(`${url}/menus`);
            if (menu === true) {
                setMenu(false);
            } else {
                setMenu(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {user.password === "rcuisinej" ? <button onClick={() => navigate("/login")}>Login to Create Menu</button> : <MenuCreate />}
            {user.password === "rcuisinej" || <button onClick={createMenu}>Create Menu</button>}
            <table>
                <thead>
                    <tr>
                        <th>Menu Name</th>
                        <th>Cost</th>
                        <th>protein</th>
                        <th>isSubstitutable</th>
                        
                    </tr>
                </thead>
                <tbody>{menuBody}</tbody>
            </table>
        </>
    );
}
