import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';

const Data = {
    viewbar:{
        Title: 'Model',
        Subtitle: '',
        image: Constant.image.topfull.model
    },
    content:{
        Introduction: '',
        parts:[
        ]
    }
}



class Model extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Model;