import { useState } from "react";

export default function BarreAjustPanier({fleurId,removeFromPanier }) {
  const [quantity, setQuantity] = useState(1);

  const addArticle = (event, fleurId) => {
    event.preventDefault(); 
    const newPanier = JSON.parse(sessionStorage.getItem('panier')) || [];
    const articleIndex = newPanier.findIndex(item => item.id === fleurId);
    if (articleIndex !== -1) {
      newPanier[articleIndex].quantite++;
      sessionStorage.setItem('panier', JSON.stringify(newPanier));
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const removeArticle = (event, fleurId) => {
  event.preventDefault();
  if (quantity > 1) {
    setQuantity((prevQuantity) => prevQuantity - 1);
    const newPanier = JSON.parse(sessionStorage.getItem('panier')) || [];
    const articleIndex = newPanier.findIndex(item => item.id === fleurId);
    if (articleIndex !== -1) {
      // Décrémentez la quantité de l'article dans le panier
      newPanier[articleIndex].quantite--;
      // Mettez à jour le panier dans le sessionStorage
      sessionStorage.setItem('panier', JSON.stringify(newPanier));
    }
  }
};

const deleteArticle = (event, fleurId) => {
  event.preventDefault();
  const confirmation = window.confirm(
    "Êtes-vous sûr de vouloir supprimer cet article ?"
  );
  if (confirmation) {
    // Récupérer le panier depuis sessionStorage
    const panier = JSON.parse(sessionStorage.getItem('panier')) || [];

    // Filtrer le panier pour supprimer l'article avec l'ID spécifié
    const nouveauPanier = panier.filter(article => article.id !== fleurId);

    // Mettre à jour le panier dans sessionStorage avec le nouveau panier filtré
    sessionStorage.setItem('panier', JSON.stringify(nouveauPanier));

    // Mettre à jour l'état local ou déclencher un événement pour informer le composant parent
    // Cela dépend de votre implémentation globale
    // Ici, nous ne faisons rien avec l'état local dans cette fonction
    // Mais vous pouvez ajouter du code pour mettre à jour l'état local si nécessaire
    // setPanier(nouveauPanier);

    // Afficher une alerte pour indiquer que l'article a été supprimé
    window.alert("Article supprimé !");
    removeFromPanier(fleurId);
  }
};

  return (
    <div className="container-fluid">
      <div className="article-counter">
        <button className="btn-remove" onClick={(event) => removeArticle(event, fleurId)}>
          <i className="fas fa-minus"></i>
        </button>
        <input type="number" value={quantity} min="1" readOnly />
        <button className="btn-add" onClick={(event) => addArticle(event, fleurId)}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn-delete" onClick={(event) => deleteArticle(event, fleurId)} >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
