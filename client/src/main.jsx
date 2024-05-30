import UserStore from './store/UserStore';
import GameStore from './store/GameStore';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      game: new GameStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
