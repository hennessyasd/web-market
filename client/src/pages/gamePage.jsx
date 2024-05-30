import React, { useState, useEffect } from "react";
import user from "../assets/user.png";
import "../stylesForPages/GamePage.css";
import { useParams } from "react-router-dom";
import { fetchOneGame } from "../http/gameAPI";

const GamePage = () => {
    const [ game, setGame ] = useState( { info: [] } )
    const { id } = useParams()

    useEffect(() => {
        fetchOneGame(id).then(data => setGame(data))
    }, [])

    return (
        <div className="game-page-container">
            <div class="upper-container">
                <div className="img-container">
                <img className="img" src={`${import.meta.env.VITE_API_URL}${game.img}`} alt={game.name} />
                </div>
                <div>
                    <h2>{game.name}</h2>
                    <div style={{ backgroundImage: `url(${user})`, backgroundRepeat: 'no-repeat' }}>
                        {game.rating}
                    </div>
                </div>
                <div>   
                    <h3>От: {game.price} руб.</h3>
                    <button>Добавить в корзину</button>
                </div>
            </div>
            <div class="footer-container">
                <h1>Описание:</h1>
                <ul class="description">
                    {game.info.map((info, index) => 
                        <li 
                        key={info.id}
                        style={{color: index % 2 === 0 ? 'black': 'white', background: index % 2 === 0 ? 'lightgray' : 'transparent', listStyleType: 'none'}}
                        >{`${info.title}:\n ${info.description}`}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default GamePage;
