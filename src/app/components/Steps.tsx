"use client";
import React from "react";
import styles from "../styles/Steps.module.scss";

const StepsContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="assets/invite.svg" alt="invite friends" />
        <div>
          <p className={styles.step}>Step 1</p>
          <p className={styles.main_text}>INVITE FRIENDS</p>
          <p className={styles.body_text}>
            Refer friends with your unique referral link.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <img src="assets/collect-coins.svg" alt="collect coins" />
        <div>
          <p className={styles.step}>Step 2</p>
          <p className={styles.main_text}>COLLECT COINS</p>
          <p className={styles.body_text}>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <img src="assets/voucher.svg" alt="voucher" />
        <div>
          <p className={styles.step}>Step 3</p>
          <p className={styles.main_text}>GET VOUCHER</p>
          <p className={styles.body_text}>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsContent;
