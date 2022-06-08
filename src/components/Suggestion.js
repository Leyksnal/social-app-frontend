import React, { useState } from 'react'
import styled from 'styled-components'
import HoverProfile from './HoverProfile'

export default function Suggestion() {

    const [display, setDisplay] = useState(false)

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
                  <I onMouseEnter={()=>{
                    setDisplay(true)
                  }}

                  onMouseLeave={()=>{
                    setDisplay(false)
                  }}
                  >Malush</I>
                  <In>New to Instagram</In>
              </Name>
              {
                display ? (
                  <Div>
                    <HoverProfile/>
                  </Div>
                ) : null
              }
          </Inner>
          <Btn>Follow</Btn>
      </Topper>
    </Container>
  )
}

const Div = styled.div`
position: absolute;
top: 20px;
`;
const I = styled.div`
font-weight: 600;
font-size: 0.8rem;
color: #404040;
z-index: 10;

:hover{
  cursor: pointer;
}
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
font-size: 0.9rem;
margin-left: 40px;
`;

const Btn = styled.div`
color: #33A9F7;
font-weight: 500;
font-size: 0.8rem;
transition: all 200ms;

:hover{
    cursor: pointer;
    color: #B9E2FD;
}
`;

const In = styled.div`
color: #BDBDBD;
font-size: 0.8rem;
margin-top: 5px;
`;
const Name = styled.div`
margin-left: 20px;
`;
const Inner = styled.div`
display: flex;
align-items: center;
margin-left: 50px;
position: relative;
`;
const Topper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;
const Img = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
object-fit: cover;
`;