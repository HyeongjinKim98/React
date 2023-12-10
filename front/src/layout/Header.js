import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <h2>Header</h2>
            <Link to="/">홈</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/board">게시판</Link>
            <hr/>
        </header>
    );
}
export default Header;