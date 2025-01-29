import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <section className="page-section" id="Skills" data-aos="fade-up">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Skills</h2>
                        <h3 className="section-subheading text-muted">
                            Découvrez nos compétences et expertises développées pour
                            concrétiser vos projets numériques.
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="technical-bars">
                                <SkillBar name="HTML" percentage={90} />
                                <SkillBar name="CSS" percentage={80} />
                                <SkillBar name="JavaScript" percentage={75} />
                                <SkillBar name="Bootstrap 5" percentage={85} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="technical-bars">
                                <SkillBar name="Vue.js" percentage={90} />
                                <SkillBar name="WordPress" percentage={80} />
                                <SkillBar name="PHP" percentage={75} />
                                <SkillBar name="React.js" percentage={85} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const SkillBar = ({ name, percentage }) => {
    const [count, setCount] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const barRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isAnimated) {
                    setIsAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) {
                observer.unobserve(barRef.current);
            }
        };
    }, [isAnimated]);

    useEffect(() => {
        if (isAnimated) {
            let currentCount = 0;
            const interval = setInterval(() => {
                currentCount += 1;
                setCount(currentCount);
                if (currentCount >= percentage) {
                    clearInterval(interval);
                }
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isAnimated, percentage]);

    return (
        <div className="bar" ref={barRef}>
            <div className="info">
                <span>{name}</span>
            </div>
            <div className="progress-line">
                <span style={{ width: `${percentage}%` }} data-aos="fade-right"></span>
                <div className="percentage">{isAnimated ? `${count}%` : "0%"}</div>
            </div>
        </div>
    );
};
