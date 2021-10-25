import React from 'react';
import styled from "styled-components";
import Grid from "../images/home/theme-color/grid.png";
import Screen from "../images/home/theme-color/screen-default.png";
import Block1 from "../images/home/theme-color/block1-default.png";
import Block2 from "../images/home/theme-color/block2-default.png";
import Side from "../images/home/theme-color/sidebar-default.png";

export default function Dark() {
    return (
        <>
         <Container>
            <Main  className="wrapper">
                <Head>
                    <Span>Choose Your Style </Span>
                    <H2>Theme Color</H2>
                    <P>Express Your own style with just one click</P>
                </Head>
                <Bottom>
                    <Images>
                        <Back>
                            <Gri src={Grid} alt="Image" />
                        </Back>
                        <Screens>
                            <Mains src={Screen} alt="Image" />
                        </Screens>
                        <Block01>
                            <Blck1 src={Block1} alt="Image" />
                        </Block01>
                        <Block02>
                            <Blck2 src={Block2} alt="Image" />
                        </Block02>
                        <Block03>
                            <Blck3 src={Side} alt="Image" />
                        </Block03>
                    </Images>
                    <Dots>
                        <Ul>
                            <Li><Div></Div></Li>
                            <Li><Div1></Div1></Li>
                            <Li><Div2></Div2></Li>
                            <Li><Div3></Div3></Li>
                            <Li><Div4></Div4></Li>
                            <Li><Div5></Div5></Li>
                        </Ul>
                    </Dots>
                </Bottom>
            </Main>
        </Container>
        </>
    )
}
const Container = styled.section `
    background-image: linear-gradient(#e0e4e9, #fff);
    padding-bottom:40%;
`;
const Main = styled.div `

`;
const Head = styled.div `
`;
const Span = styled.p `
    text-align:center;
    color:#a3aeb9;
    padding-top: 20%;
`;
const H2 = styled.h2 `
    text-align:center;
    font-size: 48px;
    color:#212b36;
    padding: 10px;
    font-weight: 600;
`;
const P = styled.p `
    text-align:center;
    color:#a3aeb9;
`;
const Bottom = styled.div `
    display: flex;
`;
const Images = styled.div `
    width:99%;
    position:relative;
    margin-top: 50px;
`;
const Back = styled.div `
    position:absolute;
`;
const Gri = styled.img `
    width:100%;
    display: block;
`;
const Screens = styled.div `
     position:absolute;
`;
const Mains = styled.img `
    width:100%;
    display: block;
`;
const Block01 = styled.div `
     position:absolute;
`;
const Blck1 = styled.img `
    width:100%;
    display: block;
`;
const Block02 = styled.div `
     position:absolute;
`;
const Blck2 = styled.img `
    width:100%;
    display: block;
`;
const Block03 = styled.div `
     position:absolute;
`;
const Blck3 = styled.img `
    width:100%;
    display: block;
`;
const Dots = styled.div `
   
`;
const Ul = styled.ul `
`;
const Li = styled.li `
    margin-bottom:35px;
`;
const Div = styled.div `
    width:15px;
    height:15px;
    background:#4eac56;
    border-radius:50%;
`;
const Div1 = styled.div `
    width:15px;
    height:15px;
    background:#7742dc;
    border-radius:50%;
`;
const Div2 = styled.div `
    width:15px;
    height:15px;
    background:#52caf9;
    border-radius:50%;
`;
const Div3 = styled.div `
    width:15px;
    height:15px;
    background:#0b45f5;
    border-radius:50%;
`;
const Div4 = styled.div `
    width:15px;
    height:15px;
    background:#f5a941;
    border-radius:50%;
`;
const Div5 = styled.div `
    width:15px;
    height:15px;
    background:#ed3833;
    border-radius:50%;
`;