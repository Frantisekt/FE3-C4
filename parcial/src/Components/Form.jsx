import React, { useState } from "react";


const Form = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const [errorMessages, setErrorMessages] = useState({
        nombre: '',
        telefono: ''
    });

    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasErrors = false;
        const newErrorMessages = {
            nombre: '',
            telefono: ''
        };

        if (formData.nombre === '' || formData.telefono === '' || formData.email === '') {
            setError(true);
            return;
        }

        if (formData.nombre.length < 3) {
            newErrorMessages.nombre = 'El nombre debe tener al menos 3 caracteres';
            hasErrors = true;
        }

        if (formData.telefono.length < 6) {
            newErrorMessages.telefono = 'El teléfono debe tener al menos 6 números';
            hasErrors = true;
        }

        setErrorMessages(newErrorMessages);

        if (hasErrors) {
            setError(true);
            return;
        }

        setError(false);
        setShow(true);
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Ocultar Formulario" : "Mostrar Formulario"}
            </button>

            {show && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        />
                        {errorMessages.nombre && <p style={{color: 'red'}}>{errorMessages.nombre}</p>}
                    </div>
                    <div>
                        <input 
                            type="tel"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        />
                        {errorMessages.telefono && <p style={{color: 'red'}}>{errorMessages.telefono}</p>}
                    </div>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
            
            {error && !errorMessages.nombre && !errorMessages.telefono && 
                <p>Todos los campos son obligatorios</p>
            }
        </div>
    );
}

export default Form;