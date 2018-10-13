import React, { Component } from 'react';
import styled from 'styled-components';
import Constant from './Constant';
import Content from './Content';






const Pumps = 
    <div>
        <div>
        For most of the detection reagent, they can only react with the small amount of sample each time. Taking
         MV-kit [連結到哪?] that we’re using for vibrio detection for example, it needs to have fix amount of 35μl sample fluid being collected every time so that we can get the better result of the later on reaction with the reagent. We choose mini peristaltic pump to fulfill our need. There are a few advantages of choosing peristaltic pump as our dispensing media[1]:
        </div>

        <div>
            <div>
            1. Accurate metering - peristaltic pumps use flexible tubing to run through rollers in the pump head. As fluid goes through the pump head, packet of fluids can be formed. Simply by determining the size of the tubing and the speed of the roller turning in the pump head, the accurate metering of the media can be achieved.
            </div>
            <div>
            2. Self priming - peristaltic pumps can draw fluid into the tubing when starting dry while other pumps require user to fill pump and suction line with fluid before use which can be inconvenient and also create potential for contamination.
            </div>
            <div>
            3. Non-siphoning - a peristaltic pump is non-siphoning which means that it prevents back flow into the system when the pump stop turning. This promotes accuracy during dispensing.
            </div>
        </div>
        <div>
        As a result, peristaltic pumps are often used for applications involving metering, dispensing and precise general transfer. Here, we use it in our device and we get the stl. files from the open source of the YouTube channels called “electronic crafts”[2]. The dimension of our peristaltic pump is 31 x 31 x 11 (mm), and the detail of other components are showed in Table1 and Figure 1. We printed the main components out by using the SLA 3D printer. 
        </div>

        <table className='table'>
            <tbody>
                <tr>
                    <th colspan='6' className='tablehead'>Peristaltic Pump</th>
                </tr>
                <tr>
                    <td className='tabledata'>Dimension</td>
                    <td className='tabledata'>Tube diameter</td>
                    <td className='tabledata'>Tube material</td>	
                    <td className='tabledata'>Number of rollers</td>	
                    <td className='tabledata'>Bearing</td>	
                    <td className='tabledata'>Motor</td>
                </tr>
                <tr>                
                    <td className='tabledata'>31 x 31 x 11 (mm)</td>	
                    <td className='tabledata'>
                        <div>OD: 3mm</div>
                        <div>ID: 2mm</div>
                    </td>
                    <td className='tabledata'>Silicone rubber</td>	
                    <td className='tabledata'>three</td>	
                    <td className='tabledata'>
                        <div>OD: 9mm</div>
                        <div>ID: 3mm</div>

                    </td>
                    <td className='tabledata'>
                        <div>28BYJ-48</div>
                        <div>12V</div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>


const Data = {
    viewbar: {
        Title: 'Sampling',
        Subtitle: 'Auto sampling with peristaltic pump ',
        image: Constant.image.topfull.sampling
    },
    content: {
        Introduction: `In our device, in order to let the following detected process work out properly, we first set up the automated sampling mechanism. We want to collect the sample out of the pool or the fish farm that we’re target at to get the real-time monitoring of the water condition, and here we only focus on the number of vibrio in our project.`,
        parts: [
            {  Title: 'Peristaltic pumps',
               Description: Pumps
            },
        ]
    }
}





class Sampling extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Sampling;