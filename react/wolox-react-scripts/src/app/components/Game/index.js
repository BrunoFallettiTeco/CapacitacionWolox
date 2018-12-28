import React from 'react';
import Board from '../Board';

import './styles.scss';

export default class Game extends React.Component {

  componentDidMount() {
    const errors = document.getElementsByClassName("errors");
    window.addEventListener('mousedown', function(e) {
      document.body.classList.add('mouse-navigation');
      document.body.classList.remove('kbd-navigation');
    });
    window.addEventListener('keydown', function(e) {
      if (e.keyCode === 9) {
        document.body.classList.add('kbd-navigation');
        document.body.classList.remove('mouse-navigation');
      }
    });
    window.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
    window.onerror = function(message, source, line, col, error) {
      var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
      errors.textContent += text + '\n';
      errors.style.display = '';
    };
    console.error = (function(old) {
      return function error() {
        errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
        errors.style.display = '';
        old.apply(this, arguments);
      }
    })(console.error);
  }

  render() {
    return (
      <React.Fragment>
        <div class="errors"></div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
