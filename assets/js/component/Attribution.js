import React, { Component } from 'react'
import styled from 'styled-components'
import Content from './Content'
import Constant from './Constant';


const SpThanks =
    <div>
        <div className='part'>
          
            <div className='innerpart'>
                <div >Prof. Ya-Tang Yang</div>
                <div>
                Prof. Yang kindly provided the laboratory for us to do our wet lab experiment. In addition, he gave us lots of suggestions about modeling and hardware.
                </div>
            </div>

            <div className='innerpart'>
                <div classNane='part-title'>Prof. Chao-Min Cheng</div>
                <div>
                    Prof. Cheng provided us some advice about our presentation and take care of all of us in Boston.
                </div>
            </div>

            <div className='innerpart'>
                <div >Prof. Yu-Chun Lin</div>
                <div>
                    Prof. Lin provided his experimental materials for us to do our experiments. Moreover, he gave us a lot of helpful suggestions about molecular biology experiment.
                </div>
            </div>

            <div className='innerpart'>
                <div >Dr. Chin-I Chang</div>
                <div>
                    Dr. Chang generously provided us the “Multiple-Vibrio detecting kit, MV-kit” for our dry lab to integrate their hardware. Also, he gave us some suggestions about Vibrio culture.
                </div>
            </div>

            <div className='innerpart'>
                <div >Dr. Jimmy Kuo</div>
                <div>
                    Dr. Kuo is a researcher of the national museum of marine biology and aquarium, who shared us with his research on Vibrio and some knowledge related to Vibrio. Also, he gave us some suggestions about our hardware design.
                </div>
            </div>

            <div className='innerpart'>
                <div >Dr. Ming-An Tsai</div>
                <div>
                    Dr. Tsai, who is also a researcher of the national museum of marine biology and aquarium. He kindly reminded us that our killing system must not eliminate all Vibrio in the water. Besides, he gave us a crucial reference of the infectious Vibrio concentration in the water which is useful for our wet lab experiments.
                </div>
            </div>
        
        </div>
    </div>

const AddThanks =
    <div>
        <div className='part'>
            Prof. Rotem Sorek kindly gave us several suggestions about tsRNA which is a critical part of our wet lab design.
        </div>

        <div className='part'>
            Prof. Chih-Chen Chen provided us the equipment and suggestions for microfluidic channels.
        </div>

        <div className='part'>
            Feng-Shan Senior High School gave us an opportunity and places to implement our educational project.
        </div>

        <div className='part'>
            Industrial Technology Research Institute provided us the thermoelectric cooling chip for our hardware system.
        </div>

        <div className='part'>
            Chih-Hsien Lee and Che-Kang Chang gave us lots of suggestions about our molecular biology experiments and also, they helped us to troubleshoot.
        </div>

        <div className='part'>
            Ting Yang and To-Wen Chen helped us to be well-organized and also, gave us lots of suggestions about wet lab experiments and tips about joining the iGEM competition.
        </div>
    </div>

const Individual =
    <div className='illustration'>
        <img className='illust-image' src={Constant.image.attribution.list}/>
    </div>


const Data = {
    viewbar: {
        Title: 'Attribution',
        Subtitle: 'We would like to thank people who makes our project possible.',
        image: Constant.image.topfull.attribution
    },
    content:{
        Introduction: ``,
        parts:[
            { Title: 'Special Thanks',
              Description: SpThanks
            },
            { Title: 'Additional Thanks',
              Description: AddThanks
            },
            { Title: 'Individual Attributions',
              Description: Individual
            }
        ]
    }
    
}




class Attributions extends Component {
    render() {
        return (
            <Content {...Data}/>
        )
    }
}

export default Attributions;