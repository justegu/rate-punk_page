"use client";
import React from "react";
import styles from "../styles/Store.module.scss";

const Store = () => {
  return (
    <div className={styles.store_cont}>
      <a href="#">
        <img src="/assets/chrome.svg" alt="chrome web store" />
        <div>
          <p className={styles.top}>available in the</p>
          <p className={styles.bottom}>chrome web store</p>
        </div>
      </a>
      <a href="#">
        <img src="/assets/apple.svg" alt="chrome web store" />
        <div>
          <p className={styles.top}>available in the</p>
          <p className={styles.bottom}>apple app store</p>
        </div>
      </a>
      <div className={styles.stars_cont}>
        <div>
          <img src="/assets/star.svg" alt="star" />
          <img src="/assets/star.svg" alt="star" />
          <img src="/assets/star.svg" alt="star" />
          <img src="/assets/star.svg" alt="star" />
          <img src="/assets/star.svg" alt="star" />
        </div>
        <p>Chrome Store reviews</p>
      </div>
    </div>
  );
};

export default Store;
