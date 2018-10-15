import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter , Route, Link, withRouter } from "react-router-dom";
import { Provider, observer, inject } from 'mobx-react';
import AppState from './AppState'
import MediaQuery from 'react-responsive';

import Navigation from './Navigation'
import Bottom from './Bottom'
import Page from './Page'

const appState = new AppState()


const PageWrapper = styled.div`
    font-family: "Bai Jamjuree","Segoe UI","微軟正黑體",sans-serif;
    `
const ContentWrapper =  styled.div`
    position: relative;
    top: 70px;
    ${({mobile})=> mobile && `
        top: 50px;
    `}
    width: 100%;
    z-index: 0;
    `

@withRouter
@inject('appState')
@observer
class Content extends React.Component{
    constructor(props){
        super(props)
        this.addScrollListener = this.addScrollListener.bind(this)
        this.addMediaListener = this.addMediaListener.bind(this)
    }

    render(){
        return(
          <PageWrapper>
            <Navigation/>
            <ContentWrapper mobile={this.props.appState.mobile}>
              { Page.route.map((e,index)=>{
                  return <Route key={index} exact={e.exact} path={e.path} component={()=>e.main}/>
              })}
            </ContentWrapper>
            <Bottom/>
          </PageWrapper>
        )
    }

    componentDidMount(){
        this.addScrollListener()
        this.addMediaListener()
    }

    addScrollListener(){
        window.addEventListener('scroll',()=>{
            appState.scrollY = document.body.scrollTop
        })
    }

    addMediaListener(){
        const mql = window.matchMedia('(max-width: 800px)')
        this.props.appState.mobile = mql.matches
        mql.addListener(e=>{
            this.props.appState.mobile = e.matches
        })
    }

    componentDidUpdate(){
        window.scrollTo(0,0)
    }
}


const App = ()=> (
    <Provider appState={appState} >
      <BrowserRouter>
        <Content/>
      </BrowserRouter>
    </Provider>
)

export default App