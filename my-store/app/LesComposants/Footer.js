
import Link from "next/link";

function Footer() {
    return (
        <nav className="HeadFoot navbar navbar-expand-md">
            
                <div className="col-md-12">
                <h6 className="roboto-font bienvenue">@copyright2024</h6>
                
                    <section className="mb-4 reseauSociaux">
                       
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f "></i>
                        </a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>

                    </section>
                    <Link href="#!"className="card-link"><h1 className="parisienne-font bienvenue">À propos</h1></Link>
                
                </div>

                
                
            
        </nav>
    );
}

export default Footer;




