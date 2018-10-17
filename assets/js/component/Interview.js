import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from './Constant';
import Content from './Content';



const ResearchInstitute =
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.interview.research}/>
        </div>
        <div>
            Fisheries Research Institute, COA, which is the government agency offers fish farmers to test the pathogen of fish and also, doing some researches on aquatic organisms as well. Deputy director of COA, C.I. Chang, who is a master in marine biology, recently did lots of researches on aquatic animal and pathogen, creating the MV-kit as well. The kit which function is to test the number of Vibrio in the water. And of course, FRI is the closest department between the local fish farmers and the public. As a result, we decided to visit him to get more helpful information and suggestions for our project. During our in-depth talk, we knew more about the Vibrio and, our core of the automated device, 
             <a href='http://2018.igem.org/Team:NTHU_Taiwan/Drylab-Overview'>ACE</a>. For example, after knowing the detailed information about the basic characteristics of Vibrio and the mechanism of MV-kit, making us want to combine the kit with our device and if it comes true, the device will be powerful. In the end, deputy director also gave us a few useful, potential advice and questions between our device and the kit. These feedbacks inspired us pretty much, such as whether our device would be influenced by the precipitation or not, or do we need some kinds of membrane to filter the aquatic sample or not, and in order to maintain the integrity and accuracy of our device, we have to test the efficiency of MV-kit in different environments and to find the simplest way that fish farmers can easily use. Nicely, the deputy director offering the plate of Vibrio harveyi and MV-kit for free in order to encourage us to make our experiment more complete.
        </div>
    </div>


const Fisherman =
    <div>
        <div>In order to improve our project, we need to gain as much feedback as possible from the potential users; therefore, we’ve visited local fisherman in Taiwan, of which we can categorize into ecological and traditional breeding fish farmers.</div>
        <div className='illustration'>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/NwxEiwLPtb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>


const Tradition=
    <div>
        <div className='illustration'>
            <img className='illust-image' src={Constant.image.interview.tradition_1}/>
        </div>

        <div>
            <div>In addition to visiting the ecological breeding farmers, we visited traditional fishermen in Kaohsiung and Chiayi, Mr. Chiu and Mr. Jian. They gave us some useful information, so we can improve our project more further.</div>
            
            
            <div className='part'>
                <div className='part-title'>Mr. Chiu and Mr. Jian</div>
                
                <div className='innerpart'>Overall, they usually wait until the fish get sick and take them to the inspection center. If we can let them know about the condition of bacteria beforehand, they might take precautions, such as cleaning the water or adding the active powder to improve water quality and minimize the damage.</div>
                <div className='innerpart'>When asking about what problem is the most crucial one they are facing, they’ve mentioned the uncertainty of electricity.  If the machine shut down or in a dangerous condition, sending a notification to farmers is essential. They also mentioned that adding the function of notifying farmer by message might be more practical than the smartphone application or the notification bar since farmer might be the elderly who do not use a smartphone. In light of their suggestions, we found the Chunghwa Telecom to seek for future collaboration. They told us that as long as we apply for a SIM card and a phone number, this kind of function can easily be done.</div>
                <div className='innerpart'>To sum up, feedbacks and information are listed below. Plenty of them has greatly improved our projects:</div>
            
                <div className='innerpart'>
                    <div>1. Their working time is usually between 2 a.m. to 11 a.m., so they suggest us to test the sample during this time (since MV-kit needs 12~24 hr. to react completely).</div>
                    <div>2. They introduce the “TCBS” method: a common way to detect Vibrio sp. in traditional fish farm. This method need 1~2 day to complete.</div>
                    <div>3. Add more features to ACE machine, e.g. water quality test (pH, NO3-, NO2-), other kit test (virus, fish parasite), and black out reminder.</div>
                    <div>4. They recommend us to use text messages to be the notification of ACE machine. Because some of the traditional fishermen do not use smartphones.</div>
                    <div>5. They recommend us to cooperate with fishermen who feed grouper or eel.</div>
                    <div>6. As a traditional fisherman, they think our device has great potential.</div>
                </div>
            </div>
        </div>
    </div>
    


