import React from 'react'
import styled from 'styled-components'
import Card from '../Card';
import Profile from './Profile';
import TopBar from './TopBar';

export default function Home() {
  return (
    <Container>
        <Wrapper>
            <TopBar/>
            <Card/>
        </Wrapper>
        <WrapperRight>
            <Profile/>
        </WrapperRight>
    </Container>
  )
}


const WrapperRight = styled.div`

`;
const Wrapper = styled.div`

`;
const Container = styled.div`
margin-top: 40px;
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;