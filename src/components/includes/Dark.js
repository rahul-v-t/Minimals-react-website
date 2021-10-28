import React from 'react';
import styled from "styled-components";
import Dmode from "../images/home/darkmode.png";
import Lmode from "../images/home/lightmode.png";
import Shape from "../images/home/shape.svg";

export default function Dark() {
    return (
        <>
         <Container>
                <Main  className="wrapper">
                <Left>
                    <Dcon><Img1 src={Lmode} alt="Image" /> </Dcon>
                    <Lcon><Img2 src={Dmode} alt="Image" /> </Lcon>
                </Left>
                <Right>
                <Scon><Img3 src={Shape} alt="Image" /> </Scon>
                <Span>EASY SWITCH BETWEEN STYLES</Span>
                <H2>Dark mode</H2>
                <P>A dark theme that feels easier on the eyes</P>
                </Right>
            </Main>
        </Container>
        </>
    )
}
const Container = styled.section `
    background:#161c24;
    margin-top: 30%;
`;
const Main = styled.div `
    display:flex;
`;
const Left = styled.div `
    width:100%;
    margin-top: 20%;
    margin-bottom: 20%;
    z-index:1;
    position:relative;
`;
const Right = styled.div `
     width:100%;
     position:relative;
`;
const Dcon = styled.div `
    position:absolute;
    z-index:-1;
`;
const Img1 = styled.img `
    width:100%;
    display: block;
`;
const Img2 = styled.img `
     width:100%;
     display: block;
`;
const Img3 = styled.img `
     opacity: 0.5;
    filter: invert(1);
    width: 100%;
    display: block;
`;
const Lcon = styled.div `
   
`;
const Scon = styled.div `
    position: absolute;
    right: 120px;
    top:200px;
    width:100%;
    @media all and (max-width:980px){
		top:142px;
	}
    @media all and (max-width:768px){
		right:90px;
	}
`;
const Span = styled.p `
    color:#808b98;
    margin-top: 70%;
    margin-left: 20%;
    @media all and (max-width:768px){
		font-size:14px;
	}
`;
const H2 = styled.h2 `
    color:#fff;
    margin-left: 20%;
    font-size: 36px;
    padding: 20px 0;
    font-weight: 600;
    @media all and (max-width:480px){
		font-size:24px;
	}
`;
const P = styled.p `
    color:#fff;
    margin-left: 20%;
`;