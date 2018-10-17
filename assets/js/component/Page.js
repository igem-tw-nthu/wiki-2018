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
      main: <Description />
    },
    { path: base+'/Design',
      main: <Design/>
    },
    { path: base+'/Demonstrate',
      main: <Demonstration/>
    },
    { path: base+'/Contribution',
      main: <Contribution/>
    },
   
    // Team
    { path: base+'/Member',
      main: <Member/>
    },
    { path: base+'/Sponsor',
      main: <Sponsor />
    },
    { path: base+'/Attributions',
      main: <Attribution/>
    },

    // Drylab
    { path: base+'/Drylab-Overview',
      main: <DrylabOverview />
    },
    { path: base+'/Platform',
      main: <Platform />
    },
    { path: base+'/Imaging',
      main: <ImageDetection />
    },
    { path: base+'/Sampling',
      main: <Sampling />
    },
    { path: base+'/Environment',
      main: <Environment/>
    },
    { path: base+'/Software',
      main: <Software/>

    },
    { path: base+'/Application',
      main: <Application/>
    },

    
    // Wetlab
    { path: base+'/Wetlab-Overview',
      main: <WetlabOverview/>
    },
    { path: base+'/Model',
      main: <Model />
    },
    { path: base+'/Experiment',
      main: <Experiment />
    },
    { path: base+'/Parts',
      main: <Parts />
    },
  
    { path: base+'/Protocol',
      main: <Protocol/>
    },
    { path: base+'/Notebook',
      main: <Notebook />
    },

    // Human Practice
    { path: base+'/Gold',
      main: <Gold/>,
    },

    { path: base+ '/Education',
      main: <Education />
    },
    { path: base+'/Interview',
      main: <Interview/>
    },
    { path: base+'/Public_Engagement',
      main: <Public/>,
    },
    { path: base+'/Collaborations',
      main: <Collaboration/>,
    },

    //  for judge form
    { path: base+'/Human_Practices',
      main: <Gold/>
    },
    { path: base+ '/Applied_Design',
      main: <Application/>
    },
    { path: base+ '/Hardware',
      main: <DrylabOverview/>
    },
    { path: base+ '/Interlab',
      main: <Contribution/>
    }

]


let Link = [

    { display:'Project',
      sublink: ['Description','Design','Contribution']
    },

    { display: 'Drylab',
      sublink: ['Drylab-Overview','Sampling','Platform','Environment','Imaging','Software','Application','Demonstrate']
    },

    { display: 'Wetlab',
      sublink: ['Wetlab-Overview','Model','Experiment','Parts','Protocol','Notebook']
    },

    { display: 'Human Practice',
      sublink: [ 'Education','Public_Engagement','Interview','Collaborations', 'Gold']
    },
    { display: 'Team',
      sublink: ['Member','Sponsor','Attributions'] 
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