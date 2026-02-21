import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Flag, Timer } from 'lucide-react';
import './DriverProfile.css';

const driverData = {
    leclerc: {
        name: "Charles Leclerc",
        number: "16",
        role: "Scuderia Ferrari Race Driver",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/1280px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg",
        bio: "Born in Monaco, Charles Leclerc has racing in his blood. A product of the Ferrari Driver Academy, he quickly ascended the ranks to join the Scuderia. Known for his blistering qualifying pace and aggressive yet calculated race craft, Leclerc is the modern talisman for the Prancing Horse, embodying the passion and speed that defines Ferrari.",
        stats: {
            wins: "7+",
            poles: "23+",
            podiums: "30+"
        }
    },
    hamilton: {
        name: "Lewis Hamilton",
        number: "44",
        role: "Scuderia Ferrari Race Driver",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg/1280px-Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg",
        bio: "Sir Lewis Hamilton is a living legend in Formula 1. With a record-tying seven World Championships, he has redefined what is possible in the sport. His move to Scuderia Ferrari for 2025/2026 marks a historic chapter, combining the most successful driver of his generation with the most iconic team in motorsport history.",
        stats: {
            wins: "103+",
            poles: "104+",
            podiums: "197+"
        }
    }
};

const DriverProfile = () => {
    const { id } = useParams();
    const driver = driverData[id];

    if (!driver) {
        return (
            <div className="profile-error">
                <h2>Driver not found</h2>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="driver-profile-page">
            <Link to="/" className="back-button">
                <ArrowLeft size={24} />
                <span>Back to Team</span>
            </Link>

            <div className="profile-hero">
                <div className="profile-image-container">
                    <motion.img
                        src={driver.image}
                        alt={driver.name}
                        className="profile-image"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="profile-image-overlay"></div>
                </div>

                <div className="profile-content">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="driver-number">#{driver.number}</div>
                        <h1 className="driver-name">{driver.name}</h1>
                        <h2 className="driver-role text-gradient-gold">{driver.role}</h2>
                    </motion.div>

                    <motion.div
                        className="driver-stats-cards"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="stat-sm-card">
                            <Trophy className="stat-icon" />
                            <div className="stat-sm-value">{driver.stats.wins}</div>
                            <div className="stat-sm-label">Wins</div>
                        </div>
                        <div className="stat-sm-card">
                            <Timer className="stat-icon" />
                            <div className="stat-sm-value">{driver.stats.poles}</div>
                            <div className="stat-sm-label">Poles</div>
                        </div>
                        <div className="stat-sm-card">
                            <Flag className="stat-icon" />
                            <div className="stat-sm-value">{driver.stats.podiums}</div>
                            <div className="stat-sm-label">Podiums</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="driver-bio"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p>{driver.bio}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;
