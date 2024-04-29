"use client";
import { useEffect, useState } from "react"; 
  

function FleurDetails({ FleurId }) {
    const [fleur, setFleur] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/fleurs/${FleurId}`)
            .then(response => response.json())
            .then(json => setFleur(json))
            .catch(error => console.error("Erreur lors de la récupération des details de la fleur:", error));
    }, [FleurId]);

    return (
        <div className="container">
            
                <img  src={fleur.image} className="img-fluid" alt="Une fleur" />
                <h1 className="title" >{fleur.nom} </h1>
                <p class="prix">{fleur.prix} $</p>
                <p class="description">{fleur.description}</p>
        </div>
    );
}

export default FleurDetails;