import React from 'react'
import styled from 'styled-components'
import {BsThreeDots, BsBookmark} from 'react-icons/bs'
import {TbSend} from 'react-icons/tb'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiSmile} from 'react-icons/fi'

export default function Card() {
  return (
    <Container>
        <Wrapper>
            <Topper>
                <Inner>
                    <Img src='/ak.jpg' />
                    <Name>
                        <I>Leke</I>
                        <In>Original Audio</In>
                    </Name>
                </Inner>
                <Icon />
            </Topper>
            <Img2 src="/ak.jpg"/>
            <Reaction>
                <Holder>
                    <Icon2 />
                    <Icon3 />
                    <Icon4 />
                </Holder>
                <Icon5 />
            </Reaction>
            <Views>89,465 Views</Views>
            <See>
                <I>Leke</I>
                <Span>The name is giving it back to the community...</Span>
            </See>
            <Com>View all commnets</Com>
            <Tym>3 hours ago</Tym>
            <Add>
                <Cal>
                    <Icon6 />
                    <Input placeholder='Add a comment'/>
                </Cal>
                <Btn>Post</Btn>
            </Add>
        </Wrapper>
    </Container>
  )
}


const Cal = styled.div`
margin: 0 10px;
display: flex;
align-items: center;
flex: 1;
`;
const Btn = styled.div`
margin-right: 10px;
color: #33A9F7;
font-weight: 500;
font-size: 1rem;
transition: all 200ms;

:hover{
    cursor: pointer;
    color: #B9E2FD;
}

@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
`;
const In = styled.div`
font-size: 0.6rem;

@media screen and (max-width: 768px) {
    font-size: 0.6rem;
}
`;
const I = styled.div`
font-weight: 600;
font-size: 0.9rem;
color: #404040;

@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
`;
const Inner = styled.div`
display: flex;
align-items: center;
`;
const Reaction = styled.div`
display: flex;
justify-content: space-between;
margin: 0 10px;
`;
const Input = styled.input`
margin-left: 10px;
width: 100%;
height: 30px;
font-size: 0.9rem;
font-family: "poppins";
outline: none;
border: 0;

@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
`;
const Add = styled.div`
width: 100%;
border-top: 1px solid #DBDBDB;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;

@media screen and (max-width: 768px) {
    padding: 5px 0;
}
`;
const Tym = styled.div`
margin: 10px 10px;
text-transform: uppercase;
font-size: 0.6rem;

@media screen and (max-width: 768px) {
    font-size: 0.7rem;
}
`;
const Com = styled.div`
margin: 10px 10px;
font-size: 0.8rem;

@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
`;
const Span = styled.div`
margin-left: 8px;
font-size: 0.8rem;

@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
`;
const Name = styled.div`
margin-left: 10px;

@media screen and (max-width: 768px) {
    margin-left: 20px;
}
`;
const See = styled.div`
margin: 0 10px;
display: flex;
align-items: center;

`;
const Views = styled.div`
margin: 10px 10px;
font-size: 0.9rem;
`;
const Holder = styled.div`
display: flex;
width: 100px;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px) {
    width: 90px;
}
`;
const Img2 = styled.img`
width: 100%;
height: 550px;
object-fit: contain;
background-color: black;

@media screen and (max-width: 768px) {
    height: 500px;
}
`;
const Img = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
outline: 2px solid #F80F7E;
border: 1px solid transparent;
background-clip: content-box;
object-fit: cover;

@media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    outline: 0;
    border: 0;
}
`;
const Icon = styled(BsThreeDots)`
font-size: 1rem;
color: #262626;
`;
const Icon6 = styled(FiSmile)`
font-size: 1.5rem;

@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const Icon2 = styled(AiOutlineHeart)`
font-size: 1.5rem;

@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const Icon3 = styled(FaRegComment)`
font-size: 1.5rem;

@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const Icon4 = styled(TbSend)`
font-size: 1.5rem;

@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const Icon5 = styled(BsBookmark)`
font-size: 1.5rem;

@media screen and (max-width: 768px) {
    font-size: 1.2rem;
}
`;
const Topper = styled.div`
margin: 10px 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Wrapper = styled.div`
@media screen and (max-width: 768px) {
    width: 100%;
}
`;
const Container = styled.div`
background-color: #fff;
border: 1px solid #DBDBDB;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 10px;
margin: 20px 0;

@media screen and (max-width: 768px) {
    margin-top: 0;
    width: 425px;
    border-radius: 0;
}
`;