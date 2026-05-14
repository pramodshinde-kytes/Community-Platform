import React from 'react'
import { motion } from 'framer-motion'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* LEFT */}
          <div className="col-lg-6">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="hero-tag">
                Welcome to Kytes Community
              </p>

              <h1 className="hero-title">
                Connect.
                <br />
                Learn.
                <br />
                Grow Together.
              </h1>

              <p className="hero-description">
                Join a powerful tech community where developers,
                creators, mentors, and innovators collaborate
                and grow together.
              </p>

              <div className="hero-buttons">

                <button className="hero-primary-btn">
                  Join Community
                </button>

                <button className="hero-secondary-btn">
                  Explore Discussions
                </button>

              </div>

            </motion.div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >

              <div className="hero-card">

                <div className="row g-4">

                  <div className="col-6">
                    <div className="stat-card">
                      <h3>50K+</h3>
                      <p>Community Members</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-card">
                      <h3>1K+</h3>
                      <p>Events Hosted</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-card">
                      <h3>500+</h3>
                      <p>Experts</p>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-card">
                      <h3>24/7</h3>
                      <p>Support</p>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection