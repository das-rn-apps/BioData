import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import PersonalInfo from './components/PersonalInfo';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FamilyTree from './components/FamilyTree';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <BasicInfo />
      <FamilyTree />
      <PersonalInfo />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
