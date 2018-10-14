import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';




const Motivation = 
    <div>
        <div>
        In an island state such as Taiwan, the aquaculture is an important industry. Base on the data from our Fisheries Agency, about one million tons of fisheries are produced in 2017. Among them, 27.5% of production is from fish farming the total cost is about 30 billion US dollar. However, the infection of aquatic animal has been a critical threat for a long time which leads to inestimable financial damage in Taiwan, thus, exerting a huge impact on the global fishery market. For example, the Vibrio related infection, causing ten million US dollars worth of damage to Taiwan each year. Moreover, an estimated data from government shows that about 800 to 1,000 hectare of fish farms are infected by Vibrio. Last year a huge outbreak of Vibrio-related infection, vibriosis, causing at least 40% of hard clams to die in Taiwan. In a nutshell, Vibrio related infection is an extreme problem in our country. To gain more insight into this problem, we have conducted interviews with many fishermen, and we found that when they encounter the situation that fish has died, traditional solution is adopted. They just send the dead fish to the testing institute and dose the prescribed antibiotic into their fishing farms without knowing why. However, the abuse of antibiotics will lead to irreversible harm to the environment. We consider that in order to end up the abuse of antibiotics, it is necessary to know that what kind of bacteria the fish is infected and also the concentration of the bacteria in the water. Therefore, our goal this year is to design a system which is able to dose appropriate and corrected aquacultural drugs according to the concentration of bacteria in the water as well as automatically detect the water quality which can let fishermen have a comprehensive understanding of whether the drug works or not.        </div>
        <div className='illustration'>
            <div className='illust-image-wrapper'>
                <img className='illust-image' src={Constant.image.description.infected}/>
            </div>
            <div className='undertext'>
            reference: http://www.zjhys.cn/bhfz/typenews.asp?id=309
            </div>
        </div>
    </div>




const Solution =
    <div>

        <div className='part'>Our project can be divided into two parts: one is to dose appropriate and corrected drug, and the other is to automatically detect the water quality and the concentration of specific bacteria. </div>
        <div className='part'>To implement the idea of appropriately dosing aquacultural drug, we design a system based on the model of succession. Our engineered E. coli will detect acyl homoserine lactone (AHL) secreted by Vibrio through quorum sensing and triggers our engineered bacteria to produce an antimicrobial peptide which is able to kill Vibrio. The killing genes are regulated by a riboswitch called small transcription activating RNAs (STAR) system. In comparison to regulatory proteins, STAR shows the advantages of lowering leakage problem, shortening response time, and decreasing the burden of translation. The system regulates the rate of killing Vibrio and E. coli itself in order to keep the population of Vibrio under the pathogenic level and maintain the balance between two bacteria at the same time. Therefore, we can control the Vibrio population and avoid fish and shrimp infection in a sustainable way. Moreover, in order to verify our succession model, we design a bioreactor which is low-cost and is a real-time O.D. measuring device. It is able to track two engineered germs at the same time by detecting two excitation light bands and to calculate their concentrations separately.</div>
        <div className='part'>On the part of detecting water quality, precisely the concentration of specific bacteria in the water, we design an automatic and real time detecting device. The current detection methods are time-consuming and furthermore, the water quality monitoring system on the market currently is able to detect physical and chemical indexes only. Therefore, we aim to create an IoT detecting device which can collect the water sample automatically and periodically. Then it is able to detect the concentration of specific bacteria with high specificity. For instance, it can detect the concentration of 100 CFU/mL of Vibrio within 24 hours. It informs fisherman regularly and it has the potential to reduce the financial loss of our aquaculture industry. </div>
    </div>

const Reference =   
    <div>
        <div className='innerpart'>
        1. Ching-Ying Deng, Meei-Mei Chen, Ju-Hsien Peng, Yu-Chiao Yang, Chih-Chien Chang, Hui-Ping Tsai (2014) The Investigation on the Infection of Francisellosis in Farmed Tilapia in Taoyuan and Hsinchu Areas. Journal of Taiwan Fisheries Research,22 (1): 81-91
        </div>
        <div className='innerpart'>
        2. C. Y. Chang, et al. (2016) Screening Bacteria Antagonistic toward Aquatic Pathogenic Vibrio spp. from Marine Fishes and Shrimp. Journal of Taiwan Fisheries Research, 24 (1): 37-50
        </div>
        <div className='innerpart'>
        3. H. C. Chu, et al. (2011) Development of Multiple Vibrio Detecting Kit. Special Report from Fisheries Research Institute. 034, 36-39
        </div>
    </div>


const Data = {
    viewbar: {
        Title:'Description',
        Subtitle: 'A solution to the problem of the abuse of antibiotics in aquaculture',
        image: Constant.image.topfull.description
    },
    content: {
        Introduction: ``,
        parts: [
            { Title: 'Motivation',
              Description: Motivation
            },
            { Title: 'Solution',
              Description: Solution
            },
            { Title: 'Reference',
              Description: Reference
            }
        ]
    
    }
}


class Description extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default Description;