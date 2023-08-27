import React from 'react';
import { useEffect, useState } from 'react';
import './Symbol.css';
import chars from '../../support/chars/chars';

const getRandomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
};

export const Symbol = props => {
  const [state, setState] = useState({ char: getRandomChar() });

  const makeSymbolDynamic = () => {
    setInterval(() => {
      setState({ char: getRandomChar() });
    }, 550);
  };

  useEffect(() => {
    if (props.primary || Math.random() > 0.95) {
      makeSymbolDynamic();
    }
  }, [props.primary]);

  if (props.opacity) {
    const { primary, opacity } = props.opacity;
    return (
      <div
        className={'symbol ' + (primary ? 'primary' : '')}
        style={{ opacity }}
      >
        {state.char}
      </div>
    );
  } else {
    return (
      <div className={'symbol ' + (props.primary ? 'primary' : '')}>
        {state.char}
      </div>
    );
  }
};
