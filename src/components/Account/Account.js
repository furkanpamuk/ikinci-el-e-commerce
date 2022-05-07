import React, { useEffect } from 'react'
import Container from '../../constant/containers/Container'
import MainSection from './MainSection'
import TopSection from './TopSection'
import { useUserData } from '../../context/userContext'

function Account() {

    const { user } = useUserData()
    console.log(user);

    useEffect(() => {

    }, [user])

    return (
        <Container>
            <TopSection user={user} />
            <MainSection user={user} />
        </Container>
    )

}

export default Account