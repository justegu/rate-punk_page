"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Form.module.scss";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const API_URL = "https://api.jsonbin.io/v3/b/65df9e7c1f5677401f35d2a9";
  const API_KEY =
    "$2a$10$JIGdL1.FS34u5/EM9F0xRuPvFTo86yUVrMU2k4Z7JXGcE4AS2j1ay";

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);

    try {
      const response = await axios.get(API_URL, {
        headers: {
          "X-Master-Key": API_KEY,
        },
      });

      let updatedData = {};
      if (response.status === 200) {
        updatedData = { ...response.data.record, email: email };
      } else {
        updatedData = { email: email };
      }

      await axios.put(API_URL, updatedData, {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
      });

      console.log("Email saved to JSONBIN:", email);
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  const handleCopyToClipboard = () => {
    const referralURL = "https://ratepunk.com/referral";
    navigator.clipboard.writeText(referralURL);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>REFER FRIENDS AND GET REWARDS</h1>
      <p className={styles.body_text}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {success && (
        <div className={styles.success}>
          <img src="/assets/success.svg" alt="success" />
          <p>Your email is confirmed!</p>
        </div>
      )}
      {success ? (
        <div className={styles.success_input}>
          <input
            type="string"
            value="https://ratepunk.com/referral"
            className={styles.input}
          />
          {isSmallScreen ? (
            <button className={styles.button} onClick={handleCopyToClipboard}>
              Copy URL
            </button>
          ) : (
            <button className={styles.button} onClick={handleCopyToClipboard}>
              Copy
            </button>
          )}
        </div>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Get Referral Link
          </button>
        </div>
      )}
      <p className={styles.bottom_text}>Limits on max rewards apply.</p>
    </form>
  );
};

export default Form;
