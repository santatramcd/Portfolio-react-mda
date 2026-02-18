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
                    <div className="badge-hm">
                        <span className="badgeDot-hm" />
                        {t("dispo")}
                    </div>
                    <h2 className="greeting">{t("Iam")}</h2>
                    <h1 className="name">
                        Santatra <span style={{ color: "var(--bs-warning)" }}> Michado </span>
                    </h1>

                    <div className="role-container">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="var(--bs-warning)"
                            style={{ marginRight: 8, flexShrink: 0, marginTop: -3 }}
                        >
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span className="role">{displayedRole}</span>
                    </div>
                    <p className="description">
                        {t("dev")}
                    </p>
                    <a
                        className="btn btn-primary btn-xl btn-cv-down animated animatedFadeInUp fadeInUp"
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