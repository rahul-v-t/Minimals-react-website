import React from 'react';
import styled from "styled-components";
import Grid from "../images/home/theme-color/grid.png";
import Clean1 from "../images/home/clean-1.png";
import Clean2 from "../images/home/clean-2.png";
import Clean3 from "../images/home/clean-3.png";
import Clean4 from "../images/home/clean-4.png";
import Clean5 from "../images/home/clean-5.png";
import Clean6 from "../images/home/clean-6.png";
import Clean7 from "../images/home/clean-7.png";
import Clean8 from "../images/home/clean-8.png";
import Clean9 from "../images/home/clean-9.png";
import Clean10 from "../images/home/clean-10.png";

export default function Dark() {
    return (
        <>
         <Container>
            <Main  className="wrapper">
                <Bottom>
                    <Span>Clean & Clear </Span>
                    <H2>Beautiful, modern and clean users interfaces </H2>
                </Bottom>
                    <Images>
                        <Back>
                            <Gri src={Clean1} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean2} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean3} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean4} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean5} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean6} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean7} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean8} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean9} alt="Image" />
                        </Back>
                        <Back>
                            <Gri src={Clean10} alt="Image" />
                        </Back>
                    </Images>
            </Main>
        </Container>
        </>
    )
}
const Container = styled.section `
    margin-bottom: 60%;
`;
const Main = styled.div `
    padding-top: 5%;
    position:relative;
`;
const Span = styled.span `
    color:#a3aeb9;
`;
const H2 = styled.h2 `
    font-size: 48px;
    color:#212b36;
    padding: 10px 0;
    font-weight: 600;
    width:50%;
    @media all and (max-width:1280px){
		width:55%;
	}
    @media all and (max-width:1080px){
		font-size: 46px;
	}
`;
const Bottom = styled.div `
    
`;
const Images = styled.div `
    
`;
const Back = styled.div `
    position:absolute;
    top: 50px;
    z-index: -1;
`;
const Gri = styled.img `
    width:100%;
    display: block;
`;
