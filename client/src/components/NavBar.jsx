import React, { useContext } from "react";
import { Context } from "../main";
import '../stylesForComponents/navbarStyles.css';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../consts/const";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div class="navbar-Block">
            {user.isAuth ? 
            <ul className="navbar-loged">
                <div class="logo">
                    <h1
                    className="logo"
                    onClick={()=> navigate(SHOP_ROUTE)}
                    >KROLIK SHOP</h1>
                </div>
                <li><button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button></li>
                <li><button onClick={() => logOut()}>Выйти</button></li>
            </ul>
            :
            <ul className="navbar-unloged">
                <div class="logo">
                    <h1
                    onClick={()=> navigate(SHOP_ROUTE)}
                    >KROLIK SHOP</h1>
                </div>
                <button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>
            </ul>
            }
        </div>
    );
});

export default NavBar;
