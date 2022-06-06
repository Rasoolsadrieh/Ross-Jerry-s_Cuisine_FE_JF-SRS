import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import MenuWelcome from "./components/menu/menu-welcome";
import CustomerDashboard from "./components/customer/customer-dashboard";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerUpdate from "./components/customer/customer-update";
import CustomerWelcome from "./components/customer/customer-welcome";
import MenuFindAll from "./components/menu/menu-findall";
import MenuCreate from "./components/menu/menu-create";
import CustomerDelete from "./components/customer/customer-delete";
import AdminDashboard from "./components/admin/admin-dashboard";
import MenuUpdate from "./components/menu/menu-update";
import MenuDelete from "./components/menu/menu-delete";
import CreditCardAdd from "./components/creditcard/creditcard-add";
import CreditCardUpdate from "./components/creditcard/creditcard-update";
import CreditCardDelete from "./components/creditcard/creditcard-delete";
import OrderAdd from "./components/order/order-add";
import OrderUpdate from "./components/order/order-update";
import MenuFindAllAdmin from "./components/menu/menu-admin-findall";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ username: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                        <Route path="login" element={<CustomerLogin />} />
                        <Route path="register" element={<CustomerRegister />} />
                        <Route exact path="" element={<CustomerWelcome />} />
                        <Route path="menu" element={<MenuFindAll />} />
                        <Route path="amenu" element={<MenuFindAllAdmin />} />
                        <Route path ="cmenu" element={<MenuCreate></MenuCreate>} />
                        <Route path ="umenu" element={<MenuUpdate></MenuUpdate>} />
                        <Route path ="dmenu" element={<MenuDelete></MenuDelete>} />
                        <Route path ="wmenu" element={<MenuWelcome></MenuWelcome>} />
                        <Route path="dashboard" element={<CustomerDashboard></CustomerDashboard>} />
                        <Route path="update" element={<CustomerUpdate></CustomerUpdate>} />
                        <Route path="delete" element={<CustomerDelete></CustomerDelete>} />
                        <Route path="adashboard" element={<AdminDashboard></AdminDashboard>} />
                        <Route path="ccadd" element={<CreditCardAdd></CreditCardAdd>} />
                        <Route path="ccupd" element={<CreditCardUpdate></CreditCardUpdate>} />
                        <Route path="ccdel" element={<CreditCardDelete></CreditCardDelete>} />
                        <Route path="order" element={<OrderAdd></OrderAdd>} />
                        <Route path="uorder" element={<OrderUpdate></OrderUpdate>} />
                        
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
