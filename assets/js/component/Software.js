import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';




const Introduction=
    <div>
        <div>In order to achieve real time data analysis , when ACE detects the color-changing sample, it will send a message to the user. Between ACE and user’s mobile device, it needs a transfer protocol to communicate with each other. Here, we choose MQTT (Message Queuing Telemetry Transport) to upload the vibrio concentration onto the cloud. It is a lightweight messaging protocol for small sensors and mobile devices, optimized for high-latency or unreliable networks.  Therefore, this kind of method is useful in remote area where network bandwidth is limited, especially for the fish farm in Taiwan. We’ve designed an app for farmers to obtain information in time. In our app, we separate into three parts: Pond’s condition, Suggestions, and Multiple Pond map. </div>

        <div className='illustration'>
            <img className='illust-image' src={Constant.image.software.app}/>
        </div>

    </div>

const Pond =
    <div>
    <div className='part'>We’ve divided different bacteria’s concentration into three levels, Safe, Warning, and Danger. The standard of this division is refer to the advice of the Fisheries Research Center of Republic of China. After visiting the Marine Life museum Research center, the researcher also tell us that usually the concentration for vibrio to be pathogenic is >104CFU/ml.</div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.software.line}/>
        </div>
        <div className='part'>Furthermore, in order to let the farmers keep track of how the vibrio in their farm has been growing, we’ve made a history record chart, of which the Y coordinate is concentration, and the X coordinate is time. The concentration points will be drawn every hour.  The chart can be drag, zoom in and out for a closer look. By knowing the condition of their pond beforehand and even predict how the amount of the vibrios might grow, the farmers can do precaution in order to prevent vibrios from harming their fish or shrimp.</div>
    </div>

const Suggestion =
    <div>
        <div className='part'>When the concentration of vibrios is under the safety standard, the fisheries research center recommend the farmers to change the water environment, or adjust the amount of feed. Only when the condition is in danger that they can add the medicine.   </div>
        <div className='part'>In addition, we will send notification bar through android phones to farmers if the amount of vibrios exceed standard.</div>

        <div className='illustration'>
            <img className='illust-image' src={Constant.image.software.warn}/>
        </div>
    </div>


const Miltiple =
    <div >
        <div className='part'>The reason why we want to combine google map into our APP is that one farmer usually own more than one pond.  Then if they want to keep track of different pond, they need to number their farm. Most of the time, it’s difficult for farmers to memorize which pond does this number really referring to, which indicate that the managing system is not so user friendly. </div>
        <div className='part'>In our map, farmers can locate its position and to help its pond create a name.  Next time when they want to inspect the condition of each pond, they can just press on the name label on the map. In order to make the system more intuitive, we add in the function of turning the normal map into 3D map and satellite(RealView) one, which is more close to the real view on the ground.</div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.software.map}/>
        </div>
    </div>






const Data = {
    viewbar: {
        Title:'Software',
        Subtitle: 'An app for real-time analysis of pond’s condition',
        image: Constant.image.topfull.software
    },
    content: {
        Introduction: Introduction,
        parts: [
            { Title: 'Pond’s condition',
              Description: Pond
            },
            { Title: 'Suggestions',
              Description: Suggestion
            },
            { Title: 'Multiple pond management map',
              Description: Miltiple
            }
            
        ]
    
    }
}


class Software extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Software;