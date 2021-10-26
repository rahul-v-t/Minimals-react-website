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
                            <H2>Start a <br /> new project with <Min>Minimal</Min></H2>
                            <P>The Starting point of your next project based on easy-to-customize Materials-UI &copy; helps you build apps faster and better. </P>
                            <P1><Dia src={Diao} alt="Icon" /><Under>Preview in Skecth cloud</Under></P1>
                            <P3><Flash><Thun src={Thund} alt="Icon" /> </Flash>Live Preview </P3>
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
    padding-bottom: 90px;
`;
const Navbar = styled.nav `
	display: flex;
    justify-content: space-between;
    align-items: center;
	height:100px;
`;
const Left = styled.div `
	width:50%;
	display:flex;
	align-items:center;
	@media all and (max-width:1080px){
		width:40%;
	}
`;
const Logo = styled.img `
	width:8%;
	cursor: pointer;
	@media all and (max-width:980px){
		width:16%;
	}
`;
const Span = styled.span `
	color: blue;
    padding: 1%;
    border-radius: 10px;
    background: #1b324b;
    margin-left: 6px;
`;
const Right = styled.div `
	@media all and (max-width:768px){
		display:none;
	}
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
	margin-right: 40px;
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
	&:hover{
		filter:hue-rotate(90deg);
	}
`;
const Home = styled.div `
	display:flex;
	align-items:center;
`;
const Leftside = styled.div `
	width:50%;
	@media all and (max-width:980px){
		width:100%;
	}
`;
const H2 = styled.h2 `
	line-height: 1.2em;
	margin-top: 50px;
	width: 75%;
    font-size: 72px;
    font-weight: 600;
    color: #fff;
	@media all and (max-width:1280px){
		width: 90%;
	}
	@media all and (max-width:1080px){
		font-size: 62px;
	}
	@media all and (max-width:980px){
		font-size: 54px;
		width:95%;
	}
	@media all and (max-width:768px){
		width:100%;
		font-size:48px;
		text-align:center;
		margin:0 auto;
	}
`;
const Min = styled.span `
	line-height: 1.2em;
	font-size: 72px;
    font-weight: 600;
	color:#43d678;
	@media all and (max-width:1080px){
		font-size: 62px;
	}
	@media all and (max-width:980px){
		font-size: 54px;
	}
	@media all and (max-width:768px){
		font-size:48px;
	}
`;
const P = styled.p `
	color: #fff;
    width: 75%;
    padding: 36px 0;
`;
const P1 = styled.div `
	display: flex;
	align-items:center;
`;
const Dia = styled.img `
	
`;
const Under = styled.p `
	margin-left: 8px;
    color: #fff;
    text-decoration: underline;
	cursor:pointer;
`;
const P3 = styled.p `
	display: flex;
	align-items:center;
	background: #4eac56;
    padding: 10px;
    width: 30%;
    border-radius: 8px;
    margin: 30px 0;
    color: #fff;
	cursor:pointer;
	@media all and (max-width:1080px){
		width: 32%;
	}
	@media all and (max-width:980px){
		width:42%;
	}
`;
const Flash = styled.div `
	width: 20%;
`;
const Thun = styled.img `
	width:100%;
	display: block;
	filter:invert(1);
`;
const Brands = styled.ul `
	display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`;
const Brand = styled.li `
	cursor:pointer;
	@media all and (max-width:1280px){
		margin-right: 10px;
	}
`;
const Ico = styled.img `
`; 
const Rightside =styled.div `
	width:50%;
	@media all and (max-width:768px){
		display:none;
	}
`;
const Bgimg = styled.div `
`;
const Hero = styled.img `
	width:100%;	
	opacity:0.1;
`;