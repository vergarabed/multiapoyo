import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store';

import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  function changeURL(url) {
    router.push(url)
  }

  return (
  <>
  <Provider store={store}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <a onClick={() => { changeURL('/users/list');}}>Listado Usuarios</a>
    <a onClick={() => { changeURL('/users/posts');}}>Posts</a>
    <a onClick={() => { changeURL('/users/albums');}}>Albums</a>
    <a onClick={() => { changeURL('/login');}}>Close Sesion</a>
    <Component {...pageProps} />
  </Provider>
  </>
  );
  }

  export default MyApp;