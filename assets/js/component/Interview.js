import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant';
import Content from './Content';


const Data = {
    viewbar: {
        Title: 'Interview',
        Subtitle: '',
        image: Constant.image.topfull.interview
    },
    content:{
        Introduction: ``,
        parts: [
            { Title: '',
              Description: ''
            }
        ]
    }
}



class Interview extends Component {
    render() {
        return (
           <Content {...Data}/>
        );
    }
}

export default Interview;