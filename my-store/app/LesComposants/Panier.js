"use client"
import { useState, useEffect } from 'react';
import Header from '../LesComposants/Header';
import Footer from '../LesComposants/Footer';
import BarreDeRecherche from '../LesComposants/BarreDeRecherche';
import BandePromotionnel from '../LesComposants/BandePromotionnel';
import BarreAjustPanier from './BarreAjustPanier';

const PanierPage = () => {
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    const panierData = sessionStorage.getItem('panier');
    if (panierData) {
      setPanier(JSON.parse(panierData));
    }
  }, []);

  const isPanierVide = () => {
    return panier.length === 0;
  };
  const removeFromPanier = (fleurId) => {
    const updatedPanier = panier.filter(item => item.id !== fleurId);
    setPanier(updatedPanier);
    sessionStorage.setItem('panier', JSON.stringify(updatedPanier));
  };

  

  return (
    <main>
      

      <div className="inspiration-page container">
  {isPanierVide() ? (
    <p>Oups, votre panier est vide. Il est temps de magasiner !</p>
  ) : (
    <ul className="creations-grid row">
      {panier.map((item, index) => (
        <li key={index} className="creation-card col-md-4">
          <div className="card">
            <img src={item.image} className="card-img-top" alt={item.nom}  />
            <div className="card-body">
              <h5 className="card-title">{item.nom}</h5>
              <BarreAjustPanier fleurId={item.id} removeFromPanier={removeFromPanier} />
              <p className="card-text">Prix: {item.prix} $</p>
              <p className="card-text">Restant en stock: {item.stock}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

      
    </main>
  );
};

export default PanierPage;
