import React from 'react';
import s from './App.scss';
import Animator from '../../components/Animator';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'Hello World!'}</h2>
          <button onClick={() => this.setState({show: !this.state.show})}>Click To See Animation</button>
          <Animator show={this.state.show} opacity height>Under constructor, but will be here soon!</Animator>
        </div>
        <p className={s.intro}>
          {'Get started here: https://github.com/wix/yoshi'}
        </p>
      </div>
    );
  }
}

export default App;
