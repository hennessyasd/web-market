import { useState } from "react";
import "../../stylesForComponents/stylesForWindows/modal.css"
import { createType } from "../../http/gameAPI";

const CreateType = (props) => {
    const { show, onHide } = props
    const [ value, setValue ] = useState('')

    const addType = () => {
        createType({name: value}).then(data => setValue(''))
        onHide()
    }

    return(
        <div className="modal-overlay"
        show={show}
        onHide={onHide}
        >
            <div className="modal">
                <div className="modal-header">
                    <h5 className="modal-title">Добавление типа</h5>
                    <button type="button" className="close-button" onClick={onHide}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form">
                        <input className="input" placeholder="Введите тип" required="" type="text" value={value} onChange={e => setValue(e.target.value)}/>
                        <span className="input-border"></span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn" onClick={onHide}>
                        Закрыть
                    </button>
                    <button type="button" className="btn" onClick={addType}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateType;
