import Sidenav from "./component/Sidenav";
import Main from "./component/Main";
import Exp from "./component/Exp";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Exp />
      <Project />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
