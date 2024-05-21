"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const user = {
            nom: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/User', );
            const data = await response.json();
            const validUser = data.find(item => item.nom === user.nom && item.password === user.password);

            if (validUser) {
                // Rediriger vers une autre page si l'authentification réussit
                router.push('./inventaire');
            } else {
                // Afficher un message d'erreur si l'authentification échoue
                setErrorMessage('Mauvais nom ou mauvais mot de passe');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            setErrorMessage('Erreur lors de la récupération des données');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center mt-5 mb-5">
                <div className="col-12 col-lg-5 border border-3 border-secondary hover-zoom mx-auto" id="formulairePublication">
                    <div className="col-12 col-lg mb-4 text-center h2">
                        Connexion
                    </div>
                    <div className="col-12 col-lg-12">
                        <form id="publicationForm" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="identifiant" className="form-label">Identifiant:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="identifiant"
                                    name="identifiant"
                                    placeholder="Identifiant"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mot de passe:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            <div className="text-end">
                                <button type="submit" id="envoyer" className="btn btn-primary login-button">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
