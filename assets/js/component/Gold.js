import React, { Component } from 'react';
import styled from 'styled-components'
import Content from './Content';
import Constant from './Constant'


const Topimage =
    <div className='illustration'>
        <img className='illust-image' src={Constant.image.gold.overview}/>
    </div>

const textdata= [
    {
        time:'20180716',
        title:'Deputy Director of Fisheries Research Institute, COA, C.I. Chang',
        description: 'C.I. Chang is the first experts we interviewed. After talking with him, we knew more about the characteristics of Vibrio. It surly helped us figure out how our design, automated device ACE, should be like. Also, he gave us the plate of Vibrio Harveyi and MV-kit for free which we later combined with ou Automatic Vibrio-detecting System. '
    },
    {
        time:'20180723',
        title:'NCTU Meet-up',
        description:'This is the first meet-up we attended. According to the advice given by other teams, they considered that we should put more emphasis on biosafety. At first, we decided to put our engineered E. coli into the open water area. After discussion, we replace this way by putting our engineered E. coli into a close water and to use it with a filter. By doing so, we could effectively control our engineered bacteria and thus, reducing the problem about biosafety.'
    },
    {
        time:'20180724', 
        title:'Eurasian Meet-up',
        description:'Some of our team members went to Shenzhen, China, to participate in Eurasian Meet-up. We did find some inspiring ideas which sharpen our current work. Team members from CUHK gave us some suggestions about our image detection system. Some people suggested us other switch systems for our experimental design like toehold switch. After the conference, we searched for several switch systems, but we still stick to our original idea because we thought that the disadvantage for our STAR system is the least.'
    },
    {
        time:'20180808',
        title:'Interview with Traditional Breeding Fishermen in Kaosiung and Chaiyi',
        description:'Fishermen told us that usually they wait until the fish get sick and take them to the testing institute if there is a way to know the water quality immediately, they could take precautions, which is the main service we designed to provide by ACE. They also mentioned the importance of sending a notification to fishermen when the machine shut down. According to their feedback, we contacted with Chunghwa Telecom to seek for future collaboration. They said that as long as we apply for a SIM card and a phone number, this kind of function can easily be done. Moreover, we should set the working time of ACE consists with fishermen’s working time which is usually between 2 a.m. to 11 a.m.'
    },
    {
        time:'20180812',
        title:
            <div>
            <div>Interview with Ecological Breeding Fishermen'</div>
            <div>Mr. Tsai, Hung-Jing’s Fish Farm</div>
            </div>,
        description: 'Mr. Tsai, Hung-Jing has successfully used biological feed- water flea to take care of his shrimps and to make some profit. His story was published by CommonWealth Magazine, a famous magazine in Taiwan. The introduction of his fish farm enabled us to have a more comprehensive understanding of how fishermen raise fish or shrimps. He also gave us some positive feedback toward our ACE. He said that if our service cost can be as low as 8,000 NT dollars, it will have a strong advantage and the market acceptance will be high since the price of the general detection devices needs to be up to ten thousand NT dollars. Since then, we put more emphasis on using cheaper components to build our Automatic Color-detecting Examiner.'
    },
    {
        time:'20180902',
        title:
            <div>
            <div>Interview with Ecological Breeding Fishermen'</div>
            <div>Qiujia Aquaculture in Chiayi, Taiwan</div>
            </div>,
        description: 'The fishermen told us the current method they use to detect Vibrio is coating the plate, which is not efficient and not so accurate. They confirmed that Automatic Color-detecting Examiner is in demand if it can be equipped with high accuracy, shutdown notification, and self-calibration because it is helpful for them to know the concentration of Vibrio to take preventive measures. After considering their suggestions, we decided to extend the sampling period to 24 hours due to the fact that the growing time of Vibrio to be pathogenic is way longer than one day, and add function to ACE such as when the camera shut down or cannot be connected, it will return a “no camera” sign to our application.'
    },    
    {
        time: '20180906',
        title: 
            <div>
            <div>Interview with Experts from National Museum of Marine Biology and Aquarium'</div>
            <div>Dr. Jimmy Kuo, vice researcher</div>
            </div>,
        description: 'He explained to us why the growth curve of Vibrio was so strange, which we faced also when doing experiments. If we want to get the expectative results, we should culture fresh Vibrio rather than take one from the refrigerator. Besides Dr. Kuo also recommended that we could use the battery as our electric power source to avoid the loss of results from the blackout. Additionally, our device should calibrate regularly, or the results would be deviant. Finally, since our device could detect frequently, we could target on the customers cultivating remunerative aquatic agriculture.'
    },
    {
        time:'20180906',
        title:
            <div> 
            <div>Interview with Experts from National Museum of Marine Biology and Aquarium',</div>
            <div>Dr. Ming-An Tsai, assistant researcher</div>
            </div>,
        description: 'Dr. Ming-An Tsai told us that there are two ways to avoid bacterial diseases, killing Vibrio or inhibiting its growth, but we should not kill all the Vibrio in the water which might destroy the ecological balance. Most importantly, he gave us a crucial reference that if the concentration of Vibrio in the water goes beyond 〖10〗^4 CFU/mL, it would be more infectious. This data is a vital reference not only in our wet lab but also in our dry lab.'
    },
    {
        time:'20180908',
        title:'TRANS conference, Taipei, Taiwan',
        description: 'During TRANS, we’ve met people from different backgrounds, such as students, bacterial professionals, fishery companies and some previous iGEM teams in Taiwan. According to the questions and feedback, we found that it is the biosafety that people concerned most. After TRANS, we reconsidered our design on biosafety. Finally, our whole project will be used indoor and with the special filters to prevent engineered E. coli spread out.'
    }      
]        

const Event = styled.div`
    margin-top: 70px;
    `


const Title = styled.div`
    font-weight: 600;
    text-align: center;
    color: steelblue;
    `

const Description = styled.div`
    margin-top: 10px;
    `

const Downtext =
    <div>
        { textdata.map( (event,index)=>
            <Event key={index}>
                <Title>{event.time}</Title>
                <Title>{event.title}</Title>
                <Description>{event.description}</Description>
            </Event>
          )
        }
    </div>





const Data ={
    viewbar: {
        Title: 'Gold',  
        Subtitle: '',
        image: Constant.image.topfull.gold
    },
    content:{
        Introduction: `Our project focuses on tackling a problem highly relevant to the aquaculture industry to our country. It is important to look at the impact our project would have and how we could alter our design to meet the practical need according to the advice we acquired from users, stakeholders, and the public. The flowchart illustrated the integrated human practice process in the past year and gave an impression on how our project evolved due to the information we received and the dialogues we had with experts.`,
        parts:[
            {Description: Topimage},
            {Description: Downtext}
        ]
    }
}




class Gold extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Gold;