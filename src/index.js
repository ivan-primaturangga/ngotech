import React from 'react';
import ReactDOM from 'react-dom';
import Soon from './Soon';

class App extends React.Component {
    render() {
      return (
        <Soon/>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
