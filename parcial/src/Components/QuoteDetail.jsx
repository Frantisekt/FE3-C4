import styles from '../styles/QuoteDetail.module.css'

const QuoteDetail = ({ quote }) => {
    return (
        <div className={styles.quoteContainer}>
            <h3>¡Gracias por tu solicitud de cotización!</h3>
            <div className={styles.quoteInfo}>
                <h3>Detalles del vehículo:</h3>
                <p>Marca: {quote.marca}</p>
                <p>Modelo: {quote.modelo}</p>
                
                <h3>Información del solicitante:</h3>
                <p>Nombre: {quote.nombre}</p>
                <p>Email: {quote.email}</p>
                <p>Teléfono: {quote.telefono}</p>
            </div>
        </div>
    )
}

export default QuoteDetail