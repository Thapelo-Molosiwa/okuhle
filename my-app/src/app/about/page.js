'use client';
import React from 'react';
import { Shield, Award, Users, Target } from 'lucide-react';
import styles from '../../styles/About.module.css';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className={styles.heroSection}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className={styles.heroTextContainer}>
          <div>
            <h1>About SafetyFirst</h1>
            <p>Leading the way in industrial safety solutions since 1970</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Mission and Vision */}
        <div className={styles.missionVisionContainer}>
          <div>
            <h2>Our Mission</h2>
            <p>
              To revolutionize safety standards in mining and construction industries through innovative solutions, comprehensive training, and unwavering commitment to protecting lives and assets.
            </p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              To be the global leader in industrial safety solutions, setting new benchmarks for workplace safety and creating environments where every worker returns home safely.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={styles.coreValuesGrid}>
          <h2 className={styles.coreValuesHeading}>Our Core Values</h2>
          <div>
            {[
              {
                icon: <Shield className="h-12 w-12 text-[#FFA07A]" />,
                title: 'Safety First',
                description: 'We prioritize safety above all else in every decision and action',
              },
              {
                icon: <Award className="h-12 w-12 text-[#FFA07A]" />,
                title: 'Excellence',
                description: 'We strive for excellence in all our services and solutions',
              },
              {
                icon: <Users className="h-12 w-12 text-[#FFA07A]" />,
                title: 'Collaboration',
                description: 'We work together with our clients to achieve optimal results',
              },
              {
                icon: <Target className="h-12 w-12 text-[#FFA07A]" />,
                title: 'Innovation',
                description: 'We continuously innovate to improve safety standards',
              },
            ].map((value, index) => (
              <div key={index} className={styles.coreValue}>
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <br />
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className={styles.teamSection}>
          <h2>Meet The Founder</h2>
          <div className={styles.founderContainer}>
            {/* Founder Image */}
            <img
              src="DALL·E 2025-01-30 11.57.49 - A high-quality professional image of mining and construction workers wearing full safety gear, including helmets and vests, standing in an industrial .webp" // Add the actual image URL here
              alt="Okuhle Badli"
              className={styles.founderImage}
            />
            {/* Founder Name and Position */}
            <div className={styles.founderName}>Okuhle Badli</div>
            <div className={styles.founderPosition}>Founder</div>

            {/* Founder Description */}
            <div className={styles.founderDescription}>
              <p>
                Okuhle Badli is the visionary founder of Nhanha Engineering, a company dedicated to developing innovative safety solutions for high-risk industries. With a strong academic foundation and diverse professional background, Okuhle is a qualified AI Engineer, holding a diploma in Financial Management, along with certifications in project management and AI engineering.
              </p>
              <p>
                Her technical expertise is complemented by experience in banking, academic administration, and entrepreneurial leadership, which has shaped her holistic approach to problem-solving. Okuhle’s passion for leveraging technology to prevent accidents and enhance operational efficiency drives her work at Nhanha Engineering.
              </p>
              <p>
                As a director of OTOMEX Innovation, she has gained valuable insights into scaling tech-based businesses, while her involvement in the <span className="highlight">54 Collective Academy program</span> equips her with mentorship, networking opportunities, and skill-building tools. Additionally, Okuhle is refining her technical and business skills through incubation programs with <span className="highlight">Deviare</span> and <span className="highlight">Liquid Technology</span>.
              </p>
              <p>
                Despite the challenges of funding and equipment acquisition, Okuhle is unwavering in her mission to establish Nhanha Engineering as a leader in safety technology for the mining and construction industries. With a visionary mindset and a relentless work ethic, she is determined to make a significant impact both locally and globally.
              </p>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className={styles.historyTimeline}>
          <h2>Our Journey</h2>
          <div>
            {[
              {
                year: '2024',
                title: 'Company Founded',
                description: 'Started an AI and tech intro to mining industry',
              },
              {
                year: '____',
                title: 'Expansion',
                description: 'Expanded services to include comprehensive safety training programs',
              },
              {
                year: '____',
                title: 'Technology Integration',
                description: 'Introduced advanced safety monitoring systems',
              },
              {
                year: '____',
                title: 'AI Implementation',
                description: 'Launched AI-powered safety solutions for mining and construction',
              },
            ].map((milestone, index) => (
              <div key={index} className={styles.milestone}>
                <div className={styles.year}>{milestone.year}</div>
                <div className={styles.details}>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
