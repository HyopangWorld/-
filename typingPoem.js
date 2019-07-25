var poemNum;
var poemArray = [
  "오#감#도#$#시#제#$#1#$#호/1#3#인#의#아#해#가#도#로#로#질#주#하#오/(#길#은#막#다#른#골#목#길#이#적#당#하#오#)/제#1#의#아#해#가#무#섭#다#고#그#리#오/제#2#의#아#해#가#무#섭#다#고#그#리#오/제#3#의#아#해#가#무#섭#다#고#그#리#오/제#4#의#아#해#가#무#섭#다#고#그#리#오/제#5#의#아#해#가#무#섭#다#고#그#리#오/제#6#의#아#해#가#무#섭#다#고#그#리#오/제#7#의#아#해#가#무#섭#다#고#그#리#오/제#8#의#아#해#가#무#섭#다#고#그#리#오/제#9#의#아#해#가#무#섭#다#고#그#리#오/제#1#0#의#아#해#가#무#섭#다#고#그#리#오/제#1#1#의#아#해#가#무#섭#다#고#그#리#오/제#1#2#의#아#해#가#무#섭#다#고#그#리#오/제#1#3#의#아#해#가#무#섭#다#고#그#리#오/1#3#인#의#아#해#는#무#서#운#아#해#와#무#서#워#하#는#아#해#와#그#렇#게#뿐#이#모#였#소/(#다#른#사#정#은#없#는#것#이#차#라#리#나#았#소#)/그#중#에#1#인#의#아#해#가#무#서#운#아#해#라#도#좋#소/그#중#에#2#인#의#아#해#가#무#서#운#아#해#라#도#좋#소/그#중#에#2#인#의#아#해#가#무#서#워#하#는#아#해#라#도#좋#소/그#중#에#2#인#의#아#해#가#무#서#워#하#는#아#해#라#도#좋#소/(#길#은#뚫#린#골#목#이#라#도#적#당#하#오#)/1#3#인#의#아#해#가#도#로#로#질#주#하#지#아#니#하#여#도#좋#소",

  "이#런#시/역#사#를#$#하#노#라#고#$#땅#을#$#파#다#가#$#커#다#란#$#돌#을#$#하#나#$#끄#집#어#$#내#어#놓#고#$#보#니/도#무#지#$#어#디#서#인#가#$#본#$#듯#한#$#생#각#이#$#들#게#$#모#양#이#$#생#겼#는#데#$#목#도#들#이/그#걸#을#$#메#고#$#나#가#더#니#$#어#디#다#$#갖#다#$#버#리#고#$#온#$#모#양#이#길#래/쫒#아#나#가#$#보#니#$#위#험#하#기#$#짝#이#$#없#는#$#큰#$#길#가#더#라#./그#날#$#밤#에#$#한#$#소#나#기#$#하#였#으#니#$#필#시#$#그#$#돌#이#$#깨#끗#이/씻#겼#을#$#터#인#데#$#그#$#이#틑#날#$#가#$#보#니#까#$#변#괴#로#다#$#간#데#온#데#$#없#더#라/어#떤#$#돌#이#$#와#서#$#그#돌#을#$#업#어#$#갔#을#까#$#나#는#$#참/이#런#$#처#량#한#$#생#각#에#서#$#아#래#와#$#같#은#$#작#문#을#$#지#었#다#./내#가#$#그#다#지#$#사#랑#하#던#$#그#대#여#$#내#$#한#평#생#에#$#차#마#$#그#대#를#$#잊#을#$#수#$#없#소#이#다#./내#$#차#례#에#$#못#$#올#$#사#랑#인#$#줄#은#$#알#면#서#도#$/나#$#혼#자#는#$#꾸#준#히#$#생#각#하#리#다/자#$#그#러#면#$#내#내#$#어#여#쁘#소#서#./어#떤#$#돌#이#$#내#$#얼#굴#을#$#물#끄#러#미#$#치#어#다#$#보#는#$#것#만/같#아#서#$#이#런#$#시#는#$#그#만#$#찢#어#$#버#리#고#$#싶#더#라#.",

  "거#울/거#울#속#에#는#소#리#가#없#소/저#렇#게#까#지#조#용#한#세#상#은#참#없#을#것#이#오/거#울#속#에#도#내#게#귀#가#있#소/내#말#을#못#알#아#듣#는#딱#한#귀#가#두#개#나#있#소/거#울#속#의#나#는#왼#손#잡#이#오/내#악#수#를#받#을#줄#모#르#는#-#악#수#를#모#르#는#왼#손#잡#이#요/거#울#때#문#에#나#는#거#울#속#의#나#를#만#져#보#지#를#못#하#는#구#료#마#는/거#울#이#아#니#었#던#들#내#가#어#찌#거#울#속#의#나#를#만#나#보#기#라#도#했#겠#소/나#는#지#금#거#울#을#안#가#졌#소#마#는#거#울#속#에#는#늘#거#울#속#의#내#가#있#소/잘#은#모#르#지#만#외#로#된#사#업#에#골#몰#할#게#요/거#울#속#의#나#는#참#나#와#는#반#대#요#마#는/또#괘#닮#았#소/나#는#거#울#속#의#나#를#근#심#하#고#진#찰#할#수#없#으#니#퍽#섭#섭#하#오",

  "진#단#0#:#1/혹#은#환#자#의#용#태#에#관#한#문#제#./１#１#１#１#１#１#１#１#１#１#ㆍ/２#２#２#２#２#２#２#２#２#ㆍ#１/３#３#３#３#３#３#３#３#ㆍ#２#２/４#４#４#４#４#４#４#ㆍ#３#３#３/５#５#５#５#５#５#ㆍ#４#４#４#４/６#６#６#６#６#ㆍ#５#５#５#５#５/７#７#７#７#ㆍ#６#６#６#６#６#６/#８#８#８#ㆍ#７#７#７#７#７#７#７/９#９#ㆍ#８#８#８#８#８#８#８#８/０#ㆍ#９#９#９#９#９#９#９#９#９/ㆍ#０#０#０#０#０#０#０#０#０#０/진#단#$#0#$#:#$#1#$#2#6#.#1#0#.#1#9#3#1/이#상#$#책#임#의#사#$#이#$#상",

  "건#축#무#한#육#면#각#체/부#제#:#신#기#한#$#것#들#이#있#는#$#상#점#에#서/사#각#형#의#$#내#부#의#$#사#각#형#의#$#내#부#의#$#사#각#형#의#$#내#부#의#$#사#각#형#의#$#내#부#의#$#사#각#형#./사#각#이#$#난#$#원#운#동#의#$#사#각#이#$#난#$#원#운#동#의#$#사#각#이#$#난#$#원#./비#누#가#$#통#과#하#는#$#혈#관#의#$#비#눗#내#를#$#투#시#하#는#$#사#람/#$#지#구#를#$#모#형#으#로#$#만#들#어#진#$#지#구#의#를#$#모#형#으#로#$#만#들#어#진#$#지#구#./거#세#된#$#양#말#.#$#(그#$#여#인#의#$#이#름#은#$#워#어#즈#였#다#)/빈#혈#면#포#.#$#당#신#의#$#얼#굴#빛#깔#도#$#참#새#다#리#$#같#습#네#다#./평#행#사#변#형#$#대#각#선#$#방#향#을#$#추#진#하#는#$#막#대#한#$#중#량#./마#르#세#이#유#의#$#봄#을#$#해#람#한#$#코#티#향#수#가#$#맞#이#한#$#동#양#의#$#가#을#./쾌#청#의#$#하#늘#에#$#봉#유#하#는#$#Z#백#호#.#$#회#충#양#약#이#라#고#$#쓰#어#져#$#있#다#./옥#상#정#원#.#$#원#후#를#$#흉#내#내#고#$#있#는#$#마#드#무#아#젤#./만#곡#된#$#직#선#을#$#직#선#으#로#$#질#주#하#는#$#낙#체#공#식#./시#계#$#문#자#반#에#$#X#Ⅱ에#$#내#려#진#$#두#$#개#의#$#젖#은#$#황#혼#./도#아#의#$#내#부#의#$#도#아#의#$#내#부#의#$#조#롱#의#$#내#부#의#$#카#나#리#아#의#$#내#부#의#$#감#살#문#호#의#$#내#부#의#$#인#사/식#당#의#$#문#간#에#$#방#금#$#도#착#한#$#자#웅#과#$#같#은#$#붕#우#가#$#헤#어#진#다#./검#정#$#잉#크#가#$#엎#질#러#진#$#각#설#탕#이#$#삼#륜#차#에#$#실#린#다#./명#함#을#$#짖#밞#는#$#군#용#장#화#.#$#가#구#를#$#질#구#하#는#$#조#화#금#련#./위#에#서#$#내#려#오#고#$#밑#에#서#$#올#라#가#고#$#위#에#서#$#내#려#오#고/밑#에#서#$#올#라#간#$#사#람#은#$#밑#에#서#$#올#라#가#지#$#아#니#한/위#에#서#$#내#려#오#지#$#아#니#한#$#밑#에#서#$#올#라#가#지#$#아#니#한/위#에#서#$#내#려#오#지#$#아#니#한#$#사#람#./저#$#여#자#의#$#하#반#은#$#남#자#의#$#상#반#에#$#흡#사#하#다#./(나#는#$#애#처#로#운#$#해#후#에#$#애#처#로#워#하#는#$#나#)/사#각#이#$#난#$#케#-스#가#$#걷#기#$#시#작#이#다#./(소#름#끼#치#는#$#일#이#다#)/라#지#에#-터#의#$#근#방#에#서#$#승#천#하#는#$#굳#빠#이#./바#깥#은#$#비#.#$#발#광#어#류#의#$#군#집#이#동.",

  "꽃#나#무/벌#판#한#복#판#에#꽃#나#무#하#나#가#있#소#./근#처#에#는#꽃#나#무#가#하#나#도#없#소/꽃#나#무#는#제#가#생#각#하#는#꽃#나#무#를/열#심#으#로#생#각#하#는#것#처#럼/열#심#으#로#꽃#을#피#워#가#지#고#섰#소#./꽃#나#무#는#제#가#생#각#하#는#꽃#나#무#에#게#갈#수#없#소#./나#는#막#달#아#났#소#./한#꽃#나#무#를#위#하#여#그#러#는#것#처#럼/나#는#참#그#런#이#상#스#러#운#흉#내#를#$#내#었#소."
  ];
