"use client";

import Header from "./components/Header";
import Form from "./components/Form";
import styles from "./styles/Home.module.scss";
import Steps from "./components/Steps";
import Store from "./components/Store";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.width}>
          <Form />
          <Steps />
        </div>
      </main>
      <Store />
      <Footer />
    </>
  );
};

export default Home;
