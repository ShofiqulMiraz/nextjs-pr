import Head from "next/head";
import RegistrationForm from "../components/register/register";
import styles from "../styles/register.module.scss";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.registerHead}>Register</h1>
      <div className={styles.register}>
        <RegistrationForm />
      </div>
    </>
  );
};

export default Register;
