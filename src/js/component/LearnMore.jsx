import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"

const LearnMore = () => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            {store.isModalOpen &&
                <div className="modal fade" id="modalCharacters" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modal}`}>
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
                                            src={`https://starwars-visualguide.com/assets/img/characters/${store.currentDetailObject.result.uid}.jpg`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{store.currentDetailObject.result.properties.name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.modalPropertiesOverflow}>
                                        <div style={{width: "100px"}}>
                                            <p>Gender</p>
                                            <p>{store.currentDetailObject.result.properties.gender}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Height</p>
                                            <p>{store.currentDetailObject.result.properties.height}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Mass</p>
                                            <p>{store.currentDetailObject.result.properties.mass}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Hair Color</p>
                                            <p>{store.currentDetailObject.result.properties.hair_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Skin Color</p>
                                            <p>{store.currentDetailObject.result.properties.skin_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Eye Color</p>
                                            <p>{store.currentDetailObject.result.properties.eye_color}</p>
                                        </div>
                                        <div className={styles.modalProperties}>
                                            <p>Birth Year</p>
                                            <p>{store.currentDetailObject.result.properties.birth_year}</p>
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

export default LearnMore