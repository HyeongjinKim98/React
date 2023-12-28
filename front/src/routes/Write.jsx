import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import { useState } from "react";

const WriteWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;;
`
const Wrapper = styled.div`
    width: 1020px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    border : none;
    margin : 6px 0 14px 0;
`
const TitleInput = styled(Input)`
    font-size: 40px;
    border: none;
`
const TagInput = styled(Input)`
    font-size: 20px;
    border: none;
`
const SubmitWrapper = styled.div`
    gap : 6px;
    width : 1020px;
    box-sizing: border-box;
    margin-top : 50px;
    display: flex;
    justify-content: right;
`
const Btn = styled.button`
    font-size : 20px;
    width : 120px;
    height: 50px;
    border-radius : 10px;
    &:hover{
        cursor: pointer;
    }
`
const CancelBtn = styled(Btn)`
    background-color: white;
    color : black;
    border: 1px solid #8a8a8a;
    &:hover{
        background-color: #dedede;
    }
`
const SubmitBtn = styled(Btn)`
    background-color: black;
    color : white;
        &:hover{
        background-color: #383838;
    }
`
const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const modules = {
        toolbar :[
                ["image"],
                [{header:[1,2,false]}],
                ["bold", "italic", "underline", "strike","blockquote"],
            ],
    }
    
    const formats = [
        "image",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote"
    ]
    console.log(content)
    return (
        <>
            <WriteWrapper>
                <h2>글 쓰기</h2>
                <Wrapper>
                    <TitleInput
                        placeholder="제목을 입력해보세요"
                        onChange={setTitle}/>
                </Wrapper>
                <Wrapper>
                    <TagInput
                        placeholder="태그를 입력해보세요" />
                </Wrapper>
                <ReactQuill
                    style = {{width : "1020px",height : "800px"}}
                    modules={modules}
                    formats={formats}
                    onChange={setContent}
                    placeholder="글을 작성해주세요!">
                </ReactQuill>
                <SubmitWrapper>
                    <CancelBtn>취소</CancelBtn>
                    <SubmitBtn>등록</SubmitBtn>
                </SubmitWrapper>
            </WriteWrapper>
        </>
    )
}
export default Write;