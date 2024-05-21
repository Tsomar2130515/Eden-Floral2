"use client"

import React, { useState } from 'react';

export default function BarreDeRecherche({ onSearch }) 
{
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => 
    {
        const term = event.target.value.trim();

        setSearchTerm(term);

        onSearch(term); 
    };

    return (

        <div className="container-fluid">

            <div className="row align-middle zoneDeRecherche">

                <div className="col-12 col-lg-7">

                    <nav className="navbar navbar-light">

                        <div className="container-fluid">

                            <form className="d-flex">

                                <input

                                    className="form-control me-2"

                                    type="search"

                                    name="nom"

                                    placeholder="Entrez un nom"

                                    aria-label="Search"

                                    value={searchTerm}
                                    
                                    onChange={handleChange}

                                />

                                <button className="btn btn-outline-success" type="button">Rechercher</button>

                            </form>

                        </div>

                    </nav>

                </div>

            </div>

        </div>
    );
}
