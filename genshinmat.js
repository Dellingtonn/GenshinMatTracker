// The functions charDropdown and window.onclick are template code from W3 schools:
// https://www.w3schools.com/howto/howto_css_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function charDropdown() {
    document.getElementById("selectChar").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function getCharMats(charName) {
    document.getElementById("charName").innerHTML = charName;
    document.getElementById("charMats").style.display = "";
    switch(charName){
      case "Diluc":
        setLabels(dilucMats);
        break;
      default:
        document.getElementById("charMats").style.display = "none";
    }
}

function setLabels(charMats){
  document.getElementById("bossGem1").innerHTML = charMats.bossGem1;
  document.getElementById("bossGem2").innerHTML = charMats.bossGem2;
  document.getElementById("bossGem3").innerHTML = charMats.bossGem3;
  document.getElementById("bossGem4").innerHTML = charMats.bossGem4;
  document.getElementById("bossMat").innerHTML = charMats.bossMat;
  document.getElementById("worldMats").innerHTML = charMats.worldMat;
  document.getElementById("mobAscen1").innerHTML = charMats.mobMat1;
  document.getElementById("mobAscen2").innerHTML = charMats.mobMat2;
  document.getElementById("mobAscen3").innerHTML = charMats.mobMat3;
  document.getElementById("book1").innerHTML = charMats.book1;
  document.getElementById("book2").innerHTML = charMats.book2;
  document.getElementById("book3").innerHTML = charMats.book3;
  document.getElementById("mobTal1").innerHTML = charMats.mobMat1;
  document.getElementById("mobTal2").innerHTML = charMats.mobMat2;
  document.getElementById("mobTal3").innerHTML = charMats.mobMat3;
  document.getElementById("weeklyBoss").innerHTML = charMats.weeklyMat;
}

const dilucMats = {bossGem1:"Agnidus Agate Silver", bossGem2:"Agnidus Agate Fragement",
  bossGem3:"Agnidus Agate Chunk", bossGem4:"Agnidus Agate Gemstone", bossMat:"Everflame Seed",
  worldMat:"Small Lamp Grass", mobMat1:"Recruit's Insignia", mobMat2:"Sergeant's Insignia",
  mobMat3:"Lieutenant's Insignia", book1:"Teachings of Resistance", book2:"Guides to Resistance",
  book3:"Philosophies of Resistance", weeklyMat:"Dvalin's Plume" };