import React, { Component } from 'react';
import Constant from "./Constant"
import Content from "./Content"



const Page =
    <div style={{padding:'20px', backgroundColor:'lightgray'}}>
        <embed  style={{width:'100%',height:'800px'}} src='https://drive.google.com/file/d/1ATZZaWsNO_d8iyaQgqDZaUll_uk9C4X6/preview'></embed>
    </div>


const Data = {
    viewbar: {
        Title: 'Protocol',
        Subtitle : 'The way guide us to success',
        image: Constant.image.topfull.protocol
    },
    content: {
        Introduction:'',
        parts:[
            { Description : Page }
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

