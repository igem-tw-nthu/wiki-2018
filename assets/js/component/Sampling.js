import React, { Component } from 'react';
import styled from 'styled-components';
import Constant from './Constant';
import Content from './Content';
import MathJax  from 'react-mathjax'





const Pumps = 
    <div>
        <div className='part'>
            <div>
            For most of the detection reagent, they can only react with the small amount of sample each time. Taking
            MV-kit (Multiple Vibrio Detecting Kit) that we’re using for vibrio detection for example, it needs to have fix amount of 35μl sample fluid being collected every time so that we can get the better result of the later on reaction with the reagent. We choose mini peristaltic pump to fulfill our need. There are a few advantages of choosing peristaltic pump as our dispensing media[1]:
            </div>

            <div>
                <div className='innerpart'>
                <div className='part-title'>1. Accurate metering </div>
                <div>Peristaltic pumps use flexible tubing to run through rollers in the pump head. As fluid goes through the pump head, packet of fluids can be formed. Simply by determining the size of the tubing and the speed of the roller turning in the pump head, the accurate metering of the media can be achieved.</div>
                </div>
                <div className='innerpart'>
                <div className='part-title'>2. Self priming </div>
                <div>Peristaltic pumps can draw fluid into the tubing when starting dry while other pumps require user to fill pump and suction line with fluid before use which can be inconvenient and also create potential for contamination.</div>
                </div>
                <div className='innerpart'>
                <div className='part-title'>3. Non-siphoning </div>
                <div>A peristaltic pump is non-siphoning which means that it prevents back flow into the system when the pump stop turning. This promotes accuracy during dispensing.</div>
                </div>
            </div>
        </div>

        <div className='part'>
            <div>
            As a result, peristaltic pumps are often used for applications involving metering, dispensing and precise general transfer. Here, we use it in our device and we get the stl. files from the open source of the YouTube channels called “electronic crafts”[2]. The dimension of our peristaltic pump is 31 x 31 x 11 (mm), and the detail of other components are showed in Table1 and Figure 1. We printed the main components out by using the SLA 3D printer. 
            </div>

            <table className='table'>
            <tbody>
                <tr>
                    <th colSpan='6' className='tablehead'>Peristaltic Pump</th>
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
        <div className='undertext'>
            Table 1
        </div>

        <div className='illustration'>
            <img className='illust-image' src={Constant.image.sampling.pump}/>
            <div className='undertext'>
                Figure 1
            </div>
        </div>

        </div>

        <div className='part'>
        Because peristaltic pumps deliver fixed amounts of fluid with each pass of a roller over the tube, the size of the tube has a direct effect on the amount of fluid delivered. Well-designed pumps are engineered to work with an optimum tubing size or range of tubing sizes, which take into account both the tube's inside diameter and wall thickness. The inside diameter determines the amount of fluid delivered with each turn of the rotor, while the wall thickness affects the tubing's ability to spring back to its original shape after each compression, which has a great influence on the overall life of the tubing[3].
        </div>
        
        <div className='part'>
        We choose the tube with inner diameter 2mm and wall thickness 1mm. Three bearings are used as the rollers in our peristaltic pump. The outer diameter of the bearing is 9mm and the inside diameter is 3mm. The peristatic pump after assembling can be seen in Figure 2. We can also calculated the theoretical discharge to know the theoretical performance of the peristaltic pump by using the equation below[4],
        </div>

        <div className='part' style={{display:'flex',alignItems:'center'}}>

            <div>
                <div> 
                    <MathJax.Provider>
                        <MathJax.Node inline formula={"flowrate (μl/s) = V \\cdot L \\cdot N \\cdot RPM \\cdot10^3 \\cdot 60"}/>
                    </MathJax.Provider>
                </div>
                <div>V= Volume of occluded tubing (mm^3/mm)</div>
                <div>L= Tubing length that will be occluded by pump rollers (mm)</div>
                <div>N= Number of rollers on the rotor.</div>
                <div>RPM= pump rpm</div>
            </div>
            <div style={{marginLeft:'auto'}}>
                <img style={{height:'180px'}} src={Constant.image.sampling.full_pump}/>
                <div className='undertext'>Figure 2</div>
            </div>
        </div>

        <div className='part'>
          <div>We have done multiple testing and calculated the weight of each droplet by measuring the weight of every ten droplets to get the average value. The average weight of each droplet is 0.035+-0.00072μl, and the rest of the measuring records are showed in Figure 3. This is exactly what we need for sample preparing for the MV-kit in our experiments.</div>
          <div className='illustration'>
              <img className='illust-image' src={Constant.image.sampling.list}/>
              <div className='undertext'>Figure 3</div>
          </div>
        </div>

        <div className='part' style={{display:'flex',alignItems:'center'}}>
            <div  style={{marginRight:'auto',padding:'0px 30px'}}>
                <img style={{height:'180px'}} src={Constant.image.sampling.head}/>
                <div className='undertext'>Figure 4</div>
            </div>
            <div>Although we can almost get the precise amount of sample each time, it’s still hard to control the later droplets from dropping down cause of the gravity. Hence, we combine the pipette tip (Figure 4) at the end of the silicon tube to reduce the diameter and slow down the flowing rate. In addition, we also design the special lid with slopes in between to cover on the 96-well plate. We can utilize the slope design not only to drop the first few droplets that might be contaminated by the previous sample but also use them as the tunnels to collect the waste sample and remove all of them after the whole examination is done.</div>
        </div>

        <div className='illustration'>
            <video className='illust-image' autoPlay loop>
                <source src={Constant.video.lid} type="video/mp4"/>
            </video>
          </div>

    </div>

