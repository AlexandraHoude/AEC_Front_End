import React from 'react';
import { Navigation } from "./Navigation"
import { PiedPage } from "./PiedPage";
import { Accueil } from "./Accueil";
import { CreerHero } from "./CreerHero";
import { FormModif } from "./FormModif";
import { ListeFicheHero } from "./ListeFicheHero";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
      <div>
      <Navigation />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/CreerHero" component={CreerHero} />
          <Route path="/ListeFicheHero" component={ListeFicheHero} />
          <Route path="/hero/:nom" component={FormModif} />
      </Switch>
          <br/>
      <PiedPage />
      </div>
  );
}

export default App;