import React from "react"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import FaqSection from "../components/FaqSection"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"

const AboutUs=()=>{
    return(
        <motion.dv exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>
        </motion.dv>
    
    );

}

export default AboutUs;