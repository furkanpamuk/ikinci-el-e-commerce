import React from 'react';
import styles from './Categories.module.scss'


function CategoryItem({ category, isActive, index, setActive, setSelectCategoryID }) {

    const handleClick = (index, id) => {
        setActive(index + 1)
        setSelectCategoryID(id)
    }

    return (
        <div onClick={() => handleClick(index, category.id)} className={styles.categoryItem} >
            <div>{category.name}</div>
            {
                isActive && <span ></span>
            }
        </div>
    )
}

export default CategoryItem