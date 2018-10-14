import React from 'react'
import styled from 'styled-components'
import {observable,toJS} from 'mobx'
import {observer, Provider, inject} from 'mobx-react'
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
    margin: 0 15px;
    padding: 15px 5px;
    ` 

const Header = styled.div`
    display: flex;
    align-items: baseline;
    `

const Title = styled.div`
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    color: white;
    font-size: 18px;
    
    ${({active})=> active && `
        background-color: #003366;
        color: white;
        padding-left: 10px;
        border-radius: 4px 0px 0px 4px;
    `
    }
    
    `

const Arrow = styled.div`
    position: relative;
    top: 3px;
    margin-left: 4px;
    border: 5px solid transparent;
    border-top-color: white;
    transition: 0.4s ;

    `


const Toggle = styled.div`
    position: absolute;
    margin: 10px 0px;
    width: 160px;
    padding: 0px 0px 3px 8px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    border-top: 2px solid #003366;
    border-left: 6px solid #003366; 
    background-color: white;

    display: none;

    ${Wrapper}:hover &{
        display:block;
    }
    `

const Item = styled.div`
    cursor: pointer;
    user-select:none;
    padding: 5px 0px;
    `

@inject('appState')
@withRouter
export default class TopHeader extends React.Component{

    constructor(props){
        super(props)
        this.onItemClick = this.onItemClick.bind(this)
        this.onHeaderClick = this.onHeaderClick.bind(this)
    }    

    render(){
        return(
            Array.isArray(this.props.sublink)
            ? <Wrapper>
                <Header>
                    <Title>{this.props.display}</Title>
                    <Arrow/>
                </Header>
                <Toggle>
                {this.props.sublink.map( (link,index)=>
                    <Item key={index} 
                          onClick={()=> this.onItemClick(index)}>
                        {link}
                    </Item>
                )}
                </Toggle>
              </Wrapper>
            : <Wrapper>
                <Title onClick={this.onHeaderClick}>
                    {this.props.display}
                </Title>
              </Wrapper>
              
            
        )
    }

    onItemClick(index){
        const url = this.props.fulllink[index]
        this.props.history.push(url)
    }

    onHeaderClick(){
        const url = this.props.fulllink
        this.props.history.push(url)
    }
}