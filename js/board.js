// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBkTqlsA1onCWA0XqpV01br5W9urbuviJ8",
  authDomain: "nmtproject-10e59.firebaseapp.com",
  databaseURL: "https://nmtproject-10e59.firebaseio.com",
  storageBucket: "nmtproject-10e59.appspot.com"
};

firebase.initializeApp(config);

var boardDiv;
var cnt=0;
var database = firebase.database();
var ii=1;

function setBoard(i){
  var dbRefObject = database.ref('board/'+i);
  dbRefObject.on('value',function(snapshot){
    var result = snapshot.val();
      var none = result.none;
      if(none == "false"){
        if(ii>1){$("#"+ii).removeClass('fadeInUp');}
        ii = i;
        var id = result.id;
        var pass = result.pass;
        var comment = result.comment;
        str = "<div class='comment w3-panel w3-card fadeInUp commentAni' id='"+i+"'>"
        +"| 아이디  "+id
        +"<br><font style='font-size:13pt; font-family:'Adobe 명조 std';'>"+comment+"</font>"
        +"<br><br><button onclick='deleteComment("+i+")' style='background-color:rgb(241, 176, 8);border : 1px solid rgb(241, 176, 8);color:white; width:100px;'>삭제</button>"
        +"<input type='hidden' value='"+pass+"' id='pass"+i+"'/>"
        +"</div><br>";
        // alert(str);
        boardDiv.innerHTML += str;
      }
  });
}

var i=1;
window.onload = function(){
  boardDiv = document.getElementById('board');
  boardDiv.innerHTML = "";
  var dbRefObject = database.ref('board');
  dbRefObject.on('value',function(snapshot){
    var result = snapshot.val();
      cnt = result.count;
      // alert(cnt+"여기");
  });

  i=1;
  setInterval(a, 600);
}

function a(){
    if(i<=cnt){
      //alert(cnt+" : "+cnt);
      setBoard(i); i++;
    }
    else{ clearInterval(a); }
}

function getOut(){
  document.getElementById('dark').style.display = "none";
  document.getElementById('insert').style.display = "none";
}

function getIn(){
  document.getElementById('dark').style.display = "inherit";
  document.getElementById('insert').style.display = "inherit";
}

function newComment(){
  var newId = document.getElementById('id').value;
  var newPw = document.getElementById('pass').value;
  var newCmt = document.getElementById('comment').value;

  var dbRefObject = database.ref('board');
  dbRefObject.on('value',function(snapshot){
    var result = snapshot.val();
      cnt = (result.count * 1) + 1;
  });

  var newCommentRef = dbRefObject.child(cnt).set({
      "id": newId,
      "pass": newPw,
      "comment": newCmt,
      "none": "false"
  });

  var changeCountRef = dbRefObject.update({
      "count": cnt
  });

  window.location.reload();
}

function deleteComment(count){
  var pass = document.getElementById("pass"+count).value;
  var inPass = prompt("패스워드를 입력하세요");

  if(inPass == pass){
    var dbRefObject = database.ref('board/'+count);
    var changeNoneRef = dbRefObject.update({
        "none": "true"
    });
    alert("삭제되었습니다.")
    window.location.reload();
  }else{
    alert("비밀번호가 틀렸습니다.");
  }
}
