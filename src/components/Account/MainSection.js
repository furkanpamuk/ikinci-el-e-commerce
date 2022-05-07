import React, { useState } from 'react'
import styles from './Account.module.scss'
import OfferProducts from './OfferProducts'
import Products from './Products'
import SelectPanel from './SelectPanel'

function MainSection({ userProducts, userOffers }) {

    const [isActive, setIsActive] = useState(1)


    return (
        <div className={styles.mainSection}>
            <SelectPanel isActive={isActive} setIsActive={setIsActive} />
            {
                isActive === 1 && <Products products={userProducts} />
            }
            {
                isActive === 2 && <OfferProducts userOffers={userOffers} />
            }
        </div>
    )
}

export default MainSection