var poemIndex;
var cnt, lastIndex;
var incorrect = 0;
var poemDiv;
var ta=0;
var min=0, sec=0;
var bgImg = [
  "url('./img/2.jpg')",
  "url('./img/19.jpg')",
  "url('./img/16.jpg')",
  "url('./img/20.jpg')",
  "url('./img/23.jpg')",
  "url('./img/15.jpg')"
];

window.onload = typingStart;

//선택한 글 가져오기
function typingStart(){
 var urlArray = window.location.href.split("?");
 var param = urlArray[1].split("=");
 //document.getElementById('poem').innerHTML = poemArray[(param[1]*1)];
 parsingPoem(poemArray[(param[1]*1)]);

 document.getElementById('poemBg').style.backgroundImage = bgImg[(param[1]*1)];

 //input text에 입력처리하기
 document.getElementById('typingText').onkeypress=wordsCheck;
 poemDiv = document.getElementById('poemDiv');

 var con = confirm("확인을 누르면 시작합니다.");
 if(con == true){
   setInterval(timerFunc, 1000);
 }
}

//가져온 글 파싱하기
var poemInArray;
function parsingPoem(poem){
  poemInArray = poem.split("/");
  poemIndex = new Array(poemInArray.length);
  for(var i = 0 ; i < poemInArray.length ; i ++){
    poemIndex[i] = poemInArray[i].split("#");
  }

  cnt = 0; lastIndex = poemInArray.length;
  innerTyping();
}
var time  = 0;
//게임종료시
function endPlay(){
 time = (min * 60) + sec;
 document.getElementById('taul').innerHTML = Math.round(((ta-incorrect)/time)*100)+"";
 document.getElementById('min2').innerHTML = min+"";
 document.getElementById('sec2').innerHTML = sec+"";
 document.getElementById('score2').innerHTML = incorrect+"";

 document.getElementById('mask').style.display = "inherit";
 document.getElementById('recordPan').style.display = "inherit";
}

