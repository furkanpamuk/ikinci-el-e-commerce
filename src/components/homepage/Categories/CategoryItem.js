import React from 'react';
import styles from './Categories.module.scss'


function CategoryItem({ category, isActive, handleActive }) {


    return (
        <div onClick={handleActive} className={styles.categoryItem} >
            <div>{category.name}</div>
            {
                isActive && <span ></span>
            }
        </div>
    )
}

export default CategoryItem