import { useState } from "react";

export default function BarreAjustPanier({ fleurId, removeFromPanier }) {
  const [quantity, setQuantity] = useState(1);

  async function updateStock(fleurId, newStock) {
    try {
      const response = await fetch(`http://localhost:3000/fleurs/${fleurId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stock: newStock }),
      });

      if (response.ok) {
        console.log(`Stock de la fleur ${fleurId} mis à jour avec succès.`);
      } else {
        console.error('Erreur lors de la mise à jour du stock de la fleur.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du stock de la fleur:', error);
    }
  }

  const addArticle = (event, fleurId) => {
    event.preventDefault();

    const newPanier = JSON.parse(localStorage.getItem('panier')) || [];
    const articleIndex = newPanier.findIndex((item) => item.id === fleurId);

    if (articleIndex !== -1) {
      const stock = newPanier[articleIndex].stock;

      if (quantity < stock) {
        newPanier[articleIndex].quantite++;
        localStorage.setItem('panier', JSON.stringify(newPanier));
        setQuantity((prevQuantity) => prevQuantity + 1);
        updateStock(fleurId, stock - 1);
      } else {
        alert("Vous ne pouvez pas ajouter plus d'articles que la quantité en stock !");
      }
    }
  };

  const removeArticle = (event, fleurId) => {
    event.preventDefault();

    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const newPanier = JSON.parse(localStorage.getItem('panier')) || [];
      const articleIndex = newPanier.findIndex((item) => item.id === fleurId);

      if (articleIndex !== -1) {
        const stock = newPanier[articleIndex].stock;

        newPanier[articleIndex].quantite--;
        localStorage.setItem('panier', JSON.stringify(newPanier));
        updateStock(fleurId, stock + 1);
      }
    }
  };

  const deleteArticle = (event, fleurId) => {
    event.preventDefault();

    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet article ?"
    );

    if (confirmation) {
      const panier = JSON.parse(localStorage.getItem('panier')) || [];
      const nouveauPanier = panier.filter((article) => article.id !== fleurId);

      localStorage.setItem('panier', JSON.stringify(nouveauPanier));
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
        <button className="btn-delete" onClick={(event) => deleteArticle(event, fleurId)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
