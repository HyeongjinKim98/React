import styled from "styled-components";
import React from "react";

const Component = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height : 100%;

    &:hover{
        cursor: pointer;
        /* dropdown */
    }
`
const onClickNavItem = () =>{
    alert("ㅁㅁ");
    // route
}
export default function NavComponent({
    content,
    content :{text, url, child}}){
    return(
        <>
            <Component onClick={onClickNavItem}>{text}</Component>
        </>
    )
}