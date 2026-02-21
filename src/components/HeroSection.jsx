import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Background Image Element */}
            <div className="video-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/77/2021_British_Grand_Prix_%2851349271106%29.jpg"
                    alt="Charles Leclerc evening race"
                    className="bg-video"
                />
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="hero-subtitle">16 X CONSTRUCTORS' CHAMPION</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                    SCUDERIA
                    <br />
                    <span className="text-gradient">FERRARI</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    "Essere Ferrari"
                </motion.p>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} color="var(--color-accent-red)" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
