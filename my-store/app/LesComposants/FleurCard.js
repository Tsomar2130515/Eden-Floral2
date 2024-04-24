import Link from "next/link";
import React from 'react';
import BoutonConsulter from './BoutonConsulter'; 
import BoutonAjouterPanier from "./BoutonAjouterPanier";

function FleurCard({ id, nom, description, prix, disponible, image, favorie }) {
    if (!disponible || !favorie) {
        return null; 
    }

    
    const descriptionCourte = description.length > 100 ? `${description.slice(0, 100)}...` : description;

    return (
        <div className="col-md-6  ">
            <Link href={`/unBlog/${id}`} className="card-link">
                <div className="card mb-3">
                    <img src={image} className="card-img-top" alt="Une fleur" />
                    <div className="card-body testClick">
                        <h5 className="card-title parisienne-font ">{nom}</h5>
                        <p className="card-text">{descriptionCourte}</p>
                        <div class="conteneur-prix">
                        <p className="card-text  prix">{prix} $</p>
  
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <BoutonConsulter className="col"/>
                                <BoutonAjouterPanier className="col"/>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </Link>
        </div>   
    );
    
}

export default FleurCard;
