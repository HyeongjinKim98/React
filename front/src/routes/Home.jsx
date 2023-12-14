import React from 'react'
import styled from 'styled-components'
const Box = styled.div`
    box-sizing: border-box;
    margin-top : 20px;
    margin-bottom : 20px;
    background-color: skyblue;
    width : 100%;
    height : 900px
`
const Title = styled.h1`
    color : grey;
`
const Home = () =>{
    return(
        <Box/>
    )
}
export default Home;