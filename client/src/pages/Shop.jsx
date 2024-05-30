import React, { useContext, useEffect } from "react";
import TypeBar from "../components/TypeBar";
import GenreBar from "../components/GenreBar";
import Pages from "../components/Pages";
import "../stylesForPages/Shop.css";
import GameList from "../components/GameList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchGenres, fetchTypes, fetchGames } from "../http/gameAPI";

const Shop = observer(() => {
    const { game } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => game.setTypes(data));
        fetchGenres().then(data => game.setGenres(data));
        fetchGames(null, null, 1, game.limit).then(data => {
            game.setGames(data.rows);
            game.setTotalCount(data.count);
        });
    }, []);

    useEffect(() => {
        fetchGames(game.selectedType?.id, game.selectedGenre?.id, game.page, game.limit).then(data => {
            game.setGames(data.rows);
            game.setTotalCount(data.count);
        });
    }, [game.page, game.selectedType, game.selectedGenre]);

    return (
        <div className="container">
            <div className="bars">
                <ul className="type-bar">
                    <TypeBar />
                </ul>
                <ul className="genre-bar">
                    <GenreBar />
                </ul>
            </div>
            <div className="list-container">
                <GameList />
                <Pages />
            </div>
        </div>
    );
});

export default Shop;