const Axis = 
    <div>
        <div>We use two 12V 28BYJ-48 stepper motors to control the XY axis to move our sample to the specific coordinate and connect them to Arduino as well as uln2003 motor drivers to control the speed and time. The step angle of the motor is 5.625 degrees and the reduction ratio is 1/64, therefore, for one revolution it needs 4096 steps. The diameter of the gear mounted on the motor is 36mm, so for each step, it can linearly move forward or backward 1.76mm. The length between two wells on 96-well plate is about 18mm, thus, this motor can absolutely satisfy our need for our low-cost XY plane setting. </div>
        <div className='illustration'>
            <video className='illust-image' autoPlay loop>
                <source src={Constant.video.sampling} type="video/mp4"/>
            </video>
        </div>
    </div>



const Discuss =
    <div>
        <div className='part'>At first, we’re trying to set up the XY axis by using the DC motor to control it in considering of the low-cost budget. However, we found out that since the DC motor is categorized as analog motor, we can only drive them by sending power signals (two wire) to the motor to drive them. This would be tricky for us to do the sophisticated planned moves because we won’t know exactly where they may be located except trying to predict the moves over time within a relative margin of error(3-8%)[5]. Moreover, the friction between the gear rack and the motor make it even hard to control and need to build up more complex moves manually. </div>
        <div className='part'>On the other hand, stepper motors are digital motors, we can actually send position signals (four wire) to the motor to drive them. It’s possible for us to know exactly where they are at all times, and would be easier for us to do ‘repeat’ motion passes and have it return to a ‘home and start’ position precisely. For this reason even most sophisticated of a moves can be achieved. </div>
        <div className='part'>Due to all the reasons above, instead of making motion decision ‘on the fly’ at the rig, we then choose stepper motor as our driving motor.</div>
    </div>


const Result =
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.sampling.result}/>
        </div>
    </div>

    


const Download =
    <div>
        You can download the STL and anrdion code on <a href='https://github.com/igem-tw-nthu/Peristaltic-pumps-2018'>Github</a>
    </div>

const Reference =
    <div>
        <div className='reference'>1. https://www.manufacturingchemist.com/news/article_page/Peristaltic_pumps__advantages_and_applications/74693</div>
        <div className='reference'>2. Peristaltic pump design: https://www.youtube.com/watch?v=J2KLq7485kM</div>
        <div className='reference'>3. https://archive-resources.coleparmer.com/TechInfo/HTMLFiles/PPTube_match.htm</div>
        <div className='reference'>4. Suhas R. Dhumal, Design and Development of Rotary Peristaltic Pump, International Journal of Science and Advanced Technology (ISSN 2221-8386)</div>
        <div className='reference'>5. https://support.dynamicperception.com/hc/en-us/articles/202986595-What-is-the-difference-between-DC-motors-and-Stepper-motors-</div>
    </div>


const Data = {
    viewbar: {
        Title: 'Sampling',
        Subtitle: 'Auto sampling with peristaltic pump ',
        image: Constant.image.topfull.sampling,
        Underimage: 'reference: http://keni.candlecomfortzone.com water-samples '
    },
    content: {
        Introduction: `In our device, in order to let the following detected process work out properly, we first set up the automated sampling mechanism. We want to collect the sample out of the pool or the fish farm that we’re target at to get the real-time monitoring of the water condition, and here we only focus on the number of vibrio in our project.`,
        parts: [
            {  Title: 'Peristaltic pumps',
               Description: Pumps
            },
            {  Title: 'X-Y axis',
                Description: Axis
            },
            {  Title: 'Discussion',
               Description: Discuss
            },
            {  Title: 'Result',
               Description: Result
            },
            { Title: 'File download',
              Description: Download
            },
            { Title: 'Reference',
              Description: Reference
            }
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