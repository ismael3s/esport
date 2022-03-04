import React from 'react';
import { ToastContainer } from 'react-toastify';
import { RepositoriesContextProvider } from './hooks/useRepositories';
import { HomePage } from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => (
  <RepositoriesContextProvider>
    <ToastContainer />
    <HomePage />
  </RepositoriesContextProvider>
);

export default App;
