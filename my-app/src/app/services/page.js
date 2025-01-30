"use client";

import React from "react";
import {
  Clipboard,
  Users,
  HardHat,
  Shield,
  AlertTriangle,
  FileCheck,
} from "lucide-react";
import Link from "next/link"; // Using Next.js Link component for navigation
import styles from "@/styles/Services.module.css"; // Importing the CSS Module
import Footer from "@/components/Footer";

const services = [
  {
    icon: <Clipboard className={styles.icon} />,
    title: "Safety Auditing",
    description:
      "Comprehensive safety audits to identify risks and ensure compliance with industry standards.",
    features: [
      "Risk assessment",
      "Compliance verification",
      "Documentation review",
      "Improvement recommendations",
    ],
  },
  {
    icon: <Users className={styles.icon} />,
    title: "Training Programs",
    description:
      "Expert-led safety training programs customized for your workforce.",
    features: [
      "Safety protocols",
      "Emergency response",
      "Equipment operation",
      "First aid certification",
    ],
  },
  {
    icon: <HardHat className={styles.icon} />,
    title: "Equipment Solutions",
    description: "State-of-the-art safety equipment and monitoring systems.",
    features: [
      "PPE assessment",
      "Equipment maintenance",
      "Technology integration",
      "Regular inspections",
    ],
  },
  {
    icon: <Shield className={styles.icon} />,
    title: "Risk Management",
    description: "Proactive risk management strategies to prevent incidents.",
    features: [
      "Hazard identification",
      "Risk mitigation plans",
      "Safety protocols",
      "Regular assessments",
    ],
  },
  {
    icon: <AlertTriangle className={styles.icon} />,
    title: "Emergency Response",
    description: "24/7 emergency response planning and support services.",
    features: [
      "Response planning",
      "Team training",
      "Equipment provision",
      "Incident investigation",
    ],
  },
  {
    icon: <FileCheck className={styles.icon} />,
    title: "Compliance Management",
    description: "Ensure adherence to safety regulations and standards.",
    features: [
      "Regulatory compliance",
      "Documentation management",
      "Regular updates",
      "Audit preparation",
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
        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3>{service.title}</h3>
              <br/>
              <p>{service.description}</p>
              <br/>
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
            {[
              {
                number: "01",
                title: "Assessment",
                description: "Initial safety assessment and needs analysis",
              },
              {
                number: "02",
                title: "Planning",
                description: "Customized safety strategy development",
              },
              {
                number: "03",
                title: "Implementation",
                description: "Execution of safety measures and training",
              },
              {
                number: "04",
                title: "Monitoring",
                description: "Continuous evaluation and improvement",
              },
            ].map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
