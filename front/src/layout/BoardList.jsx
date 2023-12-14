import React from 'react';
import styled from 'styled-components';
import BoardItem from '../components/board/BoardItem';
export default function BoardList({boardlist}){
    return(
        <>
            {boardlist.map((board)=>(
                <BoardItem board={board}/>
            ))}
        </>
    )
}