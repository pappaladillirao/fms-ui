
  window.onload=function(){
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bs-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    });
   
  }
  var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
  function myFunction() {
    var x = document.getElementById("HidDIV");
    if (x.style.display === "none") {
      x.style.display = "table";
    } else {
      x.style.display = "none";
    }
  }
  function toggle(btnID, eIDs) {
    // Feed the list of ids as a selector
    var theRows = document.querySelectorAll(eIDs);
    // Get the button that triggered this
    var theButton = document.getElementById(btnID);
    // If the button is not expanded...
    if (theButton.getAttribute("aria-expanded") == "false") {
      // Loop through the rows and show them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("shown");
        theRows[i].classList.remove("hidden");
      }
      // Now set the button to expanded
      theButton.setAttribute("aria-expanded", "true");
    // Otherwise button is not expanded...
    } else {
      // Loop through the rows and hide them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("hidden");
        theRows[i].classList.remove("shown");
      }
      // Now set the button to collapsed
      theButton.setAttribute("aria-expanded", "false");
    }
  }