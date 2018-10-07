
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
      attribution: '',


      education: '../assets/images/topfull/education.top.png',
      collaboration : '../assets/images/topfull/collaboration.top.png',
      interview: '../assets/images/topfull/interview.top.png',
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
      Lily_Huang: '../assets/images/team/member/Lily Huang.png',
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

    },

    public: {
      trans: '../assets/images/team/hp/public/trans.png',
      hspectre: '../assets/images/team/hp/public/hspectrum.png',
      discuss_1_1: '../assets/images/team/hp/public/discuss.1.1.png',
      discuss_1_2: '../assets/images/team/hp/public/discuss.1.2.png',
      discuss_2: '../assets/images/team/hp/public/discuss.2.png',
      discuss_3_1: '../assets/images/team/hp/public/discuss.3.1.png',
      discuss_3_2: '../assets/images/team/hp/public/discuss.3.2.png'
    },

    education: {
      pie_1: '',
      pie_2: '',
      pie_3: ''
    },

  

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
      member: '',
      public: '',
      attribution: '',

      education: '',
      collaboration : '',
      interview: '',
      interlab: '',
      experiment: ''
    },

    member:{
      Max_Wang: 'http://2018.igem.org/wiki/images/2/22/T--NTHU_Taiwan--Max_Wang.png',
      Timtor_Chen: 'http://2018.igem.org/wiki/images/4/4c/T--NTHU_Taiwan--Timtor_Chen.png',
      Ricky_Chan: 'http://2018.igem.org/wiki/images/6/6f/T--NTHU_Taiwan--Ricky_Chan.png',
      Tina_Wu: 'http://2018.igem.org/wiki/images/c/c4/T--NTHU_Taiwan--Xin-Fang_%28Tina%29_Wu.png',
      Jim_Jian: 'http://2018.igem.org/wiki/images/e/e2/T--NTHU_Taiwan--Jia-Jyun_%28Jim%29_Jian.png',
      Lin_Yi_Hsin: 'http://2018.igem.org/wiki/images/1/12/T--NTHU_Taiwan--Lin_Yi_Hsin.png',
      Jhang_Chuan_Jia: 'http://2018.igem.org/wiki/images/f/f7/T--NTHU_Taiwan--Jhang_Chuan-Jia.png',
      Emily_Wu: 'http://2018.igem.org/wiki/images/e/ed/T--NTHU_Taiwan--Yi-Chia_%28Emily%29_Wu.png',
      You_Yang_Tsai: 'http://2018.igem.org/wiki/images/0/06/T--NTHU_Taiwan--You_Yang_Tsai.png',
      Teng_Yen_Lin: 'http://2018.igem.org/wiki/images/f/fa/T--NTHU_Taiwan--Teng_Yen_Lin.png',
      Pei_Yun_Wu: 'http://2018.igem.org/wiki/images/6/65/T--NTHU_Taiwan--Pei_Yun_Wu.png',
      Chia_Min_Huang: '',
      Ruby_Chan: 'http://2018.igem.org/wiki/images/6/6e/T--NTHU_Taiwan--Ruby_Chan.png',
      Vanessa_Chuang : 'http://2018.igem.org/wiki/images/1/1a/T--NTHU_Taiwan--Vanessa_Chuang.png',
      Kai_Chiang_Yu: 'http://2018.igem.org/wiki/images/e/ef/T--NTHU_Taiwan--Kai-Chiang_Yu.png',
      Lily_Huang: '',
      icon: {
        bug: '',
        pokemon: ''
      }
    },

    supervisor: {
      Chao_Min_Cheng: 'http://2018.igem.org/wiki/images/6/6c/T--NTHU_Taiwan--Chao-Min-Cheng.png',
      Ya_Tang_Yang: 'http://2018.igem.org/wiki/images/6/67/T--NTHU_Taiwan--Ya-Tang_Yang.png'
    },

    sponsor: {
      Shun_Yih: 'http://2018.igem.org/wiki/images/0/03/T--NTHU_Taiwan--Shun_Yih.png',
      FRI: 'http://2018.igem.org/wiki/images/a/ab/T--NTHU_Taiwan--FRI.png',
      IDT: 'http://2018.igem.org/wiki/images/6/60/T--NTHU_Taiwan--IDT.png',
      ITRI: 'http://2018.igem.org/wiki/images/1/1e/T--NTHU_Taiwan--ITRI.png',
      Education_Ministry: 'http://2018.igem.org/wiki/images/b/b2/T--NTHU_Taiwan--Ministry_of_Education.png', 
      NTHU: 'http://2018.igem.org/wiki/images/6/67/T--NTHU_Taiwan--NTHU.png',
      NTHUEE: 'http://2018.igem.org/wiki/images/c/c7/T--NTHU_Taiwan--NTHUEE.png',

    },

    public: {
      trans: '',
      hspectre: '',
      discuss_1_1: '',
      discuss_1_2: '',
      discuss_2: '',
      discuss_3_1: '',
      discuss_3_2: ''
    },

    education: {
      pie_1: '',
      pie_2: '',
      pie_3: ''
    },

    
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