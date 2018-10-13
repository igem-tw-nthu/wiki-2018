import React, { Component } from 'react';
import Constant from './Constant'
import Content from './Content'


const PDF =
    <div>
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

