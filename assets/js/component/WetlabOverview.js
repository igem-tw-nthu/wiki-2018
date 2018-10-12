import React, { Component } from 'react';
import Content from './Content';
import Constant from './Constant';

console.log(Constant.image.wetlab_overview);


const Introduction = 
    <div>
        <div>
        In order to control Vibrio cell-population density and maintain a bio-friendly environment in a sustainable way, we introduce the concept of Bio-control, which is known as the prey-predator model, to our system. We create a system that can automatically detect, compare, and control the cell-population density. The system is composed of three parts, which are a detector, comparator, and controller respectively. These three parts are connected together in the same gene circuit and function sequentially so that the concentration of Vibrio in the surroundings can be kept in a specific range. Then, a succession model can be achieved.
        </div>
        <div className='illustration'> 
            <img className='illust-image' src={Constant.image.wetlab_overview.introduction}/>
        </div>
    </div>


const Control =
    <div>
        <div>Our gene circuit design can be divided into three parts described down below.</div>
    </div>



const Detector=
    <div>
        <div className='part'>
          The Detector module is responsible for detecting the concentration of Vibrio species in the surroundings. We found that most of pathogenic Vibrio use quorum sensing to communicate with other individuals. Lux is one of the Vibrio quorum sensing systems. With Lux system, the Vibrio has the ability to secrete and detect specific chemicals, acyl homoserine lactones (AHLs). Signal transduction relies on AHLs, and bacteria respond to it with different gene expression. 
        </div>
        <div className='part'>
          We use Lux gene originally isolated from Vibrio fischeri as our AHL sensor. The gene system is composed of LuxI, LuxR and pLux. LuxI is a synthase that converts S-Adenosyl methionine (SAM) into one of specific AHLs, 3-oxo-C6-HSL. LuxR is an activating protein, and it will stimulate the transcription from Lux promoter (pLux) when 3-oxo-C6-HSL binds to it. We modify LuxI with RFP reporter to the E. coli. playing the role of Vibrio. We also modify LuxR and pLux into our genetically engineered E. coli., that is cell-population controlling system, so that AHL level in environment can be detected and the Vibrio population can be known.        
        </div>
    </div>

const Comparator=
    <div>
        <div className='part'>
          The Comparator module is responsible for comparing the cell population density of Vibrio with our engineered E. coli. to see if it exceeds the pathogenic level. It receives information getting from detector module. If the concentration of Vibrio is higher than engineered E. coli., which means LuxR-AHL complex is present, the anti-Vibrio gene will be transcribed. On the other hand, if the concentration of engineered E. coli. is higher than Vibrio, which means LuxR-AHL complex is absent, suicide gene will be transcribed to kill E. coli. itself. 
        </div>
        <div className='part'>
          Our initial effort is to design a gene circuit contain LacR to accomplish our goal. However, it turns out that there are some problems and drawbacks. While AHL presences, LacR should be produced and bound to pLac promoter to inhibit suicide gene being expressed. Yet, LacR can’t 100 % bind to pLac and this happens in most operons, so called leakage problem. Suicide gene may be expressed, and E. coli. will suicide even at high AHL concentration. This would cause the system to be collapsed, and the result became out of our expectations.
        </div>
        <div className='part'>
          We come up with a better solution for our kill switch by using riboswitch and Small Transcriptional-Activating RNA (STAR) to regulate our gene. STAR is a small RNA with its sequence completely complementary to riboswitch. Riboswitch is an intrinsic transcription terminator, a DNA segment with special secondary structure. It forms a hairpin structure and inhibit transcriptions of the genes downstream.1 Current study shows that riboswitch can regulate protein better than operon because of the higher affinity between STAR and riboswitch. In addition, STAR is smaller than regular proteins and it degrades faster than regular protein, therefore can respond to environment change more rapidly than operon.  
        </div>
        <div className='part'>
          We also use a small RNA segment called anti-STAR in our design. Its sequence is totally complementary to STAR, but has higher affinity than riboswitch does. When anti-SATR exists, STAR will bind to it prior to riboswitch. Consequently, when Lux-AHL trigger the transcription of anti-STAR, it binds to STAR and the riboswitch is turned off. When Lux-AHL is absent and anti-STAR isn’t generated, STAR will turn on the riboswitch.
        </div>
    </div>


