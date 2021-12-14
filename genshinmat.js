/* Shows dropdown of characters for the user to click on */
function charDropdown() {
  closeSubMenus();
  document.getElementById("selectChar").classList.toggle("show");
}

/* Gets the list of the selected element, closes submenus first */
function getList(listName) {
  closeSubMenus();
  switch(listName){
    case "Pyro":
      document.getElementById("pyroChars").classList.toggle("show");
      break;
    case "Hydro":
      document.getElementById("hydroChars").classList.toggle("show");
      break;
    case "Cryo":
      document.getElementById("cryoChars").classList.toggle("show");
      break;
    case "Electro":
      document.getElementById("electroChars").classList.toggle("show");
      break;
    case "Geo":
      document.getElementById("geoChars").classList.toggle("show");
      break;
    case "Anemo":
      document.getElementById("anemoChars").classList.toggle("show");
      break;
    case "Dendro":
      document.getElementById("dendroChars").classList.toggle("show");
      break;
  }
}

  /* Close the dropdown menu and its sub menus if the user clicks outside of it */
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
      closeSubMenus();
    }
  }

  /* Get the char materials of the selected character */
function getCharMats(charName) {
  closeSubMenus();
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

/* Closes submenus in the nav bar */
function closeSubMenus(){
  var subDropdowns = document.getElementsByClassName("dropdown-content-sub");
  var j;
  for (j = 0; j < subDropdowns.length; j++) {
    var openDropdown = subDropdowns[j];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

/* Sets the labels in the body of the HTML */
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

/* Array of Dilucs mats */
const dilucMats = {bossGem1:"Agnidus Agate Silver", bossGem2:"Agnidus Agate Fragement",
  bossGem3:"Agnidus Agate Chunk", bossGem4:"Agnidus Agate Gemstone", bossMat:"Everflame Seed",
  worldMat:"Small Lamp Grass", mobMat1:"Recruit's Insignia", mobMat2:"Sergeant's Insignia",
  mobMat3:"Lieutenant's Insignia", book1:"Teachings of Resistance", book2:"Guides to Resistance",
  book3:"Philosophies of Resistance", weeklyMat:"Dvalin's Plume" };