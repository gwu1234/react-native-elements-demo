import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Buttons from './src/components/Buttons';
import Cards from './src/components/Cards';
import Badges from './src/components/Badges';
import CheckBoxes from './src/components/CheckBoxes';
import Lists from './src/components/lists';
import Forms from './src/components/Forms';
import Hooks from './src/components/Hooks';

class App extends Component {
    constructor() {
          super();
    }
    render() {

      return (
          <Router >
              <Scene key="root" hideNavBar >
                  <Scene key="buttons" component={Buttons} title="Buttons" />
                  <Scene key="cards" component={Cards} title="cards" />
                  <Scene key="badges" component={Badges} title="badges" />
                  <Scene key="checkboxes" component={CheckBoxes} title="checkboxes" />
                  <Scene key="lists" component={Lists} title="lists" />
                  <Scene key="forms" component={Forms} title="forms" />
                  <Scene key="hooks" component={Hooks} title="hooks" />
              </Scene>
         </Router>
       );
    };
};

export default App;