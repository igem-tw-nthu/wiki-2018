import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';
import MathJax  from 'react-mathjax'


const Interaction = 
    <div>
         <div className='illustration'> 
            <img className='illust-image' src={Constant.image.model.interaction}/>
        </div> 
        <div className='part'>We genetically modify the E.coli, giving them the ability to detect Vibrio concentration, and secrete some compound to supress Vibrio and itself. </div>
        <div className='part'>If the AHL concentration exceed a specific threshold, engineered E.coli will secrete antibacterial peptide Colisin M to kill Vibrio. Otherwise, the Vibrio concentration below the E.coli's detection threshold, engineered Ecoli will secrete suicide protein tsRNA to commit suicide.</div>
    </div>


const Eq1 =  `{{dV} \\over{dt}} = r_v V - {{r_v} \\over {V_{max}}} V^2 -a VN`
const Eq2 = `{{dA} \\over {dt}} = k_AV - \\lambda_A A`
const Eq3 =`{{dE} \\over {dt}} = bEA - cES - \\lambda_E E`
const Eq4 =`{{dN} \\over {dt}} = k_NE - \\lambda_N N `
const Eq5 =`{{dS} \\over {dt}} = k_SE - \\lambda_S S`


const Equations =
    <div>
        <div>We revise this model from Lotka-Volterra model with logistic population groth, and the decay rate of compound.</div>
        <MathJax.Provider>
            <MathJax.Node  formula={Eq1}/>
            <MathJax.Node  formula={Eq2}/>
            <MathJax.Node  formula={Eq3}/>
            <MathJax.Node  formula={Eq4}/>
            <MathJax.Node  formula={Eq5}/>
        </MathJax.Provider>
    </div>

const Discuss=
    <div>
        With changing specific parameter, such as binding rate of antibacterial Colisin M , and the detection threshold of AHL for engineered E.coli we are able to control the population of two bacterias presenting high and low oscillation amplitude.
        <div className='illustration'> 
            <img className='illust-image' src={Constant.image.model.interaction}/>
        </div> 

    </div>

const Soucre =
    <div>
        Code detail On Github
    </div>



const Data = {
    viewbar:{
        Title: 'Model',
        Subtitle: '',
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