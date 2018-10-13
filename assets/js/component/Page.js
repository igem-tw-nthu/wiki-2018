import React, {Component} from "react";

// Links rule
// Mainly Ref. 
//   http://2018.igem.org/Judging/Pages_for_Awards
//   http://2018.igem.org/Competition/Tracks/Hardware              
// egs. 
//   http://2017.igem.org/Team:Heidelberg/For_Judges
//   http://2017.igem.org/Team:NTHU_Taiwan
//   http://2017.igem.org/Team:Munich
//   http://2017.igem.org/Team:TUDelft
 
// Required:
//     Attributions  - brozon
//     InterLab - brozon
//     Collaborations - silver
//     Improve - gold
//     Model - gold
//     Demonstrate - gold

import Home from './Home'

import Description from './Description'
import Design from './Design'
import Demonstration from './Demonstration'
import Contribution from './Contribution'

import Member from './Member'
import Sponsor from './Sponsor'
import Attribution from './Attribution'


import DrylabOverview from "./DrylabOverview"
import Platform from "./Platform"
import ImageDetection from "./ImageDetection"
import Sampling from "./Sampling"
import Environment from "./Environment"
import Software from './Software'
import Application from "./Application"



import WetlabOverview from './WetlabOverview'
import Model from './Model'
import Experiment from './Experiment'
import Parts from './Parts'
import Protocol from './Protocol'
import Notebook from './Notebook'

import Gold from './Gold'
import Education from './Education'
import Interview from './Interview'
import Public from './Public'
import Collaboration from './Collaboration'

import Judge from './Judge'



const base = '/Team:NTHU_Taiwan'

const Route =[

    { path: base,
      exact: true,
      main: <Home name='Home'/>
    },

    // Project
    { path: base+'/Description',
      main: <Description name='Description'/>
    },
    { path: base+'/Design',
      main: <Design name='Design'/>
    },
    { path: base+'/Demonstration',
      main: <Demonstration name='Demonstration'/>
    },
    { path: base+'/Contribution',
      main: <Contribution name='Contribution'/>
    },
   
    // Team
    { path: base+'/Member',
      main: <Member name='Member'/>
    },
    { path: base+'/Sponsor',
      main: <Sponsor name='Sponsor'/>
    },
    { path: base+'/Attribution',
      main: <Attribution name='Attribution'/>
    },

    // Drylab
    { path: base+'/Drylab-Overview',
      main: <DrylabOverview name='Overview'/>
    },
    { path: base+'/Platform',
      main: <Platform name='Platform'/>
    },
    { path: base+'/Imaging',
      main: <ImageDetection name='Imaging'/>
    },
    { path: base+'/Sampling',
      main: <Sampling name='Sampling'/>
    },
    { path: base+'/Environment',
      main: <Environment name='Environment'/>
    },
    { path: base+'/Software',
      main: <Software name="Software"/>

    },
    { path: base+'/Application',
      main: <Application name='Application'/>
    },

    
    // Wetlab
    { path: base+'/Wetlab-Overview',
      main: <WetlabOverview name='Overview'/>
    },
    { path: base+'/Model',
      main: <Model name='Model'/>
    },
    { path: base+'/Experiment',
      main: <Experiment name='Experiment'/>
    },
    { path: base+'/Parts',
      main: <Parts name='Parts'/>
    },
  
    { path: base+'/Protocol',
      main: <Protocol name='Protocol'/>
    },
    { path: base+'/Notebook',
      main: <Notebook name='Notebook'/>
    },

    // Human Practice
    { path: base+'/Gold',
      main: <Gold name='Gold'/>,
    },
    { path: base+ '/Education',
      main: <Education name='Education'/>
    },
    { path: base+'/Interview',
      main: <Interview name='Interview'/>
    },
    { path: base+'/Public',
      main: <Public name='Public'/>,
    },
    { path: base+'/Collaboration',
      main: <Collaboration name='Collaboration'/>,
    },
]


let Link = [

    { display:'Project',
      sublink: ['Description','Design','Contribution']
    },

    { display: 'Drylab',
      sublink: ['Drylab-Overview','Platform','Imaging','Sampling','Environment','Software','Application','Demonstration']
    },

    { display: 'Wetlab',
      sublink: ['Wetlab-Overview','Model','Experiment','Parts','Protocol','Notebook']
    },

    { display: 'Human Practice',
      sublink: [ 'Education','Public','Interview','Collaboration', 'Gold']
    },
    { display: 'Team',
      sublink: ['Member','Sponsor','Attribution'] 
    },

]

Link = Link.map(header=>{
    let fulllink 
    Array.isArray(header.sublink) 
    ? fulllink = header.sublink.map( link=> `${base}/${link}`)
    : fulllink = `${base}/${header.sublink}`
    return {...header,fulllink}
})


export default {
    base: base,
    route: Route,
    link: Link
}