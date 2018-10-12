import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';



const Detection = 
    <div>
        <div className='part'>
            Detection is to make E.coli obtain the ability to sense the concentration of vibrio in the environment. We found that most of pathogenic vibrio use Quorum Sensing to communicate each individual and respond to different gene expression. Quorum sensing is a system which can control gene expression related to population density. Signal transmission is totally depends on auto-inducer (AHL), a small chemical molecular which is produced by bacteria’s enzyme and released, moreover the concentration of AHL is directly proportion to cell density. While AHL concentration exceed threshold, it will bind with protein (LuxR) and trigger promoter (pLUX) to transcript downstream gene and express.
        </div>
        <div className='part'>
            We would like to take this part in to our project by using Lux system. While vibrio density is high, AHL concentration in environment is high. Hence, our engineered E.coli can detect vibrio density and respond to release anti-vibrio substances.
        </div>
        <div className='part'>
            We construct BBa_F2622 with E0240 to get our AHL detector (BBa_K2774000), which can produce LuxR consistently by pLAC promoter and express GFP while LuxR combined with AHL and trigger pLUX (R0062). While AHL presence, AHL and LuxR will form complex and trigger plux to express gfp.
        </div>
        <div className='part'>
            in order to examine our gene’s function, we add different concentration of AHL(3-oxo-C6-HSL, chemical synthesized by sigma) in to DH5α cloned with BBa_K2774000, and measured GFP expression each hour.
        </div>
    </div>



const Procedure =   
    <div>
        1. Prepare DH5α which cloned with BBa_K2774000 liquid culture in LB overnight.
        2. Diluted overnight culture in fresh LB (50μL o/n culture with 4950μL fresh LB) for 8 samples.
        3. Pre-culture till OD600=0.4, making sure each bacteria is growing in log phase (expression better) and add IPTG (1mM) to induce LUXR express.
        4. Add different amount of AHL in to different sample (0.01, 0.1, 0.5, 1, 5, 10, 100nm) and 0 AHL for positive control.
        5. Measure OD600 and GFP (excitation 490 emission 530) every hour.

    </div>


const Data ={
    viewbar: {
        Title: 'Experiment',
        Subtitle: '',
        image: Constant.image.topfull.experiment
    },
    content: {
        Introduction: '',
        parts: [
            { Title: 'Detection part',
              Description: Detection
            },
            { Title: 'Procedure',
              Description: ''
            },
            { Title: '',
              Description: ''
            }
        ]
    }
}






export default class Experiment extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <Content {...Data}/>
    }
}