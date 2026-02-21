import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './QuoteSection.css';

const QuoteSection = () => {
    return (
        <section className="quote-section">
            <div className="quote-background">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Enzo_Ferrari_Monza_1967.jpg"
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
                        "Ask a child to draw a car, and certainly he will draw it red."
                    </h2>
                    <div className="quote-author">
                        <span className="author-name">Enzo Ferrari</span>
                        <span className="author-title">Il Commendatore</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
