import * as React from 'react';
import Dropdown from 'wix-style-react/dist/src/Dropdown';
import {func, bool} from 'prop-types';

const options = [
  {id: 'enter', value: 'enter'},
  {id: 'entering', value: 'entering'},
  {id: 'entered', value: 'entered'},
  {id: 'exit', value: 'exit'},
  {id: 'exiting', value: 'exiting'}
];

const styles = {
  position: 'fixed',
  background: '#f27052',
  padding: '20px 30px 20px',
  color: 'white',
  fontSize: '16px',
  borderRadius: '5px',
  boxShadow: '0 0 10px grey'
};

class Debug extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      debug: false,
      vertical: 'top',
      horizontal: 'right'
    };
  }

  onSelect({id}) {
    this.setState({debug: id});
    this.props.onSelect(id);
  }

  render() {

    const {hasChildren} = this.props;
    const {vertical, horizontal} = this.state;

    return (
      <div style={{...styles, [vertical]: vertical === 'bottom' ? '120px' : '20px', [horizontal]: '20px'}}>
        <div style={{marginBottom: '20px', fontWeight: 'bold'}}>
          Animator Debugger{hasChildren ? ' - Choose Debug Phase' : ''}</div>
        {hasChildren && <Dropdown
          placeholder="Click me to debug!"
          selectedId={this.state.debug}
          onSelect={option => this.onSelect(option)}
          options={options}
          />}
        {!hasChildren && <div style={{width: '350px', fontSize: '16px', marginTop: '15px', lineHeight: '24px', border: '1px solid white', padding: '15px'}}>There are no existing children inside your Animator Component. Make sure your children are mounted to get this debugger working.</div>}
        <div style={{fontSize: '14px', marginTop: '20px', opacity: 0.8}}>
          Box Position: &nbsp;
          <span style={{cursor: 'pointer'}}>
            {vertical !== 'top' && <span>
              <a onClick={() => this.setState({vertical: 'top'})}>Set Top</a>,&nbsp;
            </span>}
            {vertical === 'top' && <span>
              <a onClick={() => this.setState({vertical: 'bottom'})}>Set Bottom</a>,&nbsp;
            </span>}
            {horizontal !== 'right' && <a onClick={() => this.setState({horizontal: 'right'})}>Set Right</a>}
            {horizontal === 'right' && <a onClick={() => this.setState({horizontal: 'left'})}>Set Left</a>}
          </span>
        </div>
      </div>);
  }
}

Debug.propTypes = {
  onSelect: func,
  hasChildren: bool
};


export default Debug;
