import React from "react";
import styles from "./Styles.module.css"

const LearnMoreShips = ({ activateModal, closeModal, starShip, uid }) => {

    return (
        <div>
            {activateModal &&
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modalShip}`}>
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
                                            src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{starShip.name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div style={{width: "100px"}}>
                                            <p>Model</p>
                                            <p>{starShip.model}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Class</p>
                                            <p>{starShip.starship_class}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Manufacturer</p>
                                            <p>{starShip.manufacturer}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Cost In Credits</p>
                                            <p>{starShip.cost_in_credits}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Length</p>
                                            <p>{starShip.length}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Crew</p>
                                            <p>{starShip.crew}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Passangers</p>
                                            <p>{starShip.passangers}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Max Atmosphering Speed</p>
                                            <p>{starShip.max_atmosphering_speed}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Hyperdrive Rating</p>
                                            <p>{starShip.hyperdrive_rating}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>MGLT</p>
                                            <p>{starShip.MGLT}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Cargo Capacity</p>
                                            <p>{starShip.cargo_capacity}</p>
                                        </div>
                                        <div className={styles.modalPropertiesShips}>
                                            <p>Consumables</p>
                                            <p>{starShip.consumables}</p>
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

export default LearnMoreShips