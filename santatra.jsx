import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    const [displayedRole, setDisplayedRole] = useState("");

    const roles = [
        "Créateur d'Interfaces",
        "Développeur Front-end",
        "Intégrateur Web",
        "Développeur WordPress",
    ];

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        function typeWriter() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setDisplayedRole(currentRole.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    timeout = setTimeout(typeWriter, 500);
                    return;
                }
            } else {
                setDisplayedRole(currentRole.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    timeout = setTimeout(typeWriter, 2500);
                    return;
                }
            }

            timeout = setTimeout(typeWriter, isDeleting ? 50 : 100);
        }

        typeWriter();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main id="site-main">
            <section className="hero-section" style={styles.section}>
                <div style={styles.container}>

                    {/* Badge disponibilité */}
                    <div style={styles.badge}>
                        <span style={styles.badgeDot} />
                        Disponible pour missions
                    </div>

                    {/* Localisation */}
                    <div style={styles.location}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: 6, flexShrink: 0 }}
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Madagascar
                    </div>

                    {/* Salutation */}
                    <p style={styles.greeting}>{t("Iam") || "Bonjour, je suis"}</p>

                    {/* Nom */}
                    <h1 style={styles.name}>
                        <span style={styles.nameWhite}>Santatra</span>
                        <br />
                        <span style={styles.nameYellow}>Michado</span>
                    </h1>

                    {/* Rôle avec icône */}
                    <div style={styles.roleContainer}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#f5c518"
                            style={{ marginRight: 8, flexShrink: 0 }}
                        >
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span style={styles.role}>{displayedRole}</span>
                        <span style={styles.cursor}>|</span>
                    </div>

                    {/* Description */}
                    <p style={styles.description}>
                        {t("dev") ||
                            "Je crée des expériences web modernes, interactives et performantes."}
                    </p>

                    {/* Boutons */}
                    <div style={styles.buttons}>
                        <a href="#projets" style={styles.btnPrimary}>
                            Voir mes projets
                        </a>
                        <a href="#contact" style={styles.btnSecondary}>
                            Me contacter
                        </a>
                    </div>

                    {/* Stats */}
                    <div style={styles.stats}>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>2+</span>
                            <span style={styles.statLabel}>ans d'expérience</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>10+</span>
                            <span style={styles.statLabel}>Projets réalisés</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>5+</span>
                            <span style={styles.statLabel}>Clients satisfaits</span>
                        </div>
                    </div>
                </div>

                {/* Glow background effect */}
                <div style={styles.glow} />
            </section>
        </main>
    );
};

const YELLOW = "#f5c518";

const styles = {
    section: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "60px 0",
    },
    container: {
        position: "relative",
        zIndex: 1,
        maxWidth: 680,
        margin: "0 auto",
        padding: "0 24px",
    },
    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        backgroundColor: "rgba(245, 197, 24, 0.12)",
        border: "1.5px solid rgba(245, 197, 24, 0.4)",
        color: YELLOW,
        borderRadius: 999,
        padding: "8px 18px",
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 20,
        letterSpacing: "0.01em",
    },
    badgeDot: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: YELLOW,
        boxShadow: `0 0 6px ${YELLOW}`,
        animation: "pulse 2s infinite",
    },
    location: {
        display: "flex",
        alignItems: "center",
        color: "#9a9a9a",
        fontSize: 15,
        marginBottom: 20,
    },
    greeting: {
        color: "#c8c8c8",
        fontSize: 18,
        marginBottom: 6,
        fontWeight: 400,
        letterSpacing: "0.02em",
    },
    name: {
        margin: "0 0 20px 0",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
    },
    nameWhite: {
        display: "block",
        color: "#ffffff",
        fontSize: "clamp(52px, 8vw, 88px)",
        fontWeight: 800,
    },
    nameYellow: {
        display: "block",
        color: YELLOW,
        fontSize: "clamp(52px, 8vw, 88px)",
        fontWeight: 800,
    },
    roleContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: 18,
        minHeight: 32,
    },
    role: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 500,
    },
    cursor: {
        color: YELLOW,
        fontSize: 20,
        fontWeight: 300,
        marginLeft: 2,
        animation: "blink 1s step-end infinite",
    },
    description: {
        color: "#9a9a9a",
        fontSize: 16,
        lineHeight: 1.7,
        maxWidth: 460,
        marginBottom: 36,
    },
    buttons: {
        display: "flex",
        flexWrap: "wrap",
        gap: 14,
        marginBottom: 52,
    },
    btnPrimary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: YELLOW,
        color: "#0d0d0d",
        border: "none",
        borderRadius: 999,
        padding: "14px 32px",
        fontSize: 16,
        fontWeight: 700,
        textDecoration: "none",
        cursor: "pointer",
        transition: "opacity 0.2s, transform 0.2s",
    },
    btnSecondary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1.5px solid rgba(255,255,255,0.25)",
        borderRadius: 999,
        padding: "14px 32px",
        fontSize: 16,
        fontWeight: 600,
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
    },
    stats: {
        display: "flex",
        gap: 48,
        flexWrap: "wrap",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: 32,
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    statNumber: {
        color: YELLOW,
        fontSize: 28,
        fontWeight: 800,
        lineHeight: 1,
    },
    statLabel: {
        color: "#7a7a7a",
        fontSize: 13,
    },
    glow: {
        position: "absolute",
        bottom: -100,
        right: -100,
        width: 500,
        height: 500,
        background: `radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)`,
        pointerEvents: "none",
        zIndex: 0,
    },
};

// Inject keyframes globally (only once)
if (typeof document !== "undefined" && !document.getElementById("hero-keyframes")) {
    const style = document.createElement("style");
    style.id = "hero-keyframes";
    style.textContent = `
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse {
            0%, 100% { box-shadow: 0 0 6px #f5c518; }
            50% { box-shadow: 0 0 14px #f5c518, 0 0 4px #f5c518; }
        }
    `;
    document.head.appendChild(style);
}

export default HeroSection;