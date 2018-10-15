import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content';



const Page =
    <div>
        <div className='part'>
            <div className='part-title'>iGEM NTHU_Formosa (Taiwan)</div>
            <div>At the beginning of this summer, we failed to ligase bio-brick together, and some of the protocol didn’t work as we expected. We started to ask experts or other teams for help. Fortunately, NTHU_Formosa shared their experience of using NEbuilder to assemble gene fragments. After comprehensively understanding our protocol, they successfully combined the gene parts! Besides, we exchanged ideas on how their wiki can be like, and taught them how to make a wiki page. It is really great to have the other iGEM team in the same school. Sometimes, only the iGEMers can understand the twists and turns during the process. </div>
            <div className='illustration'>
                <div className='illust-image-wrapper' style={{width:'400px'}}>
                    <img className='illust-image' src={Constant.image.collaboration.part}/>
                </div>
            </div>

        </div>
        <div class='part'>
            <div className='part-title'>iGEM Imperial (England)</div>
            <div>In our project, we utilized the STAR system done by 2016 Imperial iGEM team. At first, we synthesized the same part by IDT but they failed. Therefore, we reached the Imperial team and consulted them about how they synthesized the target part then. The team this year not only worked hard on dealing with our problem but also asked their former members. Then, they got the part from the freezer, minipreped the part and sent it to us. We really appreciated what they have done! </div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.collaboration.email}/>
            </div>
        </div>
        <div class='part'>
            <div className='part-title'>Dr. Rotem (Weizmann Institute of Science)</div>
            <div>We had studied Dr. Rotem’s publication “A vast collection of microbial genes that are toxic to bacteria “ and used the tsRNA which their team had studied. In the beginning,  tsRNA was successfully synthesized and transformed into BL21. However, the result didn’t show a great difference. Therefore, we described our situation to to Dr. Rotem via email. Dr. Rotem generously provided us with some suggestion, and they helped us a lot. We finally sequenced our part and showed consistency in the part we had transformed.</div>
        </div>
    </div>



const Data = {
    viewbar:{
        Title: 'Collaboration',
        Subtitle: 'Exchanged ideas with people all over the world ',
        image: Constant.image.topfull.collaboration
    },
    content:{
        Introduction: '',
        parts:[
            { Description: Page}
        ]
    }
}


class Collaboration extends Component {
    render() {
        return (
          <Content {...Data}/>
        );
    }
}

export default Collaboration;