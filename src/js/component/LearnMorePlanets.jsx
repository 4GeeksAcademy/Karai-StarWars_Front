import React from "react";
import styles from "./Styles.module.css"

const LearnMorePlanets = ({ activateModal, closeModal, planets, uid }) => {

    return (
        <div>
            {activateModal &&
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modalPlanet}`}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Specific Information</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex">
                                    <div style={{ width: "50%"}}>
                                        <img
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{planets.name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div style={{width: "100px"}}>
                                            <p>Diameter</p>
                                            <p>{planets.diameter}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Rotation Period</p>
                                            <p>{planets.rotation_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Orbital Period</p>
                                            <p>{planets.orbital_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Gravity</p>
                                            <p>{planets.gravity}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Population</p>
                                            <p>{planets.population}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Climate</p>
                                            <p>{planets.climate}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Terrain</p>
                                            <p>{planets.terrain}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Surface Water</p>
                                            <p>{planets.surface_water}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default LearnMorePlanets