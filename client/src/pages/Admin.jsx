import React, { useState } from "react";
import "../stylesForPages/Admin.css";
import CreateType from "../components/windows/CreateType"; 
import CreateGenre from "../components/windows/CreateGenre";
import CreateGame from "../components/windows/CreateGame";

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [gameVisible, setGameVisible] = useState(false);

    return (
        <div className="admin-page-container">
            <div className="admin-buttons">
                <button className="b-a btn" onClick={() => setTypeVisible(true)}>
                    Добавить тип игры
                </button>
                <button className="b-a btn" onClick={() => setGenreVisible(true)}>
                    Добавить жанр игры
                </button>
                <button className="b-a btn" onClick={() => setGameVisible(true)}>
                    Добавить игру
                </button>
            </div>
            {typeVisible && <CreateType onHide={() => setTypeVisible(false)} />}
            {genreVisible && <CreateGenre onHide={() => setGenreVisible(false)} />}
            {gameVisible && <CreateGame onHide={() => setGameVisible(false)} />}
        </div>
    );
};

export default Admin