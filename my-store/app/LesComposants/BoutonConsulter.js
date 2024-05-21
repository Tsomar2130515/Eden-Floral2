
import Link from "next/link";
function BoutonConsulter( {id} ) 
{
  return <>
    <div  className="col-md-6 d-flex  justify-content-center">

    <Link href={`/uneFleur/${id}`} className="card-link"> 

      <button className="btn-consAjout">

       Consulter 

      </button>

      </Link>

    </div>
    
    </>
    
  }
  
  export default BoutonConsulter;
  