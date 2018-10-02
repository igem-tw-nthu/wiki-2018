import React, { Component } from 'react'
import styled from 'styled-components'
import 'intersection-observer'; 

import Constant from './Constant'


const Wrapper = styled.div`
    `

const BackgroundImage = styled.div`
    display: flex;
    align-items: center;
    height: 250px;
    width: 100%;
    margin-top: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-color: white;
    /* background-image: linear-gradient(180deg,#43cea2,#185a9d); */


    ${({url})=> url && `
        background-image: 
            linear-gradient(rgba(255,255,255,0.2), rgba(0,0,0,0.4)),
            url(${url});
        );
    `
    }
 
    `

const Front = styled.div`
    margin: 50px 0px;
    `


const Icon = styled.div`
    font-size: 60px;
    width: fit-content;
    margin: 10 auto;
    color: black;
    `

const TabName = styled.div`
    font-size: 50px;
    margin: auto;
    width: fit-content;
    color: black;
    `

const Content = styled.div`
    margin-left: 50px;
    max-width: 800px;
    font-size: 20px;
    `

const Section = styled.div`
    margin-bottom: 50px;
    `

const Sectiontitle = styled.div`
    font-size: 25px;
    margin-bottom: 15px;
    `


export default class InterLab extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
        <Wrapper>        
            <Front>
                <Icon>
                    <i className='fas fa-flask'/>
                </Icon>
                <TabName>{this.props.name}</TabName>
            </Front> 
            

            <Content>
            <Section>
             We participate in iGEM's fifth International InterLaboratory Measurement Study. This study is organized by iGEM's measurement committee in an effort to establish standardized, reliable and repeatable measurement tools for the iGEM community and the synthetic biology community as a whole. In the InterLab study of this year, our team followed InterLab_2018_Plate_Reader_Protocol to conduct the experiment.
             The experiments can be divided into three parts: calibration, cell measurement and counting colony-forming units from the sample.
            </Section>

            <Sectiontitle>
            Calibration_1 : OD600 Reference point
            </Sectiontitle>
            <Section>
             LUDOX CL-X (45% colloidal silica suspension) is used as a single point reference to obtain a conversion factor to transform absorbance (Abs600) data from our plate reader into a comparable OD600 measurement as would be obtained in a spectrophotometer.
             We will get the data for OD600 of the H2O and LUDOX. The corrected Abs600 is calculated by subtracting the H2O reading. To convert measured Abs600 to OD600 is to let Reference OD600 divided by Abs600.
            </Section>
            
            <Sectiontitle>
            Calibration 2: Particle Standard Curve
            </Sectiontitle>
            <Section>
            We prepare a dilution series of monodisperse silica microspheres and measure the Abs600 in plate reader. The size and optical characteristics of these microspheres are similar to cells, and there is a known amount of particles per volume. This measurement allow us to construct a standard curve of particle concentration which can be used to convert Abs600 measurements to an estimated number of cells.
            </Section>

            <Sectiontitle>
            Calibration 3: Fluorescence standard curve
            </Sectiontitle>
            <Section>
            Absolute fluorescence values cannot be directly compared from one instrument to another. In order to compare fluorescence output of test devices between teams, it is necessary to create a standard fluorescence curve.
            </Section>


            <Sectiontitle>
            Cell measurement
            </Sectiontitle>
            <Section>
            First, we transform Escherichia coli DH5α with these following plasmids.                
            </Section>


            <Sectiontitle>
            Counting colony-forming units (CFUs) from the sample.
            </Sectiontitle>
            <Section>
            This measurement can be used to calibrate OD600 to colony forming unit (CFU) counts, which are directly relatable to the cell concentration of the culture.
            We first dilute overnight culture to OD600 = 0.1 in 1mL of LB + Cam media, then prepare a dilution series as instruction. Spread plate for dilution sample and incubate at 37°C overnight and count colonies after 18-20 hours of growth.
            </Section>

            </Content>
          </Wrapper>

        );
    }

    componentDidMount(){
        // const observer = new IntersectionObserver(
        //     entries=> {
        //         entries.map(entry=>{
        //             console.log(entry.isIntersecting);
        //         })
        //     },
        //     {   rootMargin: "-80px 0px 0px 0px ",
        //         threshold: [0] }
        // )
        // observer.observe(this.introduction)
    } 
}

