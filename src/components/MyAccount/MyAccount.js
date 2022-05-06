import React, { useEffect } from 'react'
import Container from '../../constant/containers/Container'
import MainSection from './MainSection'
import TopSection from './TopSection'
import { useUserData } from '../../context/userContext'

function MyAccount() {

    const { user } = useUserData()

    useEffect(() => {

    }, [user])

    return (
        <Container>
            <TopSection user={user} />
            <MainSection user={user} />
        </Container>
    )

}

export default MyAccount