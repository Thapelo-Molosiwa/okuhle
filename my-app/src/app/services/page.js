"use client";

import React from "react";
import { Clipboard, ShieldCheck, HardHat } from "lucide-react";
import Link from "next/link"; // Using Next.js Link component for navigation
import styles from "@/styles/Services.module.css"; // Importing the CSS Module
import Footer from "@/components/Footer";

const services = [
  {
    icon: <Clipboard className={styles.icon} />,
    title: "AI-Driven Safety Monitoring",
    description:
      "We leverage real-time sensor data and AI-powered analytics to detect hazards before they escalate, ensuring proactive accident prevention and rapid response.",
    features: [
      "Risk assessment",
      "Risk prevention",
      "Instant alerts",
      "Real-time monitoring",
    ],
  },
  {
    icon: <ShieldCheck className={styles.icon} />,
    title: "Drone-Based Verification & Predictive Maintenance",
    description:
      "Our drones verify safety data, while predictive maintenance technology prevents equipment failures, ensuring efficiency and reliability.",
    features: [
      "Safety protocols",
      "Emergency response",
      "Aerial assessment",
      "First aid certification",
    ],
  },
  {
    icon: <HardHat className={styles.icon} />,
    title: "Safety Solutions for Underground & Surface Operations",
    description:
      "We provide customized safety solutions tailored for both underground and surface mining, enhancing worker safety and operational efficiency.",
    features: [
      "Site adaptation",
      "Equipment maintenance",
      "Technology integration",
      "Regular inspections",
    ],
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section
        className={styles.hero}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("DALL·E 2025-01-30 11.57.49 - A high-quality professional image of mining and construction workers wearing full safety gear, including helmets and vests, standing in an industrial .webp")',
        }}
      >
        <div className={styles.heroContent}>
          <h1>Our Services</h1>
          <p>Comprehensive safety solutions for your industry</p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.serviceCard}>
          <h3 className={styles.cardTitle}>Transforming safety and performance in mining and construction with innovation</h3>
          <div className={styles.cardContent}>
            <p>
              At Nhanha Engineering, we are revolutionizing safety and
              efficiency in the mining and construction industries through
              cutting-edge technology. Our AI-driven safety monitoring system
              uses real-time sensor data and predictive analytics to identify
              and mitigate risks before they escalate, ensuring proactive
              accident prevention. Complemented by drone-based verification, we
              enhance accuracy and reliability while minimizing downtime with
              predictive maintenance solutions. Tailored for both underground and
              surface operations, our innovative systems are designed to optimize
              worker safety and operational performance. Currently in the
              development phase, we are prototyping advanced drone and sensor
              technologies to bring this vision to life. Join us as we redefine
              industry standards, transforming high-risk environments into safer,
              smarter workspaces for all.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    <span className={styles.featureDot}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <h2>Our Process</h2>
          <div className={styles.processGrid}>
            {[{
              number: "01",
              title: "Assessment",
              description: "Initial safety assessment and needs analysis",
            }, {
              number: "02",
              title: "Planning",
              description: "Customized safety strategy development",
            }, {
              number: "03",
              title: "Implementation",
              description: "Execution of safety measures and training",
            }, {
              number: "04",
              title: "Monitoring",
              description: "Continuous evaluation and improvement",
            }].map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Enhance Your Safety Standards?</h2>
          <p>Contact us today to learn how we can help improve safety in your organization.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
