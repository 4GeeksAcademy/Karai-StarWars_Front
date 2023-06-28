import React from "react";
import styles from "./Styles.module.css"

const LearnMore = ({ activateModal, closeModal, character }) => {

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
                                <div>

                                </div>
                                <div className="d-flex">
                                    <div>
                                        <p>Name</p>
                                        <p>{character.name}</p>
                                    </div>
                                    <div>
                                        <p>Height</p>
                                        <p>{character.height}</p>
                                    </div>
                                    <div>
                                        <p>Mass</p>
                                        <p>{character.mass}</p>
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