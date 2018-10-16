import React, { Component } from 'react';
import styled from 'styled-components'
import Content from './Content';
import Constant from './Constant';


const Light =
    <div>
     <div className='part'>Initially, we tried to use white LED separately because it is cheap and low cost, besides, having the best degree of contrast. However, we found that it is not bright enough, so we chose another kind of light.</div>
     <div className='part'>After this, we choose the white light bar and connect it with Arduino. Since the voltage afforded by Arduino is 12V, it’s too bright to observe, so we apply the voltage-gain-module to get the appropriate voltage. Then we find out the white light may sometimes be difficult for us to tell apart whether the liquid changes color or not. After discussion, we change the white light to yellow light and the problem is solved. </div>
    </div>


const  Temperature =
    <div>
        <div className='part'>Our Vibrio detection device needs to be able to react in a stable 30 ° C environment. It is hoped that a method can be designed to heat up when the ambient temperature is high and cool down when the temperature is low. The cooling technologies used today are mainly the following: "high pressure gas expansion and cooling", "liquid evaporation and refrigeration", "gas vortex cooling", "semiconductor refrigeration" and "chemical cooling", and we choose "semiconductor cooling", which is a relatively easy to complete and within the capability range.</div>

        <div className='part'>
            <div className='part-title'>First period</div>
            <div className='innerpart'>Common methods for cooling semiconductors include water cooling and fan cooling. Among them, due to our large architecture, water cooling is effective but too cumbersome and heavy. Limited by the space configuration, we use fan cooling. (Picture 4) By keep bringing the heat away, the temperature gradient of the chip become larger, and finally it will stop at a balanced point. We also add a fan on the cold side since we want the cold air to be uniformed inside the box. (Picture 5) Temperature-controlled circuits are more cumbersome and too complicated circuits are not suitable for use in our system, so we try to use temperature control module first. (Picture 6)</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.environment.first}/>
                <div className='undertext'></div>
            </div>
            <div className='innerpart'>We found that as we put the cooling device in a cardboard box for testing, the result is not good since the space is not sealed and made the chip hard to cool down the environment.</div>
            <div className='innerpart'>
            <div className='innerpart'>Needed materials:</div>
            <div>two 5V-2wire fans, two small heat sinks, some thermal grease, one thermoelectric cooling chip provided by a national competition in Taiwan, temperature control module.</div>

            </div>
        </div>



        <div className='part'>
            <div className='part-title'>Second period</div>
    	    <div className='innerpart'>To enlarge the temperature difference, we add a more powerful fan on the hot side to make sure the rate of heat dissipation is enough for the rate of chip getting cold, which is a 12V-2wire one. As a result, the inbox environment could drop 3℃, but still didn’t reach our expectation.</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.environment.second}/>
                <div className='undertext'>
                    <div>Figure 1: The air temperature inside the box drops from 26.6℃ to about 18℃ in 7 minutes, and maintains at 18℃ for 30 minutes. (cold device) The air temperature inside the box rises from 27.2℃ to 32.8℃ in about 6 minutes, and maintains at 32.8℃ for 15 minutes. (hot device)</div>
                    <div>Figure 2: When cold devices turn off, the air temperature inside the box rises from 27.2℃ to 32.8℃ in about 6 minutes, and maintains at 32.8℃ for 15 minutes. (cold device) When the hot device turn off, the air temperature inside the box drops from about 32.8℃ to 27.6℃ in 6 minutes, the same as the time to heat up the air. (hot device)</div>
                </div>
            </div>
            <div className='innerpart'>During our experiment, we found that the temperature control module couldn’t provide a two-state system, which is hard to be designed in our project. Therefore, we try another way by using Arduino and relay module to control the temperature directly. Relay, also known as electric cymbal, is an electronic control device that has a control system (also known as an input circuit) and a controlled system (also known as an output circuit). It is usually used in automatic control circuits. It is actually used as an "automatic switch" that uses a small current to control large currents. Therefore, it plays the role of automatic adjustment, safety protection and conversion circuit in the circuit. Besides, we chose an IC called LM35 as our temperature sensor by transforming resistance into temperature. The wiring diagram is as below. (Picture 8)</div>
            <div className='innerpart'>
            <div className='innerpart'>Needed materials: </div>
            Cold device is combined by 12V-2wire fan, heat sink, thermal grease, thermoelectric cooling chip, thermal grease, heat sink, 5V-2wire fan (from up to down); Temperature controlling: Arduino for control, LM35 for sensing, relay module for switch.</div>
        </div>



        <div className='part'>
            <div className='part-title'>Final period</div>
            <div className='innerpart'>To reduce the unknown impact on the experiment, we use two cold device and one hot device to control the temperature. Hot device is similar to cold one, the only different is its two fans are all 5V-2wire, which is the device we used in the first period.</div>
        　　<div className='innerpart'>This time we use two cold devices to find for the lowest temperature. Figure 1 shows the result we test cold or hot devices, and Figure 2 shows the changing after we turn off the devices.</div>
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.environment.final}/>
                <div className='undertext'></div>
            </div>
            <div className='inner-part'>After discussion, we decide to give styrofoam a try, we add it inside the box and do the rest of the experiment, includes add it or not add it. We finally decide to use two cold devices and one hot device without adding any material.</div>
            
            <table>

            </table>
            <div className='innerpart'>We use Arduino connects with relay and temperature sensor to control the temperature. When the sensor detects the temperature lower than the setting, hot device is activated, it would heat up the air inside the device until it reaches the target temperature. Then, the hot device continues working that makes the temperature higher than the ideal one, this time, the cold devices turn on and cool down the environment. At the end, the temperature would be controlled in the range we have written in Arduino.</div>
            <div className='innerpart'>In the beginning, we set the temperature to 27℃, which is a good condition for germs to grow. However, we neglect that there would be some the delay of temperature change between the air and the sensor, and the temperature around the sensor became higher than the environment, which affected the detecting correction. After we tidied up the wires, the problems disappeared and came into perfect.</div>

            <div className='illustration'>
                <img className='illust-image' src={Constant.image.environment.end}/>
                <div className='undertext'>Figure 6: Temperature control simulation. The hot device turns on at the beginning, and the cold devices turn on when the temperature reaches 28.3℃, in about 6 minutes.</div>
            </div>
        </div>
    </div>



