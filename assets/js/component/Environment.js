import React, { Component } from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
    `

const TabName = styled.div`
    `

const Title = styled.div`
    `


class Environment extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                <TabName></TabName>
                <div>
                In order to make sure the observation results are stable and reliable, it’s necessary to control the experiment environment. Besides putting all the instruments inside our acrylic-made box (size: 20*30*35, unit: cm3), temperature and brightness are also important. In this case, we separate the “Environment” part into two sub-titles, temperature, and light. We will introduce more details in the following statements.    
                </div>
                <Title>Discussion</Title>
            </Wrapper>
        );
    }
}

export default Environment;