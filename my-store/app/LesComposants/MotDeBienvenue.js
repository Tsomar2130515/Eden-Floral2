import React from 'react';

function Message({ NomBoutique }) 
{
    return (
        <div className="container bienvenueAnim  "> 
            
            <div className="row">
                
                <div className="col-md-12 mt-0"> 
                    
                    <h1 className="parisienne-font bienvenue">Mot de bienvenue</h1>
                    
                    <p className="roboto-font">
                        
                        Bienvenue dans notre jardin virtuel, où chaque pétale raconte une histoire et chaque arrangement est une œuvre d'art. Nous croyons que la nature et l'art sont des sources infinies d'inspiration. 
                        Faites fleurir vos instants précieux avec {NomBoutique} dès aujourd'hui et découvrez l'harmonie entre la nature et l'art. 
                        Notre équipe dévouée est là pour vous guider à travers notre jardin virtuel et vous aider à trouver l'arrangement parfait pour chaque occasion. 
                    </p>

                </div>

            </div>
            
        </div>
    );
}

export default Message;
