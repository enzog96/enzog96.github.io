
  const texte1 = document.getElementById("texte1");

  texte1.onmouseover = function () {  
    texte1.innerHTML = "dlsfsld fmsm fsldmf lsdmf sdlm fsldmf sdlmfsldmf sdlfm sdmf sdlfm sldfmsldfmslf";
  }

  texte1.onmouseout = function () {
    texte1.innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ";
}

function over(){
    document.getElementById("textChange").innerHTML = "html";

}

function out(){
    document.getElementById("textChange").innerHTML = "html1111111111111111111111";

}

function over2(){
    document.getElementById("textChange2").innerHTML = "css";

}

function out2(){
    document.getElementById("textChange2").innerHTML = "csssssssssssssssssssssss";

}

function over3(){
    document.getElementById("textChange3").innerHTML = "javascript"; 

}

function out3(){
    document.getElementById("textChange3").innerHTML = "javascripttttttttttttttttttt";

}

function Open() {
    window.open("./public/pages/fun.html", "_blank");
}

function increaseFontSizeBy25px() {
  document.getElementById('p1').style.fontSize = "25px";
}

function decreaseFontSizeBy25px() {
  document.getElementById('p1').style.fontSize = "";
}

function increaseDivSize(){
    
  document.getElementById("div-change").style.width = "600px"; 
  document.getElementById("div-change").style.height = "100px";
   
      
  }
  
  function decreaseDivSize(){
      
      document.getElementById("div-change").style.width = ""; 
      document.getElementById("div-change").style.height = "";
          
      }



  function changeFont() {
        let fon = document.getElementById("divtext");
        if (fon.className == "amatic") {
          fon.className = 'roman';
        } else {
          fon.className = 'amatic';
        }
      }

      var id = null;
      function myMove() {
        var elem = document.getElementById("myAnimation");   
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (pos == 260) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
          }
        }
      }

      function changeStyle(){
        var element = document.getElementById("myContainer");
        element.style.backgroundColor = "#00FF00";
      }