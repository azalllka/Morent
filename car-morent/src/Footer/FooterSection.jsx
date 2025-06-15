import React from 'react';

const FooterSection = ({ title, items }) => {
    return (
        <div className="footer-section">
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;