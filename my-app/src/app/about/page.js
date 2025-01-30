"use client";

import styles from '../../styles/About.module.css';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div className={styles.container}>
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>About Us</h1>
          <p>We are dedicated to enhancing safety in mining and construction through innovative AI-driven solutions.</p>
        </section>

        {/* Our Mission */}
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>Our mission is to revolutionize safety standards by using cutting-edge technology to mitigate risks and ensure operational efficiency in hazardous industries like mining and construction.</p>
        </section>

        {/* Our Team */}
        <section className={styles.section}>
          <h2>Our Team</h2>
          <div className={styles.team}>
            <div className={styles.teamMember}>
              <img src="/images/team-member1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/team-member2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Lead Engineer</p>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/team-member3.jpg" alt="Team Member 3" />
              <h3>Sam Green</h3>
              <p>Safety Consultant</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
