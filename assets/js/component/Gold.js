import React, { Component } from 'react';
import Content from './Content';
import Constant from './Constant'


const Data ={
    viewbar: {
        Title: 'Gold',  
        Subtitle: '',
        image: Constant.image.topfull.gold
    },
    content:{
        parts:[

        ]
    }
}




class Gold extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Gold;