import UpdateFleur from "../../components/UpdateFleur";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



export default function Home({ params }) {

    return (
        <main>
            <Header />
            <div className="background-image">
                <UpdateFleur id={params.id} />
            </div>

            <Footer />
        </main>
    );
}