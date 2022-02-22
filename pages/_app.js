import "../styles/globals.css";
import Layout from "../components/layout/index";
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
   return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
