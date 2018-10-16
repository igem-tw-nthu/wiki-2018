import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant';
import Content from './Content';





const NCTU = 
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.public.nctu}/>
        </div>

        <div>Engaging with other iGEM teams to exchange ideas and to brainstorm together is a crucial part of iGEM. Therefore, we joined a half-day meet-up with three iGEM teams in Taiwan, NTHU_Formosa, NCTU_Formosa, and Mingdao. During the meet-up, we presented our projects, had some discussions with other teams, and received some problems and feedbacks on our projects. After brainstorming, we knew what the problem was and what we could do to improve the project. This meet-up truly broadened our horizons and we got loads out of it. Following are some feedbacks we received from the meet-up:</div>
        <div>
            <div className='part'> 1. There were some drawbacks of our project of biosafety if we put our engineered E. coli into the open water area. After discussion, we finally decided to replace this way by putting it into a close water and to use it with a filter. By doing so, we could effectively control our engineered bacteria and thus, reducing the problem about biosafety. </div>
            <div className='part'> 2. We should ensure our device can really benefit the users. Therefore, we visited some local fishermen in person and sought for their suggestions. To find out more, check the <a href='http://2018.igem.org/Team:NTHU_Taiwan/Interview'>interview</a> page</div>
        </div>
    </div>

const Eurasian = 
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.public.meetup_group}/>
        </div>
        <div>In late July, we participated in the first Eurasian meet-up held by BGI college and TU Delft in Shenzhen, China. There are 20 stunning teams from 5 different countries visited Shenzhen, discussing and sharing all kinds of iGEM issues and projects during the conference. Also, we presented and conveyed our idea to other teams, which lets us receive several feedbacks and they were quite useful for our project. At this point, we did find some inspiring ideas which sharpen our current work. Here we conclude something that influenced our work:</div>
        
        <div>
            <div className='part'>
                1. The other iGEMers provided us with some useful feedbacks, for instance, they suggested us to integrate and double-check the consistency of data from our bio-reactor and Vibrio-detecting system. Also, team members from CUHK gave us some suggestions about our image detection system. Moreover, some people suggested us other switch systems for our experimental design like toehold switch. After the conference, we searched for several switch systems but we still stick to our original idea because we thought that the disadvantage for our STAR system is the least.
            </div>
            <div className='part'>
                2. A more concise presentation should be considered. This is the first presentation after our frame was formed out, but we spent much time explaining the detailed information about our project. Furthermore, we didn’t integrate our wet lab works and dry lab works in our presentation which was not convincing to the audience. After the presentation, we then modified the whole slides into a more concise and more comprehensible version which do help more audiences to get into our story.
            </div>
            <div className='part'>
                3. The meet-up official set up several workshops and lectures during the conference. For instance, they invited former iGEM judge and iGEM ambassador to share their experiences like “how to be an iGEMer?” from many different perspectives. It seems to us that we learned more details and tips about how to handle the iGEM project and figured out the overview of this competition.
            </div>
        </div>

        <div>Last but not least, except for the feedback we received, we also build a strong friendship connection there. The meet-up official assigns a buddy team for each team and our buddy is Marburg university from Germany. We really enjoyed the moment with them. </div>
        <div>
            
            <div className='gallery'>
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.meetup_self}/>
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.meetup_presentation}/>
            </div>

        </div>
    </div>

