import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import './index.css';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
