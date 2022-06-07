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
width: 600px;
@media screen and (max-width: 768px){
  display: none;
}
`;
const Wrapper = styled.div`
width: 600px;

@media screen and (max-width: 768px) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`;
const Container = styled.div`
margin-top: 40px;
display: flex;

@media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
}
`;