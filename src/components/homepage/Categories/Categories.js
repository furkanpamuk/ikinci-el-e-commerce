import React, { useState, useEffect } from 'react'
import styles from './Categories.module.scss'
import Container from '../../../constant/containers/Container'
import CategoryItem from './CategoryItem'

function Categories({ categories, setSelectCategoryID }) {

  const [active, setActive] = useState(0)

  useEffect(() => {

  }, [categories])



  return (
    <div className={styles.categories} >
      <Container>
        <div className={styles.categoriesContent}  >
          <CategoryItem
            isActive={active === 0}
            index={-1}
            key={0}
            category={{ 'name': 'Hepsi' }}
            setActive={setActive}
            setSelectCategoryID={setSelectCategoryID}
          />
          {
            categories.map((category, index) =>
              <CategoryItem
                isActive={active === index + 1}
                index={index}
                key={index + 1}
                category={category}
                setActive={setActive}
                setSelectCategoryID={setSelectCategoryID}
              />
            )
          }
          <CategoryItem
            isActive={active === categories.length + 1}
            index={categories.length + 1}
            key={categories.length}
            category={{ 'name': 'Diğer' }}
            setActive={setActive}
            setSelectCategoryID={setSelectCategoryID}
          />

        </div>
      </Container>


    </div>
  )
}


export default Categories