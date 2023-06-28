import React, {useEffect} from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'


const Favorites = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        if (store.favorites.length === 0) {
          actions.setFavoriteArray();
        }
      }, [store.favorites]);

    return (
        <div>
            <div>
                {/* <p>Characters</p>
                {sotre.favoriteCharacters.map((character, index) => {
                    return (
                        <li key={index} className={styles.li}>
                            {character}
                            <i
                                onClick={() => actions.deleteFavorite("Characters",index)}
                                className="fa-solid fa-rectangle-xmark mt-1">
                            </i>
                        </li>
                    )
                })} */}
                {store.favorites.map((element, index) => {
                    return (
                        <li key={index}>

                            {element}
                            <i
                                onClick={() => actions.deleteFavorite(index)}
                                className="fa-solid fa-rectangle-xmark mt-1">
                            </i>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites