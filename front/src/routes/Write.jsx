import React from "react";
import styled from "styled-components";
import ReactQuill,{Quill} from "react-quill";
import { useState } from "react";
import TagsInput from "../components/create/TagInput";
import ImageResize from 'quill-image-resize';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
Quill.register('modules/ImageResize',ImageResize);

const WriteWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
// const TagInput = styled(Input)`
//     font-size: 20px;
//     border: none;
// `
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
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [tagList, setTagList] = useState([]);
    const [content, setContent] = useState("");

    const navigateDetails = () =>{
        const boardData = {
            user: {
                id: "김형진",
            },
            boardinfo: {
                title: title,
                createTime: "2024-01-06",
                category: "Q&A",
                view : 3,
                like : 5,
            },
            contents: {
                tagList: tagList,
                content: content
            }
        }
        navigate('/details',{
            state: { value: boardData }
        })
        
    }
    
    const modules = {
        toolbar :{
            container: [
                ["link","image"],
                [{ header: [1,2,3, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    {list:"ordered"}
                ]
            ],
        },
        ImageResize :{
            parchment : Quill.import('parchment')
        }
    }

    const formats = [
        "link",
        "image",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote"
    ]

    const handleTagListChange = (newList) =>{
        setTagList(newList);
    }
    return (
        <>
            <WriteWrapper>
                <h2>글 쓰기</h2>
                <Wrapper>
                    <TitleInput
                        placeholder="제목을 입력해보세요"
                        onChange={(event)=>{
                            setTitle(event.target.value)
                        }}/>
                </Wrapper>
                <Wrapper>
                    <TagsInput
                        onTagListChange={handleTagListChange}/>
                </Wrapper>
                
                <ReactQuill
                    style = {{width : "1020px",height : "1000px"}}
                    modules={modules}
                    formats={formats}
                    onChange={setContent}
                    placeholder={`-학습 관련 질문을 남겨주세요!
-남겨주세요 학습 관련 질문을!
-학습 관련 질문을 남겨주세요!
-남겨주세요 학습 관련 질문을!
                    `}>
                </ReactQuill>
                <SubmitWrapper>
                    <Link to="/board">
                        <CancelBtn>취소</CancelBtn>
                    </Link>
                    <SubmitBtn
                        onClick={navigateDetails}>등록</SubmitBtn>
                </SubmitWrapper>
            </WriteWrapper>
        </>
    )
}
export default Write;