
import BestOrder from './components/bestorder/BestOrder';
import Features from './components/features/Features';
import Foods from './components/foods/Foods';
import Footer from './components/footer/Footer';
import HeadlineCards from './components/headlinecards/HeadlineCards';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import PopularItems from './components/popularItems/PopularItems';
import Sandwich from './components/sandwich/Sandwich';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Features />
      <PopularItems />
      <Foods />
      <Sandwich /> 
      <BestOrder />
      <Footer />
    </div>
  );
}

export default App;
