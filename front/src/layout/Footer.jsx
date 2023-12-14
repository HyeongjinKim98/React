import React from 'react';
import styled from 'styled-components';
import FooterDirectory from '../components/footer/FooterDirectory';
const sample = [
    {
        "title" : "Apple Store",
        "children" : [
            {
                "title": "매장 찾기",
                "link" : ""
            },
            {
                "title": "Genius Bar",
                "link": ""
            },
            {
                "title": "Today At Apple",
                "link": ""
            },
            {
                "title": "Apple Camp",
                "link": ""
            },
            {
                "title": "Apple Store 앱",
                "link": ""
            },
            {
                "title": "인증 리퍼비쉬 제품",
                "link": ""
            }
        ]
    },
    {
        "title": "쇼핑 및 알아보기",
        "children": [
            {
                "title": "Store",
                "link": ""
            },
            {
                "title": "Mac",
                "link": ""
            },
            {
                "title": "iPad",
                "link": ""
            },
            {
                "title": "iPhone",
                "link": ""
            },
            {
                "title": "Watch",
                "link": ""
            },
            {
                "title": "AirPods",
                "link": ""
            }
        ]
    }
]
const FooterContainer = styled.footer`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Divider = styled.hr`
    width : 1020px;
`
const Footer = () =>{
    return(
       <>
            <FooterContainer>
                <FooterDirectory diritem={sample} />
            </FooterContainer>
            <Divider></Divider>
       </>
    );
}
export default Footer;