import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion"
import { pageAnimation ,fade,photoAnim,lineAnim,slider,sliderContainer } from "../animation"


const OurWork=()=>{
    return(

        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background:"#fff"}}>
            <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movies >
                <motion.h2 variants={fade} > The Athelete </motion.h2>
                <motion.div variants={lineAnim} className="Line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                </Hide> 
                </Link>
            </Movies>
            <Movies>
                <h2>
                    The Racer
                </h2>
                <div className="Line"></div>
                <Link to="/work/the-racer">
                <img src={theracer} alt="theracer"/>
                </Link>
            </Movies>
            <Movies>
                <h2>
                    Good Times
                </h2>
                <div className="Line"></div>
                <Link to="/work/good-times">
                <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movies>
        </Work>

    );
};
const Work=styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 1rem 0rem;
}
`;

const Movies=styled.div`
padding-bottom: 10rem;
.Line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;

const Hide=styled.div`
overflow:hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;  
export default OurWork;