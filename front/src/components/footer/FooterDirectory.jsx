import styled from "styled-components";
import React from "react";
import FooterDirectoryColumn from "./FooterDirectoryColumn";

const Container = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    display: flex;
    width : 1000px;
`
export default function FooterDirectory({diritem}){
    return(
        <>
            <Container>
                {diritem.map((item) => (
                    <FooterDirectoryColumn key={item.title} content={item} />
                ))}
            </Container>
        </>
    )
}