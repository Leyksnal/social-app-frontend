import React from 'react'
import styled from 'styled-components'

export default function Card() {
  return (
    <Container>
        <Wrapper>
            <Topper>
                <Img />
                <Name>Leke</Name>
                <Icon />
            </Topper>
            <Img2 />
            <Reaction>
                <Holder>
                    <Icon2 />
                    <Icon3 />
                    <Icon4 />
                </Holder>
                <Holder2>
                    <Icon5 />
                </Holder2>
            </Reaction>
            <Views>89,465 Views</Views>
            <See>
                <Name>Leke</Name>
                <Span>The name is giving it back to the community</Span>
            </See>
            <Com>View all commnets</Com>
            <Tym>3 hours ago</Tym>
            <Add>
                <Icon6 />
                <Input placeholder='Add a comment'/>
            </Add>
        </Wrapper>
    </Container>
  )
}


// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
const Reaction = styled.div``;
const Input = styled.input``;
const Add = styled.div``;
const Tym = styled.div``;
const Com = styled.div``;
const Span = styled.div``;
const Name = styled.div``;
const See = styled.div``;
const Views = styled.div``;
const Holder2 = styled.div``;
const Holder = styled.div``;
const Img2 = styled.div``;
const Img = styled.div``;
const Icon = styled.div``;
const Icon6 = styled.div``;
const Icon2 = styled.div``;
const Icon3 = styled.div``;
const Icon4 = styled.div``;
const Icon5 = styled.div``;
const Topper = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;