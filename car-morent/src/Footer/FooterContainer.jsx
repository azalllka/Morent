import React from 'react';
import FooterLogo from './FooterLogo';
import FooterSection from './FooterSection';
import FooterBottom from './FooterBottom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <FooterLogo />
                <div className="footer-section-all">
                    <FooterSection 
                        title="About" 
                        items={["How it works", "Featured", "Partnership", "Business Relation"]} 
                    />
                    <FooterSection 
                        title="Community" 
                        items={["Events", "Blog", "Podcast", "Invite a friend"]} 
                    />
                    <FooterSection 
                        title="Socials" 
                        items={["Discord", "Instagram", "Twitter", "Facebook"]} 
                    />
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;