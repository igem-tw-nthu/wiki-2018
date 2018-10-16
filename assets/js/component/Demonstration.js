import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content'


const Introduction =
    <div>
        <div className='part'>The goal of ACE is to detect the color-changing process automatically and to analyze the degree of color-changing by comparing to our database. After analyzing, it is able to send a final report to our clients in a fast and simple way.</div>
        <div className='part'>Here we demonstrate the whole structure design and showcase our expected effectiveness by combining different parts of our device.</div>
        <div >(a)	An environment with a uniform source of light and it is temperature controllable.</div>
        <div >(b)	A system which can control the X-Y axis to sample automatically.</div>
        <div >(c)	A platform which combines the 96-well plate and it is able to prevent evaporation.</div>
        <div >(d)	Automatic image-detecting system.</div>
        <div >(e)	An application which can update the information anytime.</div>
    </div>


const Explosion =
    <iframe width="923" height="519" src="https://www.youtube.com/embed/didyeianZ9U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


const Demo =
    <iframe width="923" height="519" src="https://www.youtube.com/embed/yOVGhMbamdk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

const Data = {
    viewbar:{
        Title: 'Demonstration',
        Subtitle: '',
        image: Constant.image.topfull.demonstration
    },
    content:{
        parts: [
            { Description: Introduction },
            { Title: 'Explosion',
              Description: Explosion
            },
            { Title: 'Demonstration',
              Description: Demo
            }
        ]
    }
}



class Demonstration extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Demonstration;