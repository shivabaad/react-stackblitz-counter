import React from 'react';
import './style.css';
import Hello from './components/hello';
import Counters from './components/counters';

export default function App() {
  return (
    <React.Fragment>
      <Counters />
    </React.Fragment>
  );
}
