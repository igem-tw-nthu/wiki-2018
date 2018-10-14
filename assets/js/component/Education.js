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
        In this summer, we cooperated with 
        <a href='http://www.fssh.khc.edu.tw/'> National Feng-Shan Senior High School </a>
        to hold a summer synthetic biology camp. We both aimed to let students know more about iGEM and synthetic biology. During the camp, participants learned how to carry out simple experiments, e.g. plasmid extraction and transformation. We also shared with the students about our iGEM project and briefly introduced synthetic biology. The following are the schedule and all the material we used in the camp. About our files used in this camp are all available to  
        <a href='https://drive.google.com/drive/folders/19QhZWbbpJTddxGISAeXFJBAxcs_MuS_m?usp=sharing'> download</a>.
        The only thing you have to notice is the language, most are in Chinese.
    </div>




const Schedule=
    <div>
        <div className='illustration'>
            <table className='table'>
                <tbody>
                <tr className='tablehead'> 
                    <th className='tablehead'></th>
                    <th className='tablehead'>2018/08/10</th>
                    <th className='tablehead'>2018/08/11</th>                    
                </tr>
                <tr className='tablehead'> 
                    <th className='tablehead'>9:00~12:00</th>
                    <td className='tabledata'>
                        <div>iGEM Introduction & Team Project</div>
                        <div>Experiment Introduction </div>
                        <div>Pipetman Teaching </div>
                    </td>
                    <td className='tabledata'>
                        <div>Synthetic Biology Introduction</div>
                        <div>Experiment Introduction</div>
                        <div>Colony PCR</div>
                    </td>
                </tr>
                <tr className='tablehead'> 
                    <th className='tablehead'>12:00~13:00</th>
                    <td className='tabledata'>Lunch Time</td>
                    <td className='tabledata'>Lunch Time</td>
                </tr>
                <tr className='tablehead'> 
                    <th className='tablehead'>13:00~16:00</th>
                    <td className='tabledata'>
                        <div>Plasmid Extraction</div>
                        <div>Transformation</div>
                        <div>Bacteria Cultivation</div>
                    </td>
                    <td className='tabledata'>
                        <div>Colony PCR</div>
                        <div>DNA Electrophoresis</div>
                        <div>Questionnaire Survey</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

const Feedback =
    <div>
        <div>
        This year, 16 students joined our synthetic biology camp. The following are some feedback given by the students in the questionnaire survey. The data and results are summarized as the pie charts below:
        </div>
        <div>
            <div className='part'>
                <div>Question 1: What grade are you in?</div>
                <div className='illustration'>
                    <div className='illust-image-wrapper'>
                        <img className='illust-image' src={Constant.image.education.pie_1}/>
                    </div>
                </div>
            </div>
            
            <div className='part'>
                <div>Question 2: Have you ever carried out synthetic biology experiments?</div>
                <div>
                    <div style={{margin:'20px auto'}} className='illust-image-wrapper'>
                        <img className='illust-image' src={Constant.image.education.pie_2}/>
                    </div>
                    <div className='undertext'>*They have only done plasmid extraction of yeast and simple electrophoresis.</div>
                </div>
            </div>

            <div className='part'>
                <div>Question 3: What’s your imagination or cognition in synthetic biology?</div>
                <table className='table'>
                <tbody>
                    <tr className='tablehead'> 
                        <th className='tablehead'>Before the camp	</th>
                        <th className='tablehead'>After the camp</th>
                    </tr>
                    <tr className='tablehead'> 
                        <td className='tabledata'>
                        Just a combination of two genes.
                        </td>
                        <td className='tabledata'>
                        Combine different fields to solve more problems or minimize the damage may harm people
                        </td>
                    </tr>
                    <tr className='tablehead'> 
                        <td className='tabledata'> 
                        Synthesize DNA sequence.
                        </td>
                        <td className='tabledata'>
                        The synthetic biology would be the trend in many industries in the future, such as medical use, agriculture use, etc.
                        </td>
                    </tr>
                    <tr className='tablehead'> 
                        <td className='tabledata'>
                        It seems that the synthetic biology is related to recombinant DNA.
                        </td>
                        <td className='tabledata'>
                        Use restriction enzyme and ligase to do some cloning and improve the characteristic.
                        </td>
                    </tr>
                    <tr className='tablehead'> 
                        <td className='tabledata'>
                        It has something to do with gene modification.
                        </td>
                        <td className='tabledata'>
                        Create useful modified creatures to change our lives.
                        </td>
                    </tr>
                </tbody>
                </table>

            </div>


            <div className='part'>
                <div>Question 4: Are you more interested in synthetic biology after the camp?</div>
                <div className='illust-image-wrapper'>
                    <img
                      style={{marginTop:'20px'}} 
                      className='illust-image' 
                      src={Constant.image.education.pie_3}/>
                </div>
            </div>

            <div className='part'>
                <div>Question 5: Do you have anything suggestion for this camp?</div>
                <table className='table'>
                    <tbody>
                    <tr> 
                        <th className='tablehead'>
                        Suggestions
                        </th>
                    </tr>
                        <td className='tabledata'> 
                        It’s better if the lecturers designed some interesting games during the waiting time of experiments. Or the students would be boring.
                        </td>
                    <tr className='tablehead'> 
                        <td className='tabledata'> 
                        The contents of the experiments were quite funny, but the basic theories were difficult for high school students.
                        </td>
                    </tr>

                    <tr className='tablehead'> 
                        <td className='tabledata'> 
                        Though I have not learned most of the terms about molecular biology experiments, the contents of experiments were interesting and inspiring which makes me acquire knowledge about molecular biology.
                        </td>
                    </tr>

                    <tr className='tablehead'> 
                        <td className='tabledata'> 
                        If lecturers summarized all of the experiments to a table, it will be better!
                        </td>
                    </tr>

                    <tr className='tablehead'> 
                        <td className='tabledata'> 
                        It’s my first time to do the molecular biology experiments and hopefully, you guys can achieve your goals!
                        </td>
                    </tr>


                    </tbody>
                </table>

            </div>
        
        </div>
    </div>

const Summary = 
    <div>
        <div>
            According to their feedback, we have achieved our goal: First, to introduce iGEM and synthetic biology. Second, teach high school students how to carry out synthetic biology experiment. Third, enhance their interest in genetic engineering. The synthetic biology camp this year is successful, and National Feng-Shan Senior High School are willing to cooperate with us next year! We hope our effort can encourage more students to do researches about genetic engineering, and maybe they will join iGEM soon!
        </div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.education.group}/>
        </div>
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
            { Title: 'Schedule',
              Description: Schedule
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

