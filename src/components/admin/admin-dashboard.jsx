import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function AdminDashboard() {
    const [user, setUser] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to the Admin dashboard!!!!!</h1>
            <Link to="/amenu">
                <button>View Menu Here</button>
            </Link>
            <Link to="/cmenu">
                <button>Create Menu Here</button>
            </Link>
            <Link to="/umenu">
                <button>Update Menu Here</button>
            </Link>
            <Link to="/dmenu">
                <button>Delete Menu Here</button>
            </Link>
            
            
        </>
    );
}