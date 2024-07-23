import './App.css';
import Footer from './Components/Footer';
import FourSection from './Components/FourSection';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MainSection from './Components/MainSection';
import SecondSection from './Components/SecondSection';
import ThreeSection from './Components/ThreeSection';

function App() {
  return (
    <div className="App">

      <Header />
      <HeroSection />
      <MainSection />
      <SecondSection />
      <ThreeSection />
      <FourSection />
      <Footer />
    </div>
  );
}

export default App;
