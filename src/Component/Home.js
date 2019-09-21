import React from 'react'
import FaceService from "../Service/FaceService";


export default class Home extends React.Component
{

    constructor() {
        super();
        this.createModule = this.createModule.bind(this);
        this.fs = FaceService.instance;
        this.state = {

            faces: []

        };
    }

    createModule() {

        let f = {l: "[-0.19520480930805206, 0.00755416601896286, 0.04316201061010361, 0.004198825918138027, -0.0944027304649353, 0.06498067080974579, -0.025299713015556335, -0.1507839560508728, 0.12697835266590118, -0.17227321863174438, 0.21984124183654785, 0.03999124467372894, -0.20328253507614136, -0.12858432531356812, 0.021528057754039764, 0.09462471306324005, -0.1866593360900879, -0.22171244025230408, -0.006525367498397827, -0.04317988455295563, -0.003930446691811085, -0.10855274647474289, 0.06091634929180145, 0.04882536083459854, -0.1967497020959854, -0.4063337743282318, -0.11931943148374557, -0.09980294853448868, 0.08653159439563751, -0.07979157567024231, -0.04049545153975487, -0.017148472368717194, -0.29066410660743713, 0.011358030140399933, -0.04949533939361572, 0.08721838891506195, 0.034552786499261856, 0.00615759938955307, 0.16790413856506348, -0.07692845165729523, -0.21199393272399902, -0.07882316410541534, 0.04003944247961044, 0.19986993074417114, 0.11529800295829773, 0.06701144576072693, 0.02676980197429657, -0.011034592986106873, 0.06336761265993118, -0.22346004843711853, 0.12403475493192673, 0.10314691811800003, 0.09449459612369537, -0.03891671821475029, 0.02966766059398651, -0.16462257504463196, -0.0786508321762085, 0.06432928889989853, -0.07494645565748215, 0.08709490299224854, 0.019837498664855957, -0.02923566848039627, -0.07552700489759445, -0.06056316941976547, 0.25110572576522827, 0.1499369889497757, -0.08821551501750946, -0.16413599252700806, 0.24760949611663818, -0.13635742664337158, 0.008646085858345032, 0.05029483512043953, -0.09295386075973511, -0.1792607605457306, -0.2704450786113739, 0.017234861850738525, 0.4310072660446167, 0.12227021157741547, -0.14803211390972137, 0.04139970242977142, -0.12629061937332153, 0.00982329249382019, 0.0365462601184845, 0.06198359280824661, -0.07573013752698898, 0.098631851375103, -0.11166279017925262, 0.09686772525310516, 0.20884066820144653, 0.034011341631412506, -0.03421589732170105, 0.14087063074111938, -0.021650802344083786, 0.046169716864824295, 0.07198222726583481, 0.047083742916584015, -0.07220640033483505, -0.02223985642194748, -0.1857866644859314, -0.016304492950439453, 0.03860659897327423, 0.005988702178001404, 0.014153018593788147, 0.12368093430995941, -0.13167500495910645, 0.1379397213459015, 0.005942434072494507, -0.03391242027282715, 0.018437601625919342, 0.085354283452034, -0.14394468069076538, -0.07194961607456207, 0.0823625698685646, -0.28946977853775024, 0.19709333777427673, 0.16919204592704773, 0.017426718026399612, 0.16697253286838531, 0.08437687158584595, 0.07197219133377075, 0.011223278939723969, -0.011387914419174194, -0.19819945096969604, -0.0810660794377327, 0.058873485773801804, -0.124810591340065, 0.07818529009819031, 0.041069380939006805]",
            r: "[-0.1312866359949112, 0.011324755847454071, 0.07096210867166519, -0.05488399416208267, -0.1161489486694336, 0.004331640899181366, -0.05523917078971863, -0.1654249131679535, 0.16273435950279236, -0.195343017578125, 0.2258549928665161, 0.005823273211717606, -0.18091776967048645, -0.1095540001988411, -0.006204597651958466, 0.1029733344912529, -0.17774730920791626, -0.21788471937179565, -0.03082078881561756, -0.012438759207725525, -0.0206056609749794, -0.0797649398446083, 0.06643253564834595, 0.06477899104356766, -0.1919073611497879, -0.43921440839767456, -0.12864290177822113, -0.07622595131397247, 0.045568451285362244, -0.03464658558368683, -0.03222450986504555, 0.03458603098988533, -0.31968003511428833, -0.00015573948621749878, -0.04833308607339859, 0.1027877926826477, -0.026630446314811707, 0.0022486895322799683, 0.1402628868818283, -0.020571790635585785, -0.23156678676605225, -0.0807877779006958, 0.058023177087306976, 0.15931180119514465, 0.1942063570022583, 0.07737670838832855, 0.067788265645504, -0.051845163106918335, 0.05934927612543106, -0.24598091840744019, 0.09819568693637848, 0.12603910267353058, 0.06425957381725311, 0.0049453601241111755, 0.05226268619298935, -0.16097450256347656, -0.06499975919723511, 0.07437003403902054, -0.08543996512889862, 0.048651568591594696, 0.03122951090335846, -0.016367916017770767, -0.10241332650184631, -0.06090746819972992, 0.30313625931739807, 0.19009487330913544, -0.0883258730173111, -0.176904559135437, 0.27717867493629456, -0.19066762924194336, -0.03548714891076088, 0.05422988906502724, -0.08781267702579498, -0.13737398386001587, -0.28065505623817444, -0.025251418352127075, 0.38967522978782654, 0.09346269071102142, -0.1138964295387268, 0.06869235634803772, -0.1432528793811798, 0.02318067103624344, -0.010439172387123108, 0.047174639999866486, -0.0783744752407074, 0.1035028025507927, -0.07903599739074707, 0.0640207827091217, 0.22116267681121826, 0.02222210168838501, 0.00885755568742752, 0.16942237317562103, -0.03754429519176483, 0.03749372065067291, 0.08727514743804932, 0.014514714479446411, -0.08959603309631348, -0.016852423548698425, -0.18868927657604218, -0.02141249179840088, 0.02359519898891449, 0.01100478507578373, 0.0032370388507843018, 0.099110446870327, -0.15745192766189575, 0.16266311705112457, -0.030430138111114502, -0.031743548810482025, 0.033893242478370667, 0.040315136313438416, -0.12221257388591766, -0.07762529700994492, 0.10187067091464996, -0.2866289019584656, 0.21732176840305328, 0.12439490854740143, 0.015102923847734928, 0.16709831357002258, 0.09366527944803238, 0.09485657513141632, -0.021117419004440308, -0.01806621253490448, -0.18590271472930908, -0.06895116716623306, 0.042872313410043716, -0.13469350337982178, 0.06301842629909515, 0.03503096103668213]"}
        this.fs.createFaces(f).then((res)=>{console.log(res)})



    }

    render(){

        return(

            <div>
                <h1> This is the home page</h1>
                <button onClick={this.createModule}>
                    submit
                </button>
            </div>


        )


    }

}