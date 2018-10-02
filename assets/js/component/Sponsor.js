import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant';

const Wrapper = styled.div`
    margin: auto;
    width: 70%;
    `

const Card = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 60px;
    flex-wrap: wrap;
    width: fit-content;
    `

const Left = styled.div`
    width: 300px;
    margin: auto;
    margin-bottom: 20px;
    `


const LogoWrapper = styled.div`
    width: fit-content;
    margin: auto;
    `

const Logo = styled.img`
    width: 200px;
    `

const Side = styled.div`
    margin: auto;
    `
const Name = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    width: fit-content;
    `

const Description = styled.div`
    width: 450px;
    `


const Content = [
    { name: 'Shun Yih Co., Ltd',
      image: `${Constant.image.sponsor.Shun_Yih}`,
      imageStyle: {
        width: '150px'
    },
      description: `Shun Yih is a company located in Hsinchu, Taiwan, which has been supplying high-quality glass bottles to the chemical and pharmaceutical industries. Shun Yih provides us the majority of our fund and makes our project possible this year.`
    },

    { name: 'Integrated DNA Technologies',
      image: `${Constant.image.sponsor.IDT}`,
      description: `Integrated DNA Technologies provided 20000 bp DNA for us to synthesize our constructs rapidly.`
    },

    { name: 'Ministry of Education, R.O.C.',
      image: `${Constant.image.sponsor.Education_Ministry}`,
      imageStyle: {
          width: '120px'
      },
      description: `Thanks, Ministry of Education for providing us financial support.`
    },

    { name: 'National Tsing Hua University',
      image: `${Constant.image.sponsor.NTHU}`,
      description: `We would like to thank National Tsing Hua University for their additional financial support.`
    },
    
    { name: 'Department of Electrical Engineering, NTHU',
      image: `${Constant.image.sponsor.NTHUEE}`,
      description: `Department of electrical engineering is crucial for our project. It provided a laboratory for us to conduct all of our experiments.`
    },

    { name: 'Fisheries Research Institute, COA',
      image: `${Constant.image.sponsor.FRI}`,
      imageStyle: {
          width: '120px'
      },
      description: `Fisheries research institute of the council of agriculture in Taiwan kindly provided us the “Multiple-Vibrio kit” for our dry lab to develop their hardware.`
    },
    { name: 'Industrial Technology Research Institute, R.O.C',
      image: `${Constant.image.sponsor.ITRI}`,
      description: `ITRI provided us the thermoelectric cooling chip to make our device possible.`
    },
]

class Sponsor extends Component {
    render() {
        return (
            <Wrapper>
            { Content.map( (sponsor,index)=>
                <Card key={index}>
                    <Left>
                        <LogoWrapper>
                        <Logo src={sponsor.image} style={sponsor.imageStyle} />
                        </LogoWrapper>
                    </Left>
                    <Side>
                        <Description>{sponsor.description}</Description>
                    </Side>
                </Card>
            )}
            </Wrapper>
        )
    }
}

export default Sponsor;