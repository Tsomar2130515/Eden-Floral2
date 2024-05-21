"use client"

import SendFleurUpdate from "./SendFleurUpdate";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function updateFleur({ id }) {

    const router = useRouter();

    const [fleur, setFleur] = useState({});

     useEffect(() => {

        fetch(`http://localhost:3000/fleurs/${id}`)
            .then(response => response.json())
            .then(json => setFleur(json))
            .catch(error => console.error("Erreur lors de la sélection des details de la fleur:", error));

        
    }, []);

    async function handlechange(event) {
        const { name, value } = event.target;
        setFleur(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
 

    async function handleSubmit(formData) {
        if (window.confirm("Voulez-vous vraiment envoyer cette publication ?")) {
            await SendFleurUpdate(formData);
            router.push('../inventaire');
        }
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center mt-5 mb-5 ">
                <div className="col-12 col-lg-5 border border-3 border-secondary  hover-zoom mx-auto" id="formulairePublication">
                    <div className="col-12 col-lg mb-4 text-center h2">
                        update fleur
                    </div>
                    <div className=" col-12 col-lg-12">
                        
                        <form id="publicationForm" action={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">Id :</label>
                                <input type="text" className="form-control" id="id" name="id" placeholder="Id" value={fleur.id }  onChange={handlechange} />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="nom" className="form-label">Nom :</label>
                                <input type="text" className="form-control" id="nom" name="nom" placeholder="Nom" value={fleur.nom }  onChange={handlechange} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="imagePath">Image :</label>
                                <input type="text" className="form-control" id="imagePath" name="imagePath" placeholder='choisir une seulle image' required   value={fleur.image}  onChange={handlechange} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="description" className="form-label">Description :</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" value={fleur.description}  onChange={handlechange} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="stock" className="form-label">Stock :</label>
                                <input type="text" className="form-control" id="stock" name="stock" placeholder="Stock"   value={fleur.stock }  onChange={handlechange}/>
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="disponible" className="form-label">Disponible :</label>
                                <input type="text" className="form-control" id="disponible" name="disponible" placeholder="Disponible"  value={fleur.disponible }  onChange={handlechange} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="favorie" className="form-label">Favorie :</label>
                                <input type="text" className="form-control" id="favorie" name="favorie" placeholder="Favorie"  value={fleur.favorie }  onChange={handlechange} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label htmlFor="prix" className="form-label">Prix :</label>
                                <input type="text" className="form-control" id="prix" name="prix" placeholder="Prix"   value={fleur.prix }  onChange={handlechange} />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="lien" className="form-label">Lien :</label>
                                <input type="text" className="form-control" id="lien" name="lien" placeholder="Lien"  value={fleur.lienPaiement }  onChange={handlechange} />
                            </div>
                            
                            <div className="text-end">
                                <button type="submit" id="envoyerPublication" className="btn btn-primary">Envoyer</button>
                            </div> 
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
