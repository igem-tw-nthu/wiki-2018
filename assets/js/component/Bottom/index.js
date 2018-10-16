import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Constant from '../Constant';


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #003366;
    display: flex;
    align-items: center;
    `
const Contact = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;
    `

const Text = styled.div`
    color: white;
    margin-right: 50px;
    font-size: 25px;
    `

const ContactUrl = styled.a`
    text-decoration: none;
`

const Icon = styled.div`
    cursor: pointer;
    font-size: 40px;
    margin-right: 30px;
    color: whitesmoke;
    `


class Bottom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Wrapper>
                <Contact>
                    <Text>NTHU Taiwan</Text>
                    <ContactUrl href={Constant.url.fb}>
                        <Icon className="fab fa-facebook" />
                    </ContactUrl>
                    <ContactUrl href={Constant.url.ig}>
                        <Icon className="fab fa-instagram"/>
                    </ContactUrl>
                    <ContactUrl href={Constant.url.github}>
                        <Icon  className="fab fa-github"/>
                    </ContactUrl>
                </Contact>
            </Wrapper>
        )
    }
} 

export default Bottom