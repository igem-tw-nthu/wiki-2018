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
                <div className='illust-image-wrapper'> 
                    <img className='illust-image' src={Constant.image.design.exp}/>
                </div>
                <div className='undertext'>Fig 1. exponential growth of vibrio without constrain in fish farm</div>
            </div>

            <div className='illustration'>
                <img className='illust-image'  src={Constant.image.design.equlibrium}/>
                <div className='undertext'>
                Fig 2. Vibrio population controlled by engineered E.coli forming a equilibrium
                </div>
            </div>

            <div>
               
            </div>
        </div>
        <div className='illustration'>
            <div className='illust-image-wrapper'>
                <img className='illust-image'  src={Constant.image.design.shrimp}/>
            </div>
            <div className='undertext'>Fig 3. Infected shrimp</div>
        </div>
        <div>
        Hence the goal of wetlab this year is going to design a gene circuit which can make engineered E.coli to secrete anti-vibrio substances[1] while vibrio concentration exceed hazard concentration, and engineered E.coli suicide[2] while vibrio concentration is low to avoid bio-safety concern.    
        </div>
        <div className='illustration'> 
            <img className='illust-image' src={Constant.image.design.cycle}/>
        </div>
        <div className='part'> Our gene design can be divided into 3 parts. First is the “detection” part makes our E.coli sense the population of vibrio and respond to it.  Second, the “kill switch” part compares the level of 2 bacteria and switches our E.coli  between modes of secreting anti-vibrio substances and suicide substance. “Growth inhibitor” part includes a toxic protein (so called Colicin M) and a toxic small RNA (tsRNA).</div>
        <div className='part'> Though we want to conduct Vibrio related experiments in our lab, our lab belongs to BSL1 level and we can’t cultivate Vibrio. Therefore, we use 2 different kinds of E. coli. to simulate our succession model with one being as fake Vibrio, and another being as engineered E. coli. </div>
    </div>


const Hardware =
    <div>
        <div className='part'>ACE is an abbreviation of “Automatic Color-detecting Examiner” which is able to provide a stable environment for any color-changing-related test. All of the processes are executed and the information of each color will be digitized automatically. Finally, we create our own database to store the data and analyze them more precisely. Combining with IoT technology, all of our data will be recorded and analyzed in our cloud database and be returned to our clients, which allows them to take control of the results.</div>
        <div className='part'>In order to prove our ACE can be used in reality to solve the Vibrio problem in our society, we make a collaboration with the “Fisheries Research Institute” of the Taiwan government. We integrated their MV-kit with our system to develop a brand-new <a href='http://2018.igem.org/Team:NTHU_Taiwan/Application'>Automatic Vibrio-detecting System</a>
        </div>
        <div style={{width:'300px'}} className='illustration'>
            <img className='illust-image' src={Constant.image.design.system}/>
        </div>
    </div>

const Data = {
    viewbar:{
        Title: 'Design',
        Subtitle: 'Prey-predator system of Vibrio and E.coli',
        image: Constant.image.topfull.design
    },
    content:{
        parts:[
            { Title:'Wetlab',
              Description: Introduction },
            { Title: 'Drylab',
              Description: Hardware
            }
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

