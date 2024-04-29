"use client";
import { useEffect, useState } from "react"; 
import FleurCard from "./FleurCard";

function FleurListTotal() {
    const [fleurs, setFleurs] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3000/fleurs')
            .then(response => response.json())
            .then(json => {
                setFleurs(json);
            })
            .catch(error => console.error('Erreur lors de la récupération des fleurs:', error));
    }, []);

    
    const filteredFleurs = fleurs.filter(fleur => fleur.disponible );

    return (
        
            <div className="container">
            <div className="row ">
                {filteredFleurs.map(fleur => (
                    
                        <FleurCard
                            id={fleur.id}
                            nom={fleur.nom}
                            description={fleur.description}
                            prix={fleur.prix}
                            disponible={fleur.disponible}
                            favorie={fleur.favorie}
                            stock={fleur.stock}
                            image={fleur.image}
                        />
                   
                ))}
            </div>
            </div>
        
    );
    
    
    
    
}

export default FleurListTotal;
