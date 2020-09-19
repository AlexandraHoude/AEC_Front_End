import React from 'react';
import { Navigation } from "./Navigation"
import { PiedPage } from "./PiedPage";
import { Accueil } from "./Accueil";
import { CreerHero } from "./CreerHero";
import ListeFicheHero from "./ListeFicheHero";
import { Route, Switch} from "react-router-dom";

function App() {
  return (
      <div>
      <Navigation />
      <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/CreerHero" component={CreerHero} />
          <Route path="/ListeFicheHero" component={ListeFicheHero} />
      </Switch>
          <br/>
      <PiedPage />
      </div>
  );
}


export default App;