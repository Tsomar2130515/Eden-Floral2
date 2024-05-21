import React from 'react';

import Panier from "../LesComposants/Panier";

import Header from '../LesComposants/Header';

import Footer from '../LesComposants/Footer';

import BandePromotionnel from '../LesComposants/BandePromotionnel';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons'; 

import Link from 'next/link';


export default function Home() 
{
    return (
        <main >

            <Header />

            <BandePromotionnel />

            <div className="background-image2">
            
                       
                <Panier />
                
                <div className="btnValid">

                <Link href="./MaPageDeMag">

                <button  > <ArrowLeftCircleFill />Retourner magasiner <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg></button>
                
                </Link>

                </div>
                    
            </div>
            
            <Footer />
            
        </main>
    );
}
