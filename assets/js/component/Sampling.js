import React, { Component } from 'react';
import styled from 'styled-components';
import Constant from './Constant';
import Content from './Content';



const Wrapper = styled.div`
`

const Data = {
    viewbar: {
        Title: 'Sampling',
        Subtitle: 'Auto sampling with peristaltic pump ',
        image: Constant.image.topfull.sampling
    },
    content: {
        Introduction: ``,
        parts: [
            {

            },
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