
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MasonryGrid from "./components/MasonryGrid";
import Motto from "./components/Motto";
import NavBar from "./components/NavBar";
import ParallaxSection from "./components/ParallaxSection";
import Showcase from "./components/Showcase";


function App() {
  return (
    <>
    <NavBar />
    <Showcase />
    <Motto />
    <MasonryGrid />
    <AboutMe />
    <ParallaxSection />
    <Form />
    <Footer />
    </>
  );
}

export default App;
