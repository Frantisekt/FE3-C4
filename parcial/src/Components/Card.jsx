import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import QuoteDetail from "./QuoteDetail";

const Card = ({ auto, setQuote }) => {
    const [showForm, setShowForm] = useState(false);
    const [showQuoteDetail, setShowQuoteDetail] = useState(false);
    const [currentQuote, setCurrentQuote] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        nombre: '',
        telefono: ''
    });
    const { marca, modelo, img } = auto;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasErrors = false;
        const newErrorMessages = {
            nombre: '',
            telefono: ''
        };

        if (!formData.nombre || !formData.email || !formData.telefono) {
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

        // Si no hay errores, creamos la cotización
        const newQuote = { ...auto, ...formData };
        setQuote(prev => [...prev, newQuote]);
        setCurrentQuote(newQuote);
        setShowForm(false);
        setShowQuoteDetail(true);
        setFormData({ nombre: '', email: '', telefono: '' });
        setError(false);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Solo permite nmeros
        if (value === '' || /^[0-9]+$/.test(value)) {
            setFormData({...formData, telefono: value});
        }
    };

    return (
        <div className={CardStyles.cardContainer}>
            {!showQuoteDetail ? (
                <>
                    <img src={img} alt={marca}/>
                    <h3>{marca} {modelo}</h3>
                    <h4>Año 2024</h4>
                    <button onClick={() => setShowForm(true)}>
                        Obtener Cotización
                    </button>

                    {showForm && (
                        <div className={CardStyles.formContainer}>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Nombre"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Teléfono"
                                    value={formData.telefono}
                                    onChange={handlePhoneChange}
                                    maxLength="10" // Opcional: limitar la longitud
                                />
                                {error && <p style={{color: 'red'}}>Porfavor verifica que la informacion sea correcta
                                  
                                  </p>}
                                <button type="submit">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    )}
                </>
            ) : (
                <QuoteDetail quote={currentQuote} />
            )}
        </div>
    );
};

export default Card;

