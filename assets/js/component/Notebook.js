import React, { Component } from 'react';
import ImageBar from './ImageBar'

export default class Notebook extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ImageBar imgurl='../assets/images/wetlab/Notebook.top.png'/>
        );
    }
}

