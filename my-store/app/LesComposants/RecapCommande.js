"use client"
import Facture from "./Facture";


const RecapCommande = () => {
  
  
  const newPanier = JSON.parse(sessionStorage.getItem('panier')) || [];

  return (
    <div className="btnValid">
      
      <Facture panier={newPanier} />
    </div>
  );
};

export default RecapCommande;
