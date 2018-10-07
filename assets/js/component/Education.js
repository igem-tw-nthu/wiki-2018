import React, { Component } from 'react';
import styled from 'styled-components'

import Content from './Content';
import Constant from './Constant'
import { inject, observer } from 'mobx-react';




const Wrapper = styled.div`
    
    `


const Subtitle = 
    <div>
        <div>Summer synthetic biology camp</div>
        <div>for high school students</div>
    </div>

const SummerCamp =
    <div>
        <div>
            In this summer, we cooperated with National Feng-Shan Senior High School(link: http://www.fssh.khc.edu.tw/) to hold a summer synthetic biology camp. We both aimed to let students know more about iGEM and synthetic biology. During the camp, participants learned how to carry out simple experiments, e.g. plasmid extraction and transformation. We also shared with the students about our iGEM project and briefly introduced synthetic biology. The following are the schedule and all the material we used in the camp. About our files used in this camp are all available to download and free! The only thing you have to notice is the language, most are in Chinese.
        </div>
        <div>Schedule</div>
        <div>(表格)</div>
    </div>

const Feedback =
    <div>
        <div>
        This year, 16 students joined our synthetic biology camp. The following are some feedback given by the students in the questionnaire survey. The data and results are summarized as the pie charts below:
        </div>
        <div>
            <div>Question 1: What grade are you in?</div>
            <div>(圖表)</div>
            <div>Question 2: Have you ever carried out synthetic biology experiments?</div>
            <div>(圖表)</div>
            <div></div>
        </div>
    </div>

const Summary = 
    <div>
        <div>
            According to their feedback, we have achieved our goal: First, to introduce iGEM and synthetic biology. Second, teach high school students how to carry out synthetic biology experiment. Third, enhance their interest in genetic engineering. The synthetic biology camp this year is successful, and National Feng-Shan Senior High School are willing to cooperate with us next year! We hope our effort can encourage more students to do researches about genetic engineering, and maybe they will join iGEM soon!
        </div>
        <div>(合照)</div>
        <div>(9張合照))</div>
    </div>


const Data = {
    viewbar: {
        Title: 'Education',  
        Subtitle: Subtitle,
        image: Constant.image.topfull.education
    },
    content: {
        Introduction: `Joining iGEM allows us to carry out some interesting and creative experiments related to the latest researches. However, for ordinary senior high school students in Taiwan, they do not have the opportunity to engage in iGEM or the state-of-the-art knowledge of synthetic biology. Therefore, we decided to bring synthetic biology to high school students. We can not only tell them what synthetic biology is but also share our experience of joining iGEM as well as encourage them to participate next year!`,
        parts: [
            { Title: 'Summer Synthetic Biology Camp',
              Description: SummerCamp
            },
            { Title: 'Feedback',
              Description: Feedback
            },
            { Title:'Summary',
              Description: Summary
            }
        ]        
    }
}


export default class Education extends Component {
    constructor(props) {
        super(props);   
    }
    
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

