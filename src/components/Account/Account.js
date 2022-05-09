import React, { useEffect } from 'react'
import Container from '../../constant/containers/Container'
import MainSection from './MainSection'
import TopSection from './TopSection'

function Account({ userProducts, userOffers }) {

    return (
        <Container>
            <TopSection />
            <MainSection userProducts={userProducts} userOffers={userOffers} />
        </Container>
    )
}

export default Account