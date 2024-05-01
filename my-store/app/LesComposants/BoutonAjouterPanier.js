import React from 'react';

function BoutonAjouterPanier({ fleurId, nom, prix,image,stock, }) {
  const ajouterAuPanier = (fleurId, nom, prix) => {
    // Récupérer le panier existant depuis sessionStorage
    const panierExist = JSON.parse(sessionStorage.getItem('panier')) || [];

    // Rechercher si la fleur est déjà présente dans le panier
    const fleurExistante = panierExist.find(item => item.id === fleurId);

    // Si la fleur est déjà dans le panier, augmenter sa quantité
    if (fleurExistante) {
      fleurExistante.quantite += 1;
    } else {
      // Sinon, ajouter la fleur avec une quantité de 1
      panierExist.push({ id: fleurId, quantite: 1, nom: nom, prix: prix, image: image,stock:stock });
    }

    // Mettre à jour le panier dans sessionStorage
    sessionStorage.setItem('panier', JSON.stringify(panierExist));

    // Afficher une alerte pour indiquer que la fleur a été ajoutée au panier
    alert("Ajouter au panier : " + nom);
  };

  const gererAjoutAuPanier = () => {
    ajouterAuPanier(fleurId, nom, prix,image,stock); // Passer le fleurId, le nom et le prix ici
  };

  return (
    <div className="col-md-6 d-flex justify-content-center">
      <button className="btn-consAjout" onClick={gererAjoutAuPanier}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default BoutonAjouterPanier;
