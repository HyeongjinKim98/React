import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from './Tag';
const ItemContainer = styled.div`
    width : 1020px;
    box-sizing: border-box;
    padding : 20px;
    border-bottom: 1px solid grey;
    background-color: white;
    &:hover{
        background-color: #d9d9d9;
        cursor: pointer;
    }
`
const Title = styled.div`
    color : #212529;
    font-weight: bold;
    font-size : 18px;
    margin-bottom: 12px;
`
const Content = styled.div`
    color : #495057;
    font-size : 16px;
    margin-bottom: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
const Left = styled.span`
    margin-right : auto;
`
const Right = styled.span`
    margin-left : auto;
`
const Writer = styled.span`
    color : #868E96;
    font-size: 14px;
    margin-right: 6px;
`
const CreateTime = styled.span`
    color : #868E96;
    font-size: 14px;
    margin-left: 6px;
`
const Container = styled.div`
    margin-bottom: 12px;
    display: flex;
`
const RightItem = styled.span`
    color : #868E96;
    font-size: 14px;
    margin-left : 10px;
`
const TagContainer = styled.div`
    padding : 5px;
    padding-left: 0px;
    margin-bottom : 12px;
`
export default function BoardItem({
    board : {title, writer_id, content, tags, createTime, views, comments, likes}
    }){
    return(
        <>
            <Link to="/details" style={{ textDecoration: "none" }}>
                <ItemContainer>
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                    <TagContainer>
                        {tags.map((tag, idx) => (
                            <Tag key={idx} name={tag} />
                        ))}
                    </TagContainer>
                    <Container>
                        <Left>
                            <Writer>{writer_id}</Writer>
                            <CreateTime>{createTime}</CreateTime>
                        </Left>
                        <Right>
                            <RightItem>댓글 {comments.length} </RightItem>
                            <RightItem>좋아요 {likes}</RightItem>
                            <RightItem>조회수 {views}</RightItem>
                        </Right>
                    </Container>
                </ItemContainer>
            </Link>
        </>
    )
}