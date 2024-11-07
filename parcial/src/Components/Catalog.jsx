import { useState } from "react";
import { autos } from "../utils/autos";
import Card from "./Card";

const Catalog = () => {
    const [quote, setQuote] = useState([]);
    console.log(quote);

    return (
        <div className="list-container">
            {autos.map(auto => (
                <Card 
                    key={auto.id} 
                    auto={auto} 
                    setQuote={setQuote} 
                />
            ))}
        </div>
    );
};

export default Catalog;