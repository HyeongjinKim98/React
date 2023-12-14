import React from "react";
import styled from "styled-components";

const TagContainer = styled.span`
    margin-right : 10px;
    padding : 6px;
    background-color : #EFF3FA;
    font-size: 16px;
`
export default function Tag({name}){
    return(
        <>
            <TagContainer>{name}</TagContainer>
        </>
    )
}