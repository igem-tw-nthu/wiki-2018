import React, { Component } from 'react';
import styled from 'styled-components'

const BackgroundImg = styled.div`
    height: 60%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: center;
    background-color: white;
    /* background-image: linear-gradient(180deg,#43cea2,#185a9d); */


    ${({url})=> url && `
        background-image: 
            linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)),
            url(${url});
        );
    `
    }

 
    `

class ImageBar extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <BackgroundImg {...this.props}/>
        );
    }
}

export default ImageBar;