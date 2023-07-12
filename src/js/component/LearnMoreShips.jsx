import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"

const LearnMoreShips = () => {

    const { store, actions } = useContext(Context)

    if (!store.isModalOpenShips) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <div
                className={`modal ${store.isModalOpenShips ? 'show' : ''}`}
                tabIndex="-1"
                style={{ display: store.isModalOpenShips ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered" style={{ marginRight: '570px' }}>
                    <div className={`modal-content ${styles.modalShip}`}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Specific Information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => actions.closeModal()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex">
                                <div className="col-md-6">
                                    <img
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        src={`https://starwars-visualguide.com/assets/img/starships/${store.currentDetailObjectShips.result.uid}.jpg`}
                                        className="card-img-top"
                                        alt="..."
                                        onError={(e) => {
                                            const uid = parseInt(store.currentDetailObjectShips.result.uid, 10);
                                            const fallbackUid = uid + 10;
                                            e.target.src = `https://starwars-visualguide.com/assets/img/starships/${fallbackUid}.jpg`;
                                            e.target.onerror = null;
                                        }}
                                    />
                                </div>
                                <div className="col-md-6 ">
                                    <div className="d-flex align-items-center flex-column justifiy-content-center">
                                        <h3>{store.currentDetailObjectShips.result.properties.name}</h3>
                                        <p style={{ marginLeft: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.modalPropertiesOverflow}>
                                    <div style={{ width: "100px" }}>
                                        <p>Model</p>
                                        <p>{store.currentDetailObjectShips.result.properties.model}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Class</p>
                                        <p>{store.currentDetailObjectShips.result.properties.starship_class}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Manufacturer</p>
                                        <p>{store.currentDetailObjectShips.result.properties.manufacturer}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Cost In Credits</p>
                                        <p>{store.currentDetailObjectShips.result.properties.cost_in_credits}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Length</p>
                                        <p>{store.currentDetailObjectShips.result.properties.length}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Crew</p>
                                        <p>{store.currentDetailObjectShips.result.properties.crew}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Passangers</p>
                                        <p>{store.currentDetailObjectShips.result.properties.passangers}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Max Atmosphering Speed</p>
                                        <p>{store.currentDetailObjectShips.result.properties.max_atmosphering_speed}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Hyperdrive Rating</p>
                                        <p>{store.currentDetailObjectShips.result.properties.hyperdrive_rating}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>MGLT</p>
                                        <p>{store.currentDetailObjectShips.result.properties.MGLT}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Cargo Capacity</p>
                                        <p>{store.currentDetailObjectShips.result.properties.cargo_capacity}</p>
                                    </div>
                                    <div className={styles.modalPropertiesShips}>
                                        <p>Consumables</p>
                                        <p>{store.currentDetailObjectShips.result.properties.consumables}</p>
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

export default LearnMoreShips