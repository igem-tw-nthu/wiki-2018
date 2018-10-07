import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {observable,toJS, reaction, autorun} from 'mobx'
import {observer, Provider, inject} from 'mobx-react'
import Swiper from 'react-id-swiper'


const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    `

const Image = styled.div`
    height: 100%;
    background-image: url(${props=> props.backimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `

const Text = styled.div`
    position: absolute;
    z-index: 1;
    font-size: 100px;
    bottom: 0px;
    color: white;
    `

@inject('appState')
@observer
class Introduction extends React.Component{
    appState = this.props.appState

    constructor(props){
        super(props)
    }

    render(){
        const parallaxOnScroll = {
            transform: `translateY(${-this.appState.scrollY}px)`
        }

        return(
            <Text style={parallaxOnScroll}>
                {this.props.title}
            </Text>
        )
    }
    
}

@inject('appState')
@observer
class Gallery extends React.Component{

    appState = this.props.appState

    constructor(props){
        super(props)
    }


    render(){
        const params = {
            autoplay:{
                delay: 5000,
                disableOnInteraction:false
            },
            effect: 'fade',
        };

    
        return(
            <Wrapper>
            <Swiper {...params}>
               <div>
                 <Introduction title='Cool'/>
                 <Image backimg='../assets/images/hp/fig.1.1.png'/>
               </div>
               <div>
                 <Introduction title='Wow' />
                 <Image backimg='../assets/images/hp/fig.1.2.png'/>
               </div>
               <div>
                 <Introduction title='Yumm'/>
                 <Image backimg='../assets/images/hp/fig.1.3.png'/>
               </div>
               <div>
                 <Introduction title='Yaa'/>
                 <Image backimg='../assets/images/hp/fig.1.4.png'/>
               </div>
            </Swiper>
            </Wrapper>
        )
    }
}


const Description = ()=>{
    const Content = styled.div`
        position: absolute;
        top: calc(100% - 50px);
        width: 100%;
        padding: 500px 0px;
        background-color: white;
        `

    return(
        <Content>
           
        </Content>
    ) 
}

class Home extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
          <div>
              {/* <Gallery/> */}
          </div>
        )
    }
}


export default Home