
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (

    <div className="container-fluid footer">
    <div className="row">
      <footer>
        <div id="expertise-text">@copyright2024</div>
        <Link href="https://www.facebook.com/" target="_blank"><Image className="img" src="/images/facebook-logo.png" alt="Facebook" width={100} height={40} priority /></Link>
        <Link href="https://twitter.com/" target="_blank"><Image className="img" src="/images/twitter-logo.png" alt="Twitter" width={100} height={40} priority /></Link>
        <Link href="https://www.linkedin.com/" target="_blank"><Image className="img" src="/images/linkedin-logo.png" alt="LinkedIn" width={100} height={40} priority /></Link>
        
        <div id="expertise-text">À propos</div>
      </footer>
    </div>
  </div>
     
  );
}

export default Footer;




