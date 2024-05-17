"use client";

import { SendFleur } from './SendFleur';
import { useRouter } from 'next/navigation';

export default function AjoutPublication() {
    const router = useRouter();
    async function handleSubmit(formData) {
        if (window.confirm("Voulez-vous vraiment envoyer cette fleur ?")) {
            await SendFleur(formData);
            router.push('/');
        }
    }

    return (
        <div id="container-fluid">
            <div className="row justify-content-center align-items-center mt-5 mb-5 ">
                <div className="col-12 col-lg-5 border border-3 border-secondary  hover-zoom mx-auto" id="formulairePublication">
                    <div className="col-12 col-lg mb-4 text-center h2">
                        Ajouter fleur
                    </div>
                    <div className=" col-12 col-lg-12">
                        <form id="publicationForm" action={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nom" className="form-label">Nom :</label>
                                <input type="text" className="form-control" id="nom" name="nom" placeholder="Nom" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="imagePath">Image :</label>
                                <input type="text" className="form-control" id="imagePath" name="imagePath" placeholder='choisir une seulle image' required />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="description" className="form-label">Description :</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="prix" className="form-label">Prix :</label>
                                <input type="text" className="form-control" id="prix" name="prix" placeholder="Prix" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor='lien' className="form-label">Lien :</label>
                                <input type="text" className="form-control" id="lien" name="lien" placeholder="Lien" />
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