import React from 'react';
import styled from "styled-components";
import Code from "../images/icons/ic_code.svg";
import Design from "../images/icons/ic_design.svg";
import Min from "../images/favicon/android-chrome-192x192.png";

export default function Cards() {
    return (
        <>
            <Small>MINIMAL</Small>
            <Heading>What Minimal helps you?</Heading>
            <Box>
                <Box1>
                    <Logcon><Img1 src={Design} alt="Icon" /> </Logcon>
                    <H2>UI & UX design</H2>
                    <P3>The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.</P3>
                </Box1>
                <Box2>
                    <Out>
                    <Logcon><Img2 src={Code} alt="Icon" /> </Logcon> 
                    <H2>Development</H2>
                    <P3>Easy to customize and extend each component, saving you time and money.</P3>
                    </Out>
                </Box2>
                <Box3>
                    <Logcon><Img3 src={Min} alt="Icon" /> </Logcon>
                    <H2>Branding</H2>
                    <P3>Consistent design in colors, fonts ... makes brand recognition easy.</P3>
                </Box3>
            </Box>
        </>
    )
}

const Small = styled.p `
    margin-top: 120px;
    text-align: center;
    color: #c1c1c1;
    text-align:center;
`;
const Heading = styled.h1 `
    text-align:center;
    font-size: 42px;
    font-weight: 600;
    padding: 30px 0;
`;
const Box = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 100px;
`;
const Box1 = styled.div `
    width:28%;
    background:#f4f6f8;
    border-radius: 14px;
`;
const Box2 = styled.div `
    width:28%;
    background:#fbfbff;
    box-shadow: -15px 30px 30px 20px rgb(0 0 0 /10%);
    padding: 30px;
    border-radius: 14px;
    transform: translateY(-32px);
`;
const Out = styled.div `
    margin: 0 auto;
    background:#fff;
    border-radius: 14px;
`;
const Box3 = styled.div `
    background:#f4f6f8;
    width:28%;
    border-radius: 14px;
    transform: translateY(10px);
    padding: 30px;
`;
const Logcon = styled.div `
    margin: 0 auto;
    width: 20%;
    padding: 80px 0;
`;
const Img1 = styled.img `
    width:50%;
    display:block;
`;
const Img2 = styled.img `
    width:80%;
    display:block;
`;
const Img3 = styled.img `
    width:50%;
    display:block;
`;
const H2 = styled.h2 `
    text-align:center;
    font-weight: 600;
    padding: 20px 0;
`;
const P3 = styled.p `
    text-align:center;
    color:#8d98a2;
    width: 60%;
    margin: 0 auto;
    padding: 40px 0;
`;