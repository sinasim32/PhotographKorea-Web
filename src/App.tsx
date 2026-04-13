import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
