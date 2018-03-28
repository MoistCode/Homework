import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import GiphysSearchContainer from './giphys_search_container';
import { configureStore } from '../store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<GiphysSearchContainer store={store} />, root);
});