const Trans = 
    <div>
        <div className='illustration'>
            <iframe width="923" height="519" src="https://www.youtube.com/embed/1wib7JQEZ78" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        
        <div className='part'>
            <div className='part-title'>About TRANS</div>
            <div>TRANS Conference is a platform where entrepreneurs, experts, investors, and students can exchange ideas, which was created by H. Spectrum, a startup incubator/accelerator focusing on the healthcare sector. As we had a chance to join in this forum, we decided to present our project to people in the healthcare field as many as possible, hoping to get some feedback from them and improve our project.</div>
            <div>

            <div className='gallery'>   
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.hspectre}/>
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.trans}/>
            </div>

            </div>
        </div>


        <div className='part'>
            <div className='part-title'>Discussion and feedback</div>
            <div>During TRANS, we found that people who are interested in our project are from multiple different fields and not just professionals. We’ve met students, bacterial professionals, fishery companies and some previous iGEM teams in Taiwan, whose backgrounds are medical, biology, microbiology, culture studies, medical engineering, and electrical engineering.</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.public.discuss_1}/>
            </div>

            <div className='part'>
                <div>After the discussion, we sorted out the most common questions from our listeners as below:</div>
                <div>
                    <div>1. What is the principle of MV-kit and what’s its difference between PCR analysis?</div>
                    <div>2.	Biosafety such as being eaten by people and genetic mutation of E.coli.</div>
                    <div>3.	Will engineered genes exchange with bacterial organisms in the environment, causing genetic recombination problems because of the complex environment?</div>
                    <div>4.	E.coli residual problems.</div>
                    <div>5.	Is engineered E.coli regulation acceptable? GMO products in Taiwan are still very opposed, how to persuade?</div>
                    <div>6.	The growth and decline effect of E. coli will still have resistance problems in the future. Is there any solution?</div>
                </div>
            </div>
            
            <div className='part'>
            <div>And we also got some feedback and advice:</div>
            <div>
                <div>1.	The mechanism of STAR/anti-STAR can also be applied to the sterilization of intensive care units.</div>
                <div>2.	We could transform our target to a smaller range to simplify our problem, such as moving our environment from outdoor to indoor.</div>
                <div>3.	In the future, if our growth and decline mechanism success, we could experiment our genes by intelligent shrimp culturing.</div>
                <div>4.	To solve the problem of drug resistance, try adding multiple attack lines to E. coli.</div>
                <div>5.	A company called ID Water which major in water quality testing suggested us to cooperate with them and tried to start an undertaking.</div>
            </div>
            </div>

            <div className='gallery'>
                <img style={{width:'30%', margin:'0px 1%'}} src={Constant.image.public.discuss_2_1}/>
                <img style={{width:'30%', margin:'0px 1%'}} src={Constant.image.public.discuss_2_2}/>
                <img style={{width:'30%', margin:'0px 1%'}} src={Constant.image.public.discuss_2_3}/>
            </div>
            
            <div className='part'>
            <div className='innerpart'>After digesting the advice, we decided to modify our project in detail by meeting some of the professional companies, which we have saved the contacting information. First, we emailed to ID Water, asking for a chance to visit their company, hoping to have a chance to communicate some detecting methods. For example, we have trouble in analyzing with fluorescence in a bioreactor, which is part of their technique in water analyzing. ID Water thus told us that their cooperator, IGC-BIO, a healthcare company in Taiwan, is also researching in the method of interaction of bacteria, so we also plan to visit them someday.</div>
            <div className='innerpart'>We could also meet Hin-Chung Wong professor in Soochow University, who is a profession in Vibrio field, for more detailed information about Vibrio to perfect our project. And we have checked again that our project doesn’t violate the iGEM rule. In the future, if we want to test our bacteria, LiveStrong Biomedical Technology promised us that they would provide a shrimp culturing sink for us to practice our experiment. Finally, thank for those who gave us lots of precious advice.</div>
            <div className='gallery'>
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.discuss_3_1}/>
                <img style={{width:'45%', margin:'0px 1%'}} src={Constant.image.public.discuss_3_2}/>
            </div>
            </div>
        </div>
    </div>




const XGEM = 
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.public.xgem}/>
        </div>
        <div>Interacting with people from different backgrounds is amazing and we do cherish every moment we engaged with other iGEM teams to exchange ideas as well as share techniques. For us, bringing the people across the world together to brainstorm about synthetic biology and how to make this world a better place is the magic of iGEM. Therefore, we established a platform on Slack named XGEM. On XGEM, teams can share information and ask questions immediately. So far, 18 teams from 14 different countries have joined XGEM. More about the teams joining XGEM:</div>
        <div> 
            
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.public.chart_1}/>
            </div>
            <div className='illustration'>
                <img className='illust-image'  src={Constant.image.public.chart_2}/>
            </div>
            <div className='illustration' style={{width:'70%'}}>
                <img className='illust-image' src={Constant.image.public.chart_3}/>
            </div>
            
        </div>
        <div>Its really exciting to have 19 teams from all over the world to interact on XGEM. Some teams have posted their questionnaires related to their project or shared what they had done. We really appreciate your participation and can’t wait to meet these teams in person at Giant Jamboree!</div>
    </div>

const Data = {
    viewbar:{
        Title: 'Public',
        Subtitle: 'Meetups, conferences, and online platform',
        image: Constant.image.topfull.public
    },
    content:{
        Introducation: `Due to the fact that the synthetic biology is a brand-new field for the general public. Consequently, creating an enlarging division of knowledge between the general public and synthetic biology is necessary, and thus the public engagement is crucial for bridging the gap. The following are the activities we attended this year. We learned so much from the public, our friends and other iGEM teams. Also, their feedback on our project inspires us to alter our experiment design as well as think deeper about how our project will affect the environment and public perception.`,
        parts: [
            { Title: 'NCTU meet-up (2018-07-23)',
              Description: NCTU
            },
            { Title: 'Eurasian meet-up in Shenzhen (2018.07.24-26)',
              Description: Eurasian
            },

            { Title: '2018 TRANS Conference in Taiwan (2018.09.08-09)',
              Description: Trans
            },

            { Title: 'XGEM',
              Description: XGEM
            }
        ]
    }
}



export default class Public extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

