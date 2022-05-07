import React from 'react'
import styles from './Account.module.scss'
import SelectPanel from './SelectPanel'

function MainSection() {
    return (
        <div className={styles.mainSection}>
            <SelectPanel />
        </div>
    )
}

export default MainSection