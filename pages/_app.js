import "../styles/globals.css";
import 'antd/dist/antd.css';
import Layout from "../components/layout/index";

function MyApp({ Component, pageProps }) {
   return (
    <Layout>
       <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
