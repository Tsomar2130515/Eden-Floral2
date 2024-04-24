import Link from "next/link";

function Header() {
    return (
        <nav className="HeadFoot navbar navbar-expand-md">
            <div className="container-fluid">
                <div className="col-md-3">
                    <Link className="navbar-brand" href="#">
                        <img src="../Images/Logo.png" className="classLog rounded-circle" alt="Logo Eden Floral." />
                    </Link>
                </div>
                <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-9 d-flex justify-content-center">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-between flex-grow-1">
                            <li className="nav-item">
                                <Link className="me-5 header-link parisienne-font" href="#">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="me-5 header-link parisienne-font" href="#">Inspiration</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="me-5 header-link parisienne-font" href="#">Mon panier
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-basket3-fill ms-1" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                                </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
