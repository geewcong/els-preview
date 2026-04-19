import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CharactersSection from './components/CharactersSection';
import VideosSection from './components/VideosSection';
import FAQSection from './components/FAQSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CharactersSection />
      <VideosSection />
      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
