import './App.css';
import Artifacts from './Tabs/Artifacts';
import Projects from './Tabs/Projects';
import AboutMe from './Tabs/AboutMe';
import TabBar from './Tabs/TabBar';


function App() {
  return (
    <div>
      <TabBar/>
      <AboutMe/>
      <Projects/>
      <Artifacts/>
    </div>
  );
}


export default App;
