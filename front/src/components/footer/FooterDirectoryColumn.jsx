import styled from "styled-components";
import React from "react";

const Container = styled.div`
    width : 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap : 12px;
`
const Column = styled.div`
    font-weight : bold;
`
const Child = styled.div`
    &:hover{
        cursor: pointer;
    }
`
export default function FooterDirectoryColumn({
    content: { title, children }}){
    return(
        <>
            <Container>
                <Column>{title}</Column>
                {children.map((child) => (
                    <Child>{child.title}</Child>
                ))}
            </Container>
        </>
    )
}