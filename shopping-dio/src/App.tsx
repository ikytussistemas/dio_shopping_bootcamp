import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routes';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './components/store';


function App() {

  const localCart = localStorage.getItem('dioshopping: cart');

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
      </Provider>
    </div>
  )
}

export default App
