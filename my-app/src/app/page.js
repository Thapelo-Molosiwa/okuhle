'use client';  // This marks the file as a client-side component

import React from 'react';
import { Shield, Users, Award, HardHat } from 'lucide-react';
import Link from 'next/link';  // Use Next.js Link for navigation

import styles from '../styles/Home.module.css';  // Import CSS Module
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
            alt="Construction site"
            className={styles.heroImage}
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Safety First, <br />Always
          </h1>
          <p className={styles.heroDescription}>
            Provider of comprehensive safety solutions for mining and construction industries.
          </p>
          <Link href="/contact" className={styles.heroButton}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresHeading}>
            <h2>Why Choose Nhanha Engineering?</h2>
            <p>
            We provide cutting-edge safety solutions powered by advanced technology and a strong commitment to excellence in mining and construction.

            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {[ 
              { icon: <Shield className={styles.icon} />, title: 'Certified Safety', description: 'ISO certified safety protocols and procedures' },
              { icon: <Users className={styles.icon} />, title: 'Expert Team', description: 'Highly trained safety professionals' },
              { icon: <Award className={styles.icon} />, title: 'Industry Leading', description: 'Award-winning safety solutions' },
              { icon: <HardHat className={styles.icon} />, title: 'Complete Solutions', description: 'End-to-end safety management' }
            ].map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <br/>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Enhance Your Safety Standards?</h2>
          <p>Contact us today to learn how we can help improve safety in your organization.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
