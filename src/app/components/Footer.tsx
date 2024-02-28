"use client";
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.width}>
        <div className={styles.container}>
          <div className={styles.logo_text}>
            <img className={styles.logo} src="/assets/logo.svg" alt="logo" />
            <p>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you’re getting the best deal!
            </p>
          </div>
          <div className={styles.links}>
            <h3>QUICK LINKS</h3>
            <div>
              <a href="#">Price Comparison</a>
              <a href="#">Chrome Extension</a>
              <a href="#">How It Works</a>
              <a href="#">Ratepunk Blog</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className={styles.contact_social}>
            <div className={styles.contact}>
              <h3>CONTACT</h3>
              <div>
                <img src="/assets/email-footer.svg" alt="email" />{" "}
                <p>hi@ratepunk.com</p>
              </div>
            </div>

            <div className={styles.social}>
              <h3>SOCIAL</h3>
              <div>
                <div>
                  <img src="/assets/instagram.svg" alt="ig" />
                </div>
                <div>
                  <img src="/assets/facebook.svg" alt="fb" />
                </div>
                <div>
                  <img src="/assets/linkedin.svg" alt="in" />
                </div>
                <div>
                  <img src="/assets/twitter.svg" alt="tw" />
                </div>
                <div>
                  <img src="/assets/tiktok.svg" alt="tiktok" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.rights}>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