const Eco = 
    <div>

        <div className='part'>
            <div className='part-title'>Mr. Tsai Hung-Jing’s Fish Farm</div>
            <div>
                <div className='innerpart'>Before deciding which fish farm to visit, we looked for information on the Internet and finally found an interview published by CommonWealth Magazine, which is a famous magazine in Taiwan. The article showed that how successfully Mr. Tsai uses biological feed - water flea to take care of his shrimps and to make some profit. This idea of substituting chemical feed into water flea, an eco-friendlier one, matched the concept of iGEM. So, we called him and arranged the visit time without hesitation.</div>
                <div className='innerpart'>Mr. Tsai was nice and friendly, he not only introduced his fish farm in such a detailed way but also answered all of our questions. He mentioned that the way he used to prevent Vibrio is to make the environment beneficial for good germs, which occupies the environment of the Vibrio, leaving no spaces for them to grow. He pointed out that people often uses ClO2 to kill Vibrio is unable to eradicate the problem completely. Once the pollutants are in, Vibrio will grow again. Consequently, we introduced our method to him and he sounded satisfied and looked forward to our final result. He also gave us some positive feedback toward our ACE. He said that if our service cost can be as low as 8,000 NT dollars, it will have a strong advantage and the market acceptance will be high since the price of the general detection devices need to be up to ten thousand NT dollars.</div>
                <div className='innerpart'>The interview with Mr. Tsai really cheered us up, he let us understand the thing we do might help them in a practical way. Even though we went back to school, he still sent messages to encourage us.</div>
            </div>                
            <div className='illustration'>
                <img className='illust-image' src={Constant.image.interview.eco_1 }/>
            </div>
        </div>
        
        <div className='part'>
            <div className='part-title'>Qiujia Aquaculture in Chiayi County</div>
            <div>
                <div className='innerpart'>Qiujia Aquaculture has been established for 50 years, the main breed they sell are milkfish and shrimps. The reason why we wanted to visit them was that they refuse to use any of the chemical agents or drug and it triggered our curiosity, how do they make it?</div>
                <div className='innerpart'>By actually visiting them on the ground, we discovered that they do not use any chemical medicine or drug to kill bacteria, instead, they use Bacillus subtilis to compete with Vibrio. We surprisingly found out this kind of ecological competence is similar to what our wet lab is trying to mimic. Though adding good germs can’t guarantee no fish will be infected, they believed doing so was far better than adding artificial chemicals which have huge uncertainty to humankind. When asking about whether they would detect the concentration of Vibrio, they told us the current method they use to detect Vibrio is coating the plate, which is not efficient and not so accurate.</div>

                <div className='innerpart'>Furthermore, they provided us with pieces of advice and feedback regarding our Automatic Color-Detecting Examiner (ACE):</div>
                <div className='innerpart'>
                    <div>1.ACE needs to be equipped with high accuracy, shutdown notification, and self-calibration.</div>
                    <div>2. If they knew the concentration of Vibrio earlier, they can take actions to prevent the Vibrio from growing too much beforehand, such as adding Bacillus subtilis.</div>
                    <div>3. Since the growing time of Vibrio to be pathogenic is way longer than one day, a period of sampling doesn’t need to be as frequent as 1 hour, but one day. </div>
                    <div>4. They suggested us to target indoor breeding customers, since that if the device is set outdoors, it may be easily broken down. Moreover, fish with high economic value bred indoor might be more fragile than the outdoors.</div>
                </div>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.interview.eco_2}/>
                </div>
                <div>After considering their suggestions, we decided to extend the sampling period to 12 hours, adding the fool-proof design, such as that if the camera shut down or cannot be connected, it will return a “no camera” sign to our application.</div>
            </div>                
        </div>

    </div>



