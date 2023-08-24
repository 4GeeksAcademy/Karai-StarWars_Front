import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"

const LearnMorePlanets = () => {

    const { store, actions } = useContext(Context)

    if (!store.isModalOpenPlanets) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <div
                className={`modal ${store.isModalOpenPlanets ? 'show' : ''}`}
                tabIndex="-1"
                style={{ display: store.isModalOpenPlanets ? 'block' : 'none' }}
            >
                    <div className="modal-dialog modal-dialog-centered" style={{marginRight: '570px'}}>
                        <div className={`modal-content ${styles.modalPlanet}`}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Specific Information</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => actions.closeModal()}></button>
                            </div>
                            <div className="modal-body">
                            <div className="row">
                                <div className="d-flex">
                                    <div className="col-md-6">
                                        <img
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            src={`https://starwars-visualguide.com/assets/img/planets/${store.currentDetailObjectPlanets.uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{store.currentDetailObjectPlanets.name}</h3>
                                            <p style={{marginLeft: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                        </div>
                                    </div>

                                </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Diameter</p>
                                            <p>{store.currentDetailObjectPlanets.diameter}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Rotation Period</p>
                                            <p>{store.currentDetailObjectPlanets.rotation_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Orbital Period</p>
                                            <p>{store.currentDetailObjectPlanets.orbital_period}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Gravity</p>
                                            <p>{store.currentDetailObjectPlanets.gravity}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Population</p>
                                            <p>{store.currentDetailObjectPlanets.population}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Climate</p>
                                            <p>{store.currentDetailObjectPlanets.climate}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Terrain</p>
                                            <p>{store.currentDetailObjectPlanets.terrain}</p>
                                        </div>
                                        <div className={styles.modalPropertiesPlanet}>
                                            <p>Surface Water</p>
                                            <p>{store.currentDetailObjectPlanets.surface_water}</p>
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
            </div>
    );
}

export default LearnMorePlanets