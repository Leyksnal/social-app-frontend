import React from 'react'
import styled from 'styled-components'
import Suggestion from './Suggestion';

export default function Profile() {
  return (
    <Container>
      <Topper>
          <Inner>
              <Img src='/ak.jpg' />
              <Name>
                  <I>Leke</I>
                  <In>Original Audio</In>
              </Name>
          </Inner>
          <Btn>Log out</Btn>
      </Topper>
      <Suggestion/>
    </Container>
  )
}


// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;

const Btn = styled.div`
color: #33A9F7;
font-weight: 500;
font-size: 1.2rem;
transition: all 200ms;

:hover{
    cursor: pointer;
    color: #B9E2FD;
}
`;

const In = styled.div`
color: #BDBDBD;
`;
const I = styled.div`
font-weight: 600;
font-size: 1.2rem;
color: #404040;
`;
const Name = styled.div`
margin-left: 10px;
`;
const Inner = styled.div`
display: flex;
align-items: center;
margin-left: 40px;
`;
const Topper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const Img = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
`;
const Container = styled.div`
width: 100%;
padding-top: 18px;
`;
