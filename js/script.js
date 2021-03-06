document.addEventListener('DOMContentLoaded', function(event) {
  initializeEvents();
});

function initializeEvents() {
  var inlines = document.getElementsByClassName('inline');
  for(var i = 0; i < inlines.length; i++) {
    inlines[i].addEventListener('mouseover', function() {
      var circle = this.getElementsByClassName('circle')[0];
      var background = this.getElementsByClassName('background')[0];
      var details = this.getElementsByClassName('details')[0];
      background.classList.add('backgroundTouched');
      circle.classList.add('touched');
      details.classList.add('touched');
    });
    inlines[i].addEventListener('mouseout', function() {
      var circle = this.getElementsByClassName('circle')[0];
      var background = this.getElementsByClassName('background')[0];
      var details = this.getElementsByClassName('details')[0];
      background.classList.remove('backgroundTouched');
      circle.classList.remove('touched')
      details.classList.remove('touched');
    });
  }
}
