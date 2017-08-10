import React from 'react';
import * as css from '../Example.scss';

const getFirstText = (type) => {
  let text = '';
  switch (type) {
    case 'default':
      text = 'This will SHOW FIRST and HIDE FIRST';
      break;
    case 'flip':
      text = 'This will SHOW FIRST';
      break;
    case 'reverse-flip':
      text = 'This will HIDE FIRST';
      break;
  }
  return text;
}

const getLastText = (type) => {
  let text = '';
  switch (type) {
    case 'flip':
      text = 'This will HIDE FIRST';
      break;
    case 'reverse':
      text = 'This will SHOW FIRST and HIDE FIRST';
      break;
    case 'reverse-flip':
      text = 'This will SHOW FIRST';
      break;
  }
  return text;
};

class TextHelper extends React.Component {

  render() {

    const {type} = this.props;

    return (
      <div style={{position: 'relative'}}>
        {getFirstText(type) && <div style={{position: 'absolute', left: '-410px', top: '150px'}}>
          <div className={css.arrowTop}>&uarr;</div>
          {getFirstText(type)}
        </div>}
        {getLastText(type) && <div style={{position: 'absolute', left: '0px', top: '150px', width: '250px'}}>
          <div className={css.arrowTop}>&uarr;</div>
          {getLastText(type)}
        </div>}
      </div>
    )
  }
}

export {TextHelper}