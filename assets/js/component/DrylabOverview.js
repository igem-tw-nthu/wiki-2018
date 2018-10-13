import React, { Component } from 'react';
import styled from 'styled-components'
import { inject,observer } from 'mobx-react';
import Constant from './Constant';
import Content from './Content';

// This is a suck machine.
// the only thing comes to me is this vedio, fuck it!
// https://www.youtube.com/watch?v=QwC9CoIixzc




const Underimage = 
    <div>
        <div>“ Each color lives by its mysterious life. “</div>
        <div>Wassily Kandinsky, A Russian painter and art theorist</div>
    </div>


const Introduction = 
    <div>
        <div className='innerpart'>
            Change of color, which is the most beautiful process in the world. Hundreds of colors enrich our lives and the world and each color has its own meaning. However, we don’t really understand them thoroughly.
        </div>
        <div className='innerpart'>            
            In current biological or chemical tests, the process of color changing is usually considered to be a basis of their results. Not to mention, there were several teams in previous iGEM competition use color to demonstrate their results. For instance, the 
            <a href="http://2009.igem.org/Team:Cambridge/Project"> Cambridge team </a> in iGEM 2009
        </div>
        <div className='innerpart'>
            The change of color is continuous and conventionally, we use our naked eyes to determine whether the color changes or not, but obviously, it’s quite inaccurate. As we have mentioned before, each color has its own meaning and we have to analyze the message from each color in a scientific way.
        </div>
    </div>



const ACE =
    <div>
        <div>
        <span className='weight-font'>ACE</span> is an abbreviation of  
        “<span className='weight-font'>A</span>utomatic 
        <span className='weight-font'>C</span>olor-detecting 
        <span className='weight-font'>E</span>xaminer” 
        which is able to provide a stable environment for any color-changing-related test. All of the processes are executed and the information of each color will be digitized automatically. Finally, we create our own database to store the data and analyze them more precisely. Combining with IoT technology, all of our data will be recorded and analyzed in our cloud database and be returned to our clients, which allows them to take control of the results.    
        </div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.drylab_overview.box}/>
        </div>
    </div>





const  Application =
    <div>
        <div className='innerpart'>
            <div>
                In order to prove our ACE can be used in reality to solve the problems in our society, we make a collaboration with the “Fisheries Research Institute” of the Taiwan government. They kindly provided us with their “Multiple-Vibrio Detecting Kit, MV-kit” and we integrated their MV-kit with our system to develop a brand-new 
                <a href="http://2018.igem.org/Team:NTHU_Taiwan/Application"> Automatic Vibrio-detecting System</a>.
            </div>
        </div>
        <div className='innerpart'>
            Through the optimization of ACE, we accelerate the detection rate of MV-kit. With our ACE, it becomes 2 times faster than the original MV-kit and the minimal detectable Vibrio concentration is about 100 CFU/ mL within 24 hours. In summary, we combine the traditional detecting methods with the cutting-edge technology to achieve a better effect. In addition, following with our IoT system makes the water quality testing system in aquatic agriculture industry step forward to the whole new world of “intelligent aquaculture”.
        </div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.drylab_overview.plate}/>
        </div>
    </div>

const Download =
    <div>
        <div>
        Components list and cost on <a href=" https://docs.google.com/spreadsheets/d/1NsoRao-FtywW1KCeFYrxMIjJG3kVGQRcg_fIhxjn7ZQ/edit?usp=sharing">Google drive</a>
        </div>
        <div>
        3D printing files on <a href="https://drive.google.com/drive/folders/1tPQEVtNHB_hzhalPlwZu4bzyQVSDUPkN?usp=sharing">Google Drive</a>
        </div>
        <div>
        Source Code on <a href="">Github</a>
        </div>
    </div>


const Data = {
    viewbar: {
        Title: 'Drylab',
        Subtitle: 'ACE- Automatic Color-detecting Examiner',
        image: Constant.image.topfull.drylab_overview,
        Underimage:  Underimage
    },
    content:{
        Introduction: Introduction,
        parts:[
            { Title: 'ACE',
              Description: ACE
            },
            { Title: 'Application',
              Description: Application,
            },
            { Title: 'File download',
              Description: Download
            }
        ]
    }
}




@inject('appState')
@observer
class Overview extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Content {...Data}/>
        )
    }
}

export default Overview;