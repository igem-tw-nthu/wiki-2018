import React, { Component } from 'react';
import styled from 'styled-components'
import Constant from 'Constant'
import { inject, observer } from 'mobx-react';


const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    overflow-x: hidden;
    ${({mobile})=> mobile &&`
        width: 95%;
    `
    }
    `

const Title = styled.div`
    font-size: 35px;
    color: #003366;
    margin-bottom: 30px;
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(360px,1fr));
    grid-gap: 30px;
    ${  ({mobile})=> mobile &&`
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    `
    }
    `

const Card = styled.div`
    vertical-align: top;
    height: 630px;
    display: inline-block;

    ${ ({mobile}) => mobile &&`
        height: fit-content;
        margin-bottom: 80px;
    `
    }
    `

const HeadWrapper = styled.div`
    width: 220px;
    margin: auto;
    margin-bottom: 10px;
    `

const Head = styled.img`
    width: inherit;
    `


const Name = styled.div`
    width: fit-content;
    margin: auto;
    font-size: 20px;
    color: steelblue;
    `

const Department = styled.div`
    /* break line by \n */
    white-space: pre-line;
    width: fit-content;
    margin: 6px auto;
    `

const Position = styled.div`
    `

const Below = styled.div`
    margin: auto;
    width: 360px;

    ${({mobile})=> mobile &&`
        width: 260px;
    `
    }

`

const Description = styled.div`
    `

const Email = styled.div`
    margin-top: 5px;
    color: steelblue;
    `


const Contact = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    `


const Linker = styled.a`
    text-decoration: none;
    margin-right: 12px;
    `


const FontIcon = styled.div`
    font-size: 28px;
    color: lightsteelblue;
    `

const Pokemon = styled.img`
    height: 30px;
    `

const Bug = styled.img`
    height: 50px;
    `

