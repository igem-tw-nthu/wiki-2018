import React, { Component } from 'react';
import styled from 'styled-components'
import Viewbar from '../Viewbar';




const Wrapper = styled.div`
    `

const ContentWrapper = styled.div`
    width: 45%;
    margin: auto;
    font-size: 20px;
    `

const Part = styled.div`
    margin-bottom: 50px;
    `

const Title = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 600;
    `

const Introduction =styled.div`
    `

const Description = styled.div`
    `



class Content extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        console.log(this.props.content.Introduction)
        return (
            <Wrapper>
                <Viewbar {...this.props.viewbar}/>
                <ContentWrapper>
                <Part>
                    <Introduction>{this.props.content.Introduction}</Introduction>
                </Part>
                { this.props.content.parts.map( (part,index)=>
                <Part key={index}>
                    { part.Title
                      ? <Title>{part.Title}</Title>
                      : null
                    }
                    { part.Description
                      ? <Description>{part.Description}</Description>
                      : null
                    }
                </Part>
                )}
                </ContentWrapper>
            </Wrapper>
        );
    }
}

export default Content;