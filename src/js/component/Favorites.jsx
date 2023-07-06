import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import LearnMore from "./LearnMore.jsx"
import styles from "../component/Styles.module.css";


const Favorites = () => {

    const { store, actions } = useContext(Context)

    // useEffect(() => {
    //     if (store.favorites.length === 0) {
    //       actions.setFavoriteArray();
    //     }
    //   }, [store.favorites]);

    return (
        <div>
            <div>
                {
                    store.favorites.length > 0 ? (
                        store.favorites.map((element, index) => (

                            <li key={index} className={styles.dropdownContent}>
                                {element.result?.properties?.name}
                                {/* <p onClick={() => actions.detailsToShow(element)}>{element.result?.properties?.name}</p> */}
                                <i
                                    onClick={() => actions.deleteFavorite(element.result.uid)}
                                    className="fa-solid fa-rectangle-xmark mt-1">
                                </i>
                            </li>
                        )
                        )
                    ) : (
                        <p>No favorites yet</p>
                    )
                }
                {/* {
                    store.isModalOpen &&
                    <LearnMore />
                } */}
            </div>
        </div>
    )
}

export default Favorites