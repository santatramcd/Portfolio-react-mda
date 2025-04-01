import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Élément sélectionné pour le modal
  const [filter, setFilter] = useState("*"); // État pour gérer le filtre sélectionné

  const baseID = "appTVkIAf30WtN760";
  const tableName = "Work";
  const apiKey =
    "patGxW0NlAoR2aJ7I.31bf9f568319b4dc29a7fce42c88ed697ead7a4746bcadb9ea8003fbb5c45502";
  const airtableURL = `https://api.airtable.com/v0/${baseID}/${tableName}`;

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
        title: record.fields.Name || "Sans titre",
        techno: record.fields.Technology || "Sans description",
        category: record.fields.Category || "Autre", // Catégorie ajoutée
        // img: record.fields.Photos?.[0]?.url || "",
        Urlimg: record.fields.url || "#",
        link: record.fields.Link || "#",
      }));

      setData(formattedData);
    } catch (err) {
      setError("Erreur lors de la récupération des données.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirtableData();
  }, []);

  // Fonction pour filtrer les données
  const filteredData =
    filter === "*"
      ? data
      : data.filter((item) =>
          item.techno.toLowerCase().includes(filter.toLowerCase())
        );
  const { t } = useTranslation();

  return (
    <>
      <div>
        <section id="portfolio" className="portfolio section page-section">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                {t("projetrecent")}
              </h3>
            </div>
          </div>

          <div className="container">
            <div
              className="isotope-layout portfolio"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul className="portfolio-filters isotope-filters">
                <li
                  className={` ${filter === "*" ? "active" : ""}`}
                  onClick={() => setFilter("*")}
                >
                  All
                </li>
                <li
                  className={filter === "WordPress" ? "active" : ""}
                  onClick={() => setFilter("WordPress")}
                >
                  WordPress
                </li>
                <li
                  className={filter === "Vuejs 3" ? "active" : ""}
                  onClick={() => setFilter("Vuejs 3")}
                >
                  Vuejs 3
                </li>
                <li
                  className={filter === "React Js" ? "active" : ""}
                  onClick={() => setFilter("React Js")}
                >
                  React Js
                </li>
                <li
                  className={filter === "Application" ? "active" : ""}
                  onClick={() => setFilter("Application")}
                >
                  App
                </li>
                <li
                  className={filter === "grav cms" ? "active" : ""}
                  onClick={() => setFilter("grav cms")}
                >
                  Grav cms
                </li>
              </ul>
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {error && <p>{error}</p>}

              {!loading && !error && (
                <div className="row">
                  {filteredData.map((item) => (
                    <div key={item.id} className="col-lg-4 col-sm-6 mb-4 zoom-in">
                      <div className="portfolio-item">
                        <a className="portfolio-link" href="#">
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => setSelectedItem(item)}
                              >
                                <i className="bi bi-plus fa-3x"></i>
                              </a>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-link-45deg fa-2x"></i>
                              </a>
                            </div>
                          </div>
                          {/* <img
                            className="img-fluid img-portfolio"
                            src={item.img}
                            alt={item.title}
                          /> */}
                          <img
                            className="img-fluid img-portfolio"
                            src={item.Urlimg}
                            alt={item.title}
                          />
                        </a>
                        <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">
                            {item.title}
                          </div>
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
          </div>
        </section>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {selectedItem?.title || "Détails"}
                </h5>
                <a
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="bi bi-x-lg"></i>
                </a>
              </div>
              <div className="modal-body">
                {selectedItem && (
                  <div>
                    {/* <img
                      className="img-fluid"
                      src={selectedItem.img}
                      alt={selectedItem.title}
                    /> */}
                    <img
                      className="img-fluid"
                      src={selectedItem.Urlimg}
                      alt={selectedItem.title}
                    />
                    <p className="mt-3">{selectedItem.techno}</p>
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Voir le projet
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
