import React, { Component } from 'react';
import Content from './Content';
import Constant from './Constant';



const Introduction = 
    <div>
        <div>
            The importance of damage caused by Vibrio would not be elucidated here. You can see the detailed information in 
            <a href='http://2018.igem.org/Description'> Description</a>.
        </div>

        <div className='part'>
            
            <div>Nowadays, there are three possible scenarios for aquatic agriculture to face pathogenic Vibrio:</div>
            <div className='innerpart'>
                <div>1. The infection of Vibrio is usually happening all of a sudden. So when fisherman aware of the infection, it often causes significant damage.</div>
                <div>2. The conventional Vibrio testing method is time-consuming and manpower-consuming.</div>
                <div>3. The current water quality testing equipment is mainly focusing on the physical and chemical index, there are no devices for testing bacteria</div>
            </div>
        </div>

        <div className='part'>
            <div>
                However, our automatic Vibrio-detecting system is able to solve these problems.
            </div>
            <div style={{display:'flex', alignItems:'flex-end'}}>
                <div className='illustration'>
                    <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.tcbs}/>
                    <div className='undertext'>TCBS medium</div>
                </div>             
                <div className='illustration'>
                    <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.plate}/>
                    <div className='undertext'>MV-kit</div>
                </div>
            </div>
        </div>
    </div>



const Mvkit = 
    <div>
        <div>MV-kit was developed by Fisheries Research Institute in Taiwan. It’s a kind of selective medium for Vibrio and it can detect 17 different aquatic pathogenic Vibrio. Through observing the time of color-changing, we can know the approximate Vibrio concentration in the sample. After our modification, within 24 hours, the minimal detectable Vibrio concentration is 100 CFU/ mL. Take Vibrio harveyi for example:</div>
        <div style={{display:'flex', alignItems:'flex-end'}}>
            <div className='illustration'>
                <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.concentration}/>
                <div className='undertext'>CFU vs. O.D.</div>
            </div>             
            <div className='illustration'>
                <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.time}/>
                <div className='undertext'>CFU vs. Time of color-changing</div>
            </div>
        </div>
        <div>We build a relationship of O.D. value and the amount of bacteria via spreading method. Then, using O.D. value as a reference point, we build another relationship between the color-changing time of MV-kit and the amount of bacteria. Accordingly, we can get a significant correlation of bacteria concentration and the color-changing time of MV-kit</div>
    </div>



const System =
    <div>
         <div className='illustration'>
            <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.flow}/>
        </div>
        <div className='part'>
            We provide a complete service for the prevention of Vibrio-infection. Our ACE collects the water sample from the fish pond and drips it into the plate automatically. Simultaneously, the device provides a closed environment with constant temperature for the reaction. Also, the device monitors the color-changing time at all times. As long as the color changes and achieves the condition we have set up, the data will be recorded and be uploaded to the server. After analyzing, the final result will be transferred to the clients’ cellphone applications. If the concentration of Vibrio overtakes the minimal hazardous value which is 1000 CFU/ mL, the application will warn the fisherman. 
        </div>

        <div className='part'>
            Through our system, our clients can take control of the situation of their fish ponds and use our engineered E. coli or other plans to solve the problems.
        </div>
    </div>


