import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <header className="brand-header">
            <div className="header-container">
                <div className="logo">
                    SCUDERIA<span>FERRARI</span>
                </div>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isDarkMode ? 0 : 180 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="toggle-icon-wrapper"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                </button>
            </div>
        </header>
    );
};

export default Header;
