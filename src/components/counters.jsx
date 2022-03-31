import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <div>Title {counter.id}</div>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