const Commercial=
    <div>
        <div className='illustration'>
            <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.stp}/>
        </div>

        <div className='part'>
            <div className='part-title'>1. Segmentation</div>
            <div>
                <div className='innerpart'>
                    <div className='part-title'>Merchandises in current market have to face some difficulties:</div>
                    <div>The water quality detecting systems in the current market are merely focusing on the particular physical and chemical indexes in the waters, for example, pH value, redox potential, dissolved oxygen, etc. They determine the water quality by those indexes, however, the change of situation in the water is quite fast and complex. We cannot receive the correct and real-time information of Vibrio in the water. When we aware of the abnormality, the pathogenic Vibrio usually causes the death of fish and shrimps significantly.</div>
                </div>

                <div className='innerpart'>
                    <div className='part-title'>Long-term detection with high specificity:</div>
                    <div>The MV-kit developed by Fisheries Research Institute is able to detect the Vibrio in the water sample quantitatively and with high specificity. Our system can automatically monitor the change of Vibrio concentration over a long period of time. Our clients are able to notice the condition in the early stage of Vibrio growth and adopt the solutions.</div>
                </div>

                <div className='innerpart'>
                    <div className='part-title'>A real-time and automatic system:</div>
                    <div>Our mechanism design allows the device to collect the sample automatically and continuously. Furthermore, we also program an application which analyzes the Vibrio concentration automatically. Last but not least, we achieve the effect of real-time monitoring and report through IoT technology.</div>
                </div>

                <div className='innerpart'>
                    <div className='part-title'>Fast, simple, and low-cost:</div>
                    <div>The mechanism of our reaction is the simple color-changing process. Compared to the conventional Vibrio culture methods, our clients haven’t to equipped with the professional skills of bacteria culture, also, the process of testing becomes safer and faster. In comparison with the water quality testing system in the market, our system is low-cost and is able to express the Vibrio concentration directly and accurately.</div>
                </div>
            </div>

            <div className='illustration'>
                <img className='illust-image' style={{backgroundColor:'transparent'}} src={Constant.image.application.vs}/>
             </div>

        </div>
       
        <div className='part'>
            <div className='part-title'>2. Targeting</div>
            <div>
                <div className='innerpart'>
                    <div>Aquatic agriculture industry:</div>
                    <div>Aquatic agriculture is an important industry and it stimulates the economic growth in Taiwan every year. However, the Vibrio-related infection leads to inestimable economic damage locally and globally. Our system aims to provide real-time, long-term, and low-cost monitoring toward Vibrio. Through the automatic system, our clients can reduce the manpower-cost and ensure their fish ponds are safe at any time. In addition, our mechanism design is quite simple so that the maintenance cost is also quite low. The only thing fisherman has to do is change the consumable materials regularly.</div>
                </div>
                
                <div className='innerpart'>
                    <div className='part-title'>Suppliers of the water quality testing system:</div>
                    <div>Currently, there are several water quality testing system vendors in Taiwan, but there is no any company provides the automatic Vibrio-detecting system. Our device is easy to be integrated with other related systems to reduce the vendors’ research and development cost. In this way, we believe that we can establish a better platform and to create a win-win situation.</div>
                </div>
            </div>
            </div>
    

        <div className='part'>
            <div className='part-title'>3. Positioning</div>
            <div>
                <div className='innerpart'>
                    <div className='part-title'>Intelligent fishery:</div>
                    <div>
                        <div>With the advance of science and technology, the IoT popularizes gradually in current society. Besides, the traditional agriculture industries transform into the so-called “agriculture 4.0”. </div>
                        <div>Let’s take an in-depth look at aquatic agriculture in Taiwan. Our country is famous for its aquatic agriculture industry, however, the conventional way is quite time-consuming. Additionally, following with the global warming, the aquatic agriculture faces a huge challenge. In the train of those facts, the industrial population structure becomes imbalance and thus, exerting a crucial impact on the future of industrial development ultimately.</div>
                        <div>In order to turn the tables, the concept and development of intelligent fishery are emerging in recent years. It leads our traditional fishery industry into a new era, raising the operational efficacy, the income, and reducing the cost. Based on the concept, our system is expected to solve the Vibrio-monitoring problems and to establish a database to find an optimized solution.</div>
                    </div>
                </div>

                <div className='innerpart'>
                    <div className='part-title'>Future resolution:</div>
                    <div>Hopefully, we can create a complete detecting platform for different pathogenic bacteria in the future. With low-cost and high-efficiency, our platform is able to minimize the economic damage result from the bacterial infection.</div>
                </div>
            </div>
        </div>
    </div>
          

   

const Data = {
    viewbar: {
        Title: 'Application',
        Subtitle: 'Automatic Vibrio-detecting System',
        image: Constant.image.topfull.application
    },
    content: {
        Introduction: Introduction,
        parts:[
            { Title: 'MV-kit',
              Description: Mvkit
            },
            { Title: 'Automatic Vibrio-detecting System',
              Description: System
            },
            { Title: 'Commercial Analysis',
              Description: Commercial
            }
        ]
    }
}



class Application extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Application;