import React from 'react';
import ReactDOM from 'react-dom';
import Hodor from '../src/react-hodor.jsx';

ReactDOM.render(<Hodor />, document.getElementById('hodor'));
ReactDOM.render(<Hodor hodorhodor="10"/>, document.getElementById('hodorhodor'));
ReactDOM.render(<Hodor hodor="hodor" hodorhodor="100"/>, document.getElementById('hodorhodorhodor'));
