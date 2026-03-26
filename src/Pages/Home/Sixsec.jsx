import React from "react";
import { Link } from "react-router-dom";
// import logos1 from '../../assets/logos/facebook.svg';
// import logos2 from '../../assets/logos/google.svg';
// import logos3 from '../../assets/logos/ibm.svg';
// import logos4 from '../../assets/logos/microsoft.svg';

import logos1 from '../../assets/logos/createak-logo.png';
import logos2 from '../../assets/logos/mda.png';
import logos3 from '../../assets/logos/rr.webp';
import logos4 from '../../assets/logos/logo.png';

import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="py-5">
            <h2 className="section-heading text-uppercase text-center">{t("partenaire")}</h2>
            <div class="marquee-wrap mt-5">
                <div class="marquee">
                    <span class="marquee-item"><a href="https://createak.mu/"><img className="img-fluid img-brand d-block mx-auto" src={logos1} alt="..." aria-label="createak Logo" /></a>
                    </span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524412/mdanews_vlbnuf.jpg" alt="..." aria-label="mda Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://robinruth-thailand.com/"><img className="img-fluid img-brand d-block mx-auto" src={logos3} alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://maki-car-rental-mada.netlify.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos4} alt="..." aria-label="maki Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524490/WhatsApp_Image_2026-03-25_at_5.50.55_PM_1_ow42wo.jpg" alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos2} alt="..." aria-label="mda Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524537/WhatsApp_Image_2026-03-25_at_5.50.55_PM_vk0wch.jpg" alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://eva-car-rental.vercel.app/assets/logo-black-2-Dy76Bm4k.png" alt="..." aria-label="maki Logo" /></a></span><span class="marquee-dot">◆</span>
                     <span class="marquee-item"><a href="https://createak.mu/"><img className="img-fluid img-brand d-block mx-auto" src={logos1} alt="..." aria-label="createak Logo" /></a>
                    </span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524412/mdanews_vlbnuf.jpg" alt="..." aria-label="mda Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://robinruth-thailand.com/"><img className="img-fluid img-brand d-block mx-auto" src={logos3} alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://maki-car-rental-mada.netlify.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos4} alt="..." aria-label="maki Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524490/WhatsApp_Image_2026-03-25_at_5.50.55_PM_1_ow42wo.jpg" alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos2} alt="..." aria-label="mda Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://res.cloudinary.com/de03l56z6/image/upload/v1774524537/WhatsApp_Image_2026-03-25_at_5.50.55_PM_vk0wch.jpg" alt="..." aria-label="robin ruth Logo" /></a></span><span class="marquee-dot">◆</span>
                    <span class="marquee-item"><a href="#"><img className="img-fluid img-brand d-block mx-auto" src="https://eva-car-rental.vercel.app/assets/logo-black-2-Dy76Bm4k.png" alt="..." aria-label="maki Logo" /></a></span><span class="marquee-dot">◆</span>
                </div>
            </div>
        </div>
    );
}
