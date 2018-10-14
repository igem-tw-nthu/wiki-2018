import React, { Component } from 'react';
import styled from 'styled-components'
import Content from './Content';
import Constant from './Constant';



const Introduction = 
    <div>
        For the results of color-changing, we write a program to detect them. In our device, there are 24 samples processing the chemical reaction simultaneously. During the reaction, we want to get all samples’ color values immediately, so we adopt image detection executed by Raspberry Pi to analyze the whole status directly. The following are three parts for our image detection, which is how to do, advantages, and problems respectively.
    </div>


const HowtoDo = 
    <div>
        <div>The following is the materials image detection needs</div>
        
        <table className='table'>
            <tbody>
            <tr>
                <td className='tabledata'>Raspberry Pi 3 Model B v1.3</td>
                <td className='tabledata'>1</td>
            </tr>
            <tr>
                <td className='tabledata'>Webcam Logitech C270</td>
                <td className='tabledata'>1</td>
            </tr>
            <tr>
                <td className='tabledata'>Wide-angle lens 37mm 0.6X</td>
                <td className='tabledata'>1</td>
            </tr>
            </tbody>
        </table>


        <div className='illustration'>
            <img className='illust-image' src={Constant.image.imaging.materials}/>
        </div>

        <div className='part'>The core of image detection is executed by Raspberry Pi and the program language we use is python. With a camera and wide-angle lens, it can capture the scene in a relatively lower height. To do the image processing, OpenCV, open source library, is the best choice. Because the program will send warning message to the users, for simplicity and stability, we choose MQTT to be the transport protocol.</div>
        <div className='part'>The following three steps are the processes our image detection works on. First, it captures the scene using a camera in a specified time. Second, the image is analyzed immediately after one is captured and the results are record. Third, after the analysis, if there is a color-changing sample, it will send the warning message to the users. All the steps are operated recursively until all the samples are analyzed.</div>
    </div>




const Advantage = 
    <div>
        <div className='part'>
        For our image detection, we have three advantages, which are accuracy, automation, and flexibility, respectively. With these three, it can match our goal of designing ACE, i.e., automation and also increase usability compared to other devices used in the laboratory nowadays.
        </div>

        <div className='part'>
            <div className='part-title'>1. Accuracy</div>
            <div className='innerpart'>
                Because our 24 samples are close to each other, the accuracy is necessary to avoid the wrong result of analysis. With image detection, we can set the section where we want to analyze corresponding to the samples on the picture. Therefore, if all samples are located in advance carefully, we can get high accuracy for the results.
            </div>
        </div>
        <div className='part'>
            <div className='part-title'>2.	Automation</div>
            <div className='innerpart'>
                Automation is our goal of designing the device. To achieve this, the program can automatically do the following things, i.e., capturing the scene, analyzing the captured image, recording the results, and sending the warning messages to users. With the four steps as mentioned above operated cyclically, the program achieves automation.
            </div>
        </div>
        <div className='part'>
            <div className='part-title'>3.	Flexibility</div>
            <div className='innerpart'>
                The section program analyzes on the captured image can be modified whenever the captured one is changed. Therefore, we don’t have to fix the position of all samples. Due to this advantage, any type of sample can be analyzed accurately.
            </div>
        </div>
    </div>


const Problem = 
    <div>
        <div className='part'>
        During the development of image detection, we had made some choices to solve many problems, including the specific practice of detection, development board, the algorithm to analyze the images, and the environment light. The following describes each problem, and the reasons why we made these choices. 
        </div>
        <div className='part'>
            <div className='part-title'>1.	Image detection vs. Color sensor</div>
            <div className='innerpart'>
                Initially, color sensor is our direction to design the device. Moving the color sensor to the top of each sample can get the color of that. However, our samples are close to each other, and the resolution of a color sensor is not high enough to detect the color of single sample accurately, so the direction is changed to image detection with the camera capturing the scene. In this way, it analyzes the image directly, the accuracy increases by a large margin.
            </div>
        </div>
        <div className='part'>
            <div className='part-title'>2.	Raspberry Pi vs. Other development boards</div>
            <div className='innerpart'>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.imaging.board}/>
                </div>
                For the development boards, there are three choices, Arduino, Udoo Neo, and Raspberry Pi. Considering the efficiency, Arduino might not be able to run OpenCV effectively. The another consideration is the cost. Because we want to design a low-cost device cheaper than the similar machine sold on the market, the price of Udoo Neo is too expensive for us. Therefore, we chose Raspberry Pi to be our execution core.
            </div>
        </div>
        <div className='part'>
            <div className='part-title'>3.	Simplified location vs. Houghcircles</div>
            <div className='innerpart'>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.imaging.algorithm}/>
                </div>
                In the beginning, we planned to use OpenCV built-in function Houghcircles to do image detection. The detail of the function is that it can find circles on the image automatically. It completely meets our expectation. However, the distance and angle of each sample from the camera is different. As a result, the shape of the sample is not a circle on the captured image and leads to wrong detection by Houghcircles. For this reason, we changed the method and decided to locate the samples manually to get a high accuracy.
            </div>
        </div>
    </div>


const LED = 
    <div>
        <div className='part'>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.imaging.light} />
        </div>
        In order to prevent the influence of environment outside the device, ACE is designed to be enclosed. Therefore, it is completely dark inside the device and needs a light source to do image detection. In the beginning, we thought a big bulb is simple and suitable. Nevertheless, after we tested, we found the light on the image is not even, it would result in the wrong analysis. As a result, we chose LED strip. Its light is not only even but also bright enough.
        </div>
    </div>


const Code = 
    <div>
        You can download the source of our program on 
         <a href="https://github.com/igem-tw-nthu/opencv"> Github</a> 
    </div>


const Data = {
    viewbar: {
        Title: 'Imaging',
        Subtitle: 'Imaging by Raspberry Pi with OpenCV',
        image: Constant.image.topfull.imaging
    },
    content: {
        Introduction: Introduction,
        parts: [
            { Title: 'How to Do',
              Description: HowtoDo
            },
            { Title: 'Advantages',
              Description: Advantage
            },
            { Title: 'Problems',
              Description: Problem
            },
            { Title: 'LED strip vs. Big bulb',
              Description: LED
            },
            { Title: 'Code Download',
              Description: Code
            }
        ]
    }
}




class ImageDetection extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default ImageDetection;