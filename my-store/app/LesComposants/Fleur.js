
import Header from "./Header.js";
import FleurDetails from "./FleurDetails.js";
import BarreDeRecherche from './BarreDeRecherche';
import BandePromotionnel from './BandePromotionnel';


function Fleur({ id }) {
    return (
        <div>
            <Header />
            <BandePromotionnel />
            <BarreDeRecherche />
            <FleurDetails FleurId={id} />
            
        </div>
    );
}
export default Fleur;



  