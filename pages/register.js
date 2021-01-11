import Head from "next/head";
import AddBlog from "../components/register/register";
import styles from "../styles/register.module.scss";

const Register = () => {
  return (
    <>
      <Head>
        <title>Add New Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.registerHead}>Add New Blog</h1>
      <div className={styles.register}>
        <AddBlog />
      </div>
    </>
  );
};

export default Register;
