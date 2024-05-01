
import Link from "next/link";
function BoutonValiderPanier() {
  return <>
  
  <div  className="col-md-6 d-flex justify-content-center "> 
    <Link href={`./PageDeFacturation`} className="card-link">
      <button className="btn-magasiner">
        Valider mon panier
      </button>
      </Link>
    </div>
  
    
    </>
}

export default BoutonValiderPanier;
