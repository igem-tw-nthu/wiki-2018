import React, { Component } from 'react';

import ImageBar from './ImageBar';
import Constant from './Constant'

class Collaboration extends Component {
    render() {
        return (
            <ImageBar url={Constant.image.topfull.collaboration}/>
        );
    }
}

export default Collaboration;