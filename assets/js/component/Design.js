import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';



const Introduction = 
    <div>
        <div>
        Our project this year is to design an engineered E.coli to co-culture with pathogenic Vibrio and create a prey-predator system, also called bio-control, to control Vibrio population in order to create an equilibrium between Vibrio and engineered E.coli. Therefore Vibrio population can be controlled in a particular concentration which will not able to infect marine organism such as shrimp, fish…etc.
        </div>
        <div>
            <div className='illustration'>
                <img src={Constant.image.topfull.design.exp}/>
                <div className='undertext'>
                Fig1. exponential growth of vibrio without constrain in fish farm
                </div>
            </div>

            <div>
                <img src={Constant.image.topfull.design.equlibrium}/>
                <div className='undertext'>
                Fig2 Vibrio population controlled by engineered E.coli forming a equilibrium
                </div>
            </div>

            <div>
               
            </div>
        </div>
        <div>
        Hence the goal of wetlab this year is going to design a gene circuit which can make engineered E.coli to secrete anti-vibrio substances[1] while vibrio concentration exceed hazard concentration, and engineered E.coli suicide[2] while vibrio concentration is low to avoid bio-safety concern.    
        </div>
        <div>(圖片)</div>
        <div> Our gene design can be divided into 3 parts. First is the “detection” part makes our E.coli sense the population of vibrio and respond to it.  Second, the “kill switch” part compares the level of 2 bacteria and switches our E.coli  between modes of secreting anti-vibrio substances and suicide substance. “Growth inhibitor” part includes a toxic protein (so called Colicin M) and a toxic small RNA (tsRNA).</div>
        <div> Though we want to conduct Vibrio related experiments in our lab, our lab belongs to BSL1 level and we can’t cultivate Vibrio. Therefore, we use 2 different kinds of E. coli. to simulate our succession model with one being as fake Vibrio, and another being as engineered E. coli. </div>
    </div>


const Data = {
    viewbar:{
        Title: 'Design',
        Subtitle: 'Prey-predator system of Vibrio and E.coli',
        image: Constant.image.topfull.design
    },
    content:{
        parts:[
            { Description: Introduction }
        ]
    }
}






export default  class Design extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

