import React from 'react';

function BoutonAjouterPanier({ fleurId, nom, prix,image,stock,lienPaiement }) 
{
  const ajouterAuPanier = (fleurId, nom, prix,image,stock,lienPaiement) => {
    
    const panierExist = JSON.parse(localStorage.getItem('panier')) || [];

    const fleurExistante = panierExist.find(item => item.id === fleurId);

    if (fleurExistante) 
    {
      fleurExistante.quantite += 1;
    } 
    else 
    {
      
      panierExist.push({ id: fleurId, quantite: 1, nom: nom, prix: prix, image: image,stock:stock,lienPaiement:lienPaiement });
    }

    localStorage.setItem('panier', JSON.stringify(panierExist));

    alert("Vous venez d'ajouter : "+ nom  +" au panier" );

  };

  const gererAjoutAuPanier = () => 
  {
    ajouterAuPanier(fleurId, nom, prix,image,stock,lienPaiement); 
  };

  return (

    <div className="col-md-6 d-flex justify-content-center">

      <button className="btn-consAjout" onClick={gererAjoutAuPanier}>

        Ajouter

      </button>

    </div>
    
  );
}

export default BoutonAjouterPanier;
