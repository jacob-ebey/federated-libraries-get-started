import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromB from 'application_b/SayHelloFromB';

import App from './app';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromB />
  </>,
  document.getElementById('root')
);
