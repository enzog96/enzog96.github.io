
  const texte1 = document.getElementById("texte1");

  texte1.onmouseover = function () {  
    texte1.innerHTML = "dlsfsld fmsm fsldmf lsdmf sdlm fsldmf sdlmfsldmf sdlfm sdmf sdlfm sldfmsldfmslf";
  }

  texte1.onmouseout = function () {
    texte1.innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ";
}

function over(){
    document.getElementById("textChange").innerHTML = "500g de farine, 300g d eau, 20g d huile, 1 sachet de levure 1 cs de sel";

}

function out(){
    document.getElementById("textChange").innerHTML = "Melanger le sel avec la farine, ajouter la levure, verser l huile et l eau et melanger jusqu a l obtention du pate omogene";

}

function over2(){
    document.getElementById("textChange2").innerHTML = "50g de beurre, 2 oignons, 2 gousses d ail, 1 cac de chili, 65g de concentré de tomate, 1 cac de cumin, 1 boite haricots rouge, 500g de viande, 30cl de bouillon";

}

function out2(){
    document.getElementById("textChange2").innerHTML = "Préchauffer le four à 180°C Dans une cocotte en fonte, faire fondre le beurre, et ensuite dorer doucement l'oignon et l’ail.Incorporer le boeuf haché et laisser cuire doucement 10 min.Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, le bouillon, du sel et du poivre.Couvrir et cuire 25 min au four.";

}

function over3(){
    document.getElementById("textChange3").innerHTML = "500g de pates, 50cl de creme, 1 pincée de sel, poivre, 250g de lardons,1 oignon, 3 jaune oeuf "; 

}

function out3(){
    document.getElementById("textChange3").innerHTML = "Cuire les pâtes dans un grand volume d'eau bouillante salée.Emincer les oignons et les faire revenir à la poêle. Dès qu'ils ont bien dorés, y ajouter les lardons.Préparer dans un saladier la crème fraîche, les oeufs, le sel, le poivre et mélanger.Retirer les lardons du feu dès qu'ils sont dorés et les ajouter à la crème.Une fois les pâtes cuite al dente, les égoutter et y incorporer la crème. Remettre sur le feu si le plat a refroidi.";

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