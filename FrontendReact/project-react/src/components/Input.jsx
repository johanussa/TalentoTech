import React, { useState } from "react";

function Input() {
    const [inputText, setInputText] = useState("");
    const [textUpdate, setTextUpdate] = useState("");

    return (
        <div>
            <div className="mb-3">
                <legend htmlFor="input" className="form-label">Ingrese el texto</legend>
                <input type="email" className="form-control" id="input" 
                    placeholder="Agregar texto aquí" onInput={e => setInputText(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary mb-3" onClick={() => setTextUpdate(inputText.toUpperCase())}>
                Actualizar
            </button>
            <h4>Texto input : {inputText}</h4>
            <h4>Texto actualizado: {textUpdate}</h4>
        </div>
    );
}

export default Input;
