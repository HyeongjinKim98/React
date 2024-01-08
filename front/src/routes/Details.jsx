import {React, useState} from "react";
import styled from "styled-components";
import ReactQuill,{Quill} from "react-quill";
import Search from "../components/board/Search";
import BoardList from "../layout/BoardList";
import { useLocation } from "react-router-dom";
import Tag from "../components/board/Tag";
const BoardContainer = styled.div`
    width : 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;;
`
const TagContainer = styled.div`
    padding : 5px;
    padding-left: 0px;
    margin-bottom : 12px;
`

const DetailWrapper = styled.div`
    width : 1000px;
    box-sizing: border-box;
    display: flex;
    flex-direction : column;
    align-items: center;
    margin-top: 20px;;
`

const Details = () =>{
    const location = useLocation();
    const data = location.state.value;
    const tags = data.contents.tagList;
    const [comment, setComment] = useState("");

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
    }

    const formats = [
        "link",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote"
    ]
    console.log(data.user.id);
    console.log(data.boardinfo.title);
    console.log(data.boardinfo.createTime);
    console.log(data.boardinfo.category);
    console.log(data.contents.tagList);
    console.log(data.contents.content);
    return(
        <>
            <BoardContainer>
                        <DetailWrapper>
                            <h2>{data.boardinfo.title}</h2>
                            <div>{data.boardinfo.createTime}</div>
                            <div>{data.user.id}</div>
                            <div dangerouslySetInnerHTML={{ __html: data.contents.content }} />
                            <TagContainer>
                                {tags.map((tag, idx) => (
                                    <Tag key={idx} name={tag} />
                                ))}
                            </TagContainer>
                            <ReactQuill
                    style = {{width : "960px",height : "100px"}}
                    modules={modules}
                    formats={formats}
                    onChange={setComment}
                    placeholder={`댓글을남겨주세요 `}>
                </ReactQuill>
                        </DetailWrapper>  
            </BoardContainer>
        </>
    )
}

export default Details;