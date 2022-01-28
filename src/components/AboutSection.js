import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About,Hide,Image,Description } from "./styles";
import { motion } from "framer-motion";


const AboutSection=()=>{

    const titleAnim = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { duration: 0.75 },
        },
      };

      const container={
          hidden:{x:100},
          show:{x:0 , transition:{duration:0.75 , ease:"easeOut", staggerChildren:0.35}},
      };
    
    return(
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
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
                <p>Contact us for any photography
                 or videography ideas that you have, 
                 we have professionals with amazing skills.
                 </p>
                 <button>Contact Us</button>
            </ Description>
            <Image>
                <img src={home1} alt="guy with a camera"></img>

            </Image>
        </About>

    );
};




export default AboutSection;