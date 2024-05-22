"use client"

import React, { useEffect, useState } from "react"; 

import FleurCard from "./FleurCard";
function FleurListTotal({ searchTerm }) 
{
    const [fleurs, setFleurs] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

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

    useEffect(() => 
    {
        const filteredFleurs = fleurs.filter(fleur => fleur.nom.toLowerCase().includes(searchTerm.toLowerCase()));
        
        setSearchResults(filteredFleurs);

    }, [fleurs, searchTerm]);

    return (
        
        <div className="container">

            {searchResults.length > 0 ? (

                <div className="row">

                    {searchResults.map(fleur => (

                        <FleurCard

                            key={fleur.id}

                            id={fleur.id}

                            nom={fleur.nom}

                            description={fleur.description}

                            prix={fleur.prix}

                            disponible={fleur.disponible}

                            favorie={fleur.favorie}

                            stock={fleur.stock}

                            image={fleur.image}

                            lienPaiement={fleur.lienPaiement}
                        />
                    ))
                    }

                </div>

            ) : (
                <p>Aucun résultat trouvé pour "{searchTerm}"</p>
            )

            }
            
        </div>
    );
}

export default FleurListTotal;
