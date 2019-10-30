import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Dashboard from './components/views/DashBoard';
import store from './reduxfiles/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      < Dashboard />
      </div>
    </Provider>
  );
}

export default App;
