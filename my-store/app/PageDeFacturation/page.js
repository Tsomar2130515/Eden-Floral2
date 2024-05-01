import React from 'react';

import Header from '../LesComposants/Header';
import Footer from '../LesComposants/Footer';
import BandePromotionnel from '../LesComposants/BandePromotionnel';
import Link from 'next/link';
import RecapCommande from '../LesComposants/RecapCommande';

export default function Home() {
    return (
        <main >
            <Header />
            <BandePromotionnel />
            <div className="background-image2">
            
                <RecapCommande  />
                    
            </div>
            
            <Footer />
        </main>
    );
}
