import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import GameItem from "./GameItem";
import "../stylesForComponents/gamelistStyles.css"

const GameList = observer(() => {
    const { game } = useContext(Context)

    return(
        <div>
            <ul class="list-of-games">
                {game.games.map(game => (
                    <GameItem key={game.id} game={game}/>
                ))}
            </ul>
        </div>
    )
})

export default GameList