import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Button } from './components';

render(
  <Button />,
  document.getElementById('root')
);
