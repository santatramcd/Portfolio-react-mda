import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieDecision = localStorage.getItem("cookieDecision");
    if (!cookieDecision) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieDecision", "accepted");
    setShowBanner(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookieDecision", "refused");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="banner-cookies">
        <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
        <button onClick={acceptCookies} className="acceptButton">
          Accepter
        </button>
        <button onClick={refuseCookies} className="refuseButton">
          Refuser
        </button>
      </div>
    )
  );
};

export default CookieConsent;