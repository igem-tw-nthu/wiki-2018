import React, { Component } from 'react';
import ImageBar from './ImageBar'

export default class Parts extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ImageBar imgurl='../assets/images/wetlab/Parts.top.png'/>
        );
    }
}

