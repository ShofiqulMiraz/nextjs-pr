import Head from "next/head";
import Login from "../components/login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
