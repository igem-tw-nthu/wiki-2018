import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content';


const Data = {
    viewbar:{
        Title: 'Collaboration',
        Subtitle: '',
        image: Constant.image.topfull.collaboration
    },
    content:{
        Introduction: '',
        parts:[

        ]
    }
}


class Collaboration extends Component {
    render() {
        return (
          <Content {...Data}/>
        );
    }
}

export default Collaboration;