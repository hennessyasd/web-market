import React from "react";
import user from "../assets/user.png";
import "../stylesForComponents/gameitemStyles.css";
import { useNavigate } from "react-router-dom";
import { GAME_ROUTE } from "../consts/const";

const GameItem = (props) => {
    const { game } = props;
    const navigate = useNavigate();

    return (
        <div className="container" onClick={() => navigate(GAME_ROUTE + '/' + game.id)}>
            <div className="card">
                <img src={import.meta.env.VITE_API_URL + game.img} alt={game.name} />
                
                <div className="info">
                    <div>{game.rating}</div>
                    <img className="svg" src={user} alt="user" />
                </div>
                <div>{game.name}</div>
            </div>
        </div>
    );
}

export default GameItem;
