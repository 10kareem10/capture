import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About,Hide,Image,Description } from "./styles";
import { motion } from "framer-motion";
import { titleAnim,fade,photoAnim } from "../animation";
import Wave from "./Wave";


const AboutSection=()=>{

    
    
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <div>
                <motion.p variants={fade}>Contact us for any photography
                 or videography ideas that you have, 
                 we have professionals with amazing skills.
                 </motion.p>
                
                 </div>
                 
                 <motion.button variants={fade}>Contact Us</motion.button>
            </ Description>
            <Image>
                <motion.img variants={photoAnim} initial='hidden' animate="show" src={home1} alt="guy with a camera"/>
            </Image>
            <Wave/>
        </About>

    );
};




export default AboutSection;