const Content = [
    { name: 'Max Wang',
      image: `${Constant.image.member.Max_Wang}`,
      position: 'Team Leader',
      department: `Life Science/ Electrical Engineering`,
      description: `Max, who majors in life science and double-majors in electrical engineering in NTHU, Taiwan. Outside of iGEM, he is now joining in an immunology laboratory and doing some researches about immune checkpoints, PD-1. Apart from the university studies, he is also active in diverse activities. For example, he has participated in several Chinese calligraphy contests in Taiwan and won many prizes.`,
      contact : {
          facebook: 'https://www.facebook.com/tysh0106',
          linkedin: 'https://www.linkedin.com/in/tysh0106/'
      }
    },

    { name: 'Teng-Yen Lin',
      image: `${Constant.image.member.Teng_Yen_Lin}`,
      position: 'Drylab leader',
      department: 'Materials Science and Engineering',
      description: 'Frank is a master student of department of materials science and engineering, NTHU. He is a dry lab leader and he plays a crucial role in our team. He shows responsibility in our project, leading dry lab to make our devices possible. Apart from the iGEM competition, he is researching about stem cells and bioengineering.'
    },
  
    { name: 'Xin-Fang (Tina) Wu',
      image: `${Constant.image.member.Tina_Wu}`,
      position: 'HP Leader',
      department: 'Electrical Engineering',
      description: `This is Tina’s first time to join iGEM. Most of her time was spent on executing projects from Human Practice team. For her, seeing the whole project is going beyond the lab is really amazing! Outside iGEM, she majors in electrical engineering and she has interests in so many things such as biotech and  entrepreneurship. She had worked as an intern at an accelerator focusing on the healthcare industry. Recently she is conducting research on finding how signals are transmitted in drosophila's olfactory neuron system. Also, Opera and EDM are the two music genres she loves most : )`,
      contact: {
          facebook: 'https://www.facebook.com/tinawu2406',
          linkedin: 'https://www.linkedin.com/in/xin-fang-wu/',
          email: 'tinawu2406@gmail.com'
      }
    },

    { name: 'Ruby Chan',
      image: `${Constant.image.member.Ruby_Chan}`,
      position: 'Wetlab',
      department: 'Chemistry',
      description: 'A girl who is never satisfied with the status quo.'
    },

    { name: 'Kai-Chiang Yu',
      image: `${Constant.image.member.Kai_Chiang_Yu}`,
      position: 'Wetlab',
      department: 'Chemistry',
      description: `Andy, a senior student from department of chemistry, now struggling along the tenebrous road from hell.`
    },

    { name: 'Ricky Chan',
      image: `${Constant.image.member.Ricky_Chan}`,
      position: 'Wetlab',
      department: 'Applied Science',
      description: `A boy who is curious about this unknown world, and likes to connect with different people. In iGEM NTHU TAIWAN, he participates in both wetlab and HP group. Therefore, sometimes he has to run around between the laboratory and local fishing rods. Although he  spent lots of time on it, he learned a lot and expand his horizons, feeling it's worth the efforts as well.`
    },

    { name: 'Yi-Chia(Emily) Wu',
      image: `${Constant.image.member.Emily_Wu}`,
      position: 'Wetlab',
      department: 'Department of Life Science',
      description: `Hi, I’m Emily, who majors in life science in NTHU. During my leisure time, I enjoy painting because it’s a way to show the fantastic ideas in my mind. My work in team NTHU_Taiwan is conducting the biology cloning in wet lab. I think I am a prudent person and I immerse myself in wet lab work. Besides, participating in this competition is truly inspire me to acquire problem-solving skills and knowledge of synthetic biology.`
    },

    { name: 'Jia-Jyun (Jim) Jian',
      image: `${Constant.image.member.Jim_Jian}`,
      position: 'Wetlab',
      department: 'Chemistry',
      description: `“A crazy lover of chemistry experiments, who often carries out experiment in the dormitory. Luckily, no explosion was made.” ---Kevin, my roommate.
                     I like organic chemistry, synthetic biology, experiments, minerals, and caterpillars.
                     Recently, I am experimenting some triboluminescence compound, if you are interested in them, we can keep in touch!`,
      contact: {
          facebook: 'https://www.facebook.com/profile.php?id=100003406433025',
          email: 'caterpillar0922@gmail.com',
          pokemon_id: '132610448091',
          bug: 'cater cater!'
      }
    },

    { name: 'YOU-YANG TSAI',
      image: `${Constant.image.member.You_Yang_Tsai}`,
      position: 'Wetlab',
      department: 'Chemistry',
      description: `YY, a big boy who is still in his puberty, is interesting in chemistry and physics and accidentally joins iGEM NTHU TAIWAN. Few months age, he devoted to become a great scientist who could make the world better. But now, his largest dream is to become a Master of Pokémon. If you are also crazy about Pokémon, contact me and add me to your friend list. We can pursue Dragonite, beat Mewtwo and talk a walk for hatching eggs together : )`,
      contact: {
          pokemon_id: '919370419502'
      }
    },

    { name: 'Vanessa Chuang',
      image: `${Constant.image.member.Vanessa_Chuang}`,
      position: 'Drylab',
      department: 'Power Mechanical Enginnering',
      description: `Hello this is Vanessa, currently is a second year master student and have an interdisciplinary background of both mechanical engineering and computer science. I have an enthusiasm for learning new knowledge and also the maker spirit embedded in my mind. Making things by myself and integrating all mechanical systems together make me feel a sense of achievement. Besides, I am also interested in different cultures and love to travel. As the saying say “When the going gets tough, the tough get going,” all and all enrich my life with not just challenging but also happiness and courage.`,
      contact:{
          linkedin: 'https://www.linkedin.com/in/vanessa-chuang-59475a147/',
          facebook: 'https://www.facebook.com/vanessa.chuang.942',
          email: 'vanessachuang1229@gmail.com'
      }
    
    },

    { name: 'Timtor Chen',
      image: `${Constant.image.member.Timtor_Chen}`,
      position: 'Drylab',
      department: 'Physics',
      description: `He done the wiki only, all of them are freeloaders!.`,
      contact: {
          github: 'https://github.com/timtorChen'
      }
    },

    // { name: 'CHIA-MIN HUANG',
    //   image: `${Constant.image.member.Chia_Min_Huang}`,
    //   position: 'Drylab',
    //   department: 'Physics',
    //   description: `Mickey, a college student in third grade, studying phisics. Although her dream is to be a great scientist, she also like to make things on her own hand. And it is lucky for her to meet this iGEM group, which provides her such a good chance. She also like to sing and play volleyball. Thus she hope that everyone can develop some hobbies and also keep professional in the meantime, having a happy life.`
    // },

    { name: 'Jhang Chuan-Jia',
      image: `${Constant.image.member.Jhang_Chuan_Jia}`,
      position: 'Drylab',
      department: 'Electrical Engineering',
      description: `Hello! My name is Allen. I’m dynamic and like to chat with people. My major is electrical engineering, so I almost do everything with my computer (just kidding XD). I have many interests, e.g., observing stars, playing tennis, watching movies, etc. I believe one thing, “If I work hard today, I will achieve my dream in the future.”, so I always do my best and spend all the time on what I’m interested in. I’m looking forward to participating iGEM Jamboree and making friends with all you guys!`,
    },

    { name: 'Lin Yi Hsin',
      image: `${Constant.image.member.Lin_Yi_Hsin}`,
      position: 'Drylab',
      department: 'Electrical engineering',
      description: `Hi, I'm Grace. I consider myself a person who loves to know people from different fields. I'm also into solving problems and creating things with what we learn. My dream is to devote myself to sustainable development. Therefore, in addition to iGEM's current project, I also start a program for promoting automatic reusable cup renting system in maker space. If you're interested in what we've been doing, feel free to contact me!`
    },

    { name: 'PEI-YUN WU',
      image: `${Constant.image.member.Pei_Yun_Wu}`,
      position: 'Drylab',
      department: 'Electrical Engineering',
      description: `Hello, I'm Heidi, a second-grade student study in electrical engineering. My hobbies are making desserts, playing drums, and reading. The reason why I join NTHU_Taiwan is my curiosity about iGEM, and also I want to learn something besides my major. In the session of experiments and human practicing, I think I reach my expectation.`
    },
]