const Reference=
    <div>
        <div className='reference'>1. Thermal Conductivity and Thermoelectric Power of Semiconductors. I. Terasaki, in Reference Module in Materials Science and Materials Engineering, 2016</div>
        <div className='reference'>2. Physics and Fundamental Theory. I. Terasaki, in Comprehensive Semiconductor Science and Technology, 2011</div>
        <div className='reference'>3. Thermoelectric cooling. JoséMeseguer, IsabelPérez-Grande, AngelSanz-Andrés, in Spacecraft Thermal Control, 2012</div>
        <div className='reference'>4. https://en.wikipedia.org/wiki/Thermoelectric_effect#/media/File:Thermoelectric_Cooler_Diagram.svg</div>
    </div>







const Data = {
    viewbar: {
        Title: 'Environment',
        Subtitle: 'Led Light, and peltier coller',
        image: Constant.image.topfull.environment
    },
    content:{
        Introduction: `In order to make sure the observation results are stable and reliable, it’s necessary to control the experiment environment. Besides putting all the instruments inside our acrylic-made box (size: 20*30*35, unit: cm3), temperature and brightness are also important. In this case, we separate the “Environment” part into two sub-titles, temperature, and light. We will introduce more details in the following statements.`,
        parts: [
            {  Title: 'Light',
               Description: Light

            },
            {  Title: 'Temperature',
               Description: Temperature
            },
      
            {  Title: 'Reference',
               Description: Reference

            }
        ]
    }

}




class Environment extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Environment;