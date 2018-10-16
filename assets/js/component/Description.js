import React, { Component } from 'react';
import Constant from './Constant';
import Content from './Content';




const Motivation = 
    <div>
        
        <div className='part'>In an island state such as Taiwan, the aquaculture is an important industry. Based on the data from our Fisheries Agency, about one million tons of fisheries are produced in 2017. Among them, 27.5% of production is from fish farming and the total cost is about 30 billion US dollar.[1] However, the infection of aquatic animal has been a critical threat for a long time which leads to inestimable financial damage in Taiwan. Due to the fact reported by UN News indicates that more people than ever before rely on fisheries and aquaculture for food, the infection of aquatic animal exerts a huge impact on the global fishery market. [2] For example, the <span className='special-name'>Vibrio</span>-related infection causes ten million US dollars worth of damage to Taiwan each year. Moreover, an estimated data from the government shows that about 800 to 1,000 hectare of fish farms are infected by <span className='special-name'>Vibrio</span>. Last year a huge outbreak of <span className='special-name'>Vibrio</span>-related infection, <span className='special-name'>Vibrio</span>sis, even caused at least 40% of hard clams to die in Taiwan. In a nutshell, <span className='special-name'>Vibrio</span>-related infection is a serious problem. [3]</div>
        <div className='illustration'>
            <div className='illust-image-wrapper'>
                <img className='illust-image' src={Constant.image.description.infected}/>
            </div>
            <div className='undertext'>
            reference: http://www.zjhys.cn/bhfz/typenews.asp?id=309
            </div>
        </div>
        <div className='part'>To gain more insights into this problem, we have conducted interviews with many fishermen, and we found that when they encounter the situation that fish has died, traditional solution is adopted. They just send the dead fish to the testing institute and dose the prescribed antibiotic into their fishing farms without knowing why. However, the abuse of antibiotics will lead to irreversible harm to the environment. We consider that in order to end up the abuse of antibiotics, it is necessary to know that what kind of bacteria the fish is infected and also the concentration of the bacteria in the water. Therefore, our goal this year is to design a system which is able to dose appropriate and corrected aquacultural drugs according to the concentration of bacteria in the water as well as automatically detect the water condition which can let fishermen have a comprehensive understanding of whether the drug works or not.</div>
    </div>




const Solution =
    <div>
        <div className='part'>Our project can be divided into two parts: one is to dose appropriate and corrected drug, and the other is to automatically detect the water quality and the concentration of specific bacteria. </div>
        <div className='part'>To implement the idea of appropriately dosing aquaculture drug, we design a system based on the model of succession. Our engineered <span className='special-name'>E. coli</span> will detect acyl homoserine lactone (AHL) secreted by <span className='special-name'>Vibrio</span> through quorum sensing and triggers our engineered bacteria to produce an antimicrobial peptide which is able to kill <span className='special-name'>Vibrio</span>. The killing genes are regulated by a riboswitch called small transcription activating RNAs (STAR) system. In comparison to regulatory proteins, STAR shows the advantages of lowering leakage problem, shortening response time, and decreasing the burden of translation. The system regulates the rate of killing <span className='special-name'>Vibrio</span> and <span className='special-name'>E. coli</span> itself in order to keep the population of <span className='special-name'>Vibrio</span> under the pathogenic level and maintain the balance between two bacteria at the same time. Therefore, we can control the <span className='special-name'>Vibrio</span> population and avoid fish and shrimp infection in a sustainable way. </div>
        <div className='part'>In the part of detecting water quality, to get precise concentration of specific bacteria in the water, we design an automatic and real-time detecting device. The current detection methods are time-consuming and furthermore, the water quality monitoring system on the market currently is able to detect physical and chemical indexes only. Therefore, we aim to create an IoT detecting device which can collect the water sample automatically and periodically. Then it is able to detect the concentration of specific bacteria with high specificity. For instance, it can detect the concentration of 100 CFU/mL of <span className='special-name'>Vibrio</span> within 24 hours[4,5], and informs fisherman regularly. It has the potential to reduce the financial loss of our aquaculture industry. </div>
    </div>

const Reference =   
    <div>
        <div className='reference'>1. Ching-Ying Deng, Meei-Mei Chen, Ju-Hsien Peng, Yu-Chiao Yang, Chih-Chien Chang, Hui-Ping Tsai 2014 The Investigation on the Infection of Francisellosis in Farmed Tilapia in Taoyuan and Hsinchu Areas. Journal of Taiwan Fisheries Research,22 (1): 81-91</div>
        <div className='reference'>2. https://news.un.org/en/audio/2014/05/588932, UN NEWS. 19 May 2014 </div>
        <div className='reference'>3. H-J Ju, M-Y Huang, H-C Liu, L-W Tseng, C-L Pan and C-I Chang, 2016 Screening Bacteria Antagonistic toward Aquatic Pathogenic Vibrio spp. from Marine Fishes and Shrimp. Journal of Taiwan Fisheries Research, 24 (1): 37-50</div>
        <div className='reference'>4. Chin-I Chan, et al., 2011, https://www.tfrin.gov.tw/dl.asp?fileName=17111695971.pdf</div>
        <div className='reference'>5. http://www.tfrin.gov.tw/friweb/frienews/enews0118/h1.html</div>
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