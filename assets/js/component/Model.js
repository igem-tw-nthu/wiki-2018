import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';
import MathJax  from 'react-mathjax'


const Interaction = 
    <div>
         <div className='illustration'> 
            <div style={{margin:'auto',width:'500px'}}>
            <img className='illust-image' src={Constant.image.model.interaction}/>
            </div>
        </div> 
        <div className='part'>We genetically modify the E.coli, giving them the ability to detect Vibrio concentration, and secrete some compound to supress Vibrio and itself. </div>
        <div className='part'>If the AHL concentration exceed a specific threshold, engineered E.coli will secrete antibacterial peptide Colisin M to kill Vibrio. Otherwise, the Vibrio concentration below the E.coli's detection threshold, engineered Ecoli will secrete tsRNA to commit suicide.</div>
    </div>


const Eq1 =  `{{dV} \\over{dt}} = r_v V - {{r_v} \\over {V_{max}}} V^2 -a VN`
const Eq2 = `{{dA} \\over {dt}} = k_AV - \\lambda_A A`
const Eq3 =`{{dE} \\over {dt}} = bEA - cES - \\lambda_E E`
const Eq4 =`{{dC} \\over {dt}} = k_CE - \\lambda_C C `
const Eq5 =`{{dS} \\over {dt}} = k_SE - \\lambda_S S`
const cont1= `A \\lt A_t, \\ k_C=0`
const cont2= `A \\geq A_t, \\ k_S=0`

const Equations =
    <div>
        <div className='part'>
            <div>We revise this model from Lotka-Volterra model with logistic population groth, and the decay rate of compound.</div>
            <div style={{width:'fit-content', margin:'auto'}}>
                <MathJax.Provider>   
                    <div style={{marginTop:'20px'}}>
                        <MathJax.Node inline formula={Eq1}/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <MathJax.Node inline formula={Eq2}/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <MathJax.Node inline formula={Eq3}/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <MathJax.Node inline formula={Eq4}/>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <MathJax.Node inline formula={Eq5}/>
                    </div>
                </MathJax.Provider>
            </div>
        </div>

        <div className='part'>
            With the contraint of AHL threshold
            <div style={{width:'fit-content', margin:'auto'}}>
            <MathJax.Provider>   
                <div style={{marginTop:'20px'}}>
                    <MathJax.Node inline formula={cont1}/>
                </div>
                <div style={{marginTop:'20px'}}>
                    <MathJax.Node inline formula={cont2}/>
                </div>
            </MathJax.Provider>
            </div>
        </div>
    </div>

const Discuss=
    <div>
        With changing specific parameter, such as binding strength of antibacterial Colisin with Vibrio, binding strength of Ahl with Ecoli, and the detection threshold of AHL for engineered E.coli. We are able to simulate the population of two bacteria in oscillating, and a parameter sensitive constant mode.
        <div className='illustration'> 
            <img className='illust-image' src={Constant.image.model.result}/>
            <div className='undertext'>Two figure are just a slight change of the Binding strength of Ahl with Ecoli</div>
        </div> 

    </div>

const Soucre =
    <div>
        Code detail On <a href='https://github.com/igem-tw-nthu/model-2018'>Github</a>
    </div>



const Data = {
    viewbar:{
        Title: 'Model',
        Subtitle: 'Build a simple bio-oscillator',
        image: Constant.image.topfull.model
    },
    content:{
        Introduction: 'This year 2018 iGEM NTHU_Taiwan aims to solve the Vibrio infection in aquaculture with bio-competiotion. We are inspired by the peroidic pattern of Lotka-Volterra model, and try to control the Vibrio population with engineered E.coli.',
        parts:[
            { Title: 'Interaction',
              Description: Interaction
            },
            { Title: 'Equations',
              Description: Equations
            },
            { Title: 'Discussion',
              Description: Discuss
            },
            { Title: 'Soucre Code',
              Description: Soucre
            }
        ]
    }
}



class Model extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Model;