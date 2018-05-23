// Initialize
$(document).ready(function() {
  // tabs to work
  $(".tabs").tabs();
  // collapsible items
  $(".collapsible").collapsible();
  // Initialize Mobile Nav - Sidebar
  $(".sidenav").sidenav();
});

var myProjectsButton = document.querySelector('#myProjectsButton');
myProjectsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  var id = sessionStorage.getItem('ttfmid');
  if(id){
    window.location.href = window.location.origin + `/dashboard/${id}`;
  } else {
    window.location.href = window.location.origin;
  }
  
});
