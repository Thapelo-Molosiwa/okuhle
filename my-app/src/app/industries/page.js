"use client";

import Footer from "../../components/Footer";
import styles from "../../styles/Industries.module.css";
import {
  AiFillTool,
  AiOutlineWarning,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import {
  FaHardHat,
  FaRobot,
  FaEye,
  FaTruckMonster,
  FaCogs,
} from "react-icons/fa";
import {
  MdConstruction,
  MdSecurity,
  MdAnalytics,
  MdWork,
} from "react-icons/md";

const Industries = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Enhancing Safety in Mining & Construction</h1>
            <p>
              AI-driven solutions for risk mitigation, predictive maintenance,
              and operational efficiency.
            </p>
          </div>
        </section>
        <hr />

        {/* Blog Section */}
        <section className={styles.blogSection}>
          <h2>
            Revolutionizing Mining and Construction Safety with AI: Nhanha
            Engineering's Vision
          </h2>
          <p>
            In today's rapidly evolving industrial landscape,{" "}
            <strong>Nhanha Engineering</strong> is leading the charge in
            revolutionizing safety practices within the mining and construction
            industries. With the integration of cutting-edge technologies such
            as Artificial Intelligence (AI), machine learning, and drone
            technologies, Nhanha Engineering want to help these industries to improve
            operational efficiency, reduce risks, and save lives.
          </p>
          <h3>AI at the Heart of Safety Innovation</h3>
          <p>
            At Nhanha Engineering, we believe that innovation in safety is not
            just about meeting regulatory standards; it's about creating an
            environment where workers can operate without fear of harm. Our
            AI-driven solutions are designed to identify risks in real-time,
            predict potential failures, and assist in proactive decision-making.
          </p>
          <p>
            We understand that the mining and construction sectors face unique
            challenges – from hazardous conditions to unpredictable weather –
            which is why our solutions are tailored to tackle these challenges
            head-on. Whether it's through real-time monitoring, predictive
            maintenance, or drone-assisted safety checks, Nhanha Engineering is
            committed to enhancing safety across every aspect of the job.
          </p>
          <h3>Innovative Technologies for a Safer Tomorrow</h3>
          <p>
            By implementing AI-driven technologies, we’re not just automating
            tasks, but transforming the way industries approach safety and risk
            management. Through AI, we are improving risk prediction and hazard
            detection, leading to quicker responses, better prevention
            strategies, and ultimately a reduction in fatalities and injuries on
            the job.
          </p>
          <p>
            From AI monitoring cameras to automated training simulations, Nhanha
            Engineering is shaping the future of mining and construction safety
            with technology that can anticipate and mitigate risks before they
            escalate.
          </p>
        </section>

        {/* AI in Mining Safety */}
        <section className={styles.section}>
          <h2>AI in Mining Safety</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <AiFillTool className={styles.icon} />
              <h3>Predictive Maintenance</h3>
              <p>
                AI predicts equipment failures before they happen, reducing
                downtime and preventing accidents.
              </p>
            </div>
            <div className={styles.card}>
              <AiOutlineWarning className={styles.icon} />
              <h3>Hazard Identification</h3>
              <p>
                Advanced AI scans for gas leaks, unstable structures, and
                hazardous weather conditions.
              </p>
            </div>
            <div className={styles.card}>
              <MdAnalytics className={styles.icon} />
              <h3>Real-Time Data Analytics</h3>
              <p>
                AI processes vast amounts of data to detect patterns and
                optimize safety protocols.
              </p>
            </div>
            <div className={styles.card}>
              <FaTruckMonster className={styles.icon} />
              <h3>AI integrated Drones</h3>
              <p>
                AI-powered drones operate in dangerous areas, reducing human
                exposure to risks.
              </p>
            </div>
          </div>
        </section>

        {/* AI in Construction Safety */}
        <section className={`${styles.section} ${styles.aiConstruction}`}>
          <h2>AI in Construction Safety</h2>
          <p>
            Harnessing the power of AI to enhance construction site safety
            through real-time monitoring, predictive analytics, and smart
            training.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <FaEye className={styles.icon} />
              <h3>AI Site Monitoring</h3>
              <p>
                AI cameras detect unsafe behaviors and alert supervisors in real
                time.
              </p>
            </div>
            <div className={styles.card}>
              <FaRobot className={styles.icon} />
              <h3>Automated Safety Training</h3>
              <p>
                VR & AI-powered simulations prepare workers for high-risk
                situations.
              </p>
            </div>
            <div className={styles.card}>
              <MdConstruction className={styles.icon} />
              <h3>Risk Assessment & Planning</h3>
              <p>
                AI analyzes blueprints to identify structural and operational
                hazards before construction begins.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges & Considerations */}
        <section className={styles.section}>
          <h2>Challenges in AI Adoption</h2>
          <ul className={styles.list}>
            <li>
              <MdSecurity className={styles.listIcon} /> Data security & privacy
              concerns in AI-driven systems.
            </li>
            <li>
              <MdWork className={styles.listIcon} /> Workforce reskilling to
              adapt to AI integration.
            </li>
            <li>
              <AiOutlineSafetyCertificate className={styles.listIcon} />{" "}
              Compliance with South African safety regulations.
            </li>
          </ul>
        </section>

        {/* Future of AI in Safety */}
        <section className={styles.section}>
          <h2>The Future of AI in Mining & Construction</h2>
          <p>
            AI continues to advance, promising better risk detection,
            automation, and operational improvements.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
