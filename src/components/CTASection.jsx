import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-content">
                        <h2 className="cta-title">Join The Journey</h2>
                        <p className="cta-description">
                            Follow Lewis Hamilton's pursuit of greatness on and off the track. Stay updated with the latest news, race results, and exclusive content.
                        </p>
                        <div className="cta-actions">
                            <button className="btn btn-primary">
                                <span>Follow on Instagram</span>
                                <ArrowRight size={20} className="btn-icon" />
                            </button>
                            <button className="btn btn-secondary">
                                <span>Official Store</span>
                            </button>
                        </div>
                    </div>
                    <motion.div
                        className="cta-image-wrapper"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="glow-effect"></div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/2021_United_States_Grand_Prix_23_%28cropped%29.jpg"
                            alt="Hamilton driving"
                            className="cta-image"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
