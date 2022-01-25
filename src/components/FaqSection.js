import React from "react";
import styled from "styled-components";
import { About,Hide,Image,Description } from "./styles";


const FaqSection=()=>{
    return(
        <Faq>
            <h2>
               Any questions? <span>FAQ</span> 
            </h2>
            <div className="Question">
                <h4>
                    How Do I Start?
                </h4>
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>

                </div>
                <div className="faq-line"></div>
            </div>

            <div className="Question">
                <h4>
                    Daily scheduele
                </h4>
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>

                </div>
                <div className="faq-line"></div>
            </div>
            <div className="Question">
                <h4>
                    Different Payment Methods
                </h4>
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>

                </div>
                <div className="faq-line"></div>
            </div>
            <div className="Question">
                <h4>
                    What Products do you offer?
                </h4>
                <div className="Answer">
                    <p>Lorem ispum dolor sit amet.</p>
                    <p>
                        Lorem bfhevfe gydgwd bbdb wb w   w dhsdhbs x
                    </p>

                </div>
                <div className="faq-line"></div>
            </div>

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