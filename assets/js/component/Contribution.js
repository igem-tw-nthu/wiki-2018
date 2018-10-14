import React, { Component } from 'react'
import styled from 'styled-components'
import Constant from './Constant'
import Content from './Content';


const Introduction = 
    <div>
        <div>We participated in iGEM's fifth International InterLaboratory Measurement Study. This study is organized by iGEM's measurement committee in an effort to establish a standardized, reliable and repeatable measurement tool for the iGEM community and the synthetic biology community as a whole. In the InterLab study of this year, our team followed <a href='http://2018.igem.org/wiki/images/0/09/2018_InterLab_Plate_Reader_Protocol.pdf'>InterLab_2018_Plate_Reader_Protocol</a> to conduct the experiment.</div>
        <div>The experiments can be divided into three parts: calibration, cell measurement, and counting colony-forming units from the sample.</div>
    </div>


const Calibration =
    <div>
        <div>
            <div className='part'>
                <div className='part-title'>1. OD 600 Reference point</div>
                <div>LUDOX CL-X (45% colloidal silica suspension) is used as a single point reference to obtain a conversion factor to transform absorbance (Abs600) data from our plate reader into a comparable OD600 measurement as would be obtained in a spectrophotometer. We will get the data for OD600 of the H2O and LUDOX. The corrected Abs600 is calculated by subtracting the H2O reading. To convert measured Abs600 to OD600 is to let Reference OD600 divided by Abs600.</div>
            </div>
            <div className='part'>
                <div className='part-title'>2. Particle Standard Curve</div>
                <div>We prepared a dilution series of monodisperse silica microspheres and measured the Abs600 in a plate reader. The size and optical characteristics of these microspheres are similar to cells, and there was a known amount of particles per volume. This measurement allows us to construct a standard curve of particle concentration which can be used to convert Abs600 measurements to an estimated number of cells.</div>
            </div>
            <div className='part'>
                <div className='part-title'>3. Fluorescence standard curve</div>
                <div>Absolute fluorescence values cannot be directly compared from one instrument to another. In order to compare the fluorescence output of test devices between teams, it was necessary to create a standard fluorescence curve.</div>
            </div>
        </div>
    </div>

const Measurement =
    <div>
        <div className='part'>
            <div>First, we transformed Escherichia coli DH5α with these following plasmids.</div>
            <div className='innerpart'>
                <div>Negative control   BBa_R0040    Kit Plate 7 Well 2D</div>
                <div>Positive control   BBa_I20270   Kit Plate 7 Well 2B</div>
                <div>Test Device 1   BBa_J364000  Kit Plate 7 Well 2F</div>
                <div>Test Device 2   BBa_J364001  Kit Plate 7 Well 2H</div>
                <div>Test Device 3   BBa_J364002  Kit Plate 7 Well 2J</div>
                <div>Test Device 4      BBa_J364007  Kit Plate 7 Well 2L</div>
                <div>Test Device 5      BBa_J364008  Kit Plate 7 Well 2N</div>
                <div>Test Device 6      BBa_J364009  Kit Plate 7 Well 2P</div>
            </div>
        </div>

        <div className='part'>Secondly, two colonies from each plate were picked and inoculated in LB medium containing chloramphenicol overnight for 16-18 hours at 37°C and 220 rpm.</div>
        <div className='part'>Finally, we measured the OD600 and fluorescence of transformed cells according to the protocol after 0, 6 hours. Measurements gave us the following data and calculations which were conducted with the values we obtained from the standard curves and the reference point.</div>
    </div>


const CFU = 
    <div>
    This measurement can be used to calibrate OD600 to colony forming unit (CFU) counts, which are directly relatable to the cell concentration of the culture.
    We first diluted overnight culture to OD600 = 0.1 in 1mL of LB + Cam media, then prepared a dilution series as instruction. Spread plate for dilution sample and incubated at 37°C overnight and count colonies after 18-20 hours of growth.
    </div>

const Download=
    <div>
        Detail of the interlab experiment on <a href='https://drive.google.com/file/d/1ckLe66tEv3bbxnEU4JwRetVj-YGy4wxQ/view?usp=sharing'>Google Drive</a>
    </div>

const Data = {
    viewbar: {
        Title: 'Contribution',
        Subtitle: `Join the iGEM's fifth interlab Study`,
        image: Constant.image.topfull.interlab
    },
    content:{
        Introduction: Introduction,
        parts: [
            { Title: 'Calibration',
              Description: Calibration
            },
            { Title: 'Cell measurement',
              Description: Measurement
            },
            { Title: 'Counting colony-forming units (CFUs)',
              Description: CFU
            },
            { Title: 'File download',
              Description: Download
            }
        ] 
    }
}



export default class Contribution extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Content {...Data}/>  
        )
    }

}

