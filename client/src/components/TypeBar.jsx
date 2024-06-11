import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import "../stylesForComponents/typebarStyles.css"

const TypeBar = observer(() => {
    const { game } = useContext(Context);

    return (
        <div>
            <h1>Types:</h1>
            <ul className="list">
            {game.types.map(type => (
                <li className="btn"
                    onClick={() => game.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </li>
            ))}
            </ul>
        </div>
    );
});

export default TypeBar;
