import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"

const LearnMorePlanets = () => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            {store.isModalOpenPlanets &&
                <div className="modal fade" id="modalPlanets" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modalPlanet}`}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Specific Information</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => actions.closeModal()}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex">
                                    <div style={{ width: "50%"}}>
                                        <img
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            src={`https://starwars-visualguide.com/assets/img/planets/${store.currentDetailObjectPlanets.result.uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{store.currentDetailObjectPlanets.result.properties.name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div style={{width: "100px"}}>
                                            <p>Diameter</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.diameter}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Rotation Period</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.rotation_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Orbital Period</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.orbital_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Gravity</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.gravity}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Population</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.population}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Climate</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.climate}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Terrain</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.terrain}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Surface Water</p>
                                            <p>{store.currentDetailObjectPlanets.result.properties.surface_water}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={() => actions.closeModal()}>
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