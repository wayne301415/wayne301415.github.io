/**
* Template Name: Regna - v4.3.0
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

var x =0;
var y =0;
var filled =Array(9);
const medicine =[["金銀花", "黃連",],
               ["甘草", "薄荷"],
               ["三七", "人參"],
               ["肉桂", "生薑"]];

var answerSubmitted =false;


function selected(property, value, btnNum)
{
  
  if(btnNum === "L-1")
  {
    if(window.document.getElementById("video").classList.contains("notseen")){
      window.document.getElementById("video").classList.remove("notseen");
    }
    window.document.getElementById("video-player").src="https://www.youtube.com/embed/HIcSWuKMwOw?autoplay=1&mute=0&loop=1&playlist=HIcSWuKMwOw";
    let subtitle =window.document.getElementById("qLSubtitle");
    subtitle.innerHTML ="Rick Astley may never begin to sing, but one thing is for sure: He's never gonna give it up."
  }
  else if(btnNum === "L-2")
  {
    if(window.document.getElementById("video").classList.contains("notseen")){
      window.document.getElementById("video").classList.remove("notseen");
    }
    window.document.getElementById("video-player").src="https://www.youtube.com/embed/9k00r6GnBpg?autoplay=1&mute=0&loop=1&playlist=9k00r6GnBpg";
    let subtitle =window.document.getElementById("qLSubtitle");
    subtitle.innerHTML ="貓~咪大戰爭 六~周~年～"
  }

  if(answerSubmitted)
      return;

  let target =window.document.getElementById("q"+btnNum);

  if(target.classList.contains("clicked"))
      return;
  
  if(filled[parseInt(btnNum.substring(0,1), 10)-1])
    if(property == 0)
      x =x-1+value;
    else if(property == 1)
      y =y-1+value;
  
  target.classList.add("clicked");
  
  if(btnNum.substring(2) == '1')
    target.nextElementSibling.classList.remove("clicked");
  else
    target.previousElementSibling.classList.remove("clicked");

  if(property == 0)
    x +=value;
  else if(property == 1)
    y +=value;
  
  if(btnNum.substring(0,1) == "L")
    filled[filled.length-1] =true;
  else
    filled[parseInt(btnNum.substring(0,1), 10)-1] =true;

  /*alert(x+", "+y);*/
}



