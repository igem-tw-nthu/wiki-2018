import React, { Component } from 'react'
import styled from 'styled-components'
import Costant from './Constant'

import Constant from './Constant';

const Wrapper = styled.div`

    `

const Title = styled.div`
    `


const CardWrapper = styled.div`
    `

const Name = styled.div`

    `

const Description = styled.div`
    `



class Attributions extends Component {
    render() {
        return (
            <Wrapper>       
                <Title>Special Thanks</Title>
                <CardWrapper>
                    <Name>Prof. Ya-Tang Yang</Name>
                    <Description>Prof. Cheng provided us some advice about our presentation and take care of all of us in Boston.</Description>
                </CardWrapper>            
            </Wrapper>


        )
    }
}

export default Attributions;