import React, { Component } from 'react';
import Content from './Content';
import Constant from './Constant';


const Table =
    <div>
        <table className='table'>
            <tbody>
            <tr className='tablehead'> 
                <th className='tablehead'>Biobrick</th>
                <th className='tablehead'>Type</th>
                <th className='tablehead'>Name</th>
                <th className='tablehead'>Description</th>	
            </tr>
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774000" target="_blank">BBa_K2774000</a>
                </th>
                <td className='tabledata'>Composite</td>
                <td className='tabledata'>AHL reporter</td>
                <td className='tabledata'>pLux with GFP</td>	
            </tr>
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774001" target="_blank">BBa_K2774001</a>
                </th>
	            <td className='tabledata'>Basic</td>
    	        <td className='tabledata'>tsRNA</td>
        	    <td className='tabledata'>A small non-coding RNA which inhibits cell growth.</td>
            </tr>
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774002" target="_blank">BBa_K2774002</a>
                </th>	
                <td className='tabledata'>Composite</td>	
                <td className='tabledata'>Consensus AHL generator</td>
                <td className='tabledata'>AHL generator with Anderson promoter which can constantly generate 3OC6HSL</td>
            </tr>
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774003" target="_blank">BBa_K2774003</a>
                </th>
                <td className='tabledata'>Composite</td>	
                <td className='tabledata'>Consensus AHL reporter</td>	
                <td className='tabledata'>AHL generator with Anderson promoter which can constantly generate 3OC6HSL and mRFP</td>
            </tr>
            <tr className='tablehead'>             
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774004" target="_blank">BBa_K2774004</a>
                </th>
                <td className='tabledata'>Composite</td>	
                <td className='tabledata'>Inducible AHL generator</td>	
                <td className='tabledata'>IPTG inducible 3OC6HSL generator</td>
            </tr>
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774005" target="_blank">BBa_K2774005</a>
                </th>	
                <td className='tabledata'>Composite</td>	
                <td className='tabledata'>Inducible AHL generator with mRFP</td>	
                <td className='tabledata'>IPTG inducible 3OC6HSL generator with mRFP</td>
            </tr>         
            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774006" target="_blank">BBa_K2774006</a>
                </th>	
                <td className='tabledata'>Composite</td>	
                <td className='tabledata'>Endolysin with GFP</td>
                <td className='tabledata'>Growth inhibition protein combines with GFP but without promoter</td>
            </tr>

            <tr className='tablehead'> 
                <th className='tablehead'>
                    <a href="http://parts.igem.org/Part:BBa_K2774007" target="_blank">BBa_K2774007</a>
                </th>	
                <td className='tabledata'>Composite</td>
                <td className='tabledata'>Inducible Endolysin with GFP</td>	
                <td className='tabledata'>IPTG inducible growth inhibition protein with GFP</td>
            </tr>
            </tbody>
        </table>
    </div>


const Data={
    viewbar: {
        Title: 'Parts',
        Subtitle: 'The basis of everything',
        image: Constant.image.topfull.parts
    },
    content:{
        Introduction: `We designed and constructed many basic parts for establishing our functional composite parts.`,
        parts: [
            { Description: Table }
        ]
    }
}

export default class Parts extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

