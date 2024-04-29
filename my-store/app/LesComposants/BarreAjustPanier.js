import { useState } from "react";

export default function BarreAjustPanier() {
  const [quantity, setQuantity] = useState(1);

  const addArticle = (event) => {
    event.preventDefault(); 
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeArticle = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const deleteArticle = (event) => {
    event.preventDefault();
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet article ?"
    );
    if (confirmation) {
      // Ajoutez ici le code pour supprimer l'article du panier
      window.alert("Article supprimé !");
    }
  };

  return (
    <div className="container-fluid">
      <div className="article-counter">
        <button className="btn-remove" onClick={removeArticle}>
          <i className="fas fa-minus"></i>
        </button>
        <input type="number" value={quantity} min="1" readOnly />
        <button className="btn-add" onClick={addArticle}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn-delete" onClick={deleteArticle}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
