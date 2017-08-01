document.addEventListener('DOMContentLoaded', function(event) {
  initializeEvents();
});

function initializeEvents() {
  var inlines = document.getElementsByClassName('inline');
  for(var i = 0; i < inlines.length; i++) {
    inlines[i].addEventListener('mouseover', function() {
      var circle = this.getElementsByClassName('circle')[0];
      circle.classList.add('touched');
    });
    inlines[i].addEventListener('mouseout', function() {
      var circle = this.getElementsByClassName('circle')[0];
      circle.classList.remove('touched')
    });
  }
}
