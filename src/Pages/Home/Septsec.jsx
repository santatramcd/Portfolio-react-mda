import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Le nom est obligatoire.";
    if (!formData.email.trim()) errors.email = "L'email est obligatoire.";
    if (!formData.type.trim())
      errors.type = "Le type de projet est obligatoire.";
    if (!formData.budget.trim()) errors.budget = "Le budget est obligatoire.";
    if (!formData.message.trim())
      errors.message = "Le message est obligatoire.";
    if (!captchaValue)
      errors.captcha = "Veuillez vérifier que vous n'êtes pas un robot !";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const airtableAPIKey =
      "patkCxg0ZmgltSCFs.8821ab3b4896c7795957efc0fbbc69ca233078165349aa1e67883af167a2ea87"; // Remplacez par votre clé API Airtable
    const airtableBaseId = "appTVkIAf30WtN760"; // Remplacez par l'ID de votre base
    const airtableTableName = "Envoie"; // Remplacez par le nom de votre table

    const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;

    const record = {
      fields: {
        Nom: formData.name,
        Email: formData.email,
        Type: formData.type,
        Budget: parseFloat(formData.budget),
        Message: formData.message,
      },
    };

    try {
      await axios.post(
        url,
        { records: [record] },
        {
          headers: {
            Authorization: `Bearer ${airtableAPIKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage("Formulaire soumis avec succès !");
      setErrorMessage("");
      setValidationErrors({});
      setFormData({
        name: "",
        email: "",
        type: "",
        budget: "",
        message: "",
      });
      setCaptchaValue(null); // Réinitialiser le captcha après soumission
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setErrorMessage(
        "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
      );
      setSuccessMessage("");
    }
  };

  const { t } = useTranslation();

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              {t("demandesite")}
            </h2>
            <h3 className="section-subheading text-muted">{t("projetweb")}</h3>
          </div>
          <form onSubmit={handleSubmit} id="contactForm">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="form-control"
                  />
                  {validationErrors.name && (
                    <small className="text-danger">
                      {validationErrors.name}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    className="form-control"
                  />
                  {validationErrors.email && (
                    <small className="text-danger">
                      {validationErrors.email}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="E-commerce, Blog, Site vitrine..."
                    className="form-control"
                  />
                  {validationErrors.type && (
                    <small className="text-danger">
                      {validationErrors.type}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Budget"
                    className="form-control"
                  />
                  {validationErrors.budget && (
                    <small className="text-danger">
                      {validationErrors.budget}
                    </small>
                  )}
                </div>

                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    className="form-control"
                  />
                  {validationErrors.message && (
                    <small className="text-danger">
                      {validationErrors.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="recaptchat">
                <ReCAPTCHA
                  sitekey="6Lfm4tMqAAAAAAm_gbvi4BYoRGHOtQjUeDmkZb52" // Remplacez par votre clé de site
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
            </div>

            {successMessage && (
              <div className="alert alert-info" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            {validationErrors.captcha && (
              <small className="text-danger">{validationErrors.captcha}</small>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-xl text-uppercase"
              >
                {t("send")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
