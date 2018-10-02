
const Url ={
  fb: 'https://www.facebook.com/NTHU.iGEM',
  ig: 'https://www.instagram.com/igem_tw_nthu/',
  github: 'https://github.com/igem-tw-nthu'
}


let Image = {}
if(process.env.NODE_ENV === 'development'){
  // developement
  Image = {

    icon:{
      team: '../assets/images/icon/team.png',
      fb: '../assets/images/icon/fb.png',
      github: '../assets/images/icon/github.png',
      ig: '../assets/images/icon/ig.png',
    },

    topfull:{
      // each page....
      member: '../assets/images/topfull/member.top.png',
      
      public: '../assets/images/topfull/public.top.png',
      education: '../assets/images/topfull/education.top.png',
      collaboration : '../assets/images/topfull/collaboration.top.png',

      interlab: '../assets/images/topfull/interLab.top.png',
      experiment: '../assets/images/topfull/experiment.top.png'
    },

    member:{
      Max_Wang: '../assets/images/team/member/Max Wang.png',
      Timtor_Chen: '../assets/images/team/member/Timtor Chen.png',
      Ricky_Chan: '../assets/images/team/member/Ricky Chan.png',
      Tina_Wu: '../assets/images/team/member/Xin-Fang (Tina) Wu.png',
      Jim_Jian: '../assets/images/team/member/Jia-Jyun (Jim) Jian.png',
      Lin_Yi_Hsin: '../assets/images/team/member/Lin Yi Hsin.png',
      Jhang_Chuan_Jia: '../assets/images/team/member/Jhang Chuan-Jia.png',
      Emily_Wu: '../assets/images/team/member/Yi-Chia (Emily) Wu.png',
      You_Yang_Tsai: '../assets/images/team/member/You Yang Tsai.png',
      Teng_Yen_Lin: '../assets/images/team/member/Teng Yen Lin.png',
      Pei_Yun_Wu: '../assets/images/team/member/Pei Yun Wu.png',
      Chia_Min_Huang: '',
      Ruby_Chan: '../assets/images/team/member/Ruby Chan.png',
      Vanessa_Chuang : '../assets/images/team/member/Vanessa Chuang.png',
      Kai_Chiang_Yu: '../assets/images/team/member/Kai-Chiang Yu.png',
      icon: {
        bug: '../assets/images/team/member/bug.svg',
        pokemon: '../assets/images/team/member/pokemon.svg'
      }
    },

    supervisor: {
      Chao_Min_Cheng: '../assets/images/team/supervisor/Chao-Min-Cheng.png',
      Ya_Tang_Yang: '../assets/images/team/supervisor/Ya-Tang Yang.png'
    },

    sponsor: {
      Shun_Yih: '../assets/images/team/sponsor/Shun Yih.png',
      FRI: '../assets/images/team/sponsor/FRI.png',
      IDT: '../assets/images/team/sponsor/IDT.png',
      ITRI: '../assets/images/team/sponsor/ITRI.png',
      Education_Ministry: '../assets/images/team/sponsor/Ministry of Education.png', 
      NTHU: '../assets/images/team/sponsor/NTHU.png',
      NTHUEE: '../assets/images/team/sponsor/NTHUEE.png',

    }
  

  }
}else{
  // production
  Image = {
    icon:{
      team: 'http://2018.igem.org/wiki/images/1/1f/T--NTHU_Taiwan--2018_team.png',
      fb: 'http://2018.igem.org/wiki/images/3/3e/T--NTHU_Taiwan--2018_fb.png',
      github: 'http://2018.igem.org/wiki/images/7/77/T--NTHU_Taiwan--2018_github.png',
      ig: 'http://2018.igem.org/wiki/images/e/e2/T--NTHU_Taiwan--2018_ig.png'
    },
    topfull:{

    }
  }
}


const Color ={
  darkblue: '#003366',

}



export default {
    image: Image,
    url: Url,
    color: Color
}