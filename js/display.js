
function poemClick(){
$("#displayPlaceNovel").addClass("fadeOutDisplay");
  $("#displayPlacePoem").removeClass("fadeOutDisplay");
  $("#poemBtn").addClass("displayBtnOn");
  $("#novelBtn").removeClass("displayBtnOn");
}

function novelClick(){
 $("#displayPlaceNovel").removeClass("fadeOutDisplay");
  $("#displayPlacePoem").addClass("fadeOutDisplay");
  $("#novelBtn").addClass("displayBtnOn");
  $("#poemBtn").removeClass("displayBtnOn");
}
