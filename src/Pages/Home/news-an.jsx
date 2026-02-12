import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    const [displayedRole, setDisplayedRole] = useState("");

    const roles = [
        "Développeur Front-end",
        "Intégrateur Web",
        "Développeur WordPress"
    ];

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setDisplayedRole(currentRole.substring(0, charIndex - 1));
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(typeWriter, 500);
                    return;
                }
            } else {
                setDisplayedRole(currentRole.substring(0, charIndex + 1));
                charIndex++;

                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 2500);
                    return;
                }
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, speed);
        }

        typeWriter();
    }, []);

    return (
        <main id="site-main">
            <section className="hero-section">
                <div className="container">
                    <h2 className="greeting">Bonjour, je suis</h2>
                    <h1 className="name">Santatra Michado</h1>
                    <div className="role-container">
                        <span className="role">{displayedRole}</span>
                    </div>
                    <p className="description">
                        Passionné par la création d'expériences web modernes et intuitives.
                        Je transforme vos idées en sites web performants et élégants avec une
                        attention particulière aux détails et à l'expérience utilisateur.
                    </p>
                    <a
                        className="btn btn-primary btn-xl text-uppercase animated animatedFadeInUp fadeInUp"
                        href="/cv-santatra.pdf"
                        download="Santatra-Michado-CV.pdf"
                    >
                        {t("down")}
                    </a>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;