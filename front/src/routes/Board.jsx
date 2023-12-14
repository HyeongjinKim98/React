import React from "react";
import styled from "styled-components";
import Search from "../components/board/Search";
import BoardList from "../layout/BoardList";
const sample = [
    {
        title : '안녕하세요 제목입니다',
        writer_id : '김형진',
        content: '안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다',
        tags : [
            'ES6',
            'React',
            'Front'
        ],
        createTime : '20분 전',
        views : '5',
        comments : [
            "댓글인데요",
            "댓글입니다",
            "댓글이에요"
        ],
        likes : '3'
    },
    {
        title: '안녕하세요 제목입니다',
        writer_id: '김형진',
        content: '안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다',
        tags: [
            'Spring',
            'Java'
        ],
        createTime: '30분 전',
        views: '6',
        comments: [
            "댓글인데요",
            "댓글입니다",
            "댓글이에요"
        ],
        likes: '6'
    },
    {
        title: '안녕하세요 제목입니다',
        writer_id: '김형진',
        content: '안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다 안녕하세요 내용입니다',
        tags: [
            'DB',
            'MySQL'
        ],
        createTime: '40분 전',
        views: '8',
        comments: [
            "댓글인데요",
            "댓글입니다",
            "댓글이에요"
        ],
        likes: '9'
    }
]
const Title = styled.h1`
    color : grey;
    margin-bottom: 40px;
`
console.log(sample[0].title)
const BoardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;;
    
`
const Board = () =>{
    return(
        <>
            <BoardContainer>
                <Title>게시판</Title>
                <Search></Search>
                <BoardList boardlist={sample}/>
            </BoardContainer>
        </>
    )
}
export default Board;