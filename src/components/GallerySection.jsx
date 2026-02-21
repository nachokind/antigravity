import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './GallerySection.css';

const images = [
    {
        id: 1,
        driverId: "leclerc",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/1280px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg",
        alt: "Charles Leclerc",
        title: "Charles Leclerc",
        number: "16"
    },
    {
        id: 2,
        driverId: "hamilton",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
        alt: "Lewis Hamilton",
        title: "Lewis Hamilton",
        number: "44"
    },
    {
        id: 3,
        driverId: "car",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ferrari_F1-75_in_Melbourne.jpg",
        alt: "Ferrari F1 Car",
        title: "Scuderia Ferrari",
        number: "SF-24"
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
                    <span className="section-subtitle">2026 Lineup</span>
                    <h2 className="section-title">The <span className="text-gradient">Drivers</span></h2>
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
                            {img.driverId !== "car" ? (
                                <Link to={`/driver/${img.driverId}`} className="image-wrapper">
                                    <img src={img.url} alt={img.alt} />
                                    <div className="image-overlay">
                                        <div className="driver-info-hover">
                                            <h3>{img.title}</h3>
                                            <span>#{img.number}</span>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="image-wrapper">
                                    <img src={img.url} alt={img.alt} />
                                    <div className="image-overlay">
                                        <div className="driver-info-hover">
                                            <h3>{img.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
