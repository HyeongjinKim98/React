import React from "react";
import styled from "styled-components";
const Container = styled.div`
    background-color: white;
    width : 990px;
    height : 200px;
    border-bottom : 1px solid grey;
`
const SearchContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    margin-bottom : 20px;
`
const SearchInput = styled.input`
    box-sizing: border-box;
    padding : 4px;
    padding-left : 20px;
    font-size : 20px;
    background-color: white;
    width : 70vw;
    height : 70px;
    border : 1px solid #dee2e6;
    margin-right: 10px;
`
const Btn = styled.button`
    font-size: 20px;
    margin-left : auto;
    box-sizing: border-box;
    border : none;
    width : 20vw;
    height : 70px;
    border-radius: 8px;
`
const SearchBtn = styled(Btn)`
    background-color: #000A12;
    color : white;
    &:hover{
        background-color: #001f38;
        cursor: pointer;
    }
`
const ResetBtn = styled(SearchBtn)`
    background-color: white;
    color: #000A12;
    &:hover{
        background-color: #efefef;
        cursor: pointer;
    }
`
export default function Search(){
    return(
        <>
            <Container>
                <SearchContainer>
                    <SearchInput placeholder="검색어를 입력하세요!"/>
                    <SearchBtn>검색</SearchBtn>
                </SearchContainer>
                <SearchContainer>
                    <SearchInput placeholder="태그를 입력하세요!" />
                    <ResetBtn>초기화</ResetBtn>
                </SearchContainer>
            </Container>
        </>
    )
}