function openDialog(index)
{
   let picture =window.document.getElementById("medicineIntroDialogPic");
   let description1 =window.document.getElementById("medicineIntroDialogDes1");
   let description2 =window.document.getElementById("medicineIntroDialogDes2");
   let description3 =window.document.getElementById("medicineIntroDialogDes3");
   let description4 =window.document.getElementById("medicineIntroDialogDes4");
   
   if(index === "GueiJhih")
   {
      picture.src ="assets/img/medicine/GueiJhih.jpg";
      description1.innerHTML ="樟科植物肉桂之乾燥嫩枝。";
      description2.innerHTML ="性味辛、甘、溫。歸心、肺、膀胱經。";
      description3.innerHTML ="為辛溫解表藥，能發汗散寒、溫通經脈、助陽化氣。主治風寒感冒、風寒濕痹，及脘腹冷痛、血寒經閉。";
      description4.innerHTML ="作為方劑<b style ='color: #2dc997'>桂枝湯</b>之君藥，用於一般風寒感冒。";
   }
   else if(index === "MaHuang")
   {
      picture.src ="assets/img/medicine/MaHuang.jpg";
      description1.innerHTML ="麻黃科植物草麻黃、中麻黃或木賊麻黃之乾燥草質莖。";
      description2.innerHTML ="性味辛、微苦、溫。歸肺、膀胱經。";
      description3.innerHTML ="為辛溫解表藥，發汗能力甚強，亦能宣肺平喘，利水消腫。主治風寒感冒、風濕浮腫、胸悶喘咳、哮喘。";
      description4.innerHTML ="作為方劑<b style ='color: #2dc997'>麻黃湯</b>之君藥，用於風寒感冒。然其發汗力強，表虛自汗、陰虛盜汗及肺腎虛者慎用。";
   }
   else if(index === "ShengJiang")
   {
      picture.src ="assets/img/medicine/ShengJiang.jpg";
      description1.innerHTML ="薑科植物薑之新鮮根莖。";
      description2.innerHTML ="性味辛、溫。歸肺、脾、胃經。";
      description3.innerHTML ="為辛溫解表藥，亦有溫中止嘔、溫肺止咳之效。主治風寒感冒、胃寒嘔吐、風寒咳嗽。";
      description4.innerHTML ="陰虛火旺及熱盛者忌用。";
   }
   else if(index === "ChaiHu")
   {
      picture.src ="assets/img/medicine/ChaiHu.jpg";
      description1.innerHTML ="繖形科植物柴胡或狹葉柴胡之乾燥根。有北柴胡及南柴胡。";
      description2.innerHTML ="性味苦、辛、微寒。歸肝、膽經。";
      description3.innerHTML ="為辛涼解表藥，亦能升陽舉陷，然更常取其疏肝解鬱之效。主治感冒發熱、肝鬱氣滯、寒熱往來、胸脅脹痛、子宮脫垂、脫肛。";
      description4.innerHTML ="作為方劑<b style ='color: #2dc997'>逍遙散</b>之君藥，用於肝脾不調、胸悶憂鬱、消化不良、發熱。";
   }
   else if(index === "BoHe")
   {
      picture.src ="assets/img/medicine/BoHe.jpg";
      description1.innerHTML ="唇形科植物薄荷及同屬近緣植物之乾燥地上部分。";
      description2.innerHTML ="性味辛、涼。歸肺、肝經。";
      description3.innerHTML ="為辛涼解表藥，能疏散風熱，清利頭目，利咽，透疹，疏肝解鬱。主治風熱感冒、頭痛目赤、咽喉腫痛、麻疹風疹、肝鬱氣滯、胸悶脅痛。";
      description4.innerHTML ="性涼，體虛多汗者不適用。";
   }
   else if(index === "GeGen")
   {
      picture.src ="assets/img/medicine/GeGen.jpg";
      description1.innerHTML ="豆科植物野葛或甘葛藤之乾燥根。";
      description2.innerHTML ="性味甘、辛、涼。歸脾、胃經。能解肌退熱，透發麻疹，生津止渴，升陽止瀉。";
      description3.innerHTML ="為辛涼解表藥，主治外感、麻疹初起，消渴，熱泄熱痢，脾虛泄瀉。";
      description4.innerHTML ="作為方劑<b style ='color: #2dc997'>葛根湯</b>之君藥，處理兼有頭項強痛的外感表證。";
   }
   else if(index === "ShihGao")
   {
      picture.src ="assets/img/medicine/ShihGao.jpg";
      description1.innerHTML ="含水硫酸鈣 (CaSO<sub>4</sub>‧2H<sub>2</sub>O) 之礦石。";
      description2.innerHTML ="性味辛、甘、大寒。歸肺、胃經。能清裡熱，除煩止渴，收斂生肌。";
      description3.innerHTML ="為清熱瀉火藥，主治外感、麻疹初起，壯熱煩渴，肺熱喘咳，胃火牙痛，瘡瘍潰爛，疹浸淫，水火燙傷。";
      description4.innerHTML ="大寒易傷脾胃，脾胃虛寒及陰虛內熱者忌用。";
   }
   else if(index === "JinYinHua")
   {
      picture.src ="assets/img/medicine/JinYinHua.jpg";
      description1.innerHTML ="忍冬科植物忍冬之乾燥花蕾或待初開的花。初開白，而後變黃，故稱金銀。";
      description2.innerHTML ="性味甘、寒。歸肺、心、胃經。能清熱解毒，疏散風熱。";
      description3.innerHTML ="為清熱解毒藥，主治癰腫疔瘡，外感風熱，溫病初起，熱毒血痢。治療癰瘡初起腫痛者，可單用煎服，或以渣敷於患處。";
      description4.innerHTML ="治癰腫疔瘡陽證之要藥，價值高，亦時常與銀翹配伍使用。然其性涼，脾胃虛寒及氣虛瘡瘍膿清者忌用。";
   }
   else if(index === "LianChao")
   {
      picture.src ="assets/img/medicine/LianChao.jpg";
      description1.innerHTML ="木犀科植物連翹之乾燥果實。";
      description2.innerHTML ="性味苦、微寒。歸肺、心、小腸經。能清熱解毒，消癰散結，疏散風熱。";
      description3.innerHTML ="為清熱解毒藥，主治癰腫瘡毒，溫病初起，熱淋澀痛。";
      description4.innerHTML ="「諸痛癢瘡，皆屬於心。」連翹主入心經，能清心火、解瘡毒、散血消結，是為「瘡家聖藥」。與金銀花組成方劑<b style ='color: #2dc997'>銀翹散</b>之基礎，治外感風熱。";
   }
   else if(index === "HuangLian")
   {
      picture.src ="assets/img/medicine/HuangLian.jpg";
      description1.innerHTML ="毛茛科植物黃連 、三角葉黃連或雲連之乾燥根莖。";
      description2.innerHTML ="性味苦、寒。歸心、脾、胃、肝、膽、大腸經。能瀉心火、中焦火，亦能解毒。";
      description3.innerHTML ="為清熱燥濕藥，主治脾胃大腸濕熱，瀉痢嘔吐，狂熱心煩，癰疽疔毒，皮膚濕瘡。";
      description4.innerHTML ="與黃芩、黃柏合稱「三黃」，分清上中下三焦實火，如方劑<b style ='color: #2dc997'>黃連解毒湯</b>。然其性大苦大寒，又苦燥傷津，肺胃虛寒及陰虛津傷者慎用。";
   }
   else if(index === "DanPi")
   {
      picture.src ="assets/img/medicine/DanPi.jpg";
      description1.innerHTML ="即牡丹皮，毛茛科植物牡丹之乾燥根皮。";
      description2.innerHTML ="性味苦、辛、微寒。歸心、肝、腎經。能清熱涼血，活血散瘀。";
      description3.innerHTML ="為清熱涼血藥，主治斑疹吐衄，溫邪傷陰，陰虛發熱，血滯經閉，痛經，跌打損傷，癰瘍腫毒，腸癰腹痛。";
      description4.innerHTML ="血虛有寒者慎用。因其活血效果，月經過多及孕婦不宜。";
   }
   else if(index === "ChingHao")
   {
      picture.src ="assets/img/medicine/ChingHao.jpg";
      description1.innerHTML ="菊科植物黃花蒿之乾燥地上部分。";
      description2.innerHTML ="性味苦、辛、寒。歸肝、膽、腎經。能清陰虛潮熱，除骨蒸，解暑，截瘧。";
      description3.innerHTML ="為清虛熱藥，主治清溫病後期，溫邪傷陰，餘熱未清，或用於瘧疾寒熱。";
      description4.innerHTML ="性寒，脾胃虛弱，腸滑泄瀉者忌服。";
   }
   else if(index === "RenShen")
   {
      picture.src ="assets/img/medicine/RenShen.jpg";
      description1.innerHTML ="五加科植物人參之乾燥根及根莖。";
      description2.innerHTML ="性味甘、微苦、微溫。歸脾、肺、心經。能大補元氣，補脾益肺，生津，安神。";
      description3.innerHTML ="為補氣藥，能治氣津兩傷，氣虛欲脫，脈微欲絕之重危證候，或一切氣虛證候。";
      description4.innerHTML ="補氣效果極佳，出現在<b style ='color: #2dc997'>四君子湯</b>等補氣之方劑，是少數可久服的上等藥材。然而人參惡萊菔子 (蘿蔔籽)，與蘿蔔或茶同服會影響補力。";
   }
   else if(index === "HuangChi")
   {
      picture.src ="assets/img/medicine/HuangChi.jpg";
      description1.innerHTML ="豆科植物蒙古黃耆或膜莢黃耆之乾燥根。";
      description2.innerHTML ="性味甘，微溫。歸脾、肺經。能補氣升陽，益衛固表，利水消腫，托瘡生肌。";
      description3.innerHTML ="為補氣藥，主治脾胃氣虛，中氣下陷，表虛自汗，氣虛水濕失運之浮腫、小便不利。";
      description4.innerHTML ="除補氣外，能升陽舉陷、益衛固表為黃耆的特色，如治療表虛、自汗之方劑<b style ='color: #2dc997'>玉屏風散</b>便以黃耆為君藥。而黃耆與甘草外表相似，但黃耆纖維較柔軟，色也較淡。";
   }
   else if(index === "GanTsao")
   {
      picture.src ="assets/img/medicine/GanTsao.jpg";
      description1.innerHTML ="豆科植物甘草、脹果甘草或光果甘草之乾燥根及根莖。";
      description2.innerHTML ="性味甘、平。歸心、肺、脾、胃經。能緩急止痛，調和藥性，清熱，益氣補中，祛痰止咳。";
      description3.innerHTML ="甘草為補氣藥，主治心氣不足，脘腹、四肢攣急作痛。炙甘草 (右下者) 加強了補氣力道，生甘草則偏於清熱，治咽喉腫痛。此外甘草在許多方劑中扮演調和諸藥的角色。";
      description4.innerHTML ="甘草次酸有抗利尿作用，久服易引起水腫問題，須注意。含在嘴中有甘味，此亦是與黃耆區分之法。";
   }
   else if(index === "ShouDi")
   {
      picture.src ="assets/img/medicine/ShouDi.jpg";
      description1.innerHTML ="為生地黃 (地黃之新鮮或乾燥塊根) 加黃酒拌蒸，至內外色黑、油潤，或直接蒸至黑潤而成。";
      description2.innerHTML ="性味甘、微溫，歸肝、腎經。能補血滋陰，益精填髓。";
      description3.innerHTML ="為補血藥，主治血虛萎黃，眩暈，心悸失眠，月經不調，崩漏，腎陰不足，肝腎精血虧虛。";
      description4.innerHTML ="熟地經九蒸九曬，補血能力強，甚能填精，補血滋陰之方劑<b style ='color: #2dc997'>四物湯</b>、<b style ='color: #2dc997'>六味地黃丸</b>皆以其為君藥。而生地黃則為清熱涼血藥。";
   }
   else if(index === "DangGuei")
   {
      picture.src ="assets/img/medicine/DangGuei.jpg";
      description1.innerHTML ="繖形科植物當歸之乾燥根。";
      description2.innerHTML ="性味甘、辛、溫。歸肝、心、脾經。能補血，活血，調經，止痛，潤腸。";
      description3.innerHTML ="為補血藥，主治心肝血虛，面色萎黃，眩暈心悸，月經不調，痛經，經閉，血虛腸燥便秘。";
      description4.innerHTML ="是補血能力也相當好的藥材，為婦科補血調經之要藥，亦在方劑<b style ='color: #2dc997'>四物湯</b>中與熟地共同補血。此外潤腸通便的功效也是其一大特色。";
   }
   else if(index === "GouChi")
   {
      picture.src ="assets/img/medicine/GouChi.jpg";
      description1.innerHTML ="茄科植物枸杞或寧夏枸杞之乾燥成熟果實。";
      description2.innerHTML ="性味甘、平。歸肝、腎經。能補肝腎，以及明目。";
      description3.innerHTML ="為補陰藥，主治肝腎不足，腰酸遺精，頭暈目眩，視力減退，內障目昏，消渴。";
      description4.innerHTML ="枸杞補血補陰，入肝經，能明目為其特色，特別對症於肝血虛之目眩眼痠。如方劑<b style ='color: #2dc997'>杞菊地黃丸</b>除滋陰外，添加的枸杞及菊花便為其帶來明目之效。";
   }
   else if(index === "BanSia")
   {
      picture.src ="assets/img/medicine/BanSia.jpg";
      description1.innerHTML ="天南星科植物半夏之乾燥塊莖。";
      description2.innerHTML ="性味辛、溫。具毒性。歸脾、胃、肺經。";
      description3.innerHTML ="為祛痰藥，能燥濕化痰，降逆止嘔，消痞散結。主治濕痰寒痰、胃氣上逆、心下痞、梅核氣。";
      description4.innerHTML ="與陳皮構成方劑<b style ='color: #2dc997'>二陳湯</b>之基底，治一切痰濕。此藥有毒不可多服，然生薑能抑制其毒性，故常搭配使用。身燥者亦須慎用。";
   }
   else if(index === "FuLing")
   {
      picture.src ="assets/img/medicine/FuLing.jpg";
      description1.innerHTML ="多孔菌科真菌茯苓的茵核，多寄生於赤松或馬尾松等樹根上。反覆晾至全乾後生用。";
      description2.innerHTML ="性味甘、淡、平。歸心、脾、腎經。";
      description3.innerHTML ="為利水滲濕藥，同時也兼具健脾安神之效。主治各種水腫、脾虛水泛、水濕不運等水症。";
      description4.innerHTML ="茯苓生長時，天然抱有松根者稱茯神，即圖中右下方者。其寧心安神之功特別突出，可用於心神不安、驚悸、健忘等症狀。";
   }
   else if(index === "RouGuei")
   {
      picture.src ="assets/img/medicine/RouGuei.jpg";
      description1.innerHTML ="樟科植物肉桂之乾燥樹皮。習稱「桂皮」。";
      description2.innerHTML ="性味辛、甘、大熱。歸腎、脾、心、肝經。能補火助陽，散寒止痛，溫經通脈。";
      description3.innerHTML ="為溫裡藥，主治腎陽衰弱，心腹冷癰，寒疝作痛，寒痹腰痛、胸痹、陰疽，閉經，痛經。";
      description4.innerHTML ="肉桂之樹皮作為溫裡藥，枝條 (桂枝) 則為辛溫解表藥。其性大熱動血，又會降低血壓，孕婦及低血壓者不宜。";
   }
   else if(index === "ChuanSyong")
   {
      picture.src ="assets/img/medicine/ChuanSyong.jpg";
      description1.innerHTML ="繖形科植物川芎之乾燥根莖。";
      description2.innerHTML ="性味辛、溫。歸肝、膽、心包經。能活血行氣，祛風止痛。";
      description3.innerHTML ="為活血化瘀藥，主治血瘀氣滯之痛證，頭痛，風濕痹痛，中風。";
      description4.innerHTML ="補氣、補血藥常搭配行氣、行血藥，方使補而不滯，如補血方劑<b style ='color: #2dc997'>四物湯</b>裡便有川芎。而川芎活血行血，孕婦及月經過多者應慎用。";
   }
   else if(index === "SanChi")
   {
      picture.src ="assets/img/medicine/SanChi.jpg";
      description1.innerHTML ="五加科植物三七之乾燥根及根莖。生長三年後方可採收。";
      description2.innerHTML ="性味甘、微苦、溫。歸肝、胃經。能化瘀止血，活血定痛。";
      description3.innerHTML ="為補血藥，主治內外出血有瘀，跌打損傷，瘀滯疼痛，缺血性腦血管病，血瘀型慢性肝炎，子宮脫垂。各種內外出血證，以三七單味內服外用即可奏效。";
      description4.innerHTML ="三七為傷科要藥，止血散瘀之藥效卓著，止血而不留瘀，化瘀而不傷正，誠為血證良藥，又因生長時長，價值高昂。";
   }
   else if(index === "DaHuang")
   {
      picture.src ="assets/img/medicine/DaHuang.jpg";
      description1.innerHTML ="蓼科植物掌葉大黃 (北大黃)、唐古特大黃或藥用大黃 (南大黃) 去外皮之乾燥根及根莖。";
      description2.innerHTML ="性味苦、寒。歸脾、胃、大腸、肝、心包經。能瀉下攻積，清熱瀉火，止血，解毒，活血祛瘀。";
      description3.innerHTML ="為攻下藥，主治大便秘結，胃腸積滯，血熱妄行，熱毒瘡瘍，瘀血證。藉瀉下排除體內、腸內之濕熱。";
      description4.innerHTML ="運用方劑如<b style ='color: #2dc997'>大承氣湯</b>，治熱病造成之燥屎內結，脘腹痞滿，大便不通。為強瀉藥，脾胃虛弱者、婦女懷孕、月經期、哺乳期應忌用。";
   }

  let dialogElem=document.getElementById("medicineIntroDialog");	
  dialogElem.showModal();
 }

 

