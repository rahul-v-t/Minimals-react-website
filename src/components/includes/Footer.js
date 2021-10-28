import React from 'react';
import styled from "styled-components";
import Rocket from "../images/home/rocket.png";
import Logo from "../images/brand/logo_single.svg";

export default function Footer() {
    return (
        <>
           <Main className="wrapper">
            <Top>
                <Left>
                    <Img> <Roc src={Rocket} alt="Image" /> </Img>
                </Left>
                <Right>
                    <H2>Get started with minimal kit today</H2>
                    <P>Purchase Now</P>
                </Right>
            </Top>
            <Bottom>
                <Logcon>
                    <Log src={Logo} alt="Icon" />
                </Logcon>
                <P1>&copy; All rights reseved</P1>
                <P2>made by <Span>minimals.cc</Span></P2>
            </Bottom>
           </Main>
        </>
    )
}

const Main = styled.div `
    padding-top: 120px;
    padding-bottom:60px;
`;
const Top = styled.div `
    background-image: linear-gradient(to right, #4ba757 , #398456);
    border-radius: 20px;
    display: flex;
    align-items: center;
`;
const Bottom = styled.div `
`;
const Left = styled.div `
    width:40%;
`;
const Img = styled.div `
`;
const Roc = styled.img `
    width:100%;
    display: block;
`;
const Right = styled.div `
`;
const H2 = styled.h2 `
    font-size: 48px;
    font-weight: 600;
    width: 55%;
    color: #fff;
    margin-bottom: 40px;
    @media all and (max-width:1280px){
		width:62%;
	}
    @media all and (max-width:1080px){
		font-size:42px;
	}
    @media all and (max-width:980px){
		width:70%;
        font-size:36px;
	}
    @media all and (max-width:768px){
		width:75%;
        font-size:30px;
	}
    @media all and (max-width:640px){
		font-size:28px;
	}
    @media all and (max-width:480px){
		font-size:20px;
	}
`;
const P = styled.p `
    padding: 13px 2px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    background: #fff;
    width: 18%;
    @media all and (max-width:1080px){
		width:24%;
	}
    @media all and (max-width:980px){
		width:28%;
	}
    @media all and (max-width:768px){
		width:32%;
	}
    @media all and (max-width:640px){
		width:40%;
        margin-bottom:10px;
	}
    @media all and (max-width:480px){
		width:53%;
	}
`;
const Logcon = styled.div `
    width: 5%;
    padding-top: 30px;
    margin: 0 auto;
    @media all and (max-width:640px){
		width:8%;
	}
    @media all and (max-width:480px){
		width:10%;
	}
`;
const Log = styled.img `
    width:100%;
    display: block;
    cursor:pointer;
`;
const P1 = styled.p `
    color:#60676f;
    text-align:center;
`;
const P2 = styled.p `
    color:#60676f;
    text-align:center;
`;
const Span = styled.span `
    color:#459b51;
    cursor:pointer;
`;