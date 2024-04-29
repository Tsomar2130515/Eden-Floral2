
import Link from "next/link";
function BoutonMag() {
  return <>
  
  <div  className="col-md-6 d-flex justify-content-center "> 
  <Link href={`./MaPageDeMag`} className="card-link">
      <button className="btn-magasiner">
        Magasinez maintenant !
      </button>
      </Link>
    </div>
  
    
    </>
}

export default BoutonMag;
