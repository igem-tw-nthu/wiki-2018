import React, { Component } from 'react';
import styled from 'styled-components'
import {observable,toJS, reaction} from 'mobx'
import {observer, Provider, inject} from 'mobx-react'
import { withRouter, Route } from "react-router-dom";
import Constant from '../Constant';


const Wrapper = styled.div`
    margin: 0 20px;
    `

const Header = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    background-color: white;
    `

const Title = styled.div`
    font-size: 18px;
    ${ ({active})=> active &&`
        color: palevioletred;
        `
    }
    `

const Toggle = styled.div`
    position: relative;
    transition: 0.4s ease-out;
    max-height: 0px;
    overflow: hidden;
    ${ ({active})=> active &&`
        transition: 0.4s ease-in;
        max-height: 220px;
        `
    }
    `

const Item = styled.div`
    display: block;
    background-color: white;
    padding: 5px 20px;
    cursor: pointer;
    user-select: none;
    `

const ItemName = styled.div`
    ${({match})=> match &&`
        color: palevioletred;
    `
    }
    `

const Pointer = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    margin-right: 5px;
    ${({pointed})=> pointed &&`
        background-color: palevioletred;
    `
    }
    `

const Arrow = styled.div`
    position: relative;
    top: 3px;
    margin-left: auto;
    border: 5px solid transparent;
    border-top-color: black;
    transition: 0.4s ;
    ${ ({active})=> active &&`
        transform: rotate(-180deg);
        `
    }
    `



@withRouter
@inject('appState')
@observer
export default class SideHeader extends Component {
    
    @observable active = false
    

    constructor(props) {
        super(props)
        this.onHeaderClick = this.onHeaderClick.bind(this)
        this.onMainHeaderClick = this.onMainHeaderClick.bind(this)
        this.onItemClick = this.onItemClick.bind(this)
        this.checkMatch = this.checkMatch.bind(this)
    }
    
    render() {
        return (
            Array.isArray(this.props.sublink)
            ? <Wrapper>
                <Header onClick={this.onHeaderClick}>
                    <Title>{this.props.display}</Title>
                    <Arrow active={this.active} />
                </Header>

                <Toggle active={this.active}>
                {this.props.sublink.map( (link,index)=>{
                    return(
                      <Item key={index}
                            onClick={()=>this.onItemClick(index)}>
                            <ItemName match={this.checkMatch(index)}>
                                {link}
                            </ItemName>
                        </Item>
                    )})}
                </Toggle> 
            </Wrapper>
            : <Wrapper>
                <Header onClick={this.onMainHeaderClick}>
                    <Title>{this.props.display}</Title>
                </Header>
              </Wrapper>
        )
    }

    onHeaderClick(){
        this.props.appState.expandindex = this.props.headerindex == this.props.appState.expandindex ? -1 : this.props.headerindex 
    }

    onItemClick(index){
        const url = this.props.fulllink[index]
        this.props.history.replace(url)
        this.props.appState.open = false 
    }

    checkMatch(index){
        return this.props.appState.pointerindex == this.props.headerindex &&
               this.props.appState.focusindex == index 
    }

    onMainHeaderClick(){
        this.props.appState.expandindex = -1
        const url = this.props.fulllink
        this.props.history.replace(url)
        this.props.appState.open = false 
    }


    componentDidMount(){
        reaction(()=> this.props.appState.expandindex,
            expandindex=> { this.active = expandindex == this.props.headerindex},
            {fireImmediately:true})

        reaction(()=> this.props.appState.pointerindex,
            pointerindex=> { this.active = this.props.headerindex == pointerindex },
            {fireImmediately:true})
    }

   

}

