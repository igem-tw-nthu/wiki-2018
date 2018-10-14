import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';


const Cloning =  
    <div>
        <div className='part'>
            <div className='part-title'>Transformation</div>
            <div>During this summer, we had done lots of digestion-ligation and transformation experiments! We enjoyed and had fun exploring the mystery of synthetic biology!</div>
            <div className='illustration' >
                <img className='illust-image' src={Constant.image.experiment.transform}/>
                <div className='undertext'>Fig. 1: Successful transformation of part BBa_K2774008 (Left) and BBa_K2774005 (Right)</div>
            </div>
            <div>Utilizing iGEM distribution kit and parts from the registry, we assembled various bio-bricks to construct our genes. We constructed our part, BBa_K2774008, by using pLac with RBS (BBa_J04500), endolysin (BBa_K1378032) with GFP (E0240). The left LB plate was the transformation of BBa_K2774008. The transformation was success and therefore some of the colony emits GFP fluorescence! And the right LB plate was the transformation of part BBa_K2774005, the RFP shows the right colony with successful ligation plasmid. In addition, thanks for the established technology of IDT (Integrated DNA Technologies), providing us the gene fragments. Finally, we successfully constructed tsRNA (BBa_K2774001).</div>
        </div>
        <div className='part'>
            <div className='part-title'>Electrophoretogram</div>
            <div>Here are the parts we assemble successfully. We use VF2 and VR primer to check our gene’s length, all of them are on pSB1C3.</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.experiment.elec}/>
                <div className='undertext'>Fig.2: Electrophoretogram of our parts which we had submitted to registry, all of them show properly length (Using VF2 and VR primer, the length will increase about 300 bp)</div>                
            </div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.experiment.table_1}/>
                <div className='undertext'>Table 1: This table’s genes correspond to each lane of Fig. 2 from left to right.</div>                
            </div>
        </div>
    </div>

const Testing =
    <div>
        We use TCBS (Thiosulfate-citrate-bile salts-sucrose agar, a type of selective agar culture plate that is used in microbiology laboratories to isolate Vibrio) to examine Vibrio’s concentration in fish farm. Our HP member and wet lab member visit the fish farm in Taiwan, Chiayi. We collected the water sample from different pool, and sent it back to the lab to culture the sample on TCBS.
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.experiment.sample}/>
            <div className='undertext'>Fig.3 : Collection sample from traditional fish farm in Taiwan</div>
        </div>

        <div className='part'>
            <div className='part-title'>Result</div>
            <div>Sample from fish farm shown positive result, we found there were colony appeared on TCBS plate. Implying that Vibrio indeed exist in fish farm, and may infect shrimp or other marine creatures. In addition, the colony color stands for different types of Vibrio:</div>
                <div className='innerpart'>
                    <div>Vibrio Cholerae: Large yellow colonies. </div>
                    <div>Vibrio harveyi / Vibrio fischeri: Greyish-green to bluish-green colonies which show luminescence in dark.</div>
                </div>
            <div className='illustration'>
                <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.experiment.vibrio}/>
                <div className='undertext'>Fig. 4: The schematic of our gene circuits</div>                
            </div>
        </div>
    </div>




