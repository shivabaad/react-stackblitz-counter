import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter key={counter.key} value={counter.value} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
