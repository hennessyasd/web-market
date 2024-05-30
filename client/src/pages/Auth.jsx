import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../stylesForPages/Auth.css";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../consts/const";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Auth = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useContext(Context)

    const click = async (event) => {
        try{
            event.preventDefault(); 
            let data;
            try {
                if (isLogin) {
                    data = await login(email, password);
                } else {
                    data = await registration(email, password);
                }
                user.setUser(user)
                user.setIsAuth(true)
                navigate(SHOP_ROUTE)
            } catch (error) {
                console.error("Ошибка при выполнении запроса:", error);
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <form className="form unique">
                <p className="form-title">{isLogin ? 'Log in to your account' : 'Sign in to your account'}</p>
                <div className="input-container">
                    <input 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    <input 
                        type="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {isLogin ? 
                    <button className="submit" onClick={click}>Log in</button>
                    :
                    <button className="submit" onClick={click}>Registration</button>
                }
                {isLogin ?
                    <p className="signup-link">No account?<Link to={REGISTRATION_ROUTE}>Sign up</Link></p>
                    :
                    <p className="signup-link">Have an account?<Link to={LOGIN_ROUTE}>Log in</Link></p>
                }
            </form>
        </div>
    );
})

export default Auth;
