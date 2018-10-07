import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter , Route, Link, withRouter } from "react-router-dom";
import { Provider, observer, inject } from 'mobx-react';
import {observable,toJS, reaction} from 'mobx'

import Sidebar from 'react-sidebar'
import SideHeader from './SideHeader'

import Constant from '../Constant'
import Page from '../Page'


const Top = styled.div`
    position: fixed;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: #003366;
    z-index: 1;
    `


const IconWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    height: 40px;
    width: 40px;
    margin-left: 10px;
    margin-right: 5px;
    cursor: pointer;
    z-index: 1;
    `

const BarIcon = styled.div`
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 1px;
    background-color: white;

    &::before, &::after{
        content: '';
        position: absolute;
        border-radius: 1px;
        width: 25px;
        height: 2px;
        background-color: white;
    }

    &::before{
        top: -8px;
    }

    &::after{
        top:8px;
    }
    
    `

const TabName = styled.div`
    font-size: 20px;
    color: white;
    `



const Wrapper = styled.div`
    `

const Team = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 5px;
    `

const Teamicon = styled.img`
    cursor: pointer;
    display: inline-block;
    height: 70px;
    border: 1px solid lightgray;
    border-radius: 50%;
    margin: 0 15px;
    ${ ({active})=> active &&`
        border-color: palevioletred;
        `
    }
    `

const TextBig = styled.div`
    font-size:22px;
    line-height: 26px;
    ` 

const TextSub = styled.div`
    ` 


const Teamtext = styled.div`
    `

const Tab = styled.div`
    height: 65%;
    overflow-y: auto;
    margin-bottom: 20px;
    `

const Bottom = styled.div`
    position: absolute;
    bottom: 0px;
    height: 50px;
    display: flex;
    align-items: center;
    `

const ContactUrl = styled.a`
    text-decoration: none;
`

const ContactImage = styled.img`
    height: 30px;
    padding: 0 5px;
    `


@withRouter
@inject('appState')
class Content extends React.Component{

    constructor(props) {
        super(props)
        this.onTeamIconClick = this.onTeamIconClick.bind(this)
    }

    render() {
        return (
            <Wrapper>
              <Team>
                  <Teamicon src={Constant.image.icon.team}
                    onClick={this.onTeamIconClick}/>
                  <Teamtext>
                    <TextBig>NTHU Taiwan</TextBig>
                    <TextSub>Equivibrium</TextSub>
                  </Teamtext>
              </Team>
              <Tab>
                { Page.link.map(( header,index)=>
                    <SideHeader key={index} headerindex={index} {...header}/>
                )}
              </Tab>
              <Bottom>
                  <ContactUrl href={Constant.url.fb}>
                    <ContactImage src={Constant.image.icon.fb}/>
                  </ContactUrl>
                  <ContactUrl href={Constant.url.ig}>
                    <ContactImage src={Constant.image.icon.ig}/>
                  </ContactUrl>
                  <ContactUrl href={Constant.url.github}>
                    <ContactImage src={Constant.image.icon.github}/>
                  </ContactUrl>
              </Bottom>
            </Wrapper>
        )
    }

    onTeamIconClick(){
        this.props.history.replace(Page.base)
        this.props.appState.open = false;
    }
}


@inject('appState')
@observer
export default class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.onSidebarOpen = this.onSidebarOpen.bind(this)
        this.onBarClick = this.onBarClick.bind(this)
        this.preventBodyScroll = this.preventBodyScroll.bind(this)
    }


    render(){
        return (
            <Sidebar
            sidebar={<Content/>}
            open={this.props.appState.open}
            onSetOpen={this.onSidebarOpen}
            styles={{
                sidebar: {
                    background: "white",
                    width: '280px',
                    padding: '0px 10px',
                    position: 'fixed',
                    // marginTop: '18px'
                }
            }}>
            
            <Top>
            <IconWrapper onClick={this.onBarClick}>
                <BarIcon/>
            </IconWrapper>
            <TabName>{this.props.appState.tabname}</TabName>
            </Top>
            
            </Sidebar>
        )
    }

    componentDidMount(){
        this.preventBodyScroll()
    }

    preventBodyScroll(){
        reaction(()=> this.props.appState.open,
        open=> {
            if(open){
                document.body.style.overflowY ='hidden'
                document.body.style.position= 'fixed'
            }else{
                document.body.style.overflowY='auto'
                document.body.style.position ='initial'
            }
        })
    }


    onSidebarOpen(open){
        this.props.appState.open = open
    }
    
    onBarClick(){
        this.props.appState.open = !this.props.appState.open
    }
}


