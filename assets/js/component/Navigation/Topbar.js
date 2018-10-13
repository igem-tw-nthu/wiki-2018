import React from 'react'

import styled from 'styled-components'

import {observable,toJS} from 'mobx'
import {observer, Provider, inject} from 'mobx-react'
import { withRouter,Route } from "react-router-dom";

import Constant from '../Constant'
import TopHeader from './TopHeader'
import Page from '../Page';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    top: 0px;
    align-items: center;
    height: 70px;
    min-width:fit-content;
    width:100%;
    background-color: white;
    background-color: #003366 ;
    /* background-color: steelblue ; */
    /* background-color: dodgerblue; */
    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); */
    z-index: 1;
    transition: 0.3s;
    
    `

const HeaderWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    height: fit-content;
    margin-left: auto;
    margin-top: 12px;
    margin-right: 50px;
    `

const Icon = styled.img`
    height: 80px;
    padding: 5px;
    position: absolute;
    top: 20px;
    margin-left: 30px;
    margin-right: 10px;
    background-color: white;
    border-radius: 20%;
    /* border-radius: 50%; */
    box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    `


@withRouter
@inject('appState')
export default class TopBar extends React.Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <Wrapper>
                <Icon src={Constant.image.icon.team} 
                    onClick={()=>{this.props.history.replace(Page.base)}}/>
                <HeaderWrapper>
                    { Page.link.map((header,index)=>{
                        return <TopHeader key={index} {...header}/>
                    })}
                </HeaderWrapper>
            </Wrapper>
        )
    }

}
