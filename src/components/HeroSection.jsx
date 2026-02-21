import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Background Video Element (Placeholder) */}
            <div className="video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="bg-video"
                    poster="https://upload.wikimedia.org/wikipedia/commons/5/56/Lewis_Hamilton_2022_Emilia_Romagna_Grand_Prix.jpg"
                >
                    {/* Using a reliable sample video to demonstrate the background video element feature */}
                    <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="hero-subtitle">7 X WORLD CHAMPION</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                    LEWIS
                    <br />
                    <span className="text-gradient">HAMILTON</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    "Still I Rise"
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
                    <ChevronDown size={32} color="var(--color-accent-blue)" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
