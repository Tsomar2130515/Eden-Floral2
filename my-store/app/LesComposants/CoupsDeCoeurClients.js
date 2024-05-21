"use client";

import React from 'react';

import FleurListFavoris from './FleurListFavoris';

import BoutonDeMagasinage from './BoutonDeMagasinage';


function CoupsDeCoeurClients() 
{
    return (

        <div className="container mt-12 cadreAcceuil coupAnim" >

            <div className="row">

                <div className="col-md-12">

                    <h1 className="parisienne-font bienvenue">Les coups de coeur de nos clients</h1>

                    <FleurListFavoris />

                </div>

            </div>

            <div className="container divMag d-flex justify-content-center align-items-center">

                        <BoutonDeMagasinage />
            </div>
            
        </div>
    );
}

export default CoupsDeCoeurClients;
