import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from "../main"
import "../stylesForComponents/genrebarStyles.css"

const GenreBar = observer(() => {
    const { game } = useContext(Context);

    return(
        <div>
            <h1>Genres:</h1>
            <ul class="list">
            {game.genres.map(genre => (
                <li class="btn"
                    onClick={() => game.setSelectedGenre(genre)}
                    key={genre.id}
                >
                    {genre.name}
                </li>
                ))}
            </ul>
        </div>
    )
})

export default GenreBar