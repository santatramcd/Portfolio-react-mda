import React, { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
  // États pour les données, le chargement, et les erreurs
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuration Airtable
  const baseID = "appTVkIAf30WtN760"; // Remplacez par votre ID de base
  const tableName = "Work"; // Remplacez par le nom exact de votre table
  const apiKey = "patGxW0NlAoR2aJ7I.31bf9f568319b4dc29a7fce42c88ed697ead7a4746bcadb9ea8003fbb5c45502"; // Remplacez par votre clé API
  const airtableURL = `https://api.airtable.com/v0/${baseID}/${tableName}`;

  // Fonction pour récupérer les données
  const fetchAirtableData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const formattedData = response.data.records.map((record) => ({
        id: record.id,
        title: record.fields.Name || "Sans titre", // Nom de l'élément
        techno: record.fields.Technology || "Sans description", // Description (optionnelle)
        img: record.fields.Photos?.[0]?.url || "", // URL de l'image
        link: record.fields.Link || "#", // Lien associé
      }));

      setData(formattedData);
    } catch (err) {
      setError("Erreur lors de la récupération des données.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    fetchAirtableData();
  }, []);

  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Découvrez mes projets récents.
            </h3>
          </div>

          {/* Indicateur de chargement ou message d'erreur */}
          {loading && <p>Chargement des données...</p>}
          {error && <p>{error}</p>}

          {/* Grille de contenu */}
          {!loading && !error && (
            <div className="row">
              {data.map((item) => (
                <div key={item.id} className="col-lg-4 col-sm-6 mb-4">
                  <div className="portfolio-item">
                    <a
                      className="portfolio-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="bi bi-plus fa-3x"></i>
                        </div>
                      </div>
                      <img
                        className="img-fluid img-portfolio"
                        src={item.img}
                        alt={item.title}
                      />
                    </a>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">{item.title}</div>
                      <div className="portfolio-caption-subheading text-muted">
                        {item.techno}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
