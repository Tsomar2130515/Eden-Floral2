"use server";

export default async function sendFleurUpdate(formData) { // Changement de la casse de la fonction et du nom de la fonction

    const nom = formData.get('nom');
    const description = formData.get('description');
    const imagePath = formData.get('imagePath');
    const prix = formData.get('prix');
    const disponible = formData.get('disponible');
    const favori = formData.get('favorie');
    const stock = formData.get('stock');
    const id = formData.get('id');
    const lien = formData.get('lien');

    const fleurData = { // Changement de la casse de la variable
        nom: nom,
        description: description,
        prix: prix, // Changement de la casse
        disponible: disponible,
        favorie: favori,
        stock: stock,
        image: imagePath,
        lienPaiement: lien
    };

    const response = await fetch(`http://localhost:3000/fleurs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(fleurData), // Utilisation de la variable fleurData
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    
    if (!response.ok) {
        throw new Error('Échec de la mise à jour des données de publication');
    }
   
    

    formData.set('imagePath', '');
    formData.set('nom', '');
    formData.set('description', '');
    formData.set('prix', '');
    formData.set('disponible', '');
    formData.set('favorie', '');
    formData.set('stock', '');
    formData.set('lienPaiement', '');
   
}
