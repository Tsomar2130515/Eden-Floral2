import Header from '../components/Header';
import Footer from '../components/Footer';
import FleurListTotal from '../components/FleurListTotal';



export default function Home() {
    return (
        <main >
            <Header />

            <div className="background-image">
            <FleurListTotal />
            </div>
            <Footer />
        </main>
    );
}
