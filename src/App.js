import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toHome, toVideo, toPricing, toContact } from "./routes";
import NavBar from "./components/NavBar";
import Video from "./components/Video";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path={toHome()}>
          <Home />
        </Route>
        <Route path={toVideo()}>
          <Video />
        </Route>
        <Route path={toPricing()}>
          <Pricing />
        </Route>
        <Route path={toContact()}>
          <Contact />
        </Route>
        <Route>
          <Redirect to={toHome()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
