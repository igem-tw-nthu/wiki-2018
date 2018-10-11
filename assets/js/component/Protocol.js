import React, { Component } from 'react';
import Constant from "./Constant"
import Content from "./Content"


const Data = {
    viewbar: {
        Title: 'Protocol',
        Subtitle : 'The way guide us to success',
        image: Constant.image.topfull.protocol
    },
    content: {
        Introduction:'',
        parts:[
            {
                
            }
        ]
    }
}


export default class Protocol extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

