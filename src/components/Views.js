import React from 'react'
import Home from './Home'
import styled from 'styled-components'

export default function Views() {
  return (
    <Container>
        <Wrapper>
            <Home/>
        </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
width: 1200px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 70px;
`;