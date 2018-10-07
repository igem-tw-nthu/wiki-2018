import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import {observable,toJS, reaction} from 'mobx'
import {observer, Provider, inject} from 'mobx-react'
import { withRouter } from "react-router-dom";

import Topbar from './Topbar'
import Sidenav from './Sidenav'
import Page from '../Page';


@withRouter
@inject('appState')
@observer
export default class Navigation extends React.Component{
    
    //😲 mobx problem
    //   If you do not claim the variable here
    //   they will not detect and render while attr change

    // do not access to the varibale itself, access to its parent object insted
    // or you will get a constant!?

    constructor(props){
        super(props)
        this.onMatchReaction = this.onMatchReaction.bind(this)
    }

    render(){
      return(
        this.props.appState.mobile
        ? <Sidenav/>
        : <Topbar/>
      )
    }

    componentDidMount(){
      this.onMatchReaction()
    }

    onMatchReaction(){
      reaction(()=> this.props.location.pathname,
      path=> {
        // if match home 
        if(Page.base == path){
            this.props.appState.pointerindex = -1
            this.props.appState.tabname = 'Home'
        }
        else{
            Page.link.map( ({fulllink,sublink},index)=>{  
            // if match tab
            if(fulllink.includes(path)){
                this.props.appState.pointerindex = index
                const focusindex = fulllink.indexOf(path)
                this.props.appState.focusindex = focusindex
                this.props.appState.tabname = Array.isArray(sublink) 
                  ?  sublink[focusindex]
                  :  sublink
            }
          })
        }
        // console.log(this.props.appState.pointerindex,this.props.appState.focusindex)
      },{fireImmediately:true})
    }
}
