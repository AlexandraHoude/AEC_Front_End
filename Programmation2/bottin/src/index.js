import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "/component/App/App.js";
import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/Card/Cards";

ReactDOM.render(<Card />, document.getElementById("root"));
