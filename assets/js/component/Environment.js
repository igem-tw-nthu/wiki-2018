import React, { Component } from 'react';
import styled from 'styled-components'
import Content from './Content';
import Constant from './Constant';





const Data = {
    viewbar: {
        Title: 'Environment',
        Subtitle: '',
        image: Constant.image.topfull.environment
    },
    content:{
        Introduction: ``,
        parts: [
            
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