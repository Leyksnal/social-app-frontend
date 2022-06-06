import React from 'react'
import styled from 'styled-components'
import {HiHome} from 'react-icons/hi'
import {TbMessage2} from 'react-icons/tb'
import {BiMessageSquareAdd, BiSearchAlt} from 'react-icons/bi'
import {GiTargetShot} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Header() {
  return (
    <Container>
        <Wrapper>
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
                <Owner>
                    <Img />
                </Owner>
            </IconHolder>
        </Wrapper>
    </Container>
  )
}

// const Container = styled.div``;
const Owner = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 15px;
`;
const Img = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #004080;
`;
const Icon5 = styled(AiOutlineHeart)`
font-size: 2.2rem;
margin: 0 15px;
`;
const Icon4 = styled(GiTargetShot)`
font-size: 2.2rem;
margin: 0 15px;
`;
const Icon3 = styled(BiMessageSquareAdd)`
font-size: 2.2rem;
margin: 0 15px;
`;
const Icon2 = styled(TbMessage2)`
font-size: 2.2rem;
margin: 0 15px;
`;
const Icon1 = styled(HiHome)`
font-size: 2.2rem;
margin: 0 15px;
`;
const IconHolder = styled.div`
display: flex;
align-items: center;

`;
const Input = styled.input`
outline: none;
border: 0;
background-color: transparent;
font-size: 1.2rem;
margin-left: 10px;
`;
const Icon = styled(BiSearchAlt)`
font-size: 1.8rem;
color: gray;
`;
const Bar = styled.div`
display: flex;
align-items: center;
background-color: #EFEFEF;
height: 50px;
width: 400px;
padding: 0 10px;
border-radius: 10px;
`;
const Logo = styled.div`
font-size: 1.9rem;
font-style: italic;
`;
const Wrapper = styled.div`
width: 75%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Container = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
display: flex;
justify-content: center;
align-items: center;
height: 60px;
`;