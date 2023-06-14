import HeroSection from "./components/Hero-section";
import Footer from "./components/Footer";
import MainSection from "./components/main-section";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <MainSection />
            <Footer />
        </div>
    );
}
 
export default Home;
