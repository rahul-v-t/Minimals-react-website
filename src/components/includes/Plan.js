import React from 'react';
import styled from "styled-components";
import L1 from "../images/home/ic_sketch.svg";
import L2 from "../images/home/ic_figma.svg";
import L5 from "../images/home/ic_js.svg";
import L6 from "../images/home/ic_ts.svg";
import Tick from "../images/home/icons8-checkmark.svg";
import Ticke from "../images/home/icons8-checkmark-24.png";
import Arr from "../images/home/right-arrow.png";

export default function Cards() {
    return (
        <>
            <Small>PRICING PLANS</Small>
            <Heading>The Right plan for your business</Heading>
            <P>Choose the perfect Plan for your needs.Alwyas flexible to grow. </P>
            <Box>
                <Box1>
                    <P1>LICENCE</P1>
                    <H3>Standard</H3>
                    <Img><Ico src={L5} alt="Icon" /></Img>
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            One end products
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                           12 months updated
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            6 month of support
                        </List>
                    </Lists>
                    <Hr />
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Javascript Version
                        </List>
                        <Liste>
                            <Veri><Ticked src={Ticke} alt="Icon" /> </Veri>
                           Typescript Version
                        </Liste>
                        <Liste>
                            <Veri><Ticked src={Ticke} alt="Icon" /> </Veri>
                            Design Resource
                        </Liste>
                        <Liste>
                            <Veri><Ticked src={Ticke} alt="Icon" /> </Veri>
                            Commericial Application
                        </Liste>
                    </Lists>
                    <Und><Span>Learn More</Span><Right><Arrow src={Arr} alt="Icon" /> </Right></Und>
                    <Pbutton>Choose Plan</Pbutton>
                </Box1>
                <Box2>
                    <P1>LICENCE</P1>
                    <H3>Standard Plus</H3>
                    <Brands>
                        <Brand> <Ico src={L1} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L2} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L5} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L6} alt="Icon" /> </Brand>
                    </Brands>
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            One end products
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                           12 months updated
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            6 month of support
                        </List>
                    </Lists>
                    <Hr />
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Javascript Version
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                           Typescript Version
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Design Resource
                        </List>
                        <Liste>
                            <Veri><Ticked src={Ticke} alt="Icon" /> </Veri>
                            Commericial Application
                        </Liste>
                    </Lists>
                    <Und><Span>Learn More</Span><Right><Arrow src={Arr} alt="Icon" /> </Right></Und>
                    <Pbutton>Choose Plan</Pbutton>
                </Box2>
                <Box3>
                    <P1>LICENCE</P1>
                    <H3>Extended</H3>
                    <Brands>
                        <Brand> <Ico src={L1} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L2} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L5} alt="Icon" /> </Brand>
                        <Brand> <Ico src={L6} alt="Icon" /> </Brand>
                    </Brands>
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            One end products
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                           12 months updated
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            6 month of support
                        </List>
                    </Lists>
                    <Hr />
                    <Lists>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Javascript Version
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                           Typescript Version
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Design Resource
                        </List>
                        <List>
                            <Veri><Ticked src={Tick} alt="Icon" /> </Veri>
                            Commericial Application
                        </List>
                    </Lists>
                    <Und><Span>Learn More</Span><Right><Arrow src={Arr} alt="Icon" /> </Right></Und>
                    <Pbutton>Choose Plan</Pbutton>
                </Box3>
            </Box>
            <H4>Still have questions?</H4>
            <P3>Please Describe your case to receive the most accurative advice.</P3>
            <P2>Contact Us</P2>
        </>
    )
}

const Small = styled.p `
    margin-top: 120px;
    text-align: center;
    color: #c1c1c1;
    text-align:center;
`;
const Heading = styled.h2 `
    text-align:center;
    font-size: 42px;
    font-weight: 600;
    padding: 30px 0;
    @media all and (max-width:768px){
		font-size:32px;
	}
    @media all and (max-width:480px){
		font-size:26px;
	}
`;
const P = styled.p `
    color: #c1c1c1;
    text-align:center;
`;
const P1 = styled.p `
    color: #c1c1c1;
`;
const Box = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 100px;
    @media all and (max-width:1080px){
		flex-wrap:wrap;
        justify-content:center;
	}
    @media all and (max-width:480px){
		padding:25px;
	}
