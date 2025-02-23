
// import './App.css'
import AboutMain from './components/aboutMeSection/AboutMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import HelperSection from './components/HelperSection';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import SkillsMain from './components/skillsSesction/SkillsMain';
import SubSkills from './components/skillsSesction/SubSkills';

function App() {
  return (
   <main className='font-body'>
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroSection />
    <AboutMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
    <HelperSection />

    
  </main>
  );
};

export default App;
