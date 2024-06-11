import { useState } from "react";
import "../../stylesForComponents/stylesForWindows/modal.css"
import { createGenre } from "../../http/gameAPI";

const CreateGenre = (props) => {
    const { show, onHide } = props;
    const [ value, setValue ] = useState('')
    
    const addGenre = () => {
        createGenre({name: value}).then(() => setValue(''))
        onHide()
    }

    return(
        <div className="modal-overlay"
        show={show}
        onHide={onHide}
        >
            <div className="modal">
                <div className="modal-header">
                    <h5 className="modal-title">Добавление жанра</h5>
                    <button type="button" className="close-button" onClick={onHide}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                <div className="form">
                        <input className="input" placeholder="Введите жанр" required="" type="text" value={value} onChange={e => setValue(e.target.value)}/>
                        <span className="input-border"></span>
                    </div>  
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn" onClick={onHide}>
                        Закрыть
                    </button>
                    <button type="button" className="btn" onClick={addGenre}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateGenre