
import Link from "next/link";
function BoutonConsulter( {id} ) {
  return <>
    <div  className="col-md-6  ">
    <Link href={`/uneFleur/${id}`} className="card-link"> 
      <button className="btn-consAjout">
       Consulter le produit
      </button>
      </Link>
    </div>
    </>
    
  }
  
  export default BoutonConsulter;
  