//게임멈춤
function stopPlay(){
   document.getElementById('mask').style.display = "inherit";
   var con = confirm("그만하시겠습니까?");
   if(con == true){
     endPlay();
   }else{
     //작품페이지로 돌아가기
   }
}

//넣기
function innerTyping(){
  var dan1 = document.getElementById('poem1');
  var str = poemInArray[cnt].replace(/([#])/gi,"");
  dan1.innerHTML = str.replace(/([$])/gi," ");
}

function wordsCheck(evt){
  //enter key 입력 시
  if(evt.keyCode == 13){
    var inputText = (document.getElementById('typingText').value).split("");
    for(var i = 0 ; i < inputText.length ; i++){
      //alert(inputText[i]+" : "+poemIndex[cnt][i]);
      if(inputText[i] != poemIndex[cnt][i]){
        if(inputText[i] == " " && poemIndex[cnt][i] == "$"){}
        else{incorrect++; document.getElementById('score').innerHTML = incorrect;}
      }
      ta++;
    }
    var newPoem = document.createElement("div");
    newPoem.setAttribute("class","setPoem animated fadeIn");
    newPoem.innerHTML = document.getElementById('typingText').value + "<br>";
    // if(cnt == 0){
    //   poemDiv.appendChild(newPoem);
    // }else{
      poemDiv.insertBefore(newPoem, poemDiv.childNodes[cnt]);
    // }
    document.getElementById('typingText').value = "";
    cnt++;
    if(cnt < lastIndex){innerTyping();}
    else{
      document.getElementById('typingText').onkeypress=null;
      clearInterval(timerFunc); endPlay();
    }
  }
}

function timerFunc(){
    if(sec < 60){
      sec++;
      if(sec<10){document.getElementById('sc').innerHTML = "0"+sec;}
      else{document.getElementById('sc').innerHTML = sec+"";}
    }else{
      min++;
      sec=0;
      document.getElementById('sc').innerHTML = sec+"";
      if(min<10){document.getElementById('min').innerHTML = "0"+min;}
      else{document.getElementById('min').innerHTML = min+"";}
    }
}

function getOut(){
  location.replace("display.html");
}
