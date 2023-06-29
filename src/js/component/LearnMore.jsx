import React from "react";
import styles from "./Styles.module.css"

const LearnMore = ({ activateModal, closeModal, character, uid }) => {

    return (
        <div>
            {activateModal &&
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modal}`}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex">
                                    <div style={{ width: "50%"}}>
                                        <img
                                            style={{
                                                objectFit: "cover",
                                            }}
                                            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                            <h3>{character.name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div className={styles.modalProperties}>
                                            <p>Gender</p>
                                            <p>{character.gender}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Height</p>
                                            <p>{character.height}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Mass</p>
                                            <p>{character.mass}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Hair Color</p>
                                            <p>{character.hair_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Skin Color</p>
                                            <p>{character.skin_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Eye Color</p>
                                            <p>{character.eye_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Birth Year</p>
                                            <p>{character.birth_year}</p>
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

export default LearnMore