/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }




 // Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;



// Four images side by side
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}