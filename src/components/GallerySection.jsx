import React from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

const images = [
    {
        id: 1,
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
        alt: "F1 Car on track"
    },
    {
        id: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/FIA_F1_Imola_2025_No._44_Hamilton.jpg",
        alt: "Driver focus"
    },
    {
        id: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/F1_2014_JAP_Lewis_Hamilton_4968.jpg",
        alt: "Racing Helmet"
    },
    {
        id: 4,
        url: "https://upload.wikimedia.org/wikipedia/commons/9/90/2018_Italian_Grand_Prix_Hamilton_%2844313902384%29.jpg",
        alt: "Celebration"
    }
];

const GallerySection = () => {
    return (
        <section className="gallery-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-subtitle">The Legacy</span>
                    <h2 className="section-title">Driven by <span className="text-gradient-gold">Excellence</span></h2>
                </motion.div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div
                            className={`gallery-item item-${index}`}
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="image-wrapper">
                                <img src={img.url} alt={img.alt} />
                                <div className="image-overlay"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