function init()
{
    let check =function()
    {
        let resultSec =window.document.getElementById("resultSec");
        let result =window.document.getElementById("result");
        let result2 =window.document.getElementById("result2");
        let resultsub =window.document.getElementById("resultsub");

        resultSec.classList.remove("notseen");

        let allFilled =true;
        
        for(let i =0; i < filled.length; ++i)
          if(filled[i] != true)
          {
            allFilled =false;
            break;
          }
        
        if(allFilled)
        {
          let newY =Math.floor(y/2);
          result.innerHTML ="你是 &nbsp;";
          result2.innerHTML =medicine[x][newY];
          
          let medicineBoxes =window.document.getElementsByClassName("medicine-box");
          medicineBoxes[2*x+newY].classList.remove("notseen");
          resultsub.innerHTML ="快來看看簡介吧";

          /*let buttons =window.document.getElementsByClassName("choice-btn");
          for(let i =0; i < buttons.length; ++i)
            buttons[i].style.pointerEvents ="none";*/
          
          let playAgainContainer =window.document.getElementsByClassName("playAgainContainer");
          playAgainContainer[0].classList.remove("notseen");
          
          answerSubmitted =true;
        }
        else
        {
          result.innerHTML ="還沒填完喔 !";
          result2.innerHTML ="";
          resultsub.innerHTML ="是不是有漏填的呢";
        }
    };
    
    let checkBtn =window.document.getElementById("checkBtn");
    checkBtn.addEventListener("click", check);

    let playAgain =function()
    {
      answerSubmitted =false;

      let playAgainContainer =window.document.getElementsByClassName("playAgainContainer");
      playAgainContainer[0].classList.add("notseen");
      
      let resultSec =window.document.getElementById("resultSec");
      resultSec.classList.add("notseen");

      let medicineBoxes =window.document.getElementsByClassName("medicine-box");
      medicineBoxes[2*x+Math.floor(y/2)].classList.add("notseen");
      
      x =0;
      y =0;

      let buttons =window.document.getElementsByClassName("choice-btn");
      for(let i =0; i < buttons.length; ++i)
        buttons[i].classList.remove("clicked");
      
      filled =Array(9);

      window.document.getElementById("video").classList.add("notseen");
      window.document.getElementById("video-player").src="";
     
      let subtitle =window.document.getElementById("qLSubtitle");
      subtitle.innerHTML ="你喜歡以下哪個 ?";

    };

    let playAgainButton =window.document.getElementById("playAgain");
    let startButton =window.document.getElementsByClassName("btn-get-started");
    playAgainButton.addEventListener("click", playAgain);
    startButton[0].addEventListener("click", playAgain);

    let closeDialog =function()
    {
      let dialogElem=document.getElementById("medicineIntroDialog");	
      dialogElem.close();
    };
 
    let dialogCloseBtn =window.document.getElementsByClassName("dialogCloseBtn");

    for(let i =0; i < dialogCloseBtn.length; ++i)
      dialogCloseBtn[i].addEventListener("click", closeDialog);
}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

