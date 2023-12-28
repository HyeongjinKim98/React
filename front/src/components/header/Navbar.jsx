import styled from "styled-components";
import React from "react";
import NavComponent from "./NavComponent";

const NavbarContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    width : 1020px;
    justify-content : right;
`
export default function Navbar({navitem}){
    return(
        <>
           <NavbarContainer>
                {navitem.map((content) => (
                    <NavComponent key={content.text} content={content} />
                ))
                }
           </NavbarContainer>
        </>
    )
}