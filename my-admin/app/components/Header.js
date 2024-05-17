'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {

  
    const router = useRouter();
    
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
                            <button className=" me-5 header-link parisienne-font"  id="home" aria-current="page" onClick={() => router.push("/")}>Acceuil</button>
                                
                            </li>
                            <li className="nav-item">
                                <button className=" me-5 header-link parisienne-font"  id="add" aria-current="page" onClick={() => router.push("./addFleur")}>Ajout Fleur</button>
                                {/* <Link className="me-5 header-link parisienne-font"  href={"./addFleur"}>Ajout Fleur</Link> */}
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <Link className="me-5 header-link parisienne-font" href="#">other
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
