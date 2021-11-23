// The functions charDropdown and window.onclick are template code from W3 schools:
// https://www.w3schools.com/howto/howto_css_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function charDropdown() {
    document.getElementById("selectChar").classList.toggle("show");
}

function getCharMats(charName) {
    document.getElementById("charName").innerHTML = charName;
    document.getElementById("charMats").style.display = "";
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