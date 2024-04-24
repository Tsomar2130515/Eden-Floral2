"use client";
import { useEffect, useState } from "react"; 
import FleurCard from "./FleurCard";

function FleurListFavoris() {
    const [fleurs, setFleurs] = useState([]);

    useEffect(() => {
        // Récupération de toutes les fleurs
        fetch('http://localhost:3000/fleurs')
            .then(response => response.json())
            .then(json => {
                setFleurs(json);
            })
            .catch(error => console.error('Erreur lors de la récupération des fleurs:', error));
    }, []);

    // Filtrer les fleurs disponibles qui sont également favorites
    const filteredFleurs = fleurs.filter(fleur => fleur.disponible && fleur.favorie);

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
                            image={fleur.image}
                        />
                   
                ))}
            </div>
            </div>
        
    );
    
    
    
    
}

export default FleurListFavoris;
