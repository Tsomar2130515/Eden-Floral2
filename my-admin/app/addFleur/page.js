"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import AjoutPublication from '../components/AjoutFleur';

export default function Home() {
    return (
        <main >
            <Header />
            <div className="background-image">
                <AjoutPublication />
            </div>
            <Footer />
        </main>
    );
}