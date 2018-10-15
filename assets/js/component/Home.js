import React, { Component } from 'react';
import Constant from './Constant'






class Home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
          <div>
             <video className='illust-image' autoPlay>
                <source src={Constant.video.home} type="video/mp4"/>
            </video>
          </div>
        )
    }
}


export default Home