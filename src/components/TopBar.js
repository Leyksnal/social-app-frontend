import React from 'react'
import styled from 'styled-components'

export default function TopBar() {
  return (
    <Container>
        <Wrapper>
            <Img src='/ak.jpg'/>
            <Name>Leyksnal</Name>
        </Wrapper>
    </Container>
  )
}

const Name = styled.div`
margin-top: 10px;
font-size: 0.8rem;

@media screen and (max-width: 768px) {
  font-size: 0.7rem;
}
`;
const Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
outline: 2px solid #F80F7E;
border: 2.5px solid transparent;
background-clip: content-box;
object-fit: cover;

@media screen and (max-width: 768px) {
  width: 40px;
  height: 40px;
}
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 10px;
`;
const Container = styled.div`
background-color: #fff;
border: 1px solid #DBDBDB;
padding: 10px 0;
width: 100%;
display: flex;
border-radius: 10px;

@media screen and (max-width: 768px) {
    width: 425px;
    border-radius: 0;
    border: 0;
}
`;