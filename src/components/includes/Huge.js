import React from 'react';
import styled from "styled-components";
import Screen1 from "../images/home/screen_light_1.png";
import Screen2 from "../images/home/screen_light_2.png";
import Screen3 from "../images/home/screen_light_3.png";

export default function Huge() {
    return (
        <>
        <Main  className="wrapper">
            <Left>
                <Small>INTERFACE STARTER KIT</Small>
                <H2>Huge pack of elements</H2>
                <P>We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!</P>
                <Button>View All Components</Button>
            </Left>
            <Right>
                <Imgcon1><Screen src={Screen3} /> </Imgcon1>
                <Imgcon2><Screen src={Screen2} /> </Imgcon2>
                <Imgcon3><Screen src={Screen1} /> </Imgcon3>
            </Right>
        </Main>
        </>
    )
}

const Main = styled.div `
    display: flex;
    margin-top: 300px;
`;
const Left = styled.div `
    width: 42%;
`;
const Small = styled.p `
    color: #8d98a2;
`;
const H2 = styled.h2 `
    font-size: 62px;
    width: 67%;
    padding: 30px 0;
    font-weight: 600;
    @media all and (max-width:1280px){
		width:86%;
	}
    @media all and (max-width:1080px){
		font-size: 56px;
	}
`;
const P = styled.p `
    color: #8d98a2;
    width:55%;
    padding-bottom: 40px;
`;
const Right = styled.div `
    width:45%;
    display:flex;
    position:relative;
    @media all and (max-width:1080px){
		width:42%;
	}
`;
const Button = styled.span `
    padding: 12px 24px;
    border-radius: 8px;
    border: 1px solid #8d98a2;
    cursor:pointer;
`;
const Imgcon1 = styled.div `
    transform:skewY(15deg);  
    position:absolute; 
    width: 50%;
    left: 359px;
    top: -70px;
`;
const Imgcon2 = styled.div `
    transform:skewY(15deg);    
    position:absolute; 
    width: 50%;
    left: 176px;
    top: -62px;
    box-shadow: 51px -9px 68px 30px rgb(0 0 0 / 27%);
`;
const Imgcon3 = styled.div `
    transform:skewY(15deg);  
    position:absolute;   
    width: 50%;
    box-shadow: 51px -9px 68px 30px rgb(0 0 0 / 27%);
`;
const Screen = styled.img `
    width:100%;
    display:block;
`;