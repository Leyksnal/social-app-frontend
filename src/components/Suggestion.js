import React from 'react'
import styled from 'styled-components'

export default function Suggestion() {
  return (
    <Container>
        <Sug>
            <Ins>Suggestion for you</Ins>
            <I>See all</I>
        </Sug>
      <Topper>
          <Inner>
              <Img src='/ak.jpg' />
              <Name>
                  <I>Malush</I>
                  <In>New to Instagram</In>
              </Name>
          </Inner>
          <Btn>Follow</Btn>
      </Topper>
      <Topper>
          <Inner>
              <Img src='/ak.jpg' />
              <Name>
                  <I>Slick</I>
                  <In>New to Instagram</In>
              </Name>
          </Inner>
          <Btn>Follow</Btn>
      </Topper>
      <Topper>
          <Inner>
              <Img src='/ak.jpg' />
              <Name>
                  <I>Mike</I>
                  <In>New to Instagram</In>
              </Name>
          </Inner>
          <Btn>Follow</Btn>
      </Topper>
      <Topper>
          <Inner>
              <Img src='/ak.jpg' />
              <Name>
                  <I>Audax</I>
                  <In>New to Instagram</In>
              </Name>
          </Inner>
          <Btn>Follow</Btn>
      </Topper>
    </Container>
  )
}

const I = styled.div`
font-weight: 600;
font-size: 1.2rem;
color: #404040;
`;

const Container = styled.div`

`;

const Sug = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

const Ins = styled.div`
color: #BDBDBD;
font-size: 1.2rem;
margin-left: 40px;
`;

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
font-size: 0.9rem;
`;
const Name = styled.div`
margin-left: 10px;
`;
const Inner = styled.div`
display: flex;
align-items: center;
margin-left: 50px;
`;
const Topper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;
const Img = styled.img`
width: 45px;
height: 45px;
border-radius: 50%;
object-fit: cover;
`;