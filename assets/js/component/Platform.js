import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant'
import Content from './Content';


const List = styled.div`
    margin: 30px;
    `

const Listcontent = [
    { description: 
      `Eppendorf has an unremovable lid, which is not good for auto sampling`
    },
    { description: 
      `The base of eppendorf is sharp and liquid will not distribute evenly, which is not good for color sensing; while 96-well plates are flat.`
    },
    { description: 
      `The volume of the 96-well plate is small enough for us to put the sample in, while the other plates are too big.`
    },
    { description: 
      `It can contain the most samples in one single plate. In that way, we can reduce the rate of changing new plates.`
    }
]

const Index = styled.div`

    `

const Description = styled.div`
    `

const Microtitration = 
    <div>
        <div>After extracting a sample from the fish farm, the sample will be dripped into the 96 -well plate. In the plate, we put in the mixture of MV-kit buffer for the sample to react. There are several reasons we chose to use 96-well plates instead of eppendorf or 6/24/48 well plate. </div>
        <List>
        { Listcontent.map( (e,index)=>
            <div key={index}>
                <Description>{index}. {e.description}</Description>
            </div>
        )}
        </List>
        <div>[表格]</div>
    </div>


const Lightblock = 
    <div>
        <div>Since we need to use the camera to detect the color changes of each well, we need to create an environment that can make the color as clear as possible.  Therefore, we use 3D printing and polylactic acid (PLA) to print out a platform that blacks out all the area except for the 24 holes of each plate.</div>
        <div>
            <div>[圖片]</div>
        </div>
    </div>

const Movinglid = 
    <div>
        <div>Since the MV-kit buffer and solution might evaporate, we need to construct an auto moving lid. The lid has 48 holes on it, each hole is 9.1 mm next to the well. This lid is connected with a gear and a stepper motor. Every time the sample is being dripped into the well, the motor will move the lid by 9.1 mm. The gear system and the base of the motor are also made by 3D printing. 
             Moreover, we’ve designed the lid to be detachable so that the farmer can remove the lid when they are going to substitute the 96 well plates with a new one every two weeks. </div>
        <div>[圖片]</div>
    </div>


const Data = {
    viewbar: {
        Title: 'Platform',  
        Subtitle: '',
        image: Constant.image.topfull.platform
    },
    content: {
        Introduction: 'The reaction platform mainly consists of three parts: The Microtitration Plate 96-Well, the light blocking base, and auto moving lid.',
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