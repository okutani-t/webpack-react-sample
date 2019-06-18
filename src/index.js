import React from 'react';
import ReactDOM from 'react-dom';

import {SubComponent} from './sub-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <SubComponent name="My Counter!!!" />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.querySelector('#app'));
