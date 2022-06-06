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
font-size: 1.2rem;
`;
const Img = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
outline: 3px solid #F80F7E;
border: 2.5px solid transparent;
background-clip: content-box;
object-fit: cover;
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
width: 600px;
display: flex;
border-radius: 10px;

@media screen and (max-width: 768px) {
    width: 400px;
}
`;