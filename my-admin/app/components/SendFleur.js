'use server';

export async function SendFleur(formData) {


    const nom = formData.get('nom');
    const description = formData.get('description');
    const imagePath = formData.get('imagePath');
    const prix = formData.get('prix');
    const lien = formData.get('lien');

    const publicationData = {
        nom: nom,
        description: description,
        prix: prix,
        disponible: true,
        favorie: false,
        stock : 5,
        image: imagePath,
        lienPaiement: lien
    };

    await fetch('http://localhost:3000/fleurs', {
        method: 'POST',
        body: JSON.stringify(publicationData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    formData.set('imagePath', '');
    formData.set('nom', '');
    formData.set('description', '');
    formData.set('prix', '');
}