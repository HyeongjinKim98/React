import styled from "styled-components";
import React from "react";

const Nav = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height : 100%;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
        /* dropdown */
    }
`
const onClickNavItem = () =>{
    alert("ㅁㅁ");
}
export default function NavComponent({
    content,
    content :{text, url, child}}){
    return(
        <>
            <Nav onClick={onClickNavItem}>{text}</Nav>
        </>
    )
}