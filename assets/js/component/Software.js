import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';






const Data = {
    viewbar: {
        Title:'Software',
        Subtitle: '',
        image: Constant.image.topfull.software
    },
    content: {
        Introduction: ``,
        parts: [
            
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