import React from 'react';
import Header from '../LesComposants/Header';
import Footer from '../LesComposants/Footer';
import BarreDeRecherche from '../LesComposants/BarreDeRecherche';
import FleurListTotal from '../LesComposants/FleurListTotal';
import BandePromotionnel from '../LesComposants/BandePromotionnel';

export default function Home() {
    return (
        <main >
            <Header />
            <BandePromotionnel />
            <div className="background-image2">
            
                <BarreDeRecherche/>
                       
                <FleurListTotal />
                    
            </div>
            <Footer />
        </main>
    );
}