const Detection = 
    <div>
        Our detection system is designed to make E. coli to obtain the ability to sense the concentration of Vibrio in the environment. We found that most of the pathogenic Vibrio use “quorum sensing” to communicate with each individual and to express different genes. Quorum sensing, a system which is able to control the gene expression followed by the population density. The signal transmission of quorum sensing is totally depending on the auto-inducer, acyl homoserine lactones (AHL), a small chemical molecule which is produced by bacterial enzyme (Fig. 5). Moreover, the concentration of AHL is directly proportional to bacteria density. When AHL concentration exceeds the threshold, it will bind with the protein (LuxR) and trigger the promoter (pLUX) to express the downstream genes. 
        <div className='illustration'>
            <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.experiment.ahl}/>
            <div className='undertext'>Fig. 5: The schematic of our gene circuits</div>
        </div>
        <div className='illustration' style={{width:'300px'}}>
            <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.experiment.structure}/>
            <div className='undertext'>Fig. 6: The structure of AHL</div>
        </div>

        Our detection system is using Lux system. When the Vibrio density is high, the AHL concentration in the environment is high. Hence, our engineered E. coli can detect the Vibrio density and can release the anti-Vibrio substances. (Fig. 7)
        
        <div className='illustration'>
            <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.experiment.cycle}/>
            <div className='undertext'>Fig. 7: The schematic of our detection system</div>
        </div>
    
        <div className='part'>
            <div className='part-title'>Exp. 1: AHL Sensor with Quantitative AHL </div>
            
            <div>We constructed our AHL detector (BBa_K2774000), which can produce LuxR consistently by pLac promoter and can express GFP while LuxR combine with AHL and trigger pLUX (R0062). While AHL presents, AHL and LuxR will form a complex and trigger pLUX to express GFP. (Fig. 8)</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.experiment.sensor}/>
                <div className='undertext'>Fig. 8: AHL Bio-Detector</div>
            </div>
            <div>In order to test our gene’s function, we added different concentration of AHL (3-oxo-C6-HSL, synthesized by Sigma) to DH5α cells transformed with BBa_K2774000, and measured GFP expression hourly.</div>


            <div className='part'>
                <div className='part-title'>Procedure:</div>
                <div className='innerpart'>
                    <div className='innerpart'>1. Prepare DH5α cells which transformed with BBa_K2774000 and liquid culture in LB overnight.</div>
                    <div className='innerpart'>2. Diluted eight bacterial culture samples in fresh LB (50 μL O/N culture with 4950 μL fresh LB)</div>
                    <div className='innerpart'>3. Pre-culture until O.D.600 reached 0.4, making sure bacteria is growing in log phase (better expression capability) and add IPTG (1mM) to induce the expression of LuxR.</div>
                    <div className='innerpart'>4. Add different amount of AHL into different samples (0.01, 0.1, 0.5, 1, 5, 10, 100 nM) and 0 M AHL for positive control.</div>
                    <div className='innerpart'>5. Measure the O.D.600 value and expression of GFP (λexcitation = 490 nm; λemission = 530 nm) hourly.</div>
                </div>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.experiment.exp_1}/>
                    <div className='undertext'>Fig. 9: GFP expression from different conc. of AHL</div>
                </div>
            </div>

            <div className='part'></div>
                <div className='part-title'>Result:</div>
                <div>As the chart shows, we can find that AHL induced GFP expression as we expected. As the AHL concentration increased, the GFP expression increased until saturation. Besides, the optimized AHL concentration of inducing BBa_K2774000 is about 0.5-10 nM. Moreover, we found that if the concentration of AHL exceeds 1000 nM, it will inhibit BBa_K2774000 GFP expression.</div>
                <div className='illustration'>
                    <img className='illust-image' style={{backgroundColor:'transparent'}}  src={Constant.image.experiment.data_1}/>
                    <div className='undertext'>Fig. 10: GFP expression from different conc. of AHL</div>
                </div>
        </div>
        

        <div className='part'>
            <div className='part-title'>Exp. 2 : AHL sensor co-culture with fake Vibrio test</div>
            Since we cannot conduct the experiment related to Vibrio in our lab, we have to construct a fake Vibrio (by our engineered E. coli), which can also secrete AHL as Vibrio does. Therefore, we created our “pLac AHL generator” (BBa_2774004) by assembling “pLac + B0034” (BBa_J04500) and “LuxI” (BBa_C0161) together. Moreover, we added RFP to detect the population of fake vibrio (BBa_2774005)
            <div className='part'>
            <div className='part-title'>Procedure:</div>
               <div className='innerpart'> 1. Prepare DH5α cells which transformed with BBa_2774000 (AHL sensor), BBa_2774004 (pLac AHL generator), and BBa_2774005 (pLac AHL generator + RFP) and liquid culture in LB overnight.</div>
               <div className='innerpart'> 2. Diluted eight overnight bacterial culture in fresh LB with 1mM IPTG (50μL O/N culture with 4950 μL fresh LB).</div>
               <div className='innerpart'> 3. Pre-culture until O.D.600 reaches 0.4, making sure bacteria is growing in log phase (better expression capability).</div>
               <div className='innerpart'> 4. Mix different volume ratio of:</div>
               <div > BBa_2774004 (pLac AHL generator) with BBa_2774000 (AHL sensor)    </div>
               <div > BBa_2774005 (pLac AHL generator + RFP) with BBa_2774000 (AHL sensor)</div>
            </div>
        </div>
    </div>



const Procedure =   
    <div>
      
    </div>


const Data ={
    viewbar: {
        Title: 'Experiment',
        Subtitle: '',
        image: Constant.image.topfull.experiment
    },
    content: {
        Introduction: 'In order to achieve our project’s goal, we constructed a few functional genes and tested their features. To sum up, our project can be divided into three parts. First of all is the “detection” part, we made our E. coli to detect the density of Vibrio and to respond. Then, it’s the part of “kill Switch”, we made our E. coli to switch from secreting anti-Vibrio substances to suicide to fulfilled bio-safety issues. Finally, it’s  “substances test” for anti-Vibrio and suicide substances which will be used in our project.',
        parts: [
            { Title: 'Cloning',
              Description: Cloning
            },
            { Title: 'Testing Sample',
              Description: Testing
            },
            { Title: 'Detection',
              Description: Detection
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