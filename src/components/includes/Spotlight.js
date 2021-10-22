import React from 'react';
import styled from "styled-components";
import Logoimg from "../images/brand/logo_single.svg";
import Down from "../images/home/arrow-down-sign-to-navigate.png";
import Bg from "../images/overlay.svg";
import Thund from "../images/home/thunder.png";
import Diao from "../images/home/ic_sketch_small.svg";
import L1 from "../images/home/ic_sketch.svg";
import L2 from "../images/home/ic_figma.svg";
import L3 from "../images/home/ic_material.svg";
import L4 from "../images/home/ic_react.svg";
import L5 from "../images/home/ic_js.svg";
import L6 from "../images/home/ic_ts.svg";
import Heroo from "../images/home/hero.png";

export default function Spotlight() {
    return (
        <>
        <Fullbody>
                <Spotlighte className="wrapper">
                    <Navbar>
                        <Left>
                         	<Logo src={Logoimg} alt="Logo" />
                            <Span>v2.6.0</Span>
                        </Left>
                        <Right>
                            <Lists>
                                <List><a>Home</a></List>
                                <List><a>Components</a></List>
                                <Liste><a>Pages </a><Div> <Arrow src={Down} alt="Icon" /> </Div></Liste>
                                <List><a>Documentation</a></List>
                                <List><a>Purchase Now</a></List>
                            </Lists>
                        </Right>
                    </Navbar>
                    <Home>
                        <Leftside>
                            <H2>Start a new project with <Min>Minimal</Min></H2>
                            <P>The Starting point of your next project based on easy-to-customize Materials-UI &copy; helps you build apps faster and better. </P>
                            <P1><Dia src={Diao} alt="Icon" /><Under>Preview in Skecth cloud</Under></P1>
                            <P3><Thun src={Thund} alt="Icon" />Live Preview </P3>
                            <Brands>
                                <Brand> <Ico src={L1} alt="Icon" /> </Brand>
								<Brand> <Ico src={L2} alt="Icon" /> </Brand>
								<Brand> <Ico src={L3} alt="Icon" /> </Brand>
								<Brand> <Ico src={L4} alt="Icon" /> </Brand>
								<Brand> <Ico src={L5} alt="Icon" /> </Brand>
								<Brand> <Ico src={L6} alt="Icon" /> </Brand>
                            </Brands>
                        </Leftside>
						<Rightside>
							<Bgimg><Hero src={Heroo} alt="Image" /> </Bgimg>
						</Rightside>
                    </Home>
                </Spotlighte>
        </Fullbody>
        </>
    )
}
const Fullbody = styled.section `
    background:url(${Bg});
    background-repeat:no-repeat;
    background-size:cover;
`;
const Spotlighte = styled.div `
    
`;
const Navbar = styled.nav `
	display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`;
const Left = styled.div `
	width:50%;
	display:flex;
	align-items:center;
`;
const Logo = styled.img `
	width:8%;
`;
const Span = styled.span `
	color: blue;
    padding: 1%;
    border-radius: 10px;
    background: #1b324b;
    margin-left: 6px;
`;
const Right = styled.div `
	width:50%;
`;
const Lists = styled.ul `
	display: flex;
	align-items: center;
`;

const List = styled.li `
	margin-right:40px;
	color:#fff;
	cursor:pointer;
	&:hover{
		color:#499e54;
	}
	&:last-child{
		padding: 12px;
    	border-radius: 8px;
		background: #499e54;
	&:hover{
		color:#fff;
	}
	}
`;
const Liste = styled.li `
	display:flex;
	align-items:center;
	width: 12%;
	color:#fff;
	cursor:pointer;
	&:hover{
		color:#499e54;
	}
`;
const Div = styled.div `
	width: 20%;
`;
const Arrow = styled.img `
	width: 100%;
	display:block;
	filter:invert(1);
`;
const Home = styled.div `
`;
const Leftside = styled.div `
`;
const H2 = styled.h2 `
`;
const P = styled.p `
`;
const Min = styled.span `
`;
const P1 = styled.p `
`;
const Dia = styled.img `
`;
const Under = styled.span `
`;
const P3 = styled.p `
`;
const Thun = styled.img `
`;
const Brands = styled.ul `
`;
const Brand = styled.li `
`;
const Ico = styled.img `
`; 
const Rightside =styled.div `
`;
const Bgimg = styled.div `
`;
const Hero = styled.img `
`;