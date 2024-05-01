import Header from '../LesComposants/Header';
import Footer from '../LesComposants/Footer';
import BarreDeRecherche from '../LesComposants/BarreDeRecherche';
import BandePromotionnel from '../LesComposants/BandePromotionnel';

export default function Home(){
  return (
    <main>
      <Header />
      <BandePromotionnel />
      <BarreDeRecherche />

      <div className="background-image2 ">
        <h1>Découvrez nos créations florales</h1>
        <div className="creations-grid">
          <div className="creation-card">
            <img src="https://images.pexels.com/photos/6707632/pexels-photo-6707632.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Création florale 1" />
            <h2>Éclat d'Or</h2>
          </div>
          <div className="creation-card">
            <img src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Création florale 2" />
            <h2>Raffinement Vineux</h2>
          </div>
          <div className="creation-card">
            <img src="https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Création florale 3" />
            <h2>Panier Printanier</h2>
          </div>
          <div className="creation-card">
            <img src="https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Création florale 3" />
            <h2>Émerveillement Printanier</h2>
          </div>
         
        </div>
      </div>

      <Footer />
    </main>
  );
}


