import "bootstrap/dist/css/bootstrap.min.css";
//import "../styles/";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";
import MyGlobalStyle from "../styles/globalStyles";
import Head from "next/head";
import MainLayout from "../Layout/MainLayout";
import PageWithLayoutType from "../types/layout";

import { Provider } from "react-redux";
import { store } from '../redux/store';
import {PersistGate} from 'redux-persist/es/integration/react'
import {persistStore} from 'redux-persist'




type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  // pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || MainLayout;
  // const Layout = Component.layout || ((children) => <>{children}</>);
let persistor =persistStore(store)
  return (
    <>
      
    <Provider store={store} > 
      <ThemeProvider theme={themes}>
        <MyGlobalStyle />
        <Head>
          <title>|*BOOKSTORE*|</title>
          <meta name="description" content="Read book" />
          {/* <link rel="icon" href="/images/common/small-logo.svg" /> */}
        </Head>
      
        <Layout>
       
          <Component {...pageProps} />
         
        </Layout>
        
      </ThemeProvider>
      </Provider> 
    </>
  );
}

export default MyApp;