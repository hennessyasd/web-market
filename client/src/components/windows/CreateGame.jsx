import { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import "../../stylesForComponents/stylesForWindows/modal.css"
import { observer } from "mobx-react-lite";
import { createGame, fetchTypes, fetchGenres } from "../../http/gameAPI";

const CreateGame = observer((props) => {
    const { show, onHide } = props;
    const { game } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => game.setTypes(data));
        fetchGenres().then(data => game.setGenres(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    };

    const addGame = () => {
        if (!name || !price || !file || !game.selectedGenre.id || !game.selectedType.id) {
            alert("Все поля должны быть заполнены");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('genreId', game.selectedGenre.id);
        formData.append('typeId', game.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createGame(formData).then(() => onHide());
        onHide()
    };

    return (
        <div className="modal-overlay" show={show} onHide={onHide}>
            <div className="modal">
                <div className="modal-header">
                    <h5 className="modal-title">Добавление игры</h5>
                    <button type="button" className="close-button" onClick={onHide}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <div className="dropdown-container">
                        <select className="dropdown-select" onChange={(e) => game.setSelectedType(game.types.find(type => type.id == e.target.value))}>
                            <option value="" disabled selected>{game.selectedType.name || "Выберите тип"}</option>
                            {game.types.map(type => (
                                <option value={type.id} key={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown-container">
                        <select className="dropdown-select" onChange={(e) => game.setSelectedGenre(game.genres.find(genre => genre.id == e.target.value))}>
                            <option value="" disabled selected>{game.selectedGenre.name || "Выберите жанр"}</option>
                            {game.genres.map(genre => (
                                <option value={genre.id} key={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form" style={{margin: '1vw'}}>
                        <input className="input" placeholder="Введите название" required type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <span className="input-border"></span>
                    </div>
                    <div className="form" style={{margin: '1vw'}}>
                        <input className="input" placeholder="Введите стоимость" required type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                        <span className="input-border"></span>
                    </div>
                    <div className="form" style={{margin: '1vw'}}>
                        <input className="input" required type="file" onChange={selectFile} />
                        <span className="input-border"></span>
                    </div>
                    <hr />
                    <button className="btn" onClick={addInfo}>Добавить свойство</button>
                    {info.map(i =>
                        <div key={i.number}>
                            <div className="form">
                                <input className="input" placeholder="Введите название свойства" required type="text" value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} />
                                <span className="input-border"></span>
                            </div>
                            <div className="form">
                                <input className="input" placeholder="Введите описание свойства" required type="text" value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} />
                                <span className="input-border"></span>
                            </div>
                            <button className="btn" onClick={() => removeInfo(i.number)}>Удалить</button>
                        </div>
                    )}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn" onClick={onHide}>Закрыть</button>
                    <button type="button" className="btn" onClick={addGame}>Добавить</button>
                </div>
            </div>
        </div>
    );
});

export default CreateGame;