`;
const Box1 = styled.div `
    width:28%;
    background:#fff;
    box-shadow: -15px 30px 30px 20px rgb(0 0 0 /10%);
    border-radius: 14px;
    padding: 30px;
    @media all and (max-width:1280px){
		width:32%;
       
	}
    @media all and (max-width:1080px){
		width:40%;
        margin-right:20px;
	}
    @media all and (max-width:980px){
		width:60%;
        margin-right:0;
	}
    @media all and (max-width:768px){
		width:75%;
	}
    @media all and (max-width:640px){
		width:95%;
	}
`;
const Box2 = styled.div `
    width:28%;
    background:#fff;
    box-shadow: -15px 30px 30px 20px rgb(0 0 0 /10%);
    padding: 30px;
    border-radius: 14px;
    @media all and (max-width:1280px){
		width:32%;
	}
    @media all and (max-width:1080px){
		width:40%;
        margin-left:20px;
        margin-bottom:20px;
	}
    @media all and (max-width:980px){
		width:60%;
        margin:20px 0;
	}
    @media all and (max-width:768px){
		width:75%;
	}
    @media all and (max-width:640px){
		width:95%;
	}
`;
const Box3 = styled.div `
    background:#fff;
    box-shadow: -15px 30px 30px 20px rgb(0 0 0 /10%);
    width:28%;
    border-radius: 14px;
    padding: 30px;
    @media all and (max-width:1280px){
		width:32%;
	}
    @media all and (max-width:1080px){
		width:40%;
	}
    @media all and (max-width:980px){
		width:60%;
	}
    @media all and (max-width:768px){
		width:75%;
	}
    @media all and (max-width:640px){
		width:95%;
	}
`;
const H3 = styled.h3 `
    font-size: 32px;
    font-weight: 600;
    padding: 20px 0;
`;
const Brands = styled.ul `
    display: flex;
    justify-content:space-between;
    width: 70%;
    padding: 20px 0;
`;
const Brand = styled.li `
`;
const Ico = styled.img `
`;
const Img = styled.div `
    padding:20px 0;
`;
const Lists = styled.ul `
    padding: 20px 0;
`;
const List = styled.li `
    display: flex;
    align-items:center;
    margin-bottom:10px;
`;
const Liste = styled.li `
    display: flex;
    align-items:center;
    margin-bottom:10px;
    color: #c1c1c1;
`;
const Veri = styled.div `
    margin-right:10px;
`;
const Ticked = styled.img `
`;
const Hr = styled.hr `
    border-bottom:1px dotted #c1c1c1; ;
`;
const Und = styled.div `
    display: flex;
    align-items:center;
    justify-content: end;
`;
const Span = styled.p `
    text-decoration:underline;
    color: #c1c1c1;
    cursor:pointer;
`;
const Right = styled.div `
    width:6%;
`;
const Arrow = styled.img `
    width:100%;
    display: block;
`;
const Pbutton = styled.p `
    color: #4eac56;
    padding: 15px 30px;
    border: 1px solid;
    border-radius: 8px;
    text-align: center;
    margin-top: 40px;
    cursor:pointer;
    &:hover{
        color:#fff;
        background:#4eac56;
    }
`;
const H4 = styled.h3 `
    text-align:center;
    font-size: 32px;
    font-weight: 600;
`;
const P3 = styled.p `
    text-align:center;
    color: #c1c1c1;
    padding:30px;
`;
const P2 = styled.p `
    text-align:center;
    padding: 15px 30px;
    border-radius: 8px;
    text-align: center;
    margin-top: 40px;
    cursor:pointer;
    color:#fff;
    background:#4eac56;
    width: 12%;
    margin: 0 auto;
    @media all and (max-width:1280px){
		width:14%;
	}
    @media all and (max-width:1080px){
		width:16%;
	}
    @media all and (max-width:980px){
		width:20%;
	}
    @media all and (max-width:768px){
		width:25%;
	}
    @media all and (max-width:640px){
		width:32%;
	}
    @media all and (max-width:480px){
		width:40%;
	}
`;