const Aquarium =
    <div>
        <div className='part'>
            <div>
                <div className='part-title'>
                    <a href='http://dataweb.nmmba.gov.tw/ResearchMemberDetail.aspx?CondID=bfcdc17d-da5f-48f8-9af8-819a3376101a'>Dr. Jimmy Kuo</a>
                </div>
                Dr. Jimmy Guo, a vice researcher of the national museum of marine biology and aquarium, have done many types of research of Vibrio in the aquarium. He first shared with us how he made the research on Vibrio and explained why the growth curve of Vibrio was so strange. The reason is that Vibrio is a special species which is different from other normal bacteria. Vibrio will be dormant and make its metabolism disordered when stored at low temperature. Therefore, if we want to get the expectative results, we should culture fresh Vibrio rather than take one from the refrigerator.
            </div>
            <div>
                Besides the advice for the wet lab, Dr. Guo also gave us some suggestions to our hardware. He recommended that we could use the battery as our electric power source and thus, avoiding the loss of results from the blackout. Additionally, our device should calibrate regularly, or the results would be deviant. Finally, since our device could detect frequently, we could target on the customers cultivating remunerative aquatic agriculture.
            </div>
            <div>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.interview.aqua_1}/>
                </div>
            </div>

        </div>

        <div className='part'>
            <div>
                <div className='part-title'>
                    <a href='https://www.nmmba.gov.tw/research/RMenber_Content.aspx?n=291A05EEDDA1D4C4&sms=CF7FFA69EB91FF61&s=6A6B57F5FE966020'>Dr. Ming-An Tsai </a>
                </div>
                Dr. Ming-An Tsai, an assistant researcher in the national museum of marine biology and aquarium, is interested in doing research on diseases of aquatic animals. Fortunately, Dr. Tsai’s lab is also doing some Vibrio-detecting experiment, so we first exchanged some ideas about Vibrio experiments. After introducing our project, Dr. Tsai gave us some important advice. First of all, he suggested us that we should ensure which way we would use to avoid bacterial diseases, killing Vibrio or inhibiting its growth. Additionally, he reminded us that we should not kill all the Vibrio in the water, or we might destroy the ecological balance. Finally, he gave us a crucial reference that if the concentration of Vibrio in the water goes beyond 104 CFU/mL, it would be more infectious. This data is a vital reference not only in our wet lab but also in our dry lab.
            </div>
            <div>
                <div className='illustration'>
                    <img className='illust-image' src={Constant.image.interview.aqua_2}/>
                </div>
            </div>
        </div>
    </div>

const Data = {
    viewbar: {
        Title: 'Interview',
        Subtitle: 'Visited the research institute, fishing farm, and aquarium',
        image: Constant.image.topfull.interview
    },
    content:{
        Introduction: `Our project is an interdisciplinary work which is so comprehensive and complete to makes it possesses a potent potential to practice in the real world. Based on this advantage, to navigate our project toward a suitable direction to either meet the true demand and solve real problem is quite essential. At the beginning, we visited Deputy director of Fisheries Research Institute. He gave us some advice on how to start our project. Then, we had conducted interviews with fishermen in Taiwan, visited the fishing farm with them and received countless useful information about how to alter our design to fit their demand and improve the latest solution they adopt to combat bacterial infection. Moreover, with the advice given by researchers from national museum of marine biology and aquarium, we gained much more practical perspective on what’s the pros and cons of our solution and how we can lower the risk that will harm the environment. With their help, we have achieved the core value of human practice: know who need, find what they need and meet their need.        `,
        parts: [
            { Title: 'Fisheries Research Institute, COA ',
              Description: ResearchInstitute
            },
            { Title: 'Interview with Fish Farmer',
              Description: Fisherman
            },

            { Title: 'Ecological Breeding',
              Description: Eco
            },
            { Title: 'Traditional Fishermen',
              Description: Tradition
            },

            { Title: 'National Museum of Marine Biology and Aquarium',
              Description: Aquarium
            },
        ]
    }
}



class Interview extends Component {
    render() {
        return (
           <Content {...Data}/>
        );
    }
}

export default Interview;