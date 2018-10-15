import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content'


const PDF =
    <div style={{padding:'20px', backgroundColor:'lightgray'}}>
        <embed  style={{width:'100%',height:'800px'}} src='https://drive.google.com/file/d/1AUPIcNdju8I6IRvF_1VFVveuY7yBvywj/preview'></embed>
    </div>


const Data={
    viewbar:{
        Title: 'Notebook',
        Subtitle: 'We struggled in lab every single day',
        image: Constant.image.topfull.notebook
    },
    content:{
        parts:[
            { Description : PDF }
        ]
    }

}






export default class Notebook extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

