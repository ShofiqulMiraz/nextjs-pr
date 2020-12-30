import NavBar from "../components/navbar/nav";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
