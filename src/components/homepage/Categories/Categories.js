import React, { useState, useEffect } from 'react'
import styles from './Categories.module.scss'
import Container from '../../../constant/containers/Container'
import CategoryItem from './CategoryItem'



function Categories({ categories }) {

  const [active, setActive] = useState(0)

  useEffect(() => {

  }, [categories])


  return (
    <div className={styles.categories} >
      <Container>
        <div className={styles.categoriesContent}  >
          <CategoryItem
            handleActive={() => setActive(0)}
            isActive={active === 0}
            key={0}
            category={{ 'name': 'Hepsi' }} />
          {


            categories.map((category, index) =>
              <CategoryItem
                isActive={active === index + 1}
                key={index + 1}
                category={category}
                handleActive={() => setActive(index + 1)}
              />
            )
          }
          <CategoryItem
            handleActive={() => setActive(categories.length + 1)}
            isActive={active === categories.length + 1}
            key={categories.length + 1}
            category={{ 'name': 'Diğer' }} />
        </div>
      </Container>


    </div>
  )
}


export default Categories