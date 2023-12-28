import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BoardItem from '../components/board/BoardItem'; 
const Btn = styled.button`
    font-size: 20px;
    margin-left : auto;
    box-sizing: border-box;
    border : none;
    width : 20vw;
    height : 70px;
    border-radius: 8px;
`
const WriteBtn = styled(Btn)`
    margin : 10px;
    background-color: #000A12;
    width : 100px;
    height : 60px;
    color : white;
    &:hover{
        background-color: #001f38;
        cursor: pointer;
    }
`
const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    width : 1020px;
`
export default function BoardList({boardlist}){
    return(
        <>
        <Wrapper>

                <Link to ="/write">
                    <WriteBtn>
                        글 쓰기
                    </WriteBtn>
                </Link>

        </Wrapper>
            {boardlist.map((board)=>(
                <BoardItem board={board}/>
            ))}
        </>
    )
}