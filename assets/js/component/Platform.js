import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant'
import Content from './Content';


const Microtitration = 
    <div>
        <div>After extracting a sample from the fish farm, the sample will be dripped into the 96 -well plate. In the plate, we put in the mixture of MV-kit buffer for the sample to react. There are several reasons we chose to use 96-well plates instead of eppendorf or 6/24/48 well plate.</div>
        <div className='part'>
            <div className='innerpart'>1.	Eppendorf has an unremovable lid, which is not convenient for our auto sampling design.</div>
            <div className='innerpart'>2.	The base of eppendorf is sharp and liquid will not distribute evenly, which is not suitable for color sensing while 96-well plates are flat.</div>
            <div className='innerpart'>3.	The volume of the 96-well plate is small enough for us to put the sample in, while the other plates are too big.</div>
            <div className='innerpart'>4.	It can contain the most samples in one single plate. In that way, we can reduce the rate of changing new plates.</div>
        </div>
       
        <div className='illustration'>
            <table className='table'>
                <tbody>
                <tr> 
                    <th className='tablehead'>Number of well</th>	
                    <th className='tablehead'>Radius (mm) </th>
                    <th className='tablehead'>Max Volume (mL) </th>
                    <th className='tablehead'>Growing Area (cm2)</th>
                </tr>
                <tr>
                    <td className='tabledata'>96</td>
                    <td className='tabledata'>4.5	</td>
                    <td className='tabledata'>0.36</td>
                    <td className='tabledata'>0.16</td>
                </tr>
                <tr>
                    <td className='tabledata'>48</td>	
                    <td className='tabledata'>10.2</td>
                    <td className='tabledata'>1.7</td>
                    <td className='tabledata'>0.8</td>
                </tr>
                <tr>
                    <td className='tabledata'>24</td>	
                    <td className='tabledata'>15.6</td>
                    <td className='tabledata'>3.4</td>
                    <td className='tabledata'>1.9</td>
                </tr>
                <tr>
                    <td className='tabledata'>12</td>
                    <td className='tabledata'>22.1</td>
                    <td className='tabledata'>6.9</td>
                    <td className='tabledata'>3.8</td>
                </tr>
                <tr>
                    <td className='tabledata'>6</td>	
                    <td className='tabledata'>34.8</td>	
                    <td className='tabledata'>16.8</td>	
                    <td className='tabledata'>9.5</td>
                </tr>   
                </tbody>
            </table>
            <div className='undertext'>reference: http://www.dxy.cn/bbs/topic/9584997</div>
            
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.platform.transparent}/>
            </div>
            <div className='undertext'>reference: http://www.carelifetech.com.tw/?96%E5%AD%94%E7%9B%A4-96-well-plate,127</div>

        </div>
    </div>


const Lightblock = 
    <div>
        <div>Since we need to use the camera to detect the color changes of each well, we need to create an environment that can make the color as clear as possible.  Therefore, we use 3D printing and polylactic acid (PLA) to print out a platform that blacks out all the area except for the 24 holes of each plate that have our sample in.</div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.platform.block}/>
        </div>
    </div>

const Movinglid = 
    <div>
        <div>Since the MV-kit buffer and solution might evaporate, we need to construct an auto moving lid. The lid has 48 holes on it, each hole is 9.1 mm next to the well. This lid is connected with a gear and a stepper motor. Every time the sample is being dripped into the well, the motor will move the lid by 9.1 mm. The gear system and the base of the motor are also made by 3D printing. 
             Moreover, we’ve designed the lid to be detachable so that the farmer can remove the lid when they are going to substitute the 96 well plates with a new one every two weeks. </div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.platform.moving}/>
        </div>
    </div>


const Data = {
    viewbar: {
        Title: 'Platform',  
        Subtitle: 'Plate and the moving lid',
        image: Constant.image.topfull.platform
    },
    content: {
        Introduction: 'The reaction platform mainly consists of three parts: The 96-Well Microtitration Plate, the light blocking base, and auto moving lid.',
        parts: [
            { Title: '96-Well Microtitration',
              Description: Microtitration
            },
            { Title: 'Light blocking',
              Description: Lightblock
            },
            { Title:'Moving lid',
              Description: Movinglid
            }
        ],
    }
}




class Platform extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Platform;