const Controller = 
    <div>
        <div>
            We use two growth inhibitors to control populations of Vibrio and engineered E. coli. One is for inhibiting Vibrio, and another is for inhibiting engineered E. coli. At first, we would like to use anti-Vibrio substances in our design. However, our lab belongs to Bio-safety Level 1 (BSL1) and we can’t use real Vibrio in our experiments to test the toxicity of anti-Vibrio substance due to bio-safety concern. Therefore, we use colicin M to kill E. coli. (fake Vibrio) in order to prove our bio-control model. On the other hand, we use toxin small RNA (tsRNA) and endolysin as suicide substances to kill engineered E. coli. itself.
        </div>
        <div className='part'>
            <div>1.	Colicin M</div>
            <div>Colicin M blocks the biosynthesis of peptidoglycan (murein) and O-antigen. Colicin M contains activity (cma) and immune gene (cmi). The product of cmi is an immune protein, preventing colicin M to inhibit cell wall synthesis by binding to and thus neutralizing it. In addition, most colicins are released by autolysis, but colicin M lack a lysis gene.2-3 It has less tendency to cause death of producer cells, so it’s a suitable protein for the purpose of killing other bacteria without harming producer cells.</div>
        </div>
        
        <div className='part'>
            <div>2.	Toxic small RNA (tsRNA)</div>
            <div>Toxic small RNAs are small non-coding RNA. We use the tsRNA isolated from Burkholderia cenocepacia. Current study showed that it is toxic to the E. coli. host and reproducibly inhibit E. coli growth. TsRNA harbored a sequence that was complementary to the consensus ribosomal binding site (RBS). It is hypothesized that it might target target and misregulate essential genes within the E. coli cell. TsRNA cannot penetrate the bacterial cell from the outside, so it is unable to affect bacteria except E. coli. host cells.4 Additionally, producing tsRNA doesn’t require translational process, thus the respond time is more rapid. As a result, tsRNA become an ideal suicide substance for our design.</div>
        </div>

        <div className='part'>
            <div>3. Endolysin</div>
            <div>Endolysin is a peptidoglycan hydrolase that are secreted by double-stranded DNA lambda phage to comprise the bacterial cell wall. It causes cell lysis by disrupting murein structure.</div>
        </div>
    </div>


const Reference = 
    <div>
        <div className='innerpart'>
          1. Chappell, J.; Takahashi, M. K.; Lucks, J. B., Creating small transcription activating RNAs. Nature chemical biology 2015, 11 (3), 214-20.
        </div>
        <div className='innerpart'>
          2. Harkness, R. E.; Olschlager, T., The biology of colicin M. FEMS microbiology reviews 1991, 8 (1), 27-41.
        </div>
        <div className='innerpart'>
          3. Zeth, K.; Römer, C.; Patzer, S. I.; Braun, V., Crystal Structure of Colicin M, a Novel Phosphatase Specifically Imported by Escherichia coli. The Journal of Biological Chemistry 2008, 283 (37), 25324-25331.
        </div>
        <div className='innerpart'>          
          4. Kimelman, A.; Levy, A.; Sberro, H.; Kidron, S.; Leavitt, A.; Amitai, G.; Yoder-Himes, D. R.; Wurtzel, O.; Zhu, Y.; Rubin, E. M.; Sorek, R., A vast collection of microbial genes that are toxic to bacteria. Genome research 2012, 22 (4), 802-9.
        </div>
    </div>



const Data = {
    viewbar: {
        Title: 'Wetlab',
        Subtitle : 'Detector, comparator, and controller module',
        image: Constant.image.topfull.wetlab_overview
    },
    content: {
        Introduction: Introduction,
        parts:[
            { Title: 'Cell Population Controlling System',
              Description: Control
            },
            { Title: 'Detector',
              Description: Detector
            },
            { Title: 'Comparator',
              Description: Comparator
            },
            { Title: 'Controller',
              Description: Controller
            },
            { Title: 'Reference',
              Description: Reference
            }

        ]
    }
}



class WetlabOverview extends Component {
    render() {
        return (
            <Content {...Data}/>
        );
    }
}

export default WetlabOverview;