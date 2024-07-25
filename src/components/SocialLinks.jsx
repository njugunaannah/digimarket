import React from 'react';

const SocialLinks = () => {
    return (
        <section className=" flex space-x-4 justify-center justify-evenly w-full">
            <a href="https://www.linkedin.com/in/annah-njuguna/" target="_blank" rel="noopener noreferrer">
                <svg width="50" height="50">
                    <image href="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn Profile" height="50" width="50" />
                </svg>
            </a>

            <a href="https://github.com/njugunaannah" target="_blank" rel="noopener noreferrer">
                <svg width="50" height="50">
                    <image href="https://static-00.iconduck.com/assets.00/github-inverted-icon-256x249-m68yk5cu.png" alt="Github Profile" height="50" width="50" />
                </svg>
            </a>

            <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                <svg width="50" height="50">
                    <image href="mailto:njugunaannah@gmail.com" alt="Gmail" height="50" width="50" />
                </svg>
            </a>
        </section>
    );
}

export default SocialLinks;
