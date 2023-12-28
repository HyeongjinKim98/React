import React from "react";
import styled from "styled-components";

const WriteWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;;
`
const Write = () => {
    return (
        <>
            <WriteWrapper>
                <h3>hi wirte</h3>
            </WriteWrapper>
        </>
    )
}
export default Write;