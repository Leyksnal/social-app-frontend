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
width: 850px;

@media screen and (max-width: 768px) {
  width: 768px;
}
@media screen and (max-width: 425px) {
  width: 425px;
}
@media screen and (max-width: 375px) {
  width: 375px;
}
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 70px;
`;