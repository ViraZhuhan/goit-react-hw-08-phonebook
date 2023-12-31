import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants';
import { App } from 'components/App/App';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>

);
