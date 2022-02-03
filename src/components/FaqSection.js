import React,{useState} from "react";
import styled from "styled-components";
import { About,Hide,Image,Description } from "./styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { scrollReveal } from "../animation";



const FaqSection=()=>{
    const [faqToggle,setFaqToggle]=useState([{active:true,title:'Question', description:'hey'}]);
    const [element,controls]=useScroll();
    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden" >
            <h2>
               Any questions? <span>FAQ</span> 
            </h2>
            <AnimateSharedLayout>
            <Toggle title='How Do I Start?'>
           
                
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                     <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>
                </div>
                 
            </Toggle>
            <Toggle title='Daily scheduele'>
        
                
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>

                
                
            </div>
            </Toggle>
            <Toggle title='Different Payment Methods'>
            
            
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>
            </div>
            </Toggle>
            <Toggle title='What Products do you offer'>
                
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>
            </div>
            </Toggle>
            </AnimateSharedLayout>

        </Faq>

    );
}

const Faq=styled(About)`
display: block;
span{
    display: block;
}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}

.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin:2rem 0rem;
    width: 100%;
}
.question{
 padding:3rem 0rem;
 cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}

`

export default FaqSection;