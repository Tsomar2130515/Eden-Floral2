"use client"

import React, { useState } from 'react';

import Header from '../LesComposants/Header';

import Footer from '../LesComposants/Footer';

import BarreDeRecherche from '../LesComposants/BarreDeRecherche';

import FleurListTotal from '../LesComposants/FleurListTotal';

import BandePromotionnel from '../LesComposants/BandePromotionnel';

export default function Home() 
{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => 
    {
        setSearchTerm(term);
    };

    return (
        <main>

            <Header />

            <BandePromotionnel />

            <div className="background-image2">

                <BarreDeRecherche onSearch={handleSearch} />

                <FleurListTotal searchTerm={searchTerm} />

            </div>
            
            <Footer />
        </main>
    );
}

