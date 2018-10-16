
const Url ={
  fb: 'https://www.facebook.com/NTHU.iGEM',
  ig: 'https://www.instagram.com/igem_tw_nthu/',
  github: 'https://github.com/igem-tw-nthu'
}


let Image, Video
if(process.env.NODE_ENV === 'development'){
  
  // developement
  Video = {
    sampling: '../assets/video/sampling.mp4',
    lid: '../assets/video/lid.mp4',
    home: '../assets/video/home.mp4'
  },

  Image = {

    icon:{
      team: '../assets/images/icon/team.png',
      fb: '../assets/images/icon/fb.png',
      github: '../assets/images/icon/github.png',
      ig: '../assets/images/icon/ig.png',
    },

    collaboration:{
      part: '../assets/images/hp/collaboration/part.png',
      email: '../assets/images/hp/collaboration/email.png'
    },

    home: {
      overview: '../assets/images/home/overview.png'
    },

    description: {
      infected: '../assets/images/project/description/infected.png'
    },

    design: {
      cycle: '../assets/images/project/design/cycle.png',
      exp : '../assets/images/project/design/exp.png',
      equlibrium : '../assets/images/project/design/equi.png',
      secrete: '../assets/images/project/design/secrete.png',
      system: '../assets/images/project/design/system.png',
      shrimp: '../assets/images/project/design/shrimp.png'
    },

    wetlab_overview: {
      system: '../assets/images/wetlab/overview/system.png',
      mechanism: '../assets/images/wetlab/overview/mechanism.png',
      ahl: '../assets/images/wetlab/overview/ahl.png',
      detection: '../assets/images/wetlab/overview/detection.png',
      lacl: '../assets/images/wetlab/overview/lacl.png',
      riboswitch: '../assets/images/wetlab/overview/riboswitch.png',
      star: '../assets/images/wetlab/overview/star.png',
      anti: '../assets/images/wetlab/overview/anti.png'
    },

    model:{
      interaction: '../assets/images/wetlab/model/interaction.png',
      result: '../assets/images/wetlab/model/result.png'
    },

    experiment: {
      transform: '../assets/images/wetlab/experiment/transform.png',
      elec : '../assets/images/wetlab/experiment/elec.png',
      table_1: '../assets/images/wetlab/experiment/table.1.png',
      sample: '../assets/images/wetlab/experiment/sample.png',
      vibrio: '../assets/images/wetlab/experiment/vibrio.png',
      ahl: '../assets/images/wetlab/experiment/ahl.png',
      structure: '../assets/images/wetlab/experiment/structure.png',
      cycle: '../assets/images/wetlab/experiment/cycle.png',
      sensor: '../assets/images/wetlab/experiment/sensor.png',
      exp_1 : '../assets/images/wetlab/experiment/exp.1.png',
      exp_2: '../assets/images/wetlab/experiment/exp.2.png',
      exp_3: '../assets/images/wetlab/experiment/exp.3.png',
      data_1: '../assets/images/wetlab/experiment/data.1.png',
      table_2: '../assets/images/wetlab/experiment/table.2.png',
      table_3: '../assets/images/wetlab/experiment/table.3.png',
      table_4: '../assets/images/wetlab/experiment/table.4.png',
      result_2: '../assets/images/wetlab/experiment/result.2.png',
      result_3: '../assets/images/wetlab/experiment/result.3.png',
      result_4: '../assets/images/wetlab/experiment/result.4.png',
      tsrna: '../assets/images/wetlab/experiment/tsrna.png',
      tsrna_test: '../assets/images/wetlab/experiment/tsrna_test.png',
      strength: '../assets/images/wetlab/experiment/strength.png',
      email: '../assets/images/wetlab/experiment/email.png' 
    },

    drylab_overview: {
      plate: '../assets/images/drylab/overview/plate.png',
      box: '../assets/images/drylab/overview/box.png'
    },

    software:{
      app: '../assets/images/drylab/software/app.png',
      line: '../assets/images/drylab/software/line.png',
      map: '../assets/images/drylab/software/map.png',
      warn:  '../assets/images/drylab/software/warn.png'
    },

    imaging:{
      materials: '../assets/images/drylab/imaging/materials.png',
      board: '../assets/images/drylab/imaging/boards.png',
      algorithm : '../assets/images/drylab/imaging/algorithm.png',
      light: '../assets/images/drylab/imaging/light.png',
    },

    sampling:{
      pump: '../assets/images/drylab/sampling/pump.png',
      full_pump: '../assets/images/drylab/sampling/full_pump.png',
      list: '../assets/images/drylab/sampling/list.png',
      head: '../assets/images/drylab/sampling/head.png',
      result: '../assets/images/drylab/sampling/result.png'
    },

    environment:{
      first: '../assets/images/drylab/environment/first.png',
      second: '../assets/images/drylab/environment/second.png',
      final: '../assets/images/drylab/environment/final.png',
      list: '../assets/images/drylab/environment/list.png',
      end: '../assets/images/drylab/environment/end.png'
    },

    platform: {
      transparent: '../assets/images/drylab/platform/transparent.png',
      moving: '../assets/images/drylab/platform/moving.png',
      block: '../assets/images/drylab/platform/block.png'
    },

    application:{
      tcbs: '../assets/images/drylab/application/tcbs.png',
      plate: '../assets/images/drylab/application/plate.png',
      concentration:  '../assets/images/drylab/application/concentration.png',
      time: '../assets/images/drylab/application/time.png',
      flow:  '../assets/images/drylab/application/flow.png',
      stp: '../assets/images/drylab/application/stp.png',
      vs: '../assets/images/drylab/application/vs.png',
    },

    topfull:{
      collaboration: '../assets/images/topfull/collaboration.top.png',
      application: '../assets/images/topfull/application.top.png',
      description: '../assets/images/topfull/description.top.png',
      design: '../assets/images/topfull/design.top.png',
      parts: '../assets/images/topfull/parts.top.png',
      protocol: '../assets/images/topfull/protocol.top.png',
      imaging: '../assets/images/topfull/imaging.top.png',
      environment: '../assets/images/topfull/environment.top.png',
      member: '../assets/images/topfull/member.top.png',
      public: '../assets/images/topfull/public.top.png',
      attribution: '../assets/images/topfull/attribution.top.png',
      sampling: '../assets/images/topfull/sampling.top.png',
      platform: '../assets/images/topfull/platform.top.png',
      sponsor: '../assets/images/topfull/sponsor.top.png',
      software: '../assets/images/topfull/software.top.png',
      education: '../assets/images/topfull/education.top.png',
      interview: '../assets/images/topfull/interview.top.png',
      contribution: '../assets/images/topfull/contribution.top.png',
      experiment: '../assets/images/topfull/experiment.top.png',
      wetlab_overview: '../assets/images/topfull/wetlab_overview.top.png',
      drylab_overview: '../assets/images/topfull/drylab_overview.top.png',
      demonstration: '../assets/images/topfull/demonstration.top.png',
      notebook: '../assets/images/topfull/notebook.top.png'
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
      Kevin_Wang: '../assets/images/team/member/Kevin Wang.png',
      icon: {
        bug: '../assets/images/team/member/bug.svg',
        pokemon: '../assets/images/team/member/pokemon.svg'
      }
    },

    attribution:{
      list: '../assets/images/team/attribution/list.png'
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

    interview: {
      research: '../assets/images/hp/interview/research.png',
      eco_1: '../assets/images/hp/interview/eco.1.png',
      eco_2: '../assets/images/hp/interview/eco.2.png',
      tradition_1: '../assets/images/hp/interview/tradition.1.png',
      tradition_2: '../assets/images/hp/interview/tradition.2.png',
      tradition_3: '../assets/images/hp/interview/tradition.3.png',
      aqua_1: '../assets/images/hp/interview/aqua.1.png',
      aqua_2: '../assets/images/hp/interview/aqua.2.png'
    },

    public: {
      nctu: 'http://2018.igem.org/wiki/images/c/c6/T--NTHU_Taiwan--nctu.png',

      meetup_group: 'http://2018.igem.org/wiki/images/f/f4/T--NTHU_Taiwan--meetup.group.png',
      meetup_self: 'http://2018.igem.org/wiki/images/3/3f/T--NTHU_Taiwan--meetup.self.png',
      meetup_presentation: 'http://2018.igem.org/wiki/images/3/30/T--NTHU_Taiwan--presentation.png',

      trans: 'http://2018.igem.org/wiki/images/f/fe/T--NTHU_Taiwan--trans.png',
      hspectre: 'http://2018.igem.org/wiki/images/0/05/T--NTHU_Taiwan--hspectrum.png',

      discuss_1: 'http://2018.igem.org/wiki/images/b/bd/T--NTHU_Taiwan--discuss.1.png',
      discuss_2_1: 'http://2018.igem.org/wiki/images/6/63/T--NTHU_Taiwan--discuss.2.1.png',
      discuss_2_2: 'http://2018.igem.org/wiki/images/a/aa/T--NTHU_Taiwan--discuss.2.2.png',
      discuss_2_3: 'http://2018.igem.org/wiki/images/1/1a/T--NTHU_Taiwan--discuss.2.3.png',
      discuss_3_1: 'http://2018.igem.org/wiki/images/3/37/T--NTHU_Taiwan--discuss.3.1.png',
      discuss_3_2: 'http://2018.igem.org/wiki/images/f/ff/T--NTHU_Taiwan--discuss.3.2.png',
    
      xgem: 'http://2018.igem.org/wiki/images/3/35/T--NTHU_Taiwan--xgem.png',
      chart_1: 'http://2018.igem.org/wiki/images/d/d7/T--NTHU_Taiwan--chart.1.png',
      chart_2: 'http://2018.igem.org/wiki/images/9/90/T--NTHU_Taiwan--chart.2.png',
      chart_3: 'http://2018.igem.org/wiki/images/4/4a/T--NTHU_Taiwan--chart.3.png'
    },

    education: {
      pie_1: 'http://2018.igem.org/wiki/images/a/aa/T--NTHU_Taiwan--pie.1.png',
      pie_2: 'http://2018.igem.org/wiki/images/6/62/T--NTHU_Taiwan--pie.2.png',
      pie_3: 'http://2018.igem.org/wiki/images/4/42/T--NTHU_Taiwan--pie.3.png',
      group: 'http://2018.igem.org/wiki/images/f/f9/T--NTHU_Taiwan--group.png'
    },
  }

}else{
  
  // production
  Video = {
    sampling: 'http://2018.igem.org/wiki/images/2/26/T--NTHU_Taiwan--sampling.mp4',
    lid: 'http://2018.igem.org/wiki/images/c/c0/T--NTHU_Taiwan--lid.mp4',
    home: 'http://2018.igem.org/wiki/images/0/09/T--NTHU_Taiwan--home.mp4'
  }

  Image = {
    icon:{
      team: 'http://2018.igem.org/wiki/images/1/1f/T--NTHU_Taiwan--2018_team.png',
      fb: 'http://2018.igem.org/wiki/images/3/3e/T--NTHU_Taiwan--2018_fb.png',
      github: 'http://2018.igem.org/wiki/images/7/77/T--NTHU_Taiwan--2018_github.png',
      ig: 'http://2018.igem.org/wiki/images/e/e2/T--NTHU_Taiwan--2018_ig.png'
    },

    collaboration:{
      part: 'http://2018.igem.org/wiki/images/0/0d/T--NTHU_Taiwan--part.png',
      email: 'http://2018.igem.org/wiki/images/3/3e/T--NTHU_Taiwan--email.png'
    },

    home: {
      overview: 'http://2018.igem.org/wiki/images/0/01/T--NTHU_Taiwan--home_overview.png'
    },

    description: {
      infected: 'http://2018.igem.org/wiki/images/f/f1/T--NTHU_Taiwan--infected.png'
    },

    design: {
      cycle: 'http://2018.igem.org/wiki/images/9/99/T--NTHU_Taiwan--cycle.png',
      exp : 'http://2018.igem.org/wiki/images/8/8d/T--NTHU_Taiwan--exp.png',
      equlibrium : 'http://2018.igem.org/wiki/images/5/5d/T--NTHU_Taiwan--equi.png',
      secrete: 'http://2018.igem.org/wiki/images/b/b6/T--NTHU_Taiwan--secrete.png',
      system: 'http://2018.igem.org/wiki/images/5/52/T--NTHU_Taiwan--system.png',
      shrimp: 'http://2018.igem.org/wiki/images/4/46/T--NTHU_Taiwan--shrimp.png'
    },

    wetlab_overview: {
      system: 'http://2018.igem.org/wiki/images/0/02/T--NTHU_Taiwan--Wetlab_system.png',
      mechanism: 'http://2018.igem.org/wiki/images/6/60/T--NTHU_Taiwan--mechanism.png',
      ahl: 'http://2018.igem.org/wiki/images/d/dc/T--NTHU_Taiwan--ahl.png',
      detection: 'http://2018.igem.org/wiki/images/2/21/T--NTHU_Taiwan--detection.png',
      lacl: 'http://2018.igem.org/wiki/images/2/23/T--NTHU_Taiwan--lacl.png',
      riboswitch: 'http://2018.igem.org/wiki/images/3/3c/T--NTHU_Taiwan--riboswitch.png',
      star: 'http://2018.igem.org/wiki/images/6/66/T--NTHU_Taiwan--star.png',
      anti: 'http://2018.igem.org/wiki/images/9/97/T--NTHU_Taiwan--anti.png'
    },

    model:{
      interaction: 'http://2018.igem.org/wiki/images/6/6c/T--NTHU_Taiwan--interaction.png',
      result: 'http://2018.igem.org/wiki/images/c/c6/T--NTHU_Taiwan--result.png'
    },

    experiment: {
      transform: 'http://2018.igem.org/wiki/images/1/16/T--NTHU_Taiwan--transform.png',
      elec : 'http://2018.igem.org/wiki/images/c/cf/T--NTHU_Taiwan--elec.png',
      table_1: 'http://2018.igem.org/wiki/images/0/04/T--NTHU_Taiwan--table.1.png',
      sample: 'http://2018.igem.org/wiki/images/8/8c/T--NTHU_Taiwan--sample.png',
      vibrio: 'http://2018.igem.org/wiki/images/a/af/T--NTHU_Taiwan--vibrio.png',
      ahl: 'http://2018.igem.org/wiki/images/d/dc/T--NTHU_Taiwan--ahl.png',
      structure: 'http://2018.igem.org/wiki/images/7/79/T--NTHU_Taiwan--structure.png',
      cycle: 'http://2018.igem.org/wiki/images/9/99/T--NTHU_Taiwan--cycle.png',
      sensor: 'http://2018.igem.org/wiki/images/c/c9/T--NTHU_Taiwan--sensor.png',
      exp_1 : 'http://2018.igem.org/wiki/images/4/49/T--NTHU_Taiwan--exp.1.png',
      exp_2: 'http://2018.igem.org/wiki/images/7/72/T--NTHU_Taiwan--exp.2.png',
      exp_3: 'http://2018.igem.org/wiki/images/e/e1/T--NTHU_Taiwan--exp.3.png',
      data_1: 'http://2018.igem.org/wiki/images/4/48/T--NTHU_Taiwan--data.1.png',
      table_2: 'http://2018.igem.org/wiki/images/f/fc/T--NTHU_Taiwan--table.2.png',
      table_3: 'http://2018.igem.org/wiki/images/d/d5/T--NTHU_Taiwan--table.3.png',
      table_4: 'http://2018.igem.org/wiki/images/9/96/T--NTHU_Taiwan--table.4.png',
      result_2: 'http://2018.igem.org/wiki/images/8/8b/T--NTHU_Taiwan--result.2.png',
      result_3: 'http://2018.igem.org/wiki/images/d/da/T--NTHU_Taiwan--result.3.PNG',
      result_4: 'http://2018.igem.org/wiki/images/b/bf/T--NTHU_Taiwan--result.4.png',
      tsrna: 'http://2018.igem.org/wiki/images/b/ba/T--NTHU_Taiwan--tsrna.png',
      tsrna_test: 'http://2018.igem.org/wiki/images/0/0e/T--NTHU_Taiwan--tsrna_test.png',
      strength: 'http://2018.igem.org/wiki/images/d/d4/T--NTHU_Taiwan--strength.png',
      email: 'http://2018.igem.org/wiki/images/3/3e/T--NTHU_Taiwan--email.png' 
    },

    drylab_overview: {
      plate: 'http://2018.igem.org/wiki/images/2/23/T--NTHU_Taiwan--plate.png',
      box: 'http://2018.igem.org/wiki/images/f/fe/T--NTHU_Taiwan--box.png'
    },

    software:{
      app: 'http://2018.igem.org/wiki/images/d/d1/T--NTHU_Taiwan--app.png',
      line: 'http://2018.igem.org/wiki/images/e/ec/T--NTHU_Taiwan--line.png',
      map: 'http://2018.igem.org/wiki/images/d/db/T--NTHU_Taiwan--map.png',
      warn:  'http://2018.igem.org/wiki/images/d/da/T--NTHU_Taiwan--warn.png'
    },

    imaging:{
      materials: 'http://2018.igem.org/wiki/images/d/d9/T--NTHU_Taiwan--materials.png',
      board: 'http://2018.igem.org/wiki/images/9/91/T--NTHU_Taiwan--boards.png',
      algorithm : 'http://2018.igem.org/wiki/images/c/c0/T--NTHU_Taiwan--algorithm.png',
      light: 'http://2018.igem.org/wiki/images/5/59/T--NTHU_Taiwan--light.png',
    },

    sampling:{
      pump: 'http://2018.igem.org/wiki/images/6/67/T--NTHU_Taiwan--pump.png',
      full_pump: 'http://2018.igem.org/wiki/images/6/6b/T--NTHU_Taiwan--full_pump.png',
      list: 'http://2018.igem.org/wiki/images/e/e9/T--NTHU_Taiwan--list.png',
      head: 'http://2018.igem.org/wiki/images/2/20/T--NTHU_Taiwan--head.png',
      result: 'http://2018.igem.org/wiki/images/c/c6/T--NTHU_Taiwan--result.png'
    },

    environment:{
      first: 'http://2018.igem.org/wiki/images/d/d1/T--NTHU_Taiwan--first.png',
      second: 'http://2018.igem.org/wiki/images/7/75/T--NTHU_Taiwan--second.png',
      final: 'http://2018.igem.org/wiki/images/e/ea/T--NTHU_Taiwan--final.png',
      list: 'http://2018.igem.org/wiki/images/e/e9/T--NTHU_Taiwan--list.png',
      end: 'http://2018.igem.org/wiki/images/e/ec/T--NTHU_Taiwan--end.png'
    },

    platform: {
      transparent: 'http://2018.igem.org/wiki/images/2/2d/T--NTHU_Taiwan--transparent.png',
      moving: 'http://2018.igem.org/wiki/images/e/e8/T--NTHU_Taiwan--moving.png',
      block: 'http://2018.igem.org/wiki/images/5/59/T--NTHU_Taiwan--block.png'
    },

    application:{
      tcbs: 'http://2018.igem.org/wiki/images/a/af/T--NTHU_Taiwan--tcbs.png',
      plate: 'http://2018.igem.org/wiki/images/2/23/T--NTHU_Taiwan--plate.png',
      concentration:  'http://2018.igem.org/wiki/images/1/17/T--NTHU_Taiwan--concentration.png',
      time: 'http://2018.igem.org/wiki/images/6/6b/T--NTHU_Taiwan--time.png',
      flow:  'http://2018.igem.org/wiki/images/f/fa/T--NTHU_Taiwan--flow.png',
      stp: 'http://2018.igem.org/wiki/images/6/6a/T--NTHU_Taiwan--stp.png',
      vs: 'http://2018.igem.org/wiki/images/3/35/T--NTHU_Taiwan--vs.png',
    },

    topfull:{
      collaboration: 'http://2018.igem.org/wiki/images/e/e3/T--NTHU_Taiwan--collaboration.top.png',
      application: 'http://2018.igem.org/wiki/images/1/1e/T--NTHU_Taiwan--application.top.png',
      description: 'http://2018.igem.org/wiki/images/2/2c/T--NTHU_Taiwan--description.top.png',
      design: 'http://2018.igem.org/wiki/images/e/e8/T--NTHU_Taiwan--design.top.png',
      parts: 'http://2018.igem.org/wiki/images/c/cb/T--NTHU_Taiwan--parts.top.png',
      protocol: 'http://2018.igem.org/wiki/images/b/b1/T--NTHU_Taiwan--protocol.top.png',
      imaging: 'http://2018.igem.org/wiki/images/4/4b/T--NTHU_Taiwan--imaging.top.png',
      environment: 'http://2018.igem.org/wiki/images/c/c7/T--NTHU_Taiwan--environment.top.png',
      member: 'http://2018.igem.org/wiki/images/d/d2/T--NTHU_Taiwan--member.top.png',
      public: 'http://2018.igem.org/wiki/images/5/55/T--NTHU_Taiwan--public.top.png',
      attribution: '../assets/images/topfull/attribution.top.png',
      sampling: 'http://2018.igem.org/wiki/images/c/c0/T--NTHU_Taiwan--sampling.top.png',
      platform: 'http://2018.igem.org/wiki/images/b/b7/T--NTHU_Taiwan--platform.top.png',
      sponsor: 'http://2018.igem.org/wiki/images/2/26/T--NTHU_Taiwan--sponsor.top.png',
      software: 'http://2018.igem.org/wiki/images/0/07/T--NTHU_Taiwan--software.top.png',
      education: 'http://2018.igem.org/wiki/images/d/d4/T--NTHU_Taiwan--education.top.png',
      interview: 'http://2018.igem.org/wiki/images/0/0a/T--NTHU_Taiwan--interview.top.png',
      contribution: 'http://2018.igem.org/wiki/images/d/de/T--NTHU_Taiwan--contribution.top.png',
      experiment: 'http://2018.igem.org/wiki/images/0/06/T--NTHU_Taiwan--experiment.top.png',
      wetlab_overview: 'http://2018.igem.org/wiki/images/c/c3/T--NTHU_Taiwan--wetlab_overview.top.png',
      drylab_overview: 'http://2018.igem.org/wiki/images/6/61/T--NTHU_Taiwan--drylab_overview.top.png',
      demonstration: 'http://2018.igem.org/wiki/images/4/4a/T--NTHU_Taiwan--demonstration.top.png',
      notebook: 'http://2018.igem.org/wiki/images/2/21/T--NTHU_Taiwan--notebook.top.png'
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
      Lily_Huang: 'http://2018.igem.org/wiki/images/6/6d/T--NTHU_Taiwan--Lily_Huang.png',
      icon: {
        bug: 'http://2018.igem.org/wiki/images/0/09/T--NTHU_Taiwan--bug.svg',
        pokemon: 'http://2018.igem.org/wiki/images/9/97/T--NTHU_Taiwan--pokemon.svg'
      }
    },

    attribution:{
      list: 'http://2018.igem.org/wiki/images/e/e9/T--NTHU_Taiwan--list.png'
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

    interview: {
      research: 'http://2018.igem.org/wiki/images/0/0d/T--NTHU_Taiwan--research.png',
      eco_1: 'http://2018.igem.org/wiki/images/0/0b/T--NTHU_Taiwan--eco.1.png',
      eco_2: 'http://2018.igem.org/wiki/images/e/e3/T--NTHU_Taiwan--eco.2.png',
      tradition_1: 'http://2018.igem.org/wiki/images/a/a6/T--NTHU_Taiwan--tradition.1.png',
      tradition_2: 'http://2018.igem.org/wiki/images/5/5b/T--NTHU_Taiwan--tradition.2.png',
      tradition_3: 'http://2018.igem.org/wiki/images/4/42/T--NTHU_Taiwan--tradition.3.png',
      aqua_1: 'http://2018.igem.org/wiki/images/3/30/T--NTHU_Taiwan--aqua.1.png',
      aqua_2: 'http://2018.igem.org/wiki/images/9/98/T--NTHU_Taiwan--aqua.2.png'
    },

    public: {
      nctu: '../assets/images/hp/public/nctu.png',

      meetup_group: '../assets/images/hp/public/meetup.group.png',
      meetup_self: '../assets/images/hp/public/meetup.self.png',
      meetup_presentation: '../assets/images/hp/public/presentation.png',

      trans: '../assets/images/hp/public/trans.png',
      hspectre: '../assets/images/hp/public/hspectrum.png',

      discuss_1: '../assets/images/hp/public/discuss.1.png',
      discuss_2_1: '../assets/images/hp/public/discuss.2.1.png',
      discuss_2_2: '../assets/images/hp/public/discuss.2.2.png',
      discuss_2_3: '../assets/images/hp/public/discuss.2.3.png',
      discuss_3_1: '../assets/images/hp/public/discuss.3.1.png',
      discuss_3_2: '../assets/images/hp/public/discuss.3.2.png',
    
      xgem: '../assets/images/hp/public/xgem.png',
      chart_1: '../assets/images/hp/public/chart.1.png',
      chart_2: '../assets/images/hp/public/chart.2.png',
      chart_3: '../assets/images/hp/public/chart.3.png'
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
    video: Video,
    url: Url,
    color: Color
}