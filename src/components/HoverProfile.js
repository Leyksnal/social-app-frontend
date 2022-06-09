import React from 'react'
import styled from 'styled-components'
import {} from 'react-icons'

export default function HoverProfile({setDisplay}) {
  return (
    <Container
    
      onMouseEnter={()=>{
        setDisplay(true)
      }}

      onMouseLeave={()=>{
        setDisplay(false)
      }}
    >
        <Inner>
          <Img src='/ak.jpg' />
          <Name>
              <I>Leke</I>
              <In>Original Audio</In>
              <Inx>Followed by idealtouch.ao</Inx>
          </Name>
        </Inner>
        <Act>
          <Con>
            <Num>{12}</Num>
            <In>Posts</In>
          </Con>
          <Con>
            <Num>{92}</Num>
            <In>Followers</In>
          </Con>
          <Con>
            <Num>{211}</Num>
            <In>Following</In>
          </Con>
        </Act>
        <Gal>
          <Img1 src='/ak.jpg'/>
          <Img2 src='/ak.jpg'/>
          <Img3 src='/ak.jpg'/>
        </Gal>
        <Btn>Follow</Btn>
    </Container>
  )
}

const Img = styled.img`
width: 55px;
height: 55px;
border-radius: 50%;
object-fit: cover;
margin-left: 10px;
`;

const Inx = styled.div`
color: #BDBDBD;
font-size: 0.8rem;
margin-top: 10px;
`;
const In = styled.div`
color: #BDBDBD;
font-size: 0.8rem;
`;
const I = styled.div`
font-weight: 600;
font-size: 0.9rem;
color: #7794B0;
cursor: pointer;
`;
const Name = styled.div`
margin-left: 20px;
`;
const Inner = styled.div`
display: flex;
align-items: center;
`;

const Container = styled.div`
width: 400px;
z-index: 12;
margin-left: 50px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 13px;
padding-top: 10px;
padding-bottom: 5px;
`;
const Act = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
border-top: 1px solid #DBDBDB;
border-bottom: 1px solid #DBDBDB;
padding: 15px 0;
margin-top: 20px;
text-align: center;
`;
const Con = styled.div``;
const Num = styled.div`
font-size: 0.8rem;
color: #404040;
font-weight: 600;
`;
const Gal = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Img1 = styled.img`
object-fit: cover;
width: 133px;
height: 150px;
background-color: red;
`;
const Img2 = styled.img`
object-fit: cover;
width: 133px;
height: 150px;
background-color: red;
`;
const Img3 = styled.img`
object-fit: cover;
width: 133px;
height: 150px;
background-color: red;
`;
const Btn = styled.div`
background-color: #0095F6;
color: #fff;
margin: 12px;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.9rem;
border-radius: 5px;
padding: 2px 0;
`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;