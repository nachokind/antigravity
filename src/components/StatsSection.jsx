import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './StatsSection.css';

const statsData = [
    { id: 1, label: "Constructors'", value: 16, suffix: "" },
    { id: 2, label: "Drivers'", value: 15, suffix: "" },
    { id: 3, label: "Race Wins", value: 243, suffix: "+" },
    { id: 4, label: "Podium Finishes", value: 800, suffix: "+" }
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            // Duration in ms
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));

            if (end === 0) return;

            const timer = setInterval(() => {
                start += 1;
                setCount(String(start) + suffix);
                if (start === end) clearInterval(timer);
            }, stepTime === 0 ? 10 : stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, suffix]);

    return <span ref={ref}>{count === 0 ? "0" : count}</span>;
};

const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="stat-value">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
