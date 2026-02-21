import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './QuoteSection.css';

const QuoteSection = () => {
    return (
        <section className="quote-section">
            <div className="quote-background">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/de/FIA_F1_Austria_2018_Handshake_after_Qualifying.jpg"
                    alt="Abstract Background"
                    className="bg-img"
                />
                <div className="bg-overlay"></div>
            </div>

            <div className="container">
                <motion.div
                    className="quote-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <Quote size={48} className="quote-icon" />
                    <h2 className="quote-text">
                        "In racing there are always things you can learn, every single day. There is always space for improvement, and I think that applies to everything in life."
                    </h2>
                    <div className="quote-author">
                        <span className="author-name">Lewis Hamilton</span>
                        <span className="author-title">7x Formula 1 World Champion</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
