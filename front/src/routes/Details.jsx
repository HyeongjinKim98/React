import React from "react";
import styled from "styled-components";
import Search from "../components/board/Search";
import BoardList from "../layout/BoardList";
import { useLocation } from "react-router-dom";
import Tag from "../components/board/Tag";
const BoardContainer = styled.div`
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

const Details = () =>{
    
    const location = useLocation();
    const data = location.state.value;
    const tags = data.contents.tagList;
    console.log(data.user.id);
    console.log(data.boardinfo.title);
    console.log(data.boardinfo.createDate);
    console.log(data.boardinfo.category);
    console.log(data.contents.tagList);
    console.log(data.contents.content);
    return(
        <>
            <BoardContainer>
                <div>
                    <h1>detailpage</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.contents.content }} />

                <TagContainer>
                    {tags.map((tag, idx) => (
                        <Tag key={idx} name={tag} />
                    ))}
                </TagContainer>
            </BoardContainer>
        </>
    )
}

export default Details;