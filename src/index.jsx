import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Credentials } from "./pages/Credentials/index.jsx";
import { Project } from "./pages/Project/index.jsx";
import { ResumeWebsite } from "./pages/Projects/resume-website.jsx"
import { Grasshopper } from "./pages/Projects/grasshopper.jsx";
import { EldritchTrains } from "./pages/Projects/eldritch-trains.jsx";
import { HomeLab } from "./pages/Projects/home-lab.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/credentials" component={Credentials} />
          <Route path="/project" component={Project} />
          <Route path="/project/eldritch-trains" component={EldritchTrains} />
          <Route path="/project/grasshopper" component={Grasshopper} />
          <Route path="/project/home-lab" component={HomeLab} />
          <Route path="/project/resume-website" component={ResumeWebsite} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
