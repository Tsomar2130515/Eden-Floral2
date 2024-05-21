"use client";

import { useEffect, useState } from "react"; 

import FleurCardFav from "./FleurCardFav";

function FleurListFavoris() 
{
    const [fleurs, setFleurs] = useState([]);

    useEffect(() => 
    {
        
        fetch('http://localhost:3000/fleurs')

            .then(response => response.json())
            
            .then(json => 
            {
                setFleurs(json);
            })

            .catch(error => console.error('Erreur lors de la récupération des fleurs:', error));
    
        }, []);

    const filteredFleurs = fleurs.filter(fleur => fleur.disponible && fleur.favorie);

    return (
        
            <div className="container">

            <div className="row ">

                {filteredFleurs.map(fleur => (
                    
                        <FleurCardFav

                            id={fleur.id}

                            nom={fleur.nom}

                            description={fleur.description}

                            prix={fleur.prix}

                            disponible={fleur.disponible}

                            favorie={fleur.favorie}

                            stock = {fleur.stock}

                            image={fleur.image}

                            lienPaiement={fleur.lienPaiement}
                        />
                   
                ))}

            </div>
            
            </div>
        
    );
    
    
    
    
}

export default FleurListFavoris;
