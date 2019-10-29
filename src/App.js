import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Hello5 from './hello5';
import Hello4 from './hello4';
import {Switch,Route} from "react-router-dom"
import Hello6 from './hello6';
import MyInput from './hello7';
import Hello8 from './hello8';
import Hello9 from './hello9';
import Hello10 from './hello10';
import Hello11 from './hello11';
import Hello12 from './hello12';
import Hello13 from './hello13';
import Hello14 from './hello14';
import Hello15 from './hello15';
import Hello16 from './hello16';
import hello17 from './hello17.js';
import hello18 from './hello18';
import Hello19 from './hello19';
import Hello20 from './hello20';


function App() {
  return (
    <div>
    <Switch>
      <Route exact component={Hello4} path="/hello4" />
      <Route  component={Hello5} path="/hello5" />
      <Route  component={Hello6} path="/hello6" />
      <Route  component={MyInput} path="/hello7" />
      <Route  component={Hello8} path="/hello8" />
      <Route  component={Hello9} path="/hello9" />
      <Route  component={Hello10} path="/hello10" />
      <Route  component={Hello11} path="/hello11" />
      <Route  component={Hello12} path="/hello12" />
      <Route  component={Hello13} path="/hello13" />
      <Route  component={Hello14} path="/hello14" />
      <Route  component={Hello15} path="/hello15" />
      <Route  component={Hello16} path="/hello16" />
      <Route  component={hello17} path="/hello17" />
      <Route  component={hello18} path="/hello18" />
      <Route  component={Hello19} path="/hello19" />
      <Route  component={Hello20} path="/hello20" />
    </Switch>

    </div>
  );
}


export default App;
