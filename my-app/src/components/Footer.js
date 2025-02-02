import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';  // Import the corresponding CSS module

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>NhaNha Engineering</h3>
            <p className={styles.description}>
              Your Safety Is Our Priority.
            </p>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/industries" className={styles.link}>Industries</Link></li>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/news" className={styles.link}>News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={16} />
                <span>(+27)69 555 6960 </span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} />
                <span>okuhlebadli@outlook.com</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>123 nhanha, Rustenburg</span>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Nhanha Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
