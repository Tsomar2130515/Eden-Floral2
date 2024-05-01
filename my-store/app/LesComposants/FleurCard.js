import Link from "next/link";
import React from 'react';
import BoutonConsulter from './BoutonConsulter'; 
import BoutonAjouterPanier from "./BoutonAjouterPanier";


function FleurCard({ id, nom, description, prix, disponible, image, favorie ,stock}) {
    if (!disponible ) {
        return null; 
    }

    
    const descriptionCourte = description.length > 100 ? `${description.slice(0, 100)}...` : description;

    return (
        <div className="col-md-4  ">
            
            
                <div className="card mb-5">
                    <img src={image} className="card-img-top" alt="Une fleur" />
                    <div className="card-body testClick">
                        <h5 className="card-title parisienne-font ">{nom}</h5>
                        <p className="card-text">{descriptionCourte}</p>
                        <div class="conteneur-prix">
                        <p className="card-text  prix">{prix} $</p>
  
                        </div>
                        <p className="card-text stock">Restant en stock : {stock} </p>
                        
                        <div className="container">
                            <div className="row">
                            
                                <BoutonConsulter className="col" id={id}/>
                            
                            
                                <BoutonAjouterPanier className="col" fleurId={id} nom= {nom} prix={prix} image={image} stock={stock} />
                           
                            </div>
                        </div>
                        
                        
                    </div>
                   
                </div>
               
        </div>   
    );
    
}

export default FleurCard;
