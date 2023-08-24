import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext'
import styles from "./Styles.module.css"

const LearnMore = () => {

    const { store, actions } = useContext(Context)

    if (!store.isModalOpen) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <div
                className={`modal ${store.isModalOpen ? 'show' : ''}`}
                tabIndex="-1"
                style={{ display: store.isModalOpen ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered" style={{marginRight: '570px'}}>
                    <div className={`modal-content ${styles.modal}`}>
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
                                                src={`https://starwars-visualguide.com/assets/img/characters/${store.currentDetailObject.uid}.jpg`}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="d-flex align-items-center flex-column justifiy-content-center">
                                            <h3>{store.currentDetailObject.name}</h3>
                                            <p style={{marginLeft: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.modalPropertiesOverflow}>
                                    <div style={{ width: "100px" }}>
                                        <p>Gender</p>
                                        <p>{store.currentDetailObject.gender}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Height</p>
                                        <p>{store.currentDetailObject.height}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Mass</p>
                                        <p>{store.currentDetailObject.mass}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Hair Color</p>
                                        <p>{store.currentDetailObject.hair_color}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Skin Color</p>
                                        <p>{store.currentDetailObject.skin_color}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Eye Color</p>
                                        <p>{store.currentDetailObject.eye_color}</p>
                                    </div>
                                    <div className={styles.modalProperties}>
                                        <p>Birth Year</p>
                                        <p>{store.currentDetailObject.birth_year}</p>
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

export default LearnMore