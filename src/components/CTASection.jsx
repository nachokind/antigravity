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
                        <h2 className="cta-title">Join The Tifosi</h2>
                        <p className="cta-description">
                            Follow Scuderia Ferrari's pursuit of greatness on and off the track. Stay updated with the latest news, race results, and exclusive content.
                        </p>
                        <div className="cta-actions">
                            <a href="https://www.instagram.com/scuderiaferrari/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                                <span>Follow on Instagram</span>
                                <ArrowRight size={20} className="btn-icon" />
                            </a>
                            <a href="https://store.ferrari.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                                <span>Official Store</span>
                            </a>
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
                            src="https://upload.wikimedia.org/wikipedia/commons/9/98/Ferrari_F1-75_in_Melbourne.jpg"
                            alt="Ferrari Team Car"
                            className="cta-image"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
