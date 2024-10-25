// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
function App({ count, increment, decrement }) {
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = {
  increment,
  decrement,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
