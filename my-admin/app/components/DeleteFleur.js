"use client";


export default async function DeleteFleur({ id }) {


        try {
            const resp = await fetch(`http://localhost:3000/fleurs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(resp);
            if (!resp.ok) {
                throw new Error('Échec de la suppression de la fleur.');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression de la fleur :', error);
        }


    return null;
}