const supervisor =[
    { name: 'Prof. Chao-Min Cheng',
      image: `${Constant.image.supervisor.Chao_Min_Cheng}`,
      department: 'Institute of Biomedical Engineering, NTHU',
      description: `Prof. Cheng’s research interests are basically exploring and leveraging the link(s) between engineering and different disciplines, specifically the link(s) between engineering and analytical chemistry, clinical chemistry, biology or medicine.
      He would like to tell us that “The journey is not quite simple, but I believe that everyone got loads out of it!”`
    },
    { name: 'Prof. Ya-Tang Yang',
      image: `${Constant.image.supervisor.Ya_Tang_Yang}`,
      department: 'Institute of Electrical Engineering, NTHU',
      description: `Ya Tang Yang is a nanoscientist, electrical engineer, bioengineer and Associate Professor of Electrical Engineer at National Tsing Hua University (NTHU) in Taiwan. His current research interests are synthetic biology for microbial carbon fixation, bioreactor, and optofluidics. `,
    }
]


const SquareCardWrapper = styled(CardWrapper)`
    grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
    ${ ({mobile})=> mobile &&`
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    `
    }
    ` 

const SquareCard =styled.div`
    height: 550px;
    ${  ({mobile})=> mobile &&`
        height: fit-content;
        margin-bottom: 80px;
    `
    }
    `

const SquareHeadWrapper = styled(HeadWrapper)`
    width: 250px;
    `

const SquareBelow = styled(Below)`
    width: 360px;
    ${  ({mobile})=> mobile &&`
        width: 300px;
    `
    }
    `

@inject('appState')
@observer
class Member extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Wrapper mobile={this.props.appState.mobile}>
            <Title>Team Member</Title>
            <CardWrapper mobile={this.props.appState.mobile}>
                {Content.map((member,index)=>
                    <Card key={index} mobile={this.props.appState.mobile}>
                        <HeadWrapper>
                            <Head src={member.image}/>
                        </HeadWrapper>
                        <Name>{member.name}</Name>
                        {/* <Position>{member.position}</Position> */}
                        <Department>{member.department}</Department>
                        
                        <Below mobile={this.props.appState.mobile}>
                            <Description>{member.description}</Description>
                           
                            {member.contact?
                                member.contact.email? 
                                <Email>{`# ${member.contact.email}`}</Email>  
                                :null
                            :null}

                            {member.contact? 
                            <Contact>
                                {member.contact.facebook? 
                                <Linker href={member.contact.facebook}> 
                                    <FontIcon className='fab fa-facebook-square'/>
                                </Linker> : null}

                                {member.contact.linkedin?
                                <Linker href={member.contact.linkedin}>
                                    <FontIcon className='fab fa-linkedin'/>
                                </Linker> : null}

                                {member.contact.github? 
                                <Linker href={member.contact.github}>
                                    <FontIcon className='fab fa-github'/>
                                </Linker> : null}
                            

                                {/* { member.contact.email? 
                                <FontIcon className='fas fa-envelope'/> : null}  */}
                                
                                {/* {member.contact.pokemon_id? 
                                <Pokemon src={Constant.image.member.icon.pokemon} />: null}
                                {member.contact.bug ? 
                                <Bug src={Constant.image.member.icon.bug} />: null} */}
                                </Contact>
                            :null}
                        </Below>
                    </Card>      
                )}
            </CardWrapper>
            
            <Title>Supervisor</Title>
            
            <SquareCardWrapper mobile={this.props.appState.mobile}>
            { supervisor.map( (prof,index)=>
                <SquareCard key={index} mobile={this.props.appState.mobile}>
                <SquareHeadWrapper>
                    <Head src={prof.image} ></Head>
                </SquareHeadWrapper>
                <SquareBelow mobile={this.props.appState.mobile}>
                    <Name>{prof.name}</Name>
                    <Department>{prof.department}</Department>
                    <Description>{prof.description}</Description>
                </SquareBelow>
                </SquareCard>
            )}
            
            </SquareCardWrapper>
            
            
            </Wrapper>
        )

    }
}

export default Member;