"use client";

import Footer from '../../components/Footer';
import styles from '../../styles/Industries.module.css';
import { AiFillTool, AiOutlineWarning, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaHardHat, FaRobot, FaEye, FaTruckMonster, FaCogs } from 'react-icons/fa';
import { MdConstruction, MdSecurity, MdAnalytics, MdWork } from 'react-icons/md';

const Industries = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1>Enhancing Safety in Mining & Construction</h1>
    <p>AI-driven solutions for risk mitigation, predictive maintenance, and operational efficiency.</p>
  </div>
</section>


        {/* AI in Mining Safety */}
        <section className={styles.section}>
          <h2>AI in Mining Safety</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <AiFillTool className={styles.icon} />
              <h3>Predictive Maintenance</h3>
              <p>AI predicts equipment failures before they happen, reducing downtime and preventing accidents.</p>
            </div>
            <div className={styles.card}>
              <AiOutlineWarning className={styles.icon} />
              <h3>Hazard Identification</h3>
              <p>Advanced AI scans for gas leaks, unstable structures, and hazardous weather conditions.</p>
            </div>
            <div className={styles.card}>
              <MdAnalytics className={styles.icon} />
              <h3>Real-Time Data Analytics</h3>
              <p>AI processes vast amounts of data to detect patterns and optimize safety protocols.</p>
            </div>
            <div className={styles.card}>
              <FaTruckMonster className={styles.icon} />
              <h3>Autonomous Vehicles & Drones</h3>
              <p>AI-powered machines operate in dangerous areas, reducing human exposure to risks.</p>
            </div>
          </div>
        </section>

        {/* AI in Construction Safety */}
        <section className={styles.section}>
          <h2>AI in Construction Safety</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <FaEye className={styles.icon} />
              <h3>AI Site Monitoring</h3>
              <p>AI cameras detect unsafe behaviors and alert supervisors in real time.</p>
            </div>
            <div className={styles.card}>
              <FaRobot className={styles.icon} />
              <h3>Automated Safety Training</h3>
              <p>VR & AI-powered simulations prepare workers for high-risk situations.</p>
            </div>
            <div className={styles.card}>
              <MdConstruction className={styles.icon} />
              <h3>Risk Assessment & Planning</h3>
              <p>AI analyzes blueprints to identify structural and operational hazards before construction begins.</p>
            </div>
            <div className={styles.card}>
              <FaCogs className={styles.icon} />
              <h3>AI-Powered Robotics</h3>
              <p>AI robots assist in high-risk tasks like welding, bricklaying, and lifting heavy materials.</p>
            </div>
          </div>
        </section>

        {/* Challenges & Considerations */}
        <section className={styles.section}>
          <h2>Challenges in AI Adoption</h2>
          <ul className={styles.list}>
            <li><MdSecurity className={styles.listIcon} /> Data security & privacy concerns in AI-driven systems.</li>
            <li><MdWork className={styles.listIcon} /> Workforce reskilling to adapt to AI integration.</li>
            <li><AiOutlineSafetyCertificate className={styles.listIcon} /> Compliance with South African safety regulations.</li>
          </ul>
        </section>

        {/* Future of AI in Safety */}
        <section className={styles.section}>
          <h2>The Future of AI in Mining & Construction</h2>
          <p>AI continues to advance, promising better risk detection, automation, and operational improvements.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
