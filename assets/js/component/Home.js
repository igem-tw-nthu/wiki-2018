import React, { Component } from 'react';
import Constant from './Constant'
import styled from 'styled-components'




const TopWrapper = styled.div`
    width: 100%;
    height: fit-content;

     &::before{
        content:"";
        background: linear-gradient(0deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.3));
        position: absolute;
        width: 100%;
        height: 100%;
    }



    `

const Video = styled.video`
    width: 100%;
    position: fixed;
    top: 80px;
    z-index: -1;
    `

const Title = styled.div`
    color: white;
    font-size: 60px;
    color: white;
    position:relative;
    top: 30%;
    width: fit-content;
    font-weight: 600;
    margin: auto;
    width: fit-content;
    ` 

const Text = styled.div`
    width: fit-content;
    margin: auto;
    `

const ContentWrapper = styled.div`
    background-color: white;
    margin-top: 50%;
    padding-bottom: 150px;
    position: relative;
    `

const OverviewImage = styled.img`
    width: 100%;
    ` 

const BottomImage = styled.img`
    width: 200px;
    `

class Home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
          <div>
            <TopWrapper>
                <Video autoPlay muted>
                    <source src={Constant.video.home} type="video/mp4"/>
                </Video>
                    <Title>
                        <Text>NTHU Taiwan</Text>
                        <Text style={{fontSize:'30px'}}>iGEM 2018</Text>
                        <Text style={{fontSize:'50px', marginTop:'40px'}}>Equivibrium</Text>
                    </Title>
            </TopWrapper>
            <ContentWrapper>
                <div style={{width:'55%',margin:'auto'}}>
                    <OverviewImage src={Constant.image.home.overview}/>
                </div>
                <div style={{width:'fit-content',margin:'auto'}}>
                    <a href='http://2018.igem.org/Team:NTHU_Taiwan/Description'>
                    <BottomImage src={Constant.image.home.project}/>
                    </a>
                    <a href='http://2018.igem.org/Team:NTHU_Taiwan/Drylab-Overview'>
                    <BottomImage src={Constant.image.home.drylab}/>
                    </a>
                    <a href='http://2018.igem.org/Team:NTHU_Taiwan/Wetlab-Overview'>
                    <BottomImage src={Constant.image.home.wetlab}/>
                    </a>
                    <a href='http://2018.igem.org/Team:NTHU_Taiwan/Public_Engagement'>
                    <BottomImage src={Constant.image.home.hp}/>
                    </a>
                    <a href='http://2018.igem.org/Team:NTHU_Taiwan/Member'>
                    <BottomImage src={Constant.image.home.team}/>
                    </a>
                </div>
            </ContentWrapper>

          </div>
        )
    }
}


export default Home