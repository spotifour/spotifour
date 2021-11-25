import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ITTechnologies from './ITTechnologies/ITTechnologies';
import ITWork from './ITWork/ITWork';
import ProjectIdeas from './ProjectIdeas/ProjectIdeas';
import TeamProfile from './TeamProfile/TeamProfile';
import Tools from './Tools/Tools';

function App() {
  return (
    <div>
      <Header />
      <TeamProfile />
      <Tools />
      <ITWork />
      <ITTechnologies />
      <ProjectIdeas />
      <Footer />
    </div>
  );
}

export default App;
