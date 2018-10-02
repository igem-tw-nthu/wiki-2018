import React, { Component } from 'react';
import ImageBar from './ImageBar'
import Constant from './Constant';

export default class Public extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <ImageBar imgurl={Constant.image.topfull.public}/>
        );
    }
}

