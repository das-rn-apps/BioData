import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import FamilyDetails from './components/FamilyDetails';
import PersonalInfo from './components/PersonalInfo';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <BasicInfo />
      <FamilyDetails />
      <PersonalInfo />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
