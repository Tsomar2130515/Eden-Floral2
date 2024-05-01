

import React from 'react';

const Facture = ({ panier }) => {
  // Calcul du total de la commande
  const total = panier.reduce((acc, produit) => acc + produit.prix * produit.quantite, 0);

  return (
    <div >
      <h1 className="parisienne-font" style= {{margin : '10px', padding : '10px'}}>Recapitulatif de la commande</h1>
      <table className=' align-center'>
        <thead>
          <tr>
            <th className='text-center' style= {{margin : '10px', padding : '10px',border : '1px solid black', textAlign : 'center'}}>Produit</th>
            <th className='text-center'style= {{margin : '10px', padding : '10px', border : '1px solid black',textAlign : 'center'}}>Quantité</th>
            <th className='text-center'style= {{margin : '10px', padding : '10px',border : '1px solid black', textAlign : 'center'}}>Prix unitaire</th>
            <th className='text-center'style= {{margin : '10px', padding : '10px', border : '1px solid black',textAlign : 'center'}}>Total</th>
          </tr>
        </thead>
        <tbody>
          {panier.map((produit, index) => (
            <tr key={index}>
              <td style= {{margin : '10px', padding : '10px', border : '1px solid black'}}>{produit.nom}</td>
              <td style= {{margin : '10px', padding : '10px', border : '1px solid black',textAlign : 'center'}}>{produit.quantite}</td>
              <td style= {{margin : '10px', padding : '10px',border : '1px solid black', textAlign : 'center'}}>{produit.prix} $</td>
              <td style= {{margin : '10px', padding : '10px', border : '1px solid black',textAlign : 'center'}}>{(produit.prix * produit.quantite).toFixed(2)} $</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style= {{margin : '10px', padding : '10px',border : '1px solid black',backgroundColor : '#cd663e'}}>Total</td>
            <td style= {{margin : '10px', padding : '10px',border : '1px solid black', textAlign : 'center', fontWeight : 'bold',backgroundColor : '#cd663e'}}>{total.toFixed(2)} $</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Facture;
