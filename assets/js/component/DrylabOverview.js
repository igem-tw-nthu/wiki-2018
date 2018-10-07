import React, { Component } from 'react';
import styled from 'styled-components'
import { inject,observer } from 'mobx-react';

// This is a suck machine.
// the only thing comes to me is this vedio, fuck it!
// https://www.youtube.com/watch?v=QwC9CoIixzc


const Wrapper = styled.div`
    `

const TabName = styled.div`
    `

const Title = styled.div`
    `

@inject('appState')
@observer
class Overview extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
            
            <div>“ Each color lives by its mysterious life. “</div>
            <div> - Wassily Kandinsky</div>
            <div>A Russian painter and art theorist</div>
            <TabName>{this.props.appState.tabname}</TabName>
            <div>
            Change of color, which is the most beautiful process in the world. Hundreds of colors enrich our lives and the world and each color has its own meaning. However, we don’t really understand them thoroughly.
            In current biological or chemical tests, the process of color changing is usually considered to be a basis of their results. Not to mention, there were several teams in previous iGEM competition use color to demonstrate their results. For instance, the Cambridge team in iGEM 2009 (link: http://2009.igem.org/Team:Cambridge/Project).
            The change of color is continuous and conventionally, we use our naked eyes to determine whether the color changes or not, but obviously, it’s quite inaccurate. As we have mentioned before, each color has its own meaning and we have to analyze the message from each color in a scientific way.
            </div>

            <Title>
            <div>ACE</div>
            <div>Automatic Color-detecting Examiner</div>
            </Title>
            <div>
            ACE is an abbreviation of “Automatic Color-detecting Examiner” which is able to provide a stable environment for any color-changing-related test. All of the processes are executed and the information of each color will be digitized automatically. Finally, we create our own database to store the data and analyze them more precisely. Combining with IoT technology, all of our data will be recorded and analyzed in our cloud database and be returned to our clients, which allows them to take control of the results.    
            </div>

            <Title>Application</Title>
            <div>
            In order to prove our ACE can be used in reality to solve the problems in our society, we make a collaboration with the “Fisheries Research Institute” of Taiwan government. They kindly provided us their “Multiple-Vibrio Detecting Kit, MV-kit” and we integrated their MV-kit with our system to develop a brand-new “Automatic Vibrio-detecting System”(link: application page).
            Through the optimization of ACE, we accelerate the detection rate of MV-kit. With our ACE, it becomes 2.5 times faster than the original MV-kit and the minimal detectable Vibrio concentration is about 100 CFU/ mL within 20 hours. In summary, we combine the traditional detecting methods with the cutting-edge technology to achieve a better effect. In addition, following with our IoT system makes the water quality testing system in aquatic agriculture industry step forward to the whole new world of “intelligent aquaculture”.
            </div>

            <Title>Accomplishment</Title>
            </Wrapper>
        )
    }
}

export default Overview;