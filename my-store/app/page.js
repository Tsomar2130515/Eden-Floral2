import React from 'react';
import Header from './LesComposants/Header';
import Footer from './LesComposants/Footer';
import MotDeBienvenue from './LesComposants/MotDeBienvenue';
import CoupsDeCoeurClients from './LesComposants/CoupsDeCoeurClients';
import BarreDeRecherche from './LesComposants/BarreDeRecherche';
import BandePromotionnel from './LesComposants/BandePromotionnel';


export default function Home() {
    return (
        <main >
            <Header />
            <BandePromotionnel />
            <div className="background-image">
            
                <BarreDeRecherche/>
                       
                <div className="container mt-4 pt-2 cadreAcceuil">
                    <div className="row">
                        <div className="col-md-12">
                            <MotDeBienvenue NomBoutique="Eden Floral" />
                        </div>
                    </div>
                    
                </div>
                <CoupsDeCoeurClients />
                    
            </div>
            <Footer />
        </main>
    );
}
