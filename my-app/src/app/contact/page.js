"use client";
import { useState } from "react";
import styles from "../../styles/Contact.module.css"; // Updated import
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../../components/Footer";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mzzdrnbw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        e.target.reset(); // Reset the form after success
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <h1>Contact Us</h1>
        <p>We’re here to help! Get in touch with us.</p>
      </section>

      <div className={styles.contactContainer}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <h3>Our Location</h3>
            <p>Rustenburg, South Africa</p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaPhoneAlt className={styles.contactIcon} />
            <h3>Call Us</h3>
            <p>(+27)69 555 6960</p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaEnvelope className={styles.contactIcon} />
            <h3>Email Us</h3>
            <p>okuhlebadli@outlook.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.contactFormGroup}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.contactFormGroup}>
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className={styles.contactFormGroup}>
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Your Subject" required />
            </div>
            <div className={styles.contactFormGroup}>
              <label>Message</label>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.contactSubmitBtn}>Send Message</button>
          </form>
          {status && <p className={styles.contactStatus}>{status}</p>}
        </div>
      </div>
      {/* <Footer /> */}
      <hr/>
      <br/>
      <div className={styles.footerBottom}>
          <p>&copy; 2024 Nhanha Engineering. All rights reserved.</p>
        </div>
        <br/>
      
    </main>
  );
}