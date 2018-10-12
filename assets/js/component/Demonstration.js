import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content'

const Data = {
    viewbar:{
        Title: 'Demonstration',
        Subtitle: '',
        image: Constant.image.topfull.demonstration
    },
    content:{
        Introduction: ``,
        parts: [
            { Title: '',
              Description: ''
            },
            { Title: '',
              Description: ''
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