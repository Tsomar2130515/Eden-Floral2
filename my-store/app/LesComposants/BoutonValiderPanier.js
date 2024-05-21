"use client"

import React from 'react';

import Link from 'next/link';

function BoutonValiderPanier({ lienPaiement, produitASupprimer }) 
{
  const handleClick = () => 
  {
    
    fetch(`http://localhost:3000/fleurs/${produitASupprimer.id}`, 
    {
      method: 'PATCH', 

      headers: 
      {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stock: produitASupprimer.stock - 1 }), 
    })
      .then(response => 
        {
        
        if (response.ok) 
        {
          console.log('Stock mis à jour avec succès.');
          
        } 
        else 
        {
          console.error('Erreur lors de la mise à jour de la base de données.');
        }

      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour de la base de données:', error);
      });
  };

  return (

    <div className="col-md-6 d-flex justify-content-center">

      <Link href={`${lienPaiement}`}>

      <button className="btn btn-danger" onClick={handleClick}>Payer</button>

      </Link>
      
    </div>
  );
}

export default BoutonValiderPanier;
