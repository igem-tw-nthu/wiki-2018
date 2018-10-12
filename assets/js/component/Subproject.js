import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';


const Data = {
    viewbar: {
        Title: 'Subproject',
        Subtitle: '',
        image: Constant.image.topfull.subproject
    },
    content:{
        Introduction: ``,
        parts:[
            { 

            }
        ]
    }
}


class Subproject extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Subproject;