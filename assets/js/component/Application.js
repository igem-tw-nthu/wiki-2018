import React, { Component } from 'react';
import Content from './Content';
import Constant from './Constant';


const Data = {
    viewbar: {
        Title: 'Application',
        Subtitle: 'Whatever',
        image: Constant.image.topfull.application
    },
    content: {
        Introduction: ``,
        parts:[
            
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