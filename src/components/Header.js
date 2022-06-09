import React from 'react'
import styled from 'styled-components'
import {HiHome} from 'react-icons/hi'
import {TbMessage2} from 'react-icons/tb'
import {BiMessageSquareAdd, BiSearchAlt} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiCamera} from 'react-icons/fi'
import {MdExplore} from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
        <Wrapper>
            <Cam />
            <Logo>Picasa Meet</Logo>
            <Bar>
                <Icon />
                <Input placeholder='Search' />
            </Bar>
            <IconHolder>
                <Icon1 />
                <Icon2 />
                <Icon3 />
                <Icon4 />
                <Icon5 />
                <Owner to="/user">
                    <Img src="/ak.jpg"/>
                </Owner>
            </IconHolder>
            <IconM />
        </Wrapper>
    </Container>
  )
}

const Cam = styled(FiCamera)`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
}
`;
const Owner = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
margin-left: 15px;
cursor: pointer;
`;
const Img = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;
object-fit: cover;
`;
const Icon5 = styled(AiOutlineHeart)`
font-size: 1.5rem;
margin: 0 10px;
`;
const Icon4 = styled(MdExplore)`
font-size: 1.5rem;
margin: 0 10px;
`;
const Icon3 = styled(BiMessageSquareAdd)`
font-size: 1.5rem;
margin: 0 10px;
`;
const IconM = styled(TbMessage2)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    font-size: 1.8rem;
}
`;
const Icon2 = styled(TbMessage2)`
font-size: 1.5rem;
margin: 0 10px;
`;
const Icon1 = styled(HiHome)`
font-size: 1.5rem;
margin: 0 10px;
`;
const IconHolder = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;
const Input = styled.input`
outline: none;
border: 0;
background-color: transparent;
font-size: 0.9rem;
margin-left: 10px;
`;
const Icon = styled(BiSearchAlt)`
font-size: 1.2rem;
color: gray;
`;
const Bar = styled.div`
display: flex;
align-items: center;
background-color: #EFEFEF;
height: 40px;
width: 300px;
padding: 0 10px;
border-radius: 10px;

@media screen and (max-width: 768px) {
    display: none;
}
`;
const Logo = styled.div`
font-size: 1.3rem;
font-style: italic;

@media screen and (max-width: 768px) {
    font-size: 1.5rem;
}
`;
const Wrapper = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 768px) {
    width: 90%;
}
`;
const Container = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
display: flex;
justify-content: center;
align-items: center;
height: 55px;
position: fixed;
z-index: 1;
width: 100%;
background-color: #fff;

@media screen and (max-width: 768px) {
    height: 45px;
    width: 425px;
    width: 768px;
}
  @media screen and (max-width: 425px) {
    width: 425px;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
  }
`;