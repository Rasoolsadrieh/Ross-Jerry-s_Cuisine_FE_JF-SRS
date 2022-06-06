import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerDashboard() {
    const [user, setUser] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to your dashboard!!!!!</h1>
            <Link to="/menu">
                <button>View Menu Here</button>
            </Link>
            <button onClick={() => navigate("/update")}>Update Account</button>
            <button onClick={() => navigate("/delete")}>Delete Account</button>
            <button onClick={() => navigate("/ccadd")}>Add Credit Card Info</button>
            <button onClick={() => navigate("/ccupd")}>Update Credit Card</button>
            <button onClick={() => navigate("/ccdel")}>Delete Credit Card</button>
            <button onClick={() => navigate("/order")}>Place Order</button>
            <button onClick={() => navigate("/uorder")}>Change Order</button>
            
            
        </>
    );
}
