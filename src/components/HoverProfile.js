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

    </Container>
  )
}

const Container = styled.div`
width: 300px;
height: 400px;
z-index: 12;
background-color: brown;
margin-left: 50px;
`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;