import React, { Component } from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 500px;
    width: 90%;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 100px;
    /* background-color: whitesmoke; */
    `

const TitleWrapper =styled.div`
    margin: auto;
    `


const Title = styled.div`
    font-size: 60px;
    margin: auto;
    color: #003366;
    font-weight: 700;
    margin-bottom: 20px;
    `

const Subtitle = styled.div`
    font-size: 30px;
    color: 003366;
`


const ImageWrapper = styled.div`
    height: 500px;
    width: fit-content;
    /* clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%); */
    margin: auto;
    `

const ViewImage = styled.img`
    height: inherit;
    width: 750px;
    background-color: whitesmoke;
    `

const Underimage = styled.div`
    color: gray;
    `




class Viewbar extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <Wrapper>
                <TitleWrapper>
                    <Title>{this.props.Title}</Title>
                    <Subtitle>{this.props.Subtitle}</Subtitle>
                </TitleWrapper>
                <ImageWrapper>
                    <ViewImage src={this.props.image}/>
                    <Underimage>{this.props.Underimage}</Underimage>
                </ImageWrapper>
             </Wrapper>
             
        );
    }
}

export default Viewbar;