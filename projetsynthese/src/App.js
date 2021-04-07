import React  from 'react';
import './App.scss';
import Accueil from "./component/Public/Accueil";
import {Switch, Route} from "react-router-dom";
import PageOffreStage from "./component/Public/PageOffreStage";
import Candidats from "./component/Public/Candidats";
import APropos from "./component/Public/APropos";
import PageConnexion from "./component/Public/PageConnexion";

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Accueil} exact />
              <Route path="/accueil" component={Accueil} />
              <Route path="/offrestage" component={PageOffreStage} />
              <Route path="/candidats" component={Candidats} />
              <Route path="/connexion" component={PageConnexion} />
              <Route path="/apropos" component={APropos} />
              <Route component={Error} />
          </Switch>
      </main>
  );
}